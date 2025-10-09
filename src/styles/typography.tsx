import { convertPxToRem } from "../util/convertPxToRem";

export type TypographyPreset = {
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
  fontWeight: string | number;
  fontFamily: string;
};

export type Typography = {
  [key: string]: TypographyPreset;
};

export const typography: Typography = {
  textPresetOne: {
    fontSize: convertPxToRem(72),
    lineHeight: "100%",
    letterSpacing: convertPxToRem(-2),
    fontWeight: 700,
    fontFamily: "Montserrat, sans-serif",
  },
  textPresetTwo: {
    fontSize: convertPxToRem(40),
    lineHeight: "125%",
    letterSpacing: convertPxToRem(0),
    fontWeight: 700,
    fontFamily: "Montserrat, sans-serif",
  },
  textPresetThree: {
    fontSize: convertPxToRem(32),
    lineHeight: "125%",
    letterSpacing: convertPxToRem(0),
    fontWeight: 700,
    fontFamily: "Montserrat, sans-serif",
  },
  textPresetFour: {
    fontSize: convertPxToRem(18),
    lineHeight: "155%",
    letterSpacing: convertPxToRem(0),
    fontWeight: 700,
    fontFamily: "Montserrat, sans-serif",
  },
  textPresetFive: {
    fontSize: convertPxToRem(15),
    lineHeight: "185%",
    letterSpacing: convertPxToRem(0),
    fontWeight: 700,
    fontFamily: "Montserrat, sans-serif",
  },
  textPresetSix: {
    fontSize: convertPxToRem(13),
    lineHeight: "125%",
    letterSpacing: convertPxToRem(1.5),
    fontWeight: 700,
    fontFamily: "Montserrat, sans-serif",
  },
};
