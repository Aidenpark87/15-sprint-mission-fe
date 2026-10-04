import { createThemeContract } from "@vanilla-extract/css";

/**
 * CSS 변수 "이름"만 선언한다 (createThemeContract → CSS 출력 없음).
 * 실제 값은 styles/global.css.js 의 globalStyle(":root") 한 곳에서만 지정한다.
 *
 * createGlobalTheme 를 쓰면 이 모듈을 import 하는 파일마다
 * :root 블록이 각 CSS 청크에 중복 삽입된다(실측: board/page.css 에 8회).
 * 이름을 여기서만 정하고 값은 한 곳에서 출력하면 :root 는 항상 1회다.
 */
export const vars = createThemeContract({
  color: {
    // --color-blue / --color-blue-dark
    blue: null,
    blueHover: null,
    // --color-gray-900 (본문)
    gray900: null,
    // 랜딩 hero h1 · trust h2
    gray700: null,
    // --color-gray-600 (features 설명문)
    gray600: null,
    gray500: null,
    // 원본 board.css 가 직접 쓴 값
    gray400: null,
    gray300: null,
    // --color-gray-100 (board-field·검색창·상품카드 배경)
    gray100: null,
    // board.css .best-card 배경
    gray50: null,
    white: null,
    // --color-bg
    bg: null,
    red: null,
  },
  radius: {
    // --radius-md
    md: null,
    // board.css .board-btn
    btn: null,
    // board.css .best-card__badge
    badge: null,
    // board.css .detail__like
    pill: null,
    // board.css .back-btn
    round: null,
    full: null,
    sm: null,
  },
  font: {
    body: null,
    logo: null,
  },
  size: {
    maxContentWidth: null,
    heroImageWidth: null,
    featureImageWidth: null,
    trustImageWidth: null,
    // board.css .avatar / .thumb
    avatar: null,
    avatarLg: null,
    thumb: null,
  },
});

// 랜딩은 원본 CSS 의 @media (max-width: 1024px) / 600px 를 그대로 대응
export const media = {
  tabletDown: "screen and (max-width: 1024px)",
  mobileDown: "screen and (max-width: 600px)",
};

// 게시판·중고마켓은 원본이 useDeviceType 훅으로 3분할한다 (hooks/useDeviceType.js).
//   desktop 1200px 이상 / tablet 768~1199px / mobile 767px 이하
export const deviceMedia = {
  desktop: "screen and (min-width: 1200px)",
  tablet: "screen and (min-width: 768px) and (max-width: 1199px)",
  mobile: "screen and (max-width: 767px)",
};

// 원본 board.css 끝의 @media (max-width:1199px) / (max-width:767px)
export const boardMedia = {
  below1199: "screen and (max-width: 1199px)",
  below767: "screen and (max-width: 767px)",
};

// 중고마켓 그리드 열수 (원본 ProductListSection.css 의 modifier)
export const gridColumns = {
  desktop: 5,
  tablet: 3,
  mobile: 2,
};
