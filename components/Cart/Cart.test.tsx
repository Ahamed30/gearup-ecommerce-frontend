import { fireEvent, render, screen } from "@testing-library/react";
import { Cart } from "./Cart";
import { CartContextProvider } from "@/context/CartContext";
import { cartWithItems } from "./__mocks__";
import { CartType } from "@/types";
import { AppContextProvider } from "@/context/AppContext";

const mockRouterPush = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockRouterPush,
  }),
}));

const renderComponent = (cart: CartType = cartWithItems) => {
  return render(
    <AppContextProvider>
      <CartContextProvider cart={cart}>
        <Cart />
      </CartContextProvider>
    </AppContextProvider>
  );
};

describe("Cart", () => {
  test("should match the snapshot", () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  test("renders cart items when there are items in the cart", () => {
    renderComponent();
    const cartItems = screen.getAllByRole("cartItem");
    expect(cartItems.length).toBe(2);
  });

  test("should render a message indicating an empty cart", () => {
    const emptyCart: CartType = {
      items: [],
      itemCount: 0,
      cartSubTotal: 0,
    };
    renderComponent(emptyCart);
    const element = screen.getByText("Your Bag is Empty!!!!!");
    expect(element).toBeInTheDocument();
  });

  test("should open the empty cart modal when the Empty Cart button is clicked and clears cart", () => {
    renderComponent();
    const emptyCartButton = screen.getByText("Empty Cart");
    fireEvent.click(emptyCartButton);
    const dialogBox = screen.getByRole("dialog");
    expect(dialogBox).toBeInTheDocument();
    const yesButton = screen.getByText("Yes, I'm sure");
    fireEvent.click(yesButton);
    const element = screen.getByText("Your Bag is Empty!!!!!");
    expect(element).toBeInTheDocument();
  });
});
