# Finance Dashboard

A simple and interactive finance dashboard built to help users track their income, expenses, and overall balance. The goal of this project is to present financial data in a clear and easy-to-understand way using charts and tables.

# Setup Instructions

To run this project on your system, follow these steps:

First, download or clone the project:
git clone https://github.com/your-username/finance-dashboard.git
Go inside the project folder:
cd finance-dashboard
Install all required dependencies:
npm install
Start the development server:
npm run dev
Open your browser and visit:
http://localhost:5173

That’s it — the dashboard should now be running locally.

# Overview of Approach

While building this project, the main focus was to keep things simple, clear, and easy to use.

The application is divided into small sections like summary cards, charts, transaction form, and transaction list. Each part is handled separately so the code stays organized and easy to manage.

React state is used to store and update all the data such as transactions, selected role, and filters. Whenever a user adds or deletes a transaction, the UI updates instantly without needing a refresh.

Charts are connected directly to the transaction data, so any change is reflected visually as well. Instead of adding unnecessary complexity, the goal was to build a clean and functional dashboard that demonstrates proper handling of UI and data.

# Features
Dashboard Summary
Shows total balance, total income, and total expenses in a simple and clear format.
Balance Trend Chart
A line chart that displays how the balance changes over time, helping users understand financial trends.
Spending Breakdown
A pie chart that shows how expenses are divided across different categories.
Add Transaction
Users can add new income or expense entries by filling out a simple form.
Delete Transaction
Any transaction can be removed easily using the delete button.
Transactions Table
Displays all transactions with details like date, amount, category, and type.
Search / Filter
Allows users to filter transactions based on category for quick access.
Role-Based UI (Admin / Viewer)
Admin can add and delete transactions
Viewer can only view data
This is implemented on the frontend for demonstration.
Insights Section
Shows useful information like the highest spending category and total number of transactions.
