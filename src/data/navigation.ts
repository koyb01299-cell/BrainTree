// src/data/navigation.ts
// -----------------------------------------------------------------------------
// BrainTree Navigation Schema
// 중앙 운영·백오피스 전문 기업의 사이트 IA(Information Architecture)를
// 엔터프라이즈 등급으로 설계하여 모든 레이아웃/헤더/푸터에서 공용 사용.
// -----------------------------------------------------------------------------

export interface NavItem {
  label: string;           // 노출되는 메뉴명
  to: string;              // 라우팅 경로
  desc?: string;           // 모바일/접근성 보조 설명
  group?: 'primary' | 'secondary'; // 헤더/푸터 용도 구분
  external?: boolean;      // 외부 링크 여부
  children?: NavItem[];    // 드롭다운/섹션 확장 구조
}

/**
 * ---------------------------------------------------------------------------
 * PRIMARY NAVIGATION
 * 메인 내비게이션에 들어가는 최상위 메뉴 — 헤더/모바일 메뉴에서 사용됨
 * ---------------------------------------------------------------------------
 */
export const primaryNav: NavItem[] = [
  {
    label: 'Home',
    to: '/',
    desc: 'BrainTree · 엔터프라이즈 백오피스 스튜디오',
    group: 'primary',
  },
  {
    label: 'Studio',
    to: '/studio',
    desc: '팀 · 문화 · 운영 중심 설계 방식',
    group: 'primary',
  },
  {
    label: 'Work',
    to: '/work',
    desc: '프로젝트 · 엔터프라이즈 구축 사례',
    group: 'primary',
    children: [
      {
        label: 'PG / 정산 백오피스',
        to: '/work/settlement',
        desc: '정산·리스크·오퍼레이션 프로젝트',
      },
      {
        label: '플랫폼 운영',
        to: '/work/platform',
        desc: '파트너센터 · 관리자 시스템',
      },
      {
        label: '사내 도구',
        to: '/work/internal',
        desc: '내부 프로세스 자동화 도구',
      },
    ],
  },
  {
    label: 'Contact',
    to: '/contact',
    desc: '프로젝트/협업/채용 문의',
    group: 'primary',
  },
];

/**
 * ---------------------------------------------------------------------------
 * FOOTER NAVIGATION
 * 푸터 링크에 노출되는 구조 — Services/Studio/Contact 그룹
 * ---------------------------------------------------------------------------
 */
export const footerNav = {
  services: <NavItem[]>[
    {
      label: '엔터프라이즈 백오피스 설계',
      to: '/work',
      desc: '정산·리스크·운영 중심의 관리자 시스템 구축',
    },
    {
      label: '콘솔 UX 리디자인',
      to: '/work',
      desc: '레거시 관리자 화면 전체 UX 개편',
    },
    {
      label: '사내 도구·내부 시스템 구축',
      to: '/work',
      desc: '프로세스 자동화와 운영 효율화',
    },
  ],

  studio: <NavItem[]>[
    {
      label: '팀 · 일하는 방식',
      to: '/studio',
      desc: 'BrainTree의 협업 문화와 구조',
    },
    {
      label: '프로젝트 진행 원칙',
      to: '/studio',
      desc: '도메인 정의 → 화면 설계 → 개발',
    },
    {
      label: '함께 일하고 싶은 분께',
      to: '/contact',
      desc: '협업 / 채용',
    },
  ],

  contact: <NavItem[]>[
    {
      label: '프로젝트 상담 요청하기',
      to: '/contact',
      desc: '서비스/조직 규모 공유 시 1영업일 내 회신',
    },
    {
      label: 'hello@braintree.studio',
      to: 'mailto:hello@braintree.studio',
      external: true,
      desc: 'Business inquiries',
    },
    {
      label: '채용 / 협업 문의',
      to: '/contact',
      desc: '엔지니어 · 디자이너 협업',
    },
  ],
};

/**
 * ---------------------------------------------------------------------------
 * EXPORT (헤더/푸터/모바일 내비게이션에서 공통 참조)
 * ---------------------------------------------------------------------------
 */
export const navigation = {
  primary: primaryNav,
  footer: footerNav,
};

export default navigation;
