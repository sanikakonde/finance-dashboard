import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import SummaryCards from "./components/SummaryCards";
import Charts from "./components/Charts";
import TransactionForm from "./components/TransactionForm";
import TransactionsTable from "./components/TransactionsTable";
import Insights from "./components/Insights";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [role, setRole] = useState("viewer");
  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    date: "",
    amount: "",
    category: "",
    type: "expense",
  });

  // Filter transactions
  const filtered = transactions.filter((t) =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  // Calculations
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const balance = income - expense;

  // Add transaction
  const addTransaction = () => {
    if (!form.date || !form.amount || !form.category) return;

    const newTransaction = {
      id: Date.now(),
      ...form,
    };

    setTransactions((prev) => [...prev, newTransaction]);

    setForm({
      date: "",
      amount: "",
      category: "",
      type: "expense",
    });
  };

  // Delete
  const deleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="app">
      <Header role={role} setRole={setRole} />

      <div className="container">
        <SummaryCards balance={balance} income={income} expense={expense} />

        <Charts transactions={transactions} balance={balance} />

        {role === "admin" && (
          <TransactionForm
            form={form}
            setForm={setForm}
            addTransaction={addTransaction}
          />
        )}

        <TransactionsTable
          transactions={filtered}
          role={role}
          deleteTransaction={deleteTransaction}
          setSearch={setSearch}
        />

        <Insights transactions={transactions} />
      </div>
    </div>
  );
};

export default App;