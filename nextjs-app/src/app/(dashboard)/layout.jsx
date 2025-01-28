const dashboardLayout = ({ children }) => {
  return (
    <div className="flex gap-6">
      <div className="w-[30%] border border-green-600 h-screen">
        <h3 className="font-bold">Sidebar</h3>
      </div>
      <div className="w-[70%] border border-red-600">{children}</div>
    </div>
  );
};

export default dashboardLayout;
