import Image from "next/image";
import { UnStyledButton } from "../Button";
import { Typography } from "../Typography";

interface ModalProps {
  title?: string;
  subText?: string;
  setShowModal: (value: boolean) => void;
  acceptButton?: {
    title: string;
    handleClick: () => void;
  };
  cancelButtonText?: string;
}

export const Modal = ({
  title,
  subText,
  setShowModal,
  acceptButton,
  cancelButtonText,
}: ModalProps) => {
  return (
    <div role="dialog">
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        onClick={() => setShowModal(false)}
      >
        <div className="relative w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 py-3 px-6">
            <div className="flex items-start justify-between py-5 border-b border-solid border-blueGray-200 rounded-t">
              {title && (
                <Typography
                  as="h3"
                  className="text-2xl lg:text-3xl font-semibold"
                  variant="headline"
                >
                  {title}
                </Typography>
              )}
              <button
                className="absolute top-2 right-2"
                onClick={() => setShowModal(false)}
              >
                <Image
                  alt={`Close Icon`}
                  height={25}
                  src={`/close-icon.svg`}
                  width={25}
                />
              </button>
            </div>
            <div className="relative py-4 flex-auto">
              <Typography className="my-1 text-lg leading-relaxed">
                {subText}
              </Typography>
            </div>
            <div className="flex items-center justify-center gap-5 p-6 border-t border-solid border-blueGray-200 rounded-b">
              {acceptButton ? (
                <UnStyledButton
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2 ease-linear transition-all duration-150"
                  onClick={acceptButton.handleClick}
                  type="button"
                >
                  {acceptButton.title}
                </UnStyledButton>
              ) : null}
              {cancelButtonText ? (
                <UnStyledButton
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 ease-linear transition-all duration-150"
                  onClick={() => setShowModal(false)}
                  type="button"
                >
                  No, cancel
                </UnStyledButton>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};
