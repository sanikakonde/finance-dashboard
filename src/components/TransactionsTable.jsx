const TransactionsTable = ({
  transactions,
  role,
  deleteTransaction,
  setSearch,
}) => {
  return (
    <div className="transactions">
      <h3>Transactions</h3>

      <input
        type="text"
        placeholder="Search category..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
            {role === "admin" && <th>Action</th>}
          </tr>
        </thead>

        <tbody>
          {transactions.map((t) => (
            <tr key={t.id}>
              <td>{t.date}</td>
              <td>₹{t.amount}</td>
              <td>{t.category}</td>
              <td className={t.type === "income" ? "green" : "red"}>
                {t.type}
              </td>

              {role === "admin" && (
                <td>
                  <button onClick={() => deleteTransaction(t.id)}>
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;