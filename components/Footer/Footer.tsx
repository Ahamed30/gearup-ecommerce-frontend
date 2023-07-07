import React from "react";
import { SubscribeForm } from "../SubscribeForm";
import { FooterContent } from "./FooterContent";

export const Footer = () => {
  return (
    <footer className="relative">
      <table className="border-collapse w-full bg-[#4A69E2] rounded-[48px]">
        <tr>
          <td>
            <SubscribeForm />
          </td>
        </tr>
        <tr>
          <td className="bg-[#232321] border-none rounded-[48px] ">
            <FooterContent />
          </td>
        </tr>
      </table>
    </footer>
  );
};
