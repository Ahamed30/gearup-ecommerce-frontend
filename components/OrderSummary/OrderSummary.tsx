import classNames from "classnames";
import { useRouter } from "next/navigation";
import { Button } from "../Button";
import { AmountSummary } from "./AmountSummary";
import { PromoCode } from "../PromoCode";

interface OrderSummaryProps {
  step?: "checkout" | "cart";
}

export const OrderSummary = ({ step }: OrderSummaryProps) => {
  const router = useRouter();
  const container = classNames(
    "border rounded-[16px] bg-[#FAFAFA] lg:flex-grow p-6",
    step === "cart"
      ? "lg:border-none lg:rounded-none lg:bg-transparent"
      : "mb-[16px] lg:mb-[40px]"
  );
  return (
    <div className={container}>
      <AmountSummary />
      {step === "cart" ? (
        <>
          <Button
            onClick={() => router.push("/checkout")}
            color="primary"
            className="w-full uppercase flex justify-center items-center mb-[24px]"
          >
            CHECKOUT
          </Button>
          <PromoCode />
        </>
      ) : null}
    </div>
  );
};
