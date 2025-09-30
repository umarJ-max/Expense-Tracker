# 💰 Expense Tracker

A modern, responsive expense tracking application built with Next.js, TypeScript, and Chart.js. Keep track of your income and expenses with beautiful visualizations and an intuitive interface.

![Expense Tracker](./public/Expense%20tracker%20Icon.png)

## ✨ Features

- 📊 **Visual Analytics** - Interactive charts powered by Chart.js
- 💸 **Income & Expense Tracking** - Categorize and monitor your transactions
- 🎯 **Real-time Balance** - Instant calculation of your financial status
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile
- 💾 **Local Storage** - Your data persists between sessions
- 🎨 **Modern UI** - Clean and intuitive user interface
- 🔄 **Real-time Updates** - Instant feedback on all transactions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd expense-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🛠️ Built With

- **[Next.js 14](https://nextjs.org/)** - React framework for production
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Chart.js](https://www.chartjs.org/)** - Beautiful charts and graphs
- **[React Chart.js 2](https://react-chartjs-2.js.org/)** - React wrapper for Chart.js
- **[date-fns](https://date-fns.org/)** - Modern JavaScript date utility library

## 📁 Project Structure

```
expense-tracker/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ExpenseChart.tsx   # Chart visualization component
│   ├── ExpenseForm.tsx    # Transaction form component
│   ├── Summary.tsx        # Financial summary component
│   └── TransactionList.tsx # Transaction list component
├── lib/                   # Utility functions and types
│   ├── storage.ts         # Local storage utilities
│   ├── types.ts           # TypeScript type definitions
│   └── utils.ts           # Helper functions
├── public/                # Static assets
└── package.json           # Project dependencies
```

## 🎯 Usage

1. **Add Income/Expense**: Use the form to add new transactions
2. **Categorize**: Select appropriate categories for better tracking
3. **View Summary**: Check your total income, expenses, and balance
4. **Analyze Trends**: Use the chart to visualize your spending patterns
5. **Manage Transactions**: Edit or delete existing transactions

## 📊 Features Overview

### Transaction Management
- Add income and expense transactions
- Categorize transactions for better organization
- Edit and delete existing transactions
- Real-time balance calculation

### Visual Analytics
- Interactive pie charts showing expense distribution
- Color-coded categories for easy identification
- Responsive chart design for all screen sizes

### Data Persistence
- Local storage integration
- Data persists between browser sessions
- No external database required

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy with zero configuration

### Deploy on Netlify

1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the `out` folder to Netlify

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Icons and design inspiration from modern financial apps
- Chart.js community for excellent documentation
- Next.js team for the amazing framework

---

**Happy tracking! 💰**