const Insights = ({ transactions }) => {
  const categoryTotals = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryTotals[t.category] =
        (categoryTotals[t.category] || 0) + Number(t.amount);
    }
  });

  const highest =
    Object.keys(categoryTotals).length > 0
      ? Object.entries(categoryTotals).reduce((a, b) =>
          a[1] > b[1] ? a : b
        )[0]
      : "None";

  return (
    <div className="insights">
      <h3>Insights</h3>
      <p>Highest Spending Category: {highest}</p>
      <p>Total Transactions: {transactions.length}</p>
    </div>
  );
};

export default Insights;