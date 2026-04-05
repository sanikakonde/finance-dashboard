import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const COLORS = ["#6366f1", "#22c55e", "#f59e0b", "#ef4444"];

const Charts = ({ transactions, balance }) => {

  // Pie Data
  const categoryTotals = {};
  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryTotals[t.category] =
        (categoryTotals[t.category] || 0) + Number(t.amount);
    }
  });

  const pieData = Object.keys(categoryTotals).map((key) => ({
    name: key,
    value: categoryTotals[key],
  }));

  // Line Data
  let runningBalance = 0;
  const lineData = transactions.map((t) => {
    if (t.type === "income") {
      runningBalance += Number(t.amount);
    } else {
      runningBalance -= Number(t.amount);
    }

    return {
      name: t.date,
      balance: runningBalance,
    };
  });

  return (
    <div className="charts">

      {/* Line Chart */}
      <div className="chart">
        <h3>Balance Trend</h3>

        <LineChart width={300} height={220} data={lineData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="balance" stroke="#6366f1" />
        </LineChart>

        <p>Total Balance: ₹{balance}</p>
      </div>

      {/* Pie Chart */}
      <div className="chart">
        <h3>Spending Breakdown</h3>

        <PieChart width={300} height={220}>
          <Pie data={pieData} dataKey="value" outerRadius={80} label>
            {pieData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>

        {pieData.length === 0 ? (
          <p>No data</p>
        ) : (
          pieData.map((item, index) => (
            <p key={index}>
              ● {item.name}: ₹{item.value}
            </p>
          ))
        )}
      </div>

    </div>
  );
};

export default Charts;