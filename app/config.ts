import { Unbounded, Roboto_Condensed, DM_Sans } from "@next/font/google";

export const titleFont = Unbounded({
  weight: "400",
  subsets: ["latin"],
});

export const focusFont = Roboto_Condensed({
  weight: "400",
  subsets: ["latin"],
});

export const buttonFont = DM_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const backgroundColors = [
  "#BF95AB", // Pastel Pink
  "#804463", // Dusky Rose
  "#76A4AA", // Pastel Teal
  "#6D8F92", // Muted Blue-Green
  "#AAA476", // Muted Olive
  "#8C7B4A", // Soft Brown
  "#496D6F", // Muted Cyan
  "#5A4A7F", // Muted Purple
  "#595A52"  // Slate Gray
];
