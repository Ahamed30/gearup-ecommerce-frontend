"use client";

import Link from "next/link";
import { openSans } from "@/styles";
import { FooterType } from "@/types";
import { FooterContent } from "./FooterContent";
import { SubscribeForm } from "../SubscribeForm";

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
        className={`${fontOpenSans} flex justify-center text-center`}
        href={`https://github.com/Ahamed30`}
        target="_blank"
      >
        © All rights reserved | Made with ❤️ by Dhanish Ahamed
      </Link>
    </footer>
  );
};
