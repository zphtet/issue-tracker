import { Button } from "@radix-ui/themes";
import { signIn, signOut, useSession } from "next-auth/react";
import ButtonSkeleton from "./ButtonSkeleton";
import UserProfile from "./UserProfile";
import React from "react";

const User = () => {
  const { data, status } = useSession();
  if (status === "loading") return <ButtonSkeleton />;
  return (
    <div>
      {!data && <Button onClick={() => signIn("google")}>Login</Button>}
      {data && (
        <UserProfile
          email={data.user?.email!}
          handler={() => signOut()}
          image={data.user?.image!}
        />
      )}
    </div>
  );
};

export default User;
