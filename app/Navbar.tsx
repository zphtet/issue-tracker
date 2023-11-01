"use client";
import { Box } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";
const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  const dashboardActive = pathname === "/";
  const issuesActive = pathname === "/issues";
  return (
    <Box className="space-x-5 flex p-5 items-center border-b">
      <AiFillBug className="text-3xl" />
      <Link className={`nav-link ${dashboardActive && "active"}`} href={"/"}>
        Dashboard
      </Link>
      <Link className={`nav-link ${issuesActive && "active"}`} href={"/issues"}>
        Issues
      </Link>
    </Box>
  );
};

export default Navbar;
