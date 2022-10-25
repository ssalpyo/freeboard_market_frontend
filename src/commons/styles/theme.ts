// 폰트를 rem으로 계산
const calcRem = (size: number) => `${size / 16}rem`;

// 폰트 사이즈
const fontSizes = {
  small: `font-size: ${calcRem(12)}`,
  base: `font-size: ${calcRem(16)}`,
  lg: `font-size: ${calcRem(18)}`,
  subTitle: `font-size: ${calcRem(24)}`,
  mainTitle: `font-size: ${calcRem(30)}`,
};

// 색깔
const colors = {
  primary: "#333",
  secondary: "#333",
  third: "#333",
  error: "#333",
  disabled: "#333",
  danger: "#333",
  cancel: "#333",
  border: "#333333",
  background: "#333",
  placeholder: "#999999",
  font1: "#333",
  font2: "#333",
  font3: "#333",
};
const backgroundColors = {
  primary: "#32c2b9",
  secondary: "#ffbb6d",
  third: "white",
  error: "white",
  disabled: "#E5E5E5",
  danger: "#ff4d4f",
  cancel: "black",
  border: "#999999",
  placeholder: "#f0f0f0",
  black: "#333333",
  background: "#FFFFFF",
  font1: "black",
  font2: "black",
  font3: "black",
};

const flex = {
  display: "flex",
  row: {
    display: "flex",
    flexFlow: "nowrap row",

    between: {
      display: "flex",
      flexFlow: "nowrap row",
      justifyContent: "space-between",
      center: {
        display: "flex",
        flexFlow: "nowrap row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      start: {
        display: "flex",
        flexFlow: "nowrap row",
        justifyContent: "space-between",
        alignItems: "flex-start",
      },
      end: {
        display: "flex",
        flexFlow: "nowrap row",
        justifyContent: "space-between",
        alignItems: "flex-start",
      },
    },
    around: {
      display: "flex",
      flexFlow: "nowrap row",
      justifyContent: "space-around",
      center: {
        display: "flex",
        flexFlow: "nowrap row",
        justifyContent: "space-around",
        alignItems: "center",
      },
    },
    center: {
      display: "flex",
      flexFlow: "nowrap row",
      justifyContent: "center",
      center: {
        display: "flex",
        flexFlow: "nowrap row",
        justifyContent: "center",
        alignItems: "center",
      },
      between: {
        display: "flex",
        flexFlow: "nowrap row",
        justifyContent: "center",
        alignItems: "space-between",
      },
    },
    end: {
      display: "flex",
      flexFlow: "nowrap row",
      justifyContent: "flex-end",
      center: {
        display: "flex",
        flexFlow: "nowrap row",
        alignItems: "center",
        justifyContent: "flex-end",
      },
    },
    _: {
      display: "flex",
      flexFlow: "nowrap row",
      center: {
        display: "flex",
        flexFlow: "nowrap row",
        alignItems: "center",
      },
      start: {
        display: "flex",
        flexFlow: "nowrap row",
        alignItems: "flex-start",
      },
    },
  },
  column: {
    display: "flex",
    flexFlow: "nowrap column",
    center: {
      display: "flex",
      flexFlow: "nowrap column",
      justifyContent: "center",
      center: {
        display: "flex",
        flexFlow: "nowrap column",
        justifyContent: "center",
        alignItems: "center",
      },
      between: {
        display: "flex",
        flexFlow: "nowrap column",
        justifyContent: "center",
        alignItems: "space-between",
      },
      end: {
        display: "flex",
        flexFlow: "nowrap column",
        justifyContent: "center",
        alignItems: "flex-end",
      },
    },
    start: {
      display: "flex",
      flexFlow: "nowrap column",
      justifyContent: "flex-start",
      start: {
        display: "flex",
        flexFlow: "nowrap column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      },
    },
    between: {
      display: "flex",
      flexFlow: "nowrap column",
      justifyContent: "space-between",
    },
    end: {
      display: "flex",
      flexFlow: "nowrap column",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    _: {
      start: {
        display: "flex",
        flexFlow: "nowrap column",
        alignItems: "flex-start",
      },
    },
  },
};

const deviceSizes = {
  mobile: "480px",
  tablet: "768px",
  laptop: "1024px",
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `screen and (min-width: ${deviceSizes.laptop})`,
};

const theme = {
  fontSizes,
  colors,
  flex,
  backgroundColors,
  deviceSizes,
  device,
};

export default theme;
