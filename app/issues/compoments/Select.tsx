"use client";
import { Select } from "@radix-ui/themes";

const SelectComponent = () => {
  return (
    <Select.Root defaultValue="apple">
      <Select.Trigger />
      <Select.Content position="popper">
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="orange">Orange</Select.Item>
      </Select.Content>
    </Select.Root>
  );
};

export default SelectComponent;
