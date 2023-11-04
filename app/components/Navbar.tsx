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
      <Box className="w-[min(100%,1280px)] space-x-5 flex p-5 items-center mx-auto ">
        <AiFillBug className="text-3xl" />
        <Link className={`nav-link ${dashboardActive && "active"}`} href={"/"}>
          Dashboard
        </Link>
        <Link
          className={`nav-link ${issuesActive && "active"}`}
          href={"/issues"}
        >
          Issues
        </Link>
        <User />
      </Box>
    </Box>
  );
};

export default Navbar;
