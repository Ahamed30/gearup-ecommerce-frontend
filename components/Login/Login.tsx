import { LoginForm } from "./LoginForm";
import { RewardsBanner } from "../RewardsBanner";

export const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 mb-8">
      <LoginForm />
      <RewardsBanner />
    </div>
  );
};
