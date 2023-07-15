"use client";

import Link from "next/link";
import { SubscribeForm } from "../SubscribeForm";
import { FooterContent } from "./FooterContent";
import { openSans } from "@/styles";
import { FooterType } from "@/types";

interface FooterProps {
  data: FooterType;
}

export const Footer = ({ data }: FooterProps) => {
  const fontOpenSans = openSans?.className;

  return (
    <footer>
      <table className="border-collapse w-full bg-[#4A69E2] rounded-[48px] mb-[16px]">
        <tbody>
          <tr>
            <td>
              <SubscribeForm subscribeFormData={data?.subscribeForm} />
            </td>
          </tr>
          <tr>
            <td className="bg-[#232321] border-none rounded-[48px] ">
              <FooterContent footerData={data} />
            </td>
          </tr>
        </tbody>
      </table>
      <Link
        href={`https://github.com/Ahamed30`}
        target="_blank"
        className={`${fontOpenSans} flex justify-center text-center`}
      >
        © All rights reserved | Made with ❤️ by Dhanish Ahamed
      </Link>
    </footer>
  );
};
