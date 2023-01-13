export interface TransactionProps {
  id: number;
  title: string;
  subTitle: string;
  amount: string;
  date: string;
  art: {
    background: string;
  };
}

export interface TransactionSectionProps {
  data: Array<TransactionProps>;
}

export interface TransactionAviProps {
  background: string;
}
