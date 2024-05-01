import { fireEvent, render, screen } from "@testing-library/react";
import { AppContextProvider } from "@/context/AppContext";
import { UserContextProvider } from "@/context/UserContext";
import { HeaderType } from "@/types";
import { Header } from "./Header";

// Mock the useRouter push function
const mockRouterPush = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockRouterPush,
  }),
  usePathname: () => {},
}));

// Mock the useCart hook
jest.mock("@/context/CartContext", () => ({
  useCart: () => ({
    cart: {
      itemCount: 0,
    },
  }),
}));

// Mock Firebase Authentication
jest.mock("firebase/auth", () => ({
  getAuth: jest.fn(() => ({
    currentUser: { uid: "test-user-id" },
  })),
}));

// Test data for the Header component
const testData = {
  navLinks: [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ],
};

const navLinks = [
  { id: "1", link: "/", name: "Home" },
  { id: "2", link: "/shop", name: "Shop" },
  { id: "3", link: "/about", name: "About" },
];

const renderComponent = (data: HeaderType = testData) => {
  return render(
    <AppContextProvider>
      <UserContextProvider>
        <Header data={data} />
      </UserContextProvider>
    </AppContextProvider>
  );
};

describe("Header", () => {
  it("should render without crashing", () => {
    const { container } = renderComponent(testData);
    expect(container).toMatchSnapshot();
  });

  it("should navigate to the home page when clicking on the GearUp logo", () => {
    renderComponent(testData);
    const logo = screen.getByText("GearUp");
    fireEvent.click(logo);
    expect(mockRouterPush).toHaveBeenCalledWith("/");
  });

  it("should display 0 when there are no items in cart", () => {
    const container = renderComponent({ navLinks: [] });
    const cartButton = container.getByRole("button", { name: "0" });
    expect(cartButton).toHaveTextContent("0");
    fireEvent.click(cartButton);
    expect(mockRouterPush).toHaveBeenCalledWith("/cart");
  });

  it("should open and close mobile navigation bar when clicked", () => {
    const { getByAltText, getByRole } = renderComponent(testData);
    const menuIcon = getByAltText("Nav Menu");
    fireEvent.click(menuIcon);
    const link1 = getByRole("mobileSearch");
    expect(link1).toBeInTheDocument();
    fireEvent.click(menuIcon);
    expect(link1).not.toBeInTheDocument();
  });

  it("should render desktop navigation", () => {
    const { getByText } = renderComponent({ navLinks });
    navLinks.forEach((navLink) => {
      const linkElement = getByText(navLink.name);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
