import { useId, useState } from "react";
import styled from "styled-components";
import { typography } from "../styles/typography";
import { convertPxToEm } from "../util/convertPxToEm";
import { convertPxToRem } from "../util/convertPxToRem";
import { BasicPlanComponent } from "./BasicPlan";
import { MasterPlanComponent } from "./MasterPlan";
import { ProfessionalPlanComponent } from "./ProfessionalPlan";

const PricingContainer = styled.div`
  padding: ${convertPxToRem(71)} ${convertPxToRem(24)};

  @media (min-width: ${convertPxToEm(1440)}) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
    padding: ${convertPxToRem(71)} ${convertPxToRem(80)};
  }
`;

const PricingHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${convertPxToRem(40)};
  justify-content: center;
  align-items: center;
  margin-bottom: ${convertPxToRem(64)};
`;

const Title = styled.h1`
  color: var(--color-gray650);
  font-family: ${typography.textPresetThree.fontFamily};
  font-size: ${typography.textPresetThree.fontSize};
  font-weight: ${typography.textPresetThree.fontWeight};
  line-height: ${typography.textPresetThree.lineHeight};
  letter-spacing: ${typography.textPresetThree.letterSpacing};
`;

const BillingCycleSelector = styled.div`
  display: flex;
`;

const AnnuallyMonthlyTitle = styled.span`
  color: var(--color-gray650);
  font-family: ${typography.textPresetFive.fontFamily};
  font-size: ${typography.textPresetFive.fontSize};
  font-weight: ${typography.textPresetFive.fontWeight};
  line-height: ${typography.textPresetFive.lineHeight};
  letter-spacing: ${typography.textPresetFive.letterSpacing};
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: ${convertPxToRem(24)};
  cursor: pointer;
  position: relative;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
`;

const ToggleSlider = styled.span`
  width: ${convertPxToRem(56)};
  height: ${convertPxToRem(32)};
  background-color: hsla(236, 72%, 79%, 1);
  background: linear-gradient(
    90deg,
    hsla(236, 72%, 79%, 1) 0%,
    hsla(237, 63%, 64%, 1) 100%
  );
  border-radius: ${convertPxToRem(16)};
  position: relative;
  transition: background-color 0.2s;

  &::before {
    content: "";
    position: absolute;
    width: ${convertPxToRem(24)};
    height: ${convertPxToRem(24)};
    left: ${convertPxToRem(2)};
    top: ${convertPxToRem(2)};
    background-color: var(--color-white);
    border-radius: 50%;
    transition: transform 0.3s ease;
  }

  ${ToggleInput}:checked + &::before {
    transform: translateX(${convertPxToRem(26)});
  }
`;

const PlansContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${convertPxToRem(32)};

  @media (min-width: ${convertPxToEm(1440)}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0;
  }
`;

export const Pricing = () => {
  const [pricing, setPricing] = useState("Monthly");
  const [isChecked, setIsChecked] = useState(true);
  const id = useId();

  const priceToggleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    setPricing(checked ? "Monthly" : "Annually");
  };

  return (
    <PricingContainer>
      <PricingHeader>
        <Title>Our Pricing</Title>
        <BillingCycleSelector>
          <Label htmlFor={id}>
            <AnnuallyMonthlyTitle>Annually</AnnuallyMonthlyTitle>
            <ToggleInput
              id={id}
              type="checkbox"
              checked={isChecked}
              onChange={priceToggleSwitch}
            />
            <ToggleSlider />
            <AnnuallyMonthlyTitle>Monthly</AnnuallyMonthlyTitle>
          </Label>
        </BillingCycleSelector>
      </PricingHeader>

      <PlansContainer>
        <BasicPlanComponent
          pricing={pricing === "Monthly" ? "19.99" : "199.99"}
        />
        <ProfessionalPlanComponent
          pricing={pricing === "Monthly" ? "24.99" : "249.99"}
        />
        <MasterPlanComponent
          pricing={pricing === "Monthly" ? "39.99" : "349.99"}
        />
      </PlansContainer>
    </PricingContainer>
  );
};
