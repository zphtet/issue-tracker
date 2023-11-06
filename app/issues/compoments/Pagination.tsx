"use client";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { useSearchParams, useRouter } from "next/navigation";
import { NUM_OF_ISSUES_PER_PAGE } from "@/utils/constants";

const Pagination = ({ total }: { total: number }) => {
  const totalPage = Math.ceil(total / NUM_OF_ISSUES_PER_PAGE);
  const searchParams = useSearchParams();
  const currentPage = +searchParams.get("page")! || 1;
  const currentParams = new URLSearchParams(Array.from(searchParams.entries()));
  const router = useRouter();
  const isMaxPage = currentPage === totalPage;
  const isMinPage = currentPage === 1;

  const nextHandler = () => {
    if (isMaxPage) return;
    currentParams.set("page", `${currentPage + 1}`);
    const query = currentParams.size ? "?" + currentParams.toString() : "";
    router.push("/issues" + query);
  };
  const prevHandler = () => {
    if (isMinPage) return;
    currentParams.set("page", `${currentPage - 1}`);
    const query = currentParams.size ? "?" + currentParams.toString() : "";
    router.push("/issues" + query);
  };

  return (
    <div className="flex items-center gap-5 mt-5">
      <p>
        Showing page {currentPage} of {totalPage}
      </p>
      <div className="flex items-center gap-5">
        <button
          onClick={prevHandler}
          className={`bg-gray-200 py-1 px-3 rounded hover:opacity-80 
              ${isMinPage && "opacity-80 cursor-not-allowed"}
                  `}
          disabled={isMinPage}
        >
          <GoChevronLeft />
        </button>
        <button
          onClick={nextHandler}
          disabled={isMaxPage}
          className={`bg-gray-200 py-1 px-3 rounded hover:opacity-80 ${
            isMaxPage && "opacity-80 cursor-not-allowed"
          }`}
        >
          <GoChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
