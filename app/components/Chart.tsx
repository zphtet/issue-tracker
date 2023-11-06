"use client";
import React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

type DataItem = {
  name: string;
  number: number;
};

const Chart = ({ data }: { data: DataItem[] }) => {
  return (
    <ResponsiveContainer width={"100%"} minHeight={"40vh"}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="number" barSize={50} fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
