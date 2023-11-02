import React from "react";

type DetailProps = {
  params: { id: string };
};

const DetailPage = ({ params }: DetailProps) => {
  return <div>DetailPage {params.id}</div>;
};

export default DetailPage;
