const Header = ({ role, setRole }) => {
  return (
    <div className="header">
      <h1>Finance Dashboard</h1>

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
};

export default Header;