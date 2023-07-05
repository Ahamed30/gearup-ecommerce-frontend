import React from "react";

export const MobileNavigation = () => {
  return (
    <div className="w-full block hidden">
      <div className="text-sm">
        <a
          href="#responsive-header"
          className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          Docs
        </a>
        <a
          href="#responsive-header"
          className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          Examples
        </a>
        <a
          href="#responsive-header"
          className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
        >
          Blog
        </a>
      </div>
    </div>
  );
};
