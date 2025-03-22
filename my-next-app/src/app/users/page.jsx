import Image from "next/image";
import img1 from "../Images/images (27).jpg";

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
      <Image src={img1} alt="Hile Images" width="500" height="500"></Image>
      <Image
        src="https://images.pexels.com/photos/13003306/pexels-photo-13003306.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt="pexels Images"
        width="800"
        height="500"
        style={{ objectFit: "cover" }}
      ></Image>
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
