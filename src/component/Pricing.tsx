import { useId, useState } from "react";
import styled from "styled-components";
import { typography } from "../styles/typography";
import { convertPxToEm } from "../util/convertPxToEm";
import { convertPxToRem } from "../util/convertPxToRem";
import { PlanCard } from "./PlanCard";

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

interface PlanData {
  title: string;
  pricing: string;
  storage: string;
  users: string;
  sendLimit: string;
  isProfessional?: boolean;
}

export const Pricing = () => {
  const [isChecked, setIsChecked] = useState(true);
  const id = useId();

  const basePlans = [
    {
      title: "Basic",
      monthlyPrice: "19.99",
      annualPrice: "199.99",
      storage: "500 GB Storage",
      users: "2 Users Allowed",
      sendLimit: "Send up to 3 GB",
      isProfessional: false,
    },
    {
      title: "Professional",
      monthlyPrice: "24.99",
      annualPrice: "249.99",
      storage: "1 TB Storage",
      users: "5 Users Allowed",
      sendLimit: "Send up to 10 GB",
      isProfessional: true,
    },
    {
      title: "Master",
      monthlyPrice: "39.99",
      annualPrice: "349.99",
      storage: "2 TB Storage",
      users: "10 Users Allowed",
      sendLimit: "Send up to 20 GB",
      isProfessional: false,
    },
  ];

  const planData: PlanData[] = basePlans.map((plan) => ({
    title: plan.title,
    storage: plan.storage,
    users: plan.users,
    sendLimit: plan.sendLimit,
    isProfessional: plan.isProfessional,
    pricing: isChecked ? plan.monthlyPrice : plan.annualPrice,
  }));

  const [BasicPlanData, ProfessionalPlanData, MasterPlanData] = planData;

  const priceToggleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setIsChecked(checked);
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
        <PlanCard {...BasicPlanData} />
        <PlanCard {...ProfessionalPlanData} />
        <PlanCard {...MasterPlanData} />
      </PlansContainer>
    </PricingContainer>
  );
};
