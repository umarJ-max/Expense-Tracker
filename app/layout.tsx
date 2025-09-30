import './globals.css';

export const metadata = {
  title: 'Expense Tracker',
  description: 'Track your expenses and income',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Expense tracker Icon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}