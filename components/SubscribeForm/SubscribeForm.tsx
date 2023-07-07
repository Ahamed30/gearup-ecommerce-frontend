export const SubscribeForm = () => {
  return (
    <div className="p-[16px] lg:p-[40px]">
      <div className="lg:flex lg:flex-row lg:justify-between gap-16">
        {/* Left div */}
        <div className="w-full">
          <h3 className="text-white leading-normal text-2xl lg:text-5xl font-semibold uppercase mb-4">
            Join our KicksPlus Club & get 15% off
          </h3>
          <p className="text-stone-200 text-base lgtext-xl font-semibold mb-[24px] lg:mb-[32px]">
            Sign up for free! Join the community.
          </p>
          <div className="w-[250px] lg:w-[290px] px-4 py-2.5 rounded-lg border border border border border-white justify-start items-center inline-flex mr-[8px] mb-[16px]">
            <input
              className="grow shrink basis-0 opacity-75 text-stone-200 placeholder-[#E7E7E3] text-[16px] font-normal tracking-wide bg-transparent focus:outline-none"
              placeholder="Email address"
            />
          </div>

          <button className="px-4 py-2.5 bg-neutral-800 rounded-lg flex justify-center items-center text-white text-[16px] font-medium uppercase inline-flex tracking-wide">
            Submit
          </button>
        </div>

        {/* Right div */}
        <div className="w-full flex items-center justify-start lg:justify-center py-[24px]">
          <h1 className="text-white leading-normal text-[48px] font-semibold uppercase">
            GearUp Logo
          </h1>
        </div>
      </div>
    </div>
  );
};
