import styled from "styled-components";
import { typography } from "../styles/typography";
import { convertPxToRem } from "../util/convertPxToRem";

const BasicPlan = styled.div`
  background-color: var(--color-white);
  border-radius: ${convertPxToRem(8)};
  display: flex;
  gap: ${convertPxToRem(24)};
  flex-direction: column;
  align-items: center;
  padding: ${convertPxToRem(24)} ${convertPxToRem(32)};
`;

const MasterTitle = styled.h2`
  color: var(--color-gray650);
  font-family: ${typography.textPresetFour.fontFamily};
  font-size: ${typography.textPresetFour.fontSize};
  font-weight: ${typography.textPresetFour.fontWeight};
  line-height: ${typography.textPresetFour.lineHeight};
  letter-spacing: ${typography.textPresetFour.letterSpacing};
  text-align: center;
`;

const PlanPriceContainer = styled.div`
  display: flex;
  gap: ${convertPxToRem(8)};
`;

const PlanPriceSymbol = styled.span`
  color: var(--color-gray700);
  font-family: ${typography.textPresetTwo.fontFamily};
  font-size: ${typography.textPresetTwo.fontSize};
  font-weight: ${typography.textPresetTwo.fontWeight};
  line-height: ${typography.textPresetTwo.lineHeight};
  letter-spacing: ${typography.textPresetTwo.letterSpacing};
`;

const PlanPriceAmount = styled.p`
  color: var(--color-gray700);
  font-family: ${typography.textPresetOne.fontFamily};
  font-size: ${typography.textPresetOne.fontSize};
  font-weight: ${typography.textPresetOne.fontWeight};
  line-height: ${typography.textPresetOne.lineHeight};
  letter-spacing: ${typography.textPresetOne.letterSpacing};
`;

const PlanStorageContainer = styled.div`
  display: flex;
  gap: ${convertPxToRem(16)};
  flex-direction: column;
`;

const PlanStorageDivider = styled.hr`
  border: ${convertPxToRem(1)} solid var(--color-gray650);
  width: ${convertPxToRem(269)};
`;

const PlanStorageText = styled.p`
  color: var(--color-gray650);
  font-family: ${typography.textPresetFive.fontFamily};
  font-size: ${typography.textPresetFive.fontSize};
  font-weight: ${typography.textPresetFive.fontWeight};
  line-height: ${typography.textPresetFive.lineHeight};
  letter-spacing: ${typography.textPresetFive.letterSpacing};
  text-align: center;
`;

const PlanStorageButton = styled.button`
  color: var(--color-white);
  border: none;
  background-color: hsla(236, 72%, 79%, 1);
  background: linear-gradient(
    90deg,
    hsla(236, 72%, 79%, 1) 0%,
    hsla(237, 63%, 64%, 1) 100%
  );
  border-radius: ${convertPxToRem(8)};
  cursor: pointer;
  width: 100%;
  padding: ${convertPxToRem(16)} ${convertPxToRem(64)};
  font-family: ${typography.textPresetSix.fontFamily};
  font-size: ${typography.textPresetSix.fontSize};
  font-weight: ${typography.textPresetSix.fontWeight};
  line-height: ${typography.textPresetSix.lineHeight};
  letter-spacing: ${typography.textPresetSix.letterSpacing};
`;

export const BasicPlanComponent = ({ pricing }: { pricing: string }) => {
  return (
    <BasicPlan>
      <MasterTitle>Basic</MasterTitle>
      <PlanPriceContainer>
        <PlanPriceSymbol>$</PlanPriceSymbol>
        <PlanPriceAmount>{pricing}</PlanPriceAmount>
      </PlanPriceContainer>
      <PlanStorageContainer>
        <PlanStorageDivider />
        <PlanStorageText>500 GB Storage</PlanStorageText>
        <PlanStorageDivider />
        <PlanStorageText>2 Users Allowed</PlanStorageText>
        <PlanStorageDivider />
        <PlanStorageText>Send up to 3 GB</PlanStorageText>
        <PlanStorageDivider />
      </PlanStorageContainer>
      <PlanStorageButton type="button">LEARN MORE</PlanStorageButton>
    </BasicPlan>
  );
};
