import React from "react";
import Story from "./Story";

type Iusers = {
  username: string;
  image: string;
}[];

export default function Stories() {
  const [user, setUsers] = React.useState<Iusers>([]);

  React.useEffect(() => {
    const getUsers = async () => {
      const { users } = await (
        await fetch("https://dummyjson.com/users")
      ).json();

      setUsers(users);
    };

    getUsers();
  }, []);

  return (
    <div className="flex space-x-2 p-6 mt-8 bg-white border rounded-sm border-gray-200 overflow-x-scroll scrollbar-thin scrollbar-thumb-white">
      {user?.map((u, i) => (
        <Story key={i} avatar={u.image} username={u.username} />
      ))}
    </div>
  );
}
