"use-client";

import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import AuthProviders from "./AuthProviders";

const Navbar = () => {
  const session = null;
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href={"/"}></Link>
        <Image src={"/logo.svg"} width={115} height={43} alt="logo" />
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

      <div className="flexCeneter gap-4">
        {session ? (
          <>
            User Photo
            <Link href={"/create-project"}>Share log</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
