'use client';

import { useState } from 'react';
import { Transaction, TransactionType, categories } from '../lib/types';

interface ExpenseFormProps {
  onAddTransaction: (transaction: Omit<Transaction, 'id'>) => void;
}

export default function ExpenseForm({ onAddTransaction }: ExpenseFormProps) {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [type, setType] = useState<TransactionType>('expense');

  const formatAmountInput = (value: string) => {
    const numericValue = value.replace(/[^\d.]/g, '');
    const parts = numericValue.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  };

  const parseAmount = (value: string) => {
    return parseFloat(value.replace(/,/g, ''));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numAmount = parseAmount(amount);
    if (!amount || !description || isNaN(numAmount) || numAmount <= 0) return;

    onAddTransaction({
      amount: numAmount,
      description,
      category,
      type,
      date: new Date().toISOString().split('T')[0]
    });

    setAmount('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <div className="form-group">
        <label>Type</label>
        <select value={type} onChange={(e) => setType(e.target.value as TransactionType)}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
      </div>
      <div className="form-group">
        <label>Amount</label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(formatAmountInput(e.target.value))}
          placeholder="1,000.00"
          required
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
          required
        />
      </div>
      <div className="form-group">
        <label>Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  );
}