'use client';

import { useState, useEffect } from 'react';
import { Transaction, CURRENCIES } from '../lib/types';
import { loadTransactions, saveTransactions, generateId, loadCurrency, saveCurrency } from '../lib/storage';
import ExpenseForm from '../components/ExpenseForm';
import TransactionList from '../components/TransactionList';
import ExpenseChart from '../components/ExpenseChart';
import Summary from '../components/Summary';

export default function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [currency, setCurrency] = useState('USD');

  useEffect(() => {
    setTransactions(loadTransactions());
    setCurrency(loadCurrency());
  }, []);

  const handleCurrencyChange = (newCurrency: string) => {
    setCurrency(newCurrency);
    saveCurrency(newCurrency);
  };

  const addTransaction = (transaction: Omit<Transaction, 'id'>) => {
    const newTransaction: Transaction = {
      ...transaction,
      id: generateId()
    };
    const updatedTransactions = [newTransaction, ...transactions];
    setTransactions(updatedTransactions);
    saveTransactions(updatedTransactions);
  };

  const deleteTransaction = (id: string) => {
    const updatedTransactions = transactions.filter(t => t.id !== id);
    setTransactions(updatedTransactions);
    saveTransactions(updatedTransactions);
  };

  return (
    <div className="container">
      <header style={{ 
        background: '#ffffff', 
        borderRadius: '4px', 
        padding: '1.5rem', 
        marginBottom: '1.5rem',
        border: '1px solid #dee2e6',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img src="/Expense tracker Icon.png" alt="Expense Tracker" style={{ 
              width: '32px', 
              height: '32px'
            }} />
            <h1 style={{ 
              color: '#212529', 
              margin: 0, 
              fontSize: '1.75rem',
              fontWeight: '400',
              fontFamily: 'Georgia, Times New Roman, serif'
            }}>Expense Tracker</h1>
          </div>
          <select 
            value={currency} 
            onChange={(e) => handleCurrencyChange(e.target.value)} 
            className="form-control"
            style={{
              width: 'auto',
              minWidth: '150px'
            }}
          >
            {CURRENCIES.map(curr => (
              <option key={curr.code} value={curr.code}>{curr.code} - {curr.name}</option>
            ))}
          </select>
        </div>
      </header>
      
      <main>
        <Summary transactions={transactions} currency={currency} />
        
        <div className="content-grid">
          <div className="form-section">
            <ExpenseForm onAddTransaction={addTransaction} />
          </div>
          
          <div className="chart-section">
            <ExpenseChart transactions={transactions} />
          </div>
        </div>
        
        <TransactionList 
          transactions={transactions} 
          onDeleteTransaction={deleteTransaction}
          currency={currency}
        />
      </main>
    </div>
  );
}