import { signOut } from "next-auth/react";
import { rubik } from "@/styles";
import { UnStyledButton } from "../Button";

export const AccountNavigationMenu = () => {
  const fontRubik = rubik?.className;

  return (
    <div className="absolute z-10 left-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
      <ul
        aria-labelledby="dropdownDefaultButton"
        className="py-2 text-sm text-gray-700 dark:text-gray-200"
      >
        <li>
          <UnStyledButton
            className={`${fontRubik} w-full block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}
            onClick={() => signOut()}
          >
            Sign Out
          </UnStyledButton>
        </li>
      </ul>
    </div>
  );
};
