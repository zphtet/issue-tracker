import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import React from "react";

const DetailSkeleton = () => {
  return (
    <div className="w-[min(520px,100%)]">
      <div className="space-y-2">
        <Skeleton height={"30px"} width={"300px"} />
        <div className="flex gap-10">
          <Skeleton height={"20px"} width={"60px"} />
          <Skeleton height={"20px"} width={"100px"} />
        </div>

        <div className="mt-5">
          <Skeleton height={"300px"} />
        </div>
      </div>
    </div>
  );
};

export default DetailSkeleton;
