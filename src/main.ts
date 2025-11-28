// src/main.ts
import { createApp, type App as VueApp } from 'vue';
import App from './App.vue';
import router from './router';

// 전역 스타일 – 로딩 순서 중요 (토큰 → 기본 → 타이포 → 유틸)
import './styles/tokens.scss';
import './styles/main.scss';
import './styles/typography.scss';
import './styles/utilities.scss';

/**
 * 런타임에서 사용할 앱 환경 정보 구조
 * - env.d.ts 의 ImportMetaEnv 와 매칭되도록 정의
 */
interface AppRuntimeEnv {
  name: string;
  env: string;
  baseUrl: string;
  apiBaseUrl: string;
  analyticsKey?: string;
  errorTrackingDsn?: string;
  isProd: boolean;
  isDev: boolean;
}

/**
 * ImportMetaEnv 기반으로 런타임 환경 객체 구성
 */
const appEnv: AppRuntimeEnv = {
  name: import.meta.env.VITE_APP_NAME ?? 'CodeCanvus',
  env: import.meta.env.VITE_APP_ENV ?? import.meta.env.MODE ?? 'local',
  baseUrl: import.meta.env.VITE_APP_BASE_URL ?? window.location.origin,
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? '',
  analyticsKey: import.meta.env.VITE_APP_ANALYTICS_KEY,
  errorTrackingDsn: import.meta.env.VITE_APP_ERROR_TRACKING_DSN,
  isProd: import.meta.env.PROD,
  isDev: import.meta.env.DEV,
};

// Vue 애플리케이션 인스턴스 생성
const app: VueApp<Element> = createApp(App);

/**
 * 전역 프로퍼티 정의
 * - this.$appEnv 형태로 컴포넌트 내에서 사용 가능
 * - Composition API에서는 appEnv 직접 import 하거나 provide/inject 패턴 사용 가능
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(app.config.globalProperties as any).$appEnv = appEnv;

/**
 * 에러 핸들러
 * - 실제 서비스에서는 Sentry/Datadog 등과 연동 가능
 * - 현재는 콘솔 로그만 처리
 */
app.config.errorHandler = (err, instance, info) => {
  // 기본 로그
  // eslint-disable-next-line no-console
  console.error('[CodeCanvus][VueError]', err, info, instance);

  // 추후 errorTrackingDsn 이 세팅된 경우 외부 트래킹 연동 지점
  // if (appEnv.errorTrackingDsn) {
  //   sendToErrorTracker(err, info, appEnv);
  // }
};

/**
 * 경고 핸들러 (선택)
 * - 개발 환경에서만 더 명시적으로 보고 싶을 때 활용
 */
if (appEnv.isDev) {
  app.config.warnHandler = (msg, instance, trace) => {
    // eslint-disable-next-line no-console
    console.warn('[CodeCanvus][VueWarn]', msg, trace, instance);
  }

  // 부트스트랩 로그
  // eslint-disable-next-line no-console
  console.info('[CodeCanvus] App bootstrap', {
    env: appEnv.env,
    baseUrl: appEnv.baseUrl,
    apiBaseUrl: appEnv.apiBaseUrl || '(not set)',
  });
}

// 플러그인 등록
app.use(router);

// DOM에 마운트
app.mount('#app');
