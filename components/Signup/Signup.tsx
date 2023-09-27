import { SignupForm } from "./SignupForm/SignupForm";
import { RewardsBanner } from "../RewardsBanner";

export const Signup = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 mb-8">
      <SignupForm />
      <RewardsBanner />
    </div>
  );
};
