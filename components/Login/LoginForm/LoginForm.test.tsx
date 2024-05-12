import { render } from "@testing-library/react";
import { AppContextProvider } from "@/context/AppContext";
import { UserContextProvider } from "@/context/UserContext";
import { LoginForm } from "./LoginForm";

jest.mock("next/navigation", () => ({
  useSearchParams: () => ({
    get: String,
  }),
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

// Mock Firebase Authentication
jest.mock("firebase/auth", () => ({
  getAuth: jest.fn(() => ({
    currentUser: { uid: "test-user-id" },
  })),
  onAuthStateChanged: jest.fn(),
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
