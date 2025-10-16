import styled from "styled-components";
import { typography } from "../styles/typography";
import { convertPxToEm } from "../util/convertPxToEm";
import { convertPxToRem } from "../util/convertPxToRem";

type CardProps = {
  isProfessional: boolean;
};

export const PlanCardContainer = styled.div<CardProps>`
  border-radius: ${convertPxToRem(8)};
  display: flex;
  gap: ${convertPxToRem(24)};
  flex-direction: column;
  align-items: center;
  padding: ${convertPxToRem(24)} ${convertPxToRem(32)};

  background-color: ${(props) =>
    props.isProfessional ? "transparent" : "var(--color-white)"};
  background: ${(props) =>
    props.isProfessional
      ? `linear-gradient(
          90deg,
          hsla(236, 72%, 79%, 1) 0%,
          hsla(237, 63%, 64%, 1) 100%
        )`
      : "var(--color-white)"};
`;

const textColor = (props: CardProps) =>
  props.isProfessional ? "var(--color-white)" : "var(--color-gray650)";

const priceColor = (props: CardProps) =>
  props.isProfessional ? "var(--color-white)" : "var(--color-gray700)";

export const MasterTitle = styled.h2<CardProps>`
  color: ${textColor};
  font-family: ${typography.textPresetFour.fontFamily};
  font-size: ${typography.textPresetFour.fontSize};
  font-weight: ${typography.textPresetFour.fontWeight};
  line-height: ${typography.textPresetFour.lineHeight};
  letter-spacing: ${typography.textPresetFour.letterSpacing};
  text-align: center;
`;

export const PlanPriceContainer = styled.div`
  display: flex;
  gap: ${convertPxToRem(8)};
`;

export const PlanPriceSymbol = styled.span<CardProps>`
  color: ${priceColor};
  font-family: ${typography.textPresetTwo.fontFamily};
  font-size: ${typography.textPresetTwo.fontSize};
  font-weight: ${typography.textPresetTwo.fontWeight};
  line-height: ${typography.textPresetTwo.lineHeight};
  letter-spacing: ${typography.textPresetTwo.letterSpacing};
`;

export const PlanPriceAmount = styled.p<CardProps>`
  color: ${priceColor};
  font-family: ${typography.textPresetOne.fontFamily};
  font-size: ${typography.textPresetOne.fontSize};
  font-weight: ${typography.textPresetOne.fontWeight};
  line-height: ${typography.textPresetOne.lineHeight};
  letter-spacing: ${typography.textPresetOne.letterSpacing};
`;

export const PlanStorageContainer = styled.div`
  display: flex;
  gap: ${convertPxToRem(16)};
  flex-direction: column;
`;

export const PlanStorageDivider = styled.hr`
  border: ${convertPxToRem(1)} solid var(--color-gray650);
  width: ${convertPxToRem(269)};

  @media (min-width: ${convertPxToEm(768)}) and (max-width: ${convertPxToEm(
      1439
    )}) {
    width: ${convertPxToRem(500)};
  }
`;

export const PlanStorageText = styled.p<CardProps>`
  color: ${textColor};
  font-family: ${typography.textPresetFive.fontFamily};
  font-size: ${typography.textPresetFive.fontSize};
  font-weight: ${typography.textPresetFive.fontWeight};
  line-height: ${typography.textPresetFive.lineHeight};
  letter-spacing: ${typography.textPresetFive.letterSpacing};
  text-align: center;
`;

export const PlanStorageButton = styled.button<CardProps>`
  border: none;
  border-radius: ${convertPxToRem(8)};
  cursor: pointer;
  width: 100%;
  padding: ${convertPxToRem(16)} ${convertPxToRem(64)};
  font-family: ${typography.textPresetSix.fontFamily};
  font-size: ${typography.textPresetSix.fontSize};
  font-weight: ${typography.textPresetSix.fontWeight};
  line-height: ${typography.textPresetSix.lineHeight};
  letter-spacing: ${typography.textPresetSix.letterSpacing};
  transition: all 0.3s ease;

  ${(props) =>
    !props.isProfessional &&
    `
    color: var(--color-white);
    background: linear-gradient(
      90deg,
      hsla(236, 72%, 79%, 1) 0%,
      hsla(237, 63%, 64%, 1) 100%
    );

    &:hover {
      background: var(--color-white);
      border: ${convertPxToRem(1)} solid var(--color-blue500);
      color: var(--color-blue500);
    }
  `}

  ${(props) =>
    props.isProfessional &&
    `
    color: var(--color-blue500);
    background-color: var(--color-white);
    
    &:hover {
      background: linear-gradient(
        90deg,
        hsla(236, 72%, 79%, 1) 0%,
        hsla(237, 63%, 64%, 1) 100%
      );
      border: ${convertPxToRem(1)} solid var(--color-white);
      color: var(--color-white);
    }
  `}
`;
