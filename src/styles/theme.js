import { createTheme } from "@mui/material/styles";

export const COLORS = {
  LIGHT: "#eee",
  MEDIUM_GREY: "#00aba6",
  DARK_GREY: "#777",
  WHITE: "#fff",
  LIGHT_BLUE: "#1976d2",
  BLUE: "#0035C7",
  RED: "#dd4b39",
  LIGHT_RED: "#ee475b",
  MEDIUM_RED: "#808080",
  SKY_BLUE: "#4a90e2",
  BLACK: "#000",
  METAL_GREY: "#97a2a2",
  DARK_BLUE: "#001257",
};

export const ONE_REM_TO_PX = 16;

export const CUSTOM_MODAL_MARGIN_IN_REM = 4;

export const FONT = {
  // Define available font-families to be used throughout the app
  FAMILY: {
    POPPINS: ["Poppins", "sans-serif"].join(","),
  },
  LINE_HEIGHT: "136.4%",
  // Define font weights that would be used throughout the app
  WEIGHT: {
    LIGHT: 300,
    REGULAR: 400,
    MEDIUM: 500,
    SEMIBOLD: 600,
    BOLD: 700,
  },
  // Define font sizes that would be used throughout the app in rem
  // the numbers on the left indicates the px equivalent of the rem values
  SIZES: {
    48: "3rem",
    36: "2.25rem",
    32: "2rem",
    30: "1.875rem",
    28: "1.75rem",
    24: "1.5rem",
    22: "1.375rem",
    20: "1.25rem",
    18: "1.125rem",
    16: "1rem",
    14: "0.875rem",
    12: "0.75rem",
    10: "0.625rem",
    9: "0.563rem",
    8: "0.5rem",
  },
  LINE_HEIGHTS: {
    49: "3.063rem",
    33: "2.063rem",
    30: "1.875rem",
    27: "1.688rem",
    26: "1.563rem",
    22: "1.375rem",
    19: "1.188rem",
    16: "1rem",
    14: "0.875rem",
    13: "0.813rem",
    12: "0.75rem",
    11: "0.688rem",
  },
  STYLE: {
    ITALIC: "italic",
  },
};

export const theme = createTheme({
  typography: {
    fontFamily: FONT.FAMILY.POPPINS,
    h1: {
      fontSize: FONT.SIZES[30],
      lineHeight: FONT.LINE_HEIGHT,
      fontWeight: FONT.WEIGHT.MEDIUM,
    },
    h2: {
      fontSize: FONT.SIZES[24],
      lineHeight: FONT.LINE_HEIGHT,
      fontWeight: FONT.WEIGHT.MEDIUM,
      color: COLORS.MEDIUM_RED,
    },
    h3: {
      fontSize: FONT.SIZES[22],
      lineHeight: FONT.LINE_HEIGHT,
      fontWeight: FONT.WEIGHT.BOLD,
    },
    h4: {
      fontSize: FONT.SIZES[20],
      lineHeight: FONT.LINE_HEIGHT,
      fontWeight: FONT.WEIGHT.REGULAR,
    },
    h5: {
      fontSize: FONT.SIZES[16],
      lineHeight: FONT.LINE_HEIGHT,
      fontWeight: FONT.WEIGHT.REGULAR,
    },
    h6: {
      fontSize: FONT.SIZES[14],
      lineHeight: FONT.LINE_HEIGHT,
      fontWeight: FONT.WEIGHT.REGULAR,
    },
    w1: {
      fontSize: FONT.SIZES[13],
      fontWeight: FONT.WEIGHT.SEMIBOLD,
      lineHeight: FONT.LINE_HEIGHT,
      color: COLORS.YELLOW,
    },
    w2: {
      fontSize: FONT.SIZES[12],
      fontWeight: FONT.WEIGHT.BOLD,
      lineHeight: FONT.LINE_HEIGHT,
      color: COLORS.BLUE,
    },
    w3: {
      fontSize: FONT.SIZES[10],
      fontWeight: FONT.WEIGHT.SEMIBOLD,
      lineHeight: FONT.LINE_HEIGHT,
      color: COLORS.BLUE,
    },
    w4: {
      fontSize: FONT.SIZES[11],
      fontWeight: FONT.WEIGHT.LIGHT,
      lineHeight: FONT.LINE_HEIGHT,
      color: COLORS.BLUE,
    },
    w5: {
      fontSize: FONT.SIZES[13],
      fontWeight: FONT.WEIGHT.SEMIBOLD,
      lineHeight: FONT.LINE_HEIGHT,
    },
    w6: {
      fontSize: FONT.SIZES[11],
      fontWeight: FONT.WEIGHT.LIGHT,
      lineHeight: FONT.LINE_HEIGHT,
    },
    w7: {
      fontSize: FONT.SIZES[11],
      fontWeight: FONT.WEIGHT.REGULAR,
      lineHeight: FONT.LINE_HEIGHT,
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    w8: {
      fontSize: FONT.SIZES[14],
      lineHeight: FONT.LINE_HEIGHT,
      fontWeight: FONT.WEIGHT.BOLD,
    },
    w9: {
      fontSize: FONT.SIZES[11],
      fontWeight: FONT.WEIGHT.REGULAR,
      lineHeight: FONT.LINE_HEIGHT,
      color: COLORS.BLUE,
    },
    w10: {
      fontSize: FONT.SIZES[22],
      fontWeight: FONT.WEIGHT.BOLD,
      lineHeight: FONT.LINE_HEIGHTS[30],
    },
    w11: {
      fontSize: FONT.SIZES[12],
      fontWeight: FONT.WEIGHT.MEDIUM,
      lineHeight: FONT.LINE_HEIGHTS[16],
    },
    w12: {
      fontSize: FONT.SIZES[22],
      fontWeight: FONT.WEIGHT.MEDIUM,
      lineHeight: FONT.LINE_HEIGHTS[30],
      color: COLORS.BLACK,
    },
    w13: {
      fontSize: FONT.SIZES[14],
      fontWeight: FONT.WEIGHT.REGULAR,
      lineHeight: FONT.LINE_HEIGHTS[19],
      color: COLORS.DARK_GREY,
    },
  },
});
