import { Transaction } from './types';

const STORAGE_KEY = 'expense-tracker-data';
const CURRENCY_KEY = 'expense-tracker-currency';

export const saveTransactions = (transactions: Transaction[]): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  }
};

export const loadTransactions = (): Transaction[] => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }
  return [];
};

export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
};

export const saveCurrency = (currency: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(CURRENCY_KEY, currency);
  }
};

export const loadCurrency = (): string => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(CURRENCY_KEY) || 'USD';
  }
  return 'USD';
};