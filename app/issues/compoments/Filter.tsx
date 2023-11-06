"use client";
import { Select } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const Filter = () => {
  const router = useRouter();
  const params = new URLSearchParams();
  const searchParams = useSearchParams();

  const filterHandler = (value: string) => {
    params.append("filter", value);
    const query = params.size && "?" + params.toString();
    router.push("/issues" + query);
  };
  return (
    <Select.Root
      defaultValue={searchParams.get("filter") || "all"}
      onValueChange={filterHandler}
    >
      <Select.Trigger className="px-10" />
      <Select.Content>
        <Select.Item value="all">All</Select.Item>
        <Select.Item value="open">Open</Select.Item>
        <Select.Item value="inprogress">In Progress</Select.Item>
        <Select.Item value="closed">Closed</Select.Item>
      </Select.Content>
    </Select.Root>
  );
};

export default Filter;
