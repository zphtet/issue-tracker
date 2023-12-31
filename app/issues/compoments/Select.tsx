"use client";
import { User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
const SelectComponent = ({
  users,
  issueId,
  defaultUserId,
}: {
  users: User[];
  issueId: string;
  defaultUserId: string | null;
}) => {
  // console.log(users);
  const router = useRouter();
  const updateFun = async (id: string | null) => {
    try {
      await fetch(`/api/issues/${issueId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          assignId: id,
        }),
      });
      router.refresh();
    } catch (err) {
      console.log(err);
    }
  };

  const assignHandler = async (value: string) => {
    updateFun(value === "unassigned" ? null : value);
  };

  return (
    <Select.Root
      defaultValue={defaultUserId || "unassigned"}
      onValueChange={assignHandler}
    >
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
