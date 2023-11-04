import { Button } from "@radix-ui/themes";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const User = () => {
  const { data, status } = useSession();
  if (status === "loading") return <p>Loading ... </p>;
  return (
    <div>
      <Button onClick={() => signIn("google")}>Login</Button>
      {data && <p>{data.user?.name}</p>}
      <Button onClick={() => signOut()}>SignOut</Button>
    </div>
  );
};

export default User;
