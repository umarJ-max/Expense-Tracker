import { Transaction } from './types';
import { startOfWeek, endOfWeek, startOfMonth, endOfMonth, isWithinInterval, parseISO } from 'date-fns';

export const formatCurrency = (amount: number, currency: string = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  }).format(amount);
};

export const getWeeklyTransactions = (transactions: Transaction[]): Transaction[] => {
  const now = new Date();
  const weekStart = startOfWeek(now);
  const weekEnd = endOfWeek(now);
  
  return transactions.filter(t => 
    isWithinInterval(parseISO(t.date), { start: weekStart, end: weekEnd })
  );
};

export const getMonthlyTransactions = (transactions: Transaction[]): Transaction[] => {
  const now = new Date();
  const monthStart = startOfMonth(now);
  const monthEnd = endOfMonth(now);
  
  return transactions.filter(t => 
    isWithinInterval(parseISO(t.date), { start: monthStart, end: monthEnd })
  );
};

export const calculateTotal = (transactions: Transaction[], type?: 'income' | 'expense'): number => {
  return transactions
    .filter(t => !type || t.type === type)
    .reduce((sum, t) => sum + (t.type === 'income' ? t.amount : -t.amount), 0);
};

export const getCategoryTotals = (transactions: Transaction[]): Record<string, number> => {
  return transactions.reduce((acc, transaction) => {
    acc[transaction.category] = (acc[transaction.category] || 0) + transaction.amount;
    return acc;
  }, {} as Record<string, number>);
};