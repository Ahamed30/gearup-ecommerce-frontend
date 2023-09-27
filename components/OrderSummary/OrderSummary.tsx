import classNames from "classnames";
import { useRouter } from "next/navigation";
import { AmountSummary } from "./AmountSummary";
import { Button } from "../Button";
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
            className="w-full uppercase flex justify-center items-center mb-[24px]"
            color="primary"
            onClick={() => router.push("/checkout")}
          >
            CHECKOUT
          </Button>
          <PromoCode />
        </>
      ) : null}
    </div>
  );
};
