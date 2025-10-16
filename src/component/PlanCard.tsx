import {
  MasterTitle,
  PlanCardContainer,
  PlanPriceAmount,
  PlanPriceContainer,
  PlanPriceSymbol,
  PlanStorageButton,
  PlanStorageContainer,
  PlanStorageDivider,
  PlanStorageText,
} from "./PlanCardStyles";

interface PlanData {
  title: string;
  pricing: string;
  storage: string;
  users: string;
  sendLimit: string;
  isProfessional?: boolean;
}

export const PlanCard = ({
  title,
  pricing,
  storage,
  users,
  sendLimit,
  isProfessional = false,
}: PlanData) => {
  return (
    <PlanCardContainer isProfessional={isProfessional}>
      <MasterTitle isProfessional={isProfessional}>{title}</MasterTitle>
      <PlanPriceContainer>
        <PlanPriceSymbol isProfessional={isProfessional}>$</PlanPriceSymbol>
        <PlanPriceAmount isProfessional={isProfessional}>
          {pricing}
        </PlanPriceAmount>
      </PlanPriceContainer>
      <PlanStorageContainer>
        <PlanStorageDivider />
        <PlanStorageText isProfessional={isProfessional}>
          {storage}
        </PlanStorageText>
        <PlanStorageDivider />
        <PlanStorageText isProfessional={isProfessional}>
          {users}
        </PlanStorageText>
        <PlanStorageDivider />
        <PlanStorageText isProfessional={isProfessional}>
          {sendLimit}
        </PlanStorageText>
        <PlanStorageDivider />
      </PlanStorageContainer>
      <PlanStorageButton type="button" isProfessional={isProfessional}>
        LEARN MORE
      </PlanStorageButton>
    </PlanCardContainer>
  );
};
