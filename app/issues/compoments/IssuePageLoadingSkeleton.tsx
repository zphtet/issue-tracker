import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import React from "react";

const IssuePageLoading = () => {
  return (
    <div>
      <div className=" flex items-center justify-between mb-5">
        <Skeleton height={"30px"} width={"150px"} />
        <Skeleton height={"30px"} width={"150px"} />
      </div>
      <div>
        <Skeleton height={"400px"} />
      </div>
      <Skeleton width={"250px"} height={"30px"} />
    </div>
  );
};

export default IssuePageLoading;
