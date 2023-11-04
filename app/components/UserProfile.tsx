"use client";

import { DropdownMenu, Button, Avatar } from "@radix-ui/themes";

const UserProfile = ({
  email,
  handler,
  image,
}: {
  email: string;
  handler: () => void;
  image: string;
}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Avatar
          size="3"
          src={image}
          radius="full"
          fallback="T"
          className="cursor-pointer"
        />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>{email}</DropdownMenu.Item>
        <DropdownMenu.Item className="cursor-pointer" onClick={handler}>
          Log Out
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default UserProfile;
