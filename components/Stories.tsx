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
    <div>
      {user?.map((u, i) => {
        return <Story key={i} avatar={u.image} username={u.username} />;
      })}
    </div>
  );
}
