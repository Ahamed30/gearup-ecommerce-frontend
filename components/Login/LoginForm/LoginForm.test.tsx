import { render } from "@testing-library/react";
import { AppContextProvider } from "@/context/AppContext";
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
    <AppContextProvider>
      <UserContextProvider>
        <LoginForm />
      </UserContextProvider>
    </AppContextProvider>
  );
};

describe("Login Form", () => {
  it("should match the snapshot", () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
