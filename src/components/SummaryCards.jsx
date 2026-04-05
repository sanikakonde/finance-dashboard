const SummaryCards = ({ balance, income, expense }) => {
  return (
    <div className="cards">
      <div className="card">
        <p>Total Balance</p>
        <h2>₹{balance}</h2>
      </div>

      <div className="card">
        <p>Income</p>
        <h2 className="green">₹{income}</h2>
      </div>

      <div className="card">
        <p>Expense</p>
        <h2 className="red">₹{expense}</h2>
      </div>
    </div>
  );
};

export default SummaryCards;