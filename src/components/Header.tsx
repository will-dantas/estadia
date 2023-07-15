"use client";

import React from "react";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  const { status, data } = useSession();

  const handleLoginClick = () => signIn();

  const handleLogoutClick = () => {
    setMenuIsOpen(false);
    signOut();
  };

  const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);

  const handleFirstName = () => data?.user?.name?.split(' ').at(0);

  return (
    <div className="container mx-auto p-5 py-0 h-[80px] flex justify-between items-center lg:border-b lg:border-grayLighter">
      <Link href="/">
        <div className="flex justify-start items-center gap-3 relative">
          <h1 className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block">
            <h1 className="relative text-white text-xl">estadia</h1>
          </h1>
        </div>
      </Link>

      {status === "unauthenticated" && (
        <button
          className="text-primary text-sm font-semibold rounded-full shadow-md border border-solid border-grayLight pt-4 pb-4 pl-6 pr-6"
          onClick={handleLoginClick}
        >
          Login
        </button>
      )}

      {status === "authenticated" && data.user && (
        <div className="flex items-center gap-3 border-grayLighter border border-solid rounded-full p-2 px-3 relative">
          <AiOutlineMenu size={16} onClick={handleMenuClick} className="cursor-pointer" />
          <p className="text-sm">{handleFirstName()}</p>

          <Image height={35} width={35} src={data.user.image!} alt={data.user.name!} className="rounded-full shadow-md" />

          {menuIsOpen && (
            <div className="z-50 absolute top-14 left-0 w-full h-[100px] bg-white rounded-lg shadow-md flex flex-col justify-center items-center">
              <Link href="/my-trips" onClick={() => setMenuIsOpen(false)}>
                <button className="text-primary pb-2 border-b border-grayLighter border-solid text-sm font-semibold">Minhas Viagens</button>
              </Link>

              <button className="text-primary pt-2 text-sm font-semibold" onClick={handleLogoutClick}>
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
