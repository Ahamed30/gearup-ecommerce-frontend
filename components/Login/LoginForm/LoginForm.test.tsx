import { render } from "@testing-library/react";
import { AppContextProvider } from "@/context/AppContext";
import { UserContextProvider } from "@/context/UserContext";
import { LoginForm } from "./LoginForm";

jest.mock("next/navigation", () => ({
  useSearchParams: () => ({
    get: String,
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
