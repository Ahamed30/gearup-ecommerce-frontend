import { graduate, openSans, rubik } from "@/styles";
import { SubscribeFormType } from "@/types";

export interface SubscribeFormProps {
  subscribeFormData?: SubscribeFormType;
}

export const SubscribeForm = ({ subscribeFormData }: SubscribeFormProps) => {
  if (!subscribeFormData) return;

  const { headerText, subText } = subscribeFormData;
  const fontRubik = rubik?.className;
  const fontOpenSans = openSans?.className;
  const fontGraduate = graduate?.className;

  return (
    <div className="p-[24px] lg:p-[40px]">
      <div className="lg:flex lg:flex-row lg:justify-between gap-16">
        <div className="w-full">
          <h3
            className={`${fontRubik} text-white leading-normal text-2xl lg:text-5xl font-semibold uppercase mb-4`}
          >
            {headerText}
          </h3>
          <p
            className={`${fontOpenSans} text-stone-200 text-base lgtext-xl font-semibold mb-[24px] lg:mb-[32px]`}
          >
            {subText}
          </p>
          <div className="w-[250px] lg:w-[290px] px-4 py-2.5 rounded-lg border border border border border-white justify-start items-center inline-flex mr-[8px] mb-[16px]">
            <input
              className="grow shrink basis-0 opacity-75 text-stone-200 placeholder-[#E7E7E3] text-[16px] font-normal tracking-wide bg-transparent focus:outline-none"
              placeholder="Email address"
            />
          </div>

          <button className="px-4 py-2.5 bg-neutral-800 rounded-lg flex justify-center items-center text-white text-[16px] font-medium uppercase inline-flex tracking-wide hover:bg-blue-300 hover:text-black">
            Submit
          </button>
        </div>
        <div
          className={`${fontRubik} w-full flex items-center justify-start lg:justify-center py-[24px]`}
        >
          <h1
            className={`text-white leading-normal text-[64px] ${fontGraduate} font-bold`}
          >
            GearUp
          </h1>
        </div>
      </div>
    </div>
  );
};
