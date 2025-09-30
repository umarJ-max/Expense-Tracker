'use client';

import { Transaction } from '../lib/types';
import { formatCurrency } from '../lib/utils';

interface TransactionListProps {
  transactions: Transaction[];
  onDeleteTransaction: (id: string) => void;
  currency?: string;
}

export default function TransactionList({ transactions, onDeleteTransaction, currency = 'USD' }: TransactionListProps) {
  return (
    <div className="transaction-list">
      <h3>Recent Transactions</h3>
      {transactions.length === 0 ? (
        <p>No transactions yet</p>
      ) : (
        <ul>
          {transactions.map(transaction => (
            <li key={transaction.id} className={`transaction-item ${transaction.type}`}>
              <div className="transaction-info">
                <span className="description">{transaction.description}</span>
                <span className="category">{transaction.category}</span>
                <span className="date">{transaction.date}</span>
              </div>
              <div className="transaction-amount">
                <span className={`amount ${transaction.type}`}>
                  {transaction.type === 'expense' ? '-' : '+'}
                  {formatCurrency(transaction.amount, currency)}
                </span>
                <button 
                  onClick={() => onDeleteTransaction(transaction.id)}
                  className="delete-btn"
                >
                  ×
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}