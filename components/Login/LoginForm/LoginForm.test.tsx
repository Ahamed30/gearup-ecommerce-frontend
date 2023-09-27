import { render } from "@testing-library/react";
import { UserContextProvider } from "@/context/UserContext";
import { LoginForm } from "./LoginForm";

const mockRouterPush = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockRouterPush,
  }),
}));

const renderComponent = () => {
  return render(
    <UserContextProvider>
      <LoginForm />
    </UserContextProvider>
  );
};

describe("Login Form", () => {
  it("should match the snapshot", () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
