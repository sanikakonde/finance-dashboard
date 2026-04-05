# 💰 Finance Dashboard

A simple and interactive finance dashboard built to help users track their income, expenses, and overall balance.  
The goal of this project is to present financial data in a clear and easy-to-understand way using charts and tables.

---

## 🚀 Setup Instructions

**Step 1: Clone the repository**  
git clone https://github.com/your-username/finance-dashboard.git  

**Step 2: Navigate to the project folder**  
cd finance-dashboard  

**Step 3: Install dependencies**  
npm install  

**Step 4: Run the development server**  
npm run dev  

**Step 5: Open in browser**  
http://localhost:5173  

---

## 🧠 Overview of Approach

**Simple and clean structure**  
The application is divided into different sections like summary cards, charts, transaction form, and transaction list to keep everything organized.

**Component-based design**  
Each part of the UI is handled separately using React components, making the code easier to manage and understand.

**State management using React**  
All data such as transactions, selected role, and filters are handled using React state (useState).

**Real-time updates**  
Whenever a transaction is added or deleted, the UI updates instantly without refreshing the page.

**Dynamic charts**  
Charts automatically update based on transaction data, helping users visualize their financial activity.

---

##  Features

### Dashboard Summary  
- Displays total balance  
- Shows total income  
- Shows total expenses  

---

### Balance Trend Chart  
- Line chart showing balance over time  
- Helps track financial changes  

---

### Spending Breakdown  
- Pie chart for category-wise expenses  
- Easy to understand spending distribution  

---

### Add Transaction  
- Add income or expense entries  
- Simple and user-friendly form  

---

### Delete Transaction  
- Remove transactions easily  
- Updates dashboard instantly  

---

### Transactions Table  
- Displays all transactions  
- Includes:  
  - Date  
  - Amount  
  - Category  
  - Type (Income/Expense)  

---

### Search / Filter  
- Filter transactions by category  
- Helps find specific data quickly  

---

### Role-Based UI (Admin / Viewer)  

**Admin**  
- Can add transactions  
- Can delete transactions  

**Viewer**  
- Can only view data  

---

### Insights Section  
- Shows highest spending category  
- Displays total number of transactions  

---

##  Notes

- This project uses mock/static data  
- No backend is used  
- Focus is on frontend design and functionality  

---

