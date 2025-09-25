import { getUserSession } from "@/helpers/getUserSession";

const DashboardHomePage = async () => {
  const session = await getUserSession();
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold text-center">
        Welcome {session?.user?.name}
      </h1>
      <p className="text-center">{session?.user?.email}</p>
    </div>
  );
};

export default DashboardHomePage;
