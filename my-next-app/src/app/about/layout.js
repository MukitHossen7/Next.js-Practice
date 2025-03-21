export default function dashboardLayout({ children }) {
  return (
    <div className="flex h-screen">
      <div className="w-[30%] border-2 border-gray-100 ">
        <h2 className="text-2xl font-bold">Dashboard</h2>
      </div>
      <div className="w-[70%] p-8 border-2 border-gray-100">{children}</div>
    </div>
  );
}
