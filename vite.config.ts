// vite.config.ts
/**
 * CodeCanvus 엔터프라이즈 프론트엔드 빌드 시스템
 * - Vue 3 + TypeScript + Vite 5 기반
 */

import { defineConfig, loadEnv, type UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig(({ mode }): UserConfig => {
  // .env.* 로딩
  const env = loadEnv(mode, process.cwd(), '');

  const isProd = mode === 'production';

  return {
    plugins: [
      vue({
        reactivityTransform: false,
        script: {
          propsDestructure: true,
        },
        template: {
          compilerOptions: {
            whitespace: 'condense',
          },
        },
      }),
    ],

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
      extensions: ['.mjs', '.js', '.ts', '.json', '.vue'],
    },

    server: {
      host: true,
      port: 5173,
      strictPort: false,
      open: false,
      // proxy 필요하면 여기서 추가
    },

    build: {
      target: 'es2019',
      sourcemap: !isProd ? 'inline' : false,
      cssMinify: isProd ? 'esbuild' : false,
      chunkSizeWarningLimit: 900,
      outDir: 'dist',
      emptyOutDir: true,
      minify: isProd ? 'esbuild' : false,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) return 'vendor';
            if (id.includes('/src/pages/')) return 'pages';
            if (id.includes('/src/components/')) return 'components';
            return undefined;
          },
        },
      },
    },

    css: {
      preprocessorOptions: {
        scss: {
          // ✅ 여기서 tokens.scss 자체를 처리할 때는 @use를 붙이지 않게 예외 처리
          additionalData: (source: string, filename: string) => {
            const normalized = filename.replace(/\\/g, '/');

            // src/styles/tokens.scss 컴파일할 때는 자기 자신 @use 금지
            if (normalized.endsWith('/src/styles/tokens.scss')) {
              return source;
            }

            return `@use "@/styles/tokens.scss" as *;\n${source}`;
          },
        },
      },
    },

    define: {
      __APP_ENV__: JSON.stringify(env),
    },

    optimizeDeps: {
      include: ['vue', 'vue-router'],
      force: false,
      esbuildOptions: {
        target: 'es2020',
      },
    },

    preview: {
      port: 4173,
      strictPort: false,
      https: false,
    },
  };
});
