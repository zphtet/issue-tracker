"use client";
import { User } from "@prisma/client";
import { Select } from "@radix-ui/themes";

const SelectComponent = ({ users }: { users: User[] }) => {
  // console.log(users);
  return (
    <Select.Root defaultValue="unassigned">
      <Select.Trigger />
      <Select.Content position="popper">
        <Select.Item value="unassigned">Unassigned</Select.Item>
        {users.map((user) => {
          return <Select.Item value={user.id}>{user.name}</Select.Item>;
        })}

        {/* <Select.Item value="person2">Person2</Select.Item> */}
      </Select.Content>
    </Select.Root>
  );
};

export default SelectComponent;
