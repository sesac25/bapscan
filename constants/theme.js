import { Platform } from "react-native";

const brandColor = "#FF8A4B"; // BapScan 브랜드 컬러
const tintColorLight = brandColor;
const tintColorDark = brandColor;

export const Colors = {
  light: {
    text: "#11181C",
    background: "#FFFFFF",
    surface: "#F8F8F8",
    brand: brandColor,                  // 브랜드 컬러
    primary: brandColor,
    secondary: "#C27035",

    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,

    border: "#E5E5E5",
    gray: "#888888",
    lightGray: "#F3F3F3",
    danger: "#FF6F61",
  },

  dark: {
    text: "#ECEDEE",
    background: "#151718",
    surface: "#1A1C1E",
    brand: brandColor,
    primary: brandColor,
    secondary: "#C27035",

    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,

    border: "#222",
    gray: "#9BA1A6",
    lightGray: "#222",
    danger: "#FF6F61",
  },
};

export const Spacing = (value) => value * 8;

export const Fonts = Platform.select({
  ios: {
    sans: "system-ui",
    serif: "ui-serif",
    rounded: "ui-rounded",
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});

export const FontSize = {
  title: 26,
  subtitle: 16,
  body: 14,
  small: 12,
  largeTitle: 32,
  sectionTitle: 20,
};