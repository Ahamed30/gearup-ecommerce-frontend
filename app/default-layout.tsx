"use client";

import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Loader } from "@/components/Loader";
import { useApp } from "@/context/AppContext";
import { FooterType, HeaderType } from "@/types";

export interface DefaultLayoutProps {
  headerData: HeaderType;
  footerData: FooterType;
  children: ReactNode;
}
export const DefaultLayout = ({
  headerData,
  footerData,
  children,
}: DefaultLayoutProps) => {
  const { isLoading } = useApp();

  return (
    <div className="relative min-h-screen">
      <div
        className={`w-full h-full fixed inset-0 bg-gray-800 opacity-40 z-10 ${
          isLoading ? "block" : "hidden"
        }`}
      ></div>
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center h-screen z-20">
          <Loader />
        </div>
      ) : null}
      <Header data={headerData} />
      {children}
      <Footer data={footerData} />
    </div>
  );
};
