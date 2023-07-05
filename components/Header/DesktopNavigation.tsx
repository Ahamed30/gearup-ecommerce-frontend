import React from "react";

export const DesktopNavigation = () => {
  return (
    <div className="hidden text-sm w-full lg:block flex-shrink-0 lg:flex lg:items-center lg:w-auto">
      <a
        href="#responsive-header"
        className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-4"
      >
        Docs
      </a>
      <a
        href="#responsive-header"
        className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"
      >
        Examples
      </a>
      <a
        href="#responsive-header"
        className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white"
      >
        Blog
      </a>
    </div>
  );
};
