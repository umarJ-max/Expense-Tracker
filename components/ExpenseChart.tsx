'use client';

import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { Transaction } from '../lib/types';
import { getCategoryTotals } from '../lib/utils';

Chart.register(...registerables);

interface ExpenseChartProps {
  transactions: Transaction[];
}

export default function ExpenseChart({ transactions }: ExpenseChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const expenses = transactions.filter(t => t.type === 'expense');
    const categoryTotals = getCategoryTotals(expenses);
    
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    if (Object.keys(categoryTotals).length === 0) {
      return;
    }

    chartInstance.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: Object.keys(categoryTotals),
        datasets: [{
          data: Object.values(categoryTotals),
          backgroundColor: [
            '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0',
            '#9966FF', '#FF9F40', '#E91E63', '#C9CBCF'
          ]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }, [transactions]);

  useEffect(() => {
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  const expenses = transactions.filter(t => t.type === 'expense');
  const categoryTotals = getCategoryTotals(expenses);
  const hasData = Object.keys(categoryTotals).length > 0;

  return (
    <div className="chart-container">
      <h3>Expenses by Category</h3>
      {hasData ? (
        <canvas ref={chartRef}></canvas>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '200px', color: '#6b7280' }}>
          No expense data to display
        </div>
      )}
    </div>
  );
}