import { Card, Flex, Text } from "@radix-ui/themes";
import React from "react";

const SummaryCard = ({ title, num }: { title: string; num: number }) => {
  return (
    <Card>
      <Flex direction={"column"} gap={"1"}>
        <Text>{title}</Text>
        <Text weight={"bold"} size={"4"}>
          {num}
        </Text>
      </Flex>
    </Card>
  );
};

export default SummaryCard;
