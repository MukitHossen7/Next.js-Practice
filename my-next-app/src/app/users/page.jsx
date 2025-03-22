import "./style.css";
async function userData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
}
const Users = async () => {
  const users = await userData();
  return (
    <div className="">
      <h2 className="text-2xl text-center py-2">
        Fetch Data and Server Side Rendering
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-gray-100 p-2 my-2 text-gray-900 mainDiv"
          >
            <h3 className="text-xl">{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
