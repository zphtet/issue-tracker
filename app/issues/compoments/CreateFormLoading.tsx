import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import React from "react";

const CreateFormLoading = () => {
  return (
    <div className="w-[min(520px,100%)]">
      <div className="space-y-10">
        <Skeleton height={"30px"} />
        <Skeleton height={"400px"} />
        <div className="mt-5">
          <Skeleton width={"100px"} height={"50px"} />
        </div>
      </div>
    </div>
  );
};

export default CreateFormLoading;
