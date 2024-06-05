// src/types/financialData.ts
export interface FinancialData {
  analyst_estimates: {
    [key: string]: number;
  };
  market_ap: number;
  shares_outstanding: number;
  pe_ratio: number;
  ps_ratio: number;
  pb_ratio: number;
  peg_ratio: number;
  current_ratio: number;
  debt_to_equity_ratio: number;
  eps: number;
}
