import { SwapTransactionType } from "@ledgerhq/live-common/exchange/swap/types";

export type FormProvidersSections = "provider" | "fees" | "rate" | "target";
export type FormProvidersProps = {
  provider?: string;
  rate?: string;
  fees?: string;
  onProviderChange: Function;
  onFeesChange: Function;
  onTargetChange: Function;
  swapTransaction: SwapTransactionType;
};
