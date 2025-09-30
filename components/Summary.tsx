'use client';

import { Transaction } from '../lib/types';
import { formatCurrency } from '../lib/utils';

interface SummaryProps {
  transactions: Transaction[];
  currency: string;
}

export default function Summary({ transactions, currency }: SummaryProps) {
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpenses;

  return (
    <div className="summary">
      <div className="summary-item income">
        <h3>Total Income</h3>
        <p>{formatCurrency(totalIncome, currency)}</p>
      </div>
      <div className="summary-item expense">
        <h3>Total Expenses</h3>
        <p>{formatCurrency(totalExpenses, currency)}</p>
      </div>
      <div className={`summary-item balance ${balance >= 0 ? 'positive' : 'negative'}`}>
        <h3>Balance</h3>
        <p>{formatCurrency(balance, currency)}</p>
      </div>
      <footer className="footer">
        <hr />
        <p>© 2024 All Rights Reserved - Umar J</p>
      </footer>
    </div>
  );
}