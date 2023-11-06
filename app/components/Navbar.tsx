"use client";
import { Box } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";
import User from "./User";
const Navbar = () => {
  const pathname = usePathname();
  const dashboardActive = pathname === "/";
  const issuesActive = pathname === "/issues";
  return (
    <Box className=" border-b">
      <Box className="w-[min(100%,1180px)] flex justify-between sm:p-5 items-center mx-auto py-3 px-5">
        <Box className="flex items-center gap-5">
          <AiFillBug className="sm:text-3xl text-2xl" />
          <Link
            className={`nav-link ${dashboardActive && "active"}`}
            href={"/"}
          >
            Dashboard
          </Link>
          <Link
            className={`nav-link ${issuesActive && "active"}`}
            href={"/issues"}
          >
            Issues
          </Link>
        </Box>
        <User />
      </Box>
    </Box>
  );
};

export default Navbar;
