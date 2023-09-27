import { fireEvent, render, screen } from "@testing-library/react";
import { AppContextProvider } from "@/context/AppContext";
import { CartContextProvider } from "@/context/CartContext";
import { CartItemType } from "@/types";
import { cartItemData } from "./__mocks__";
import { CartItem } from "./CartItem";

const mockRouterPush = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockRouterPush,
  }),
}));

const renderComponent = (cartItem: CartItemType = cartItemData) => {
  return render(
    <AppContextProvider>
      <CartContextProvider>
        <CartItem product={cartItem} />
      </CartContextProvider>
    </AppContextProvider>
  );
};

describe("Cart", () => {
  test("should match the snapshot", () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  test("should render the cart item with all necessary information", () => {
    renderComponent();
    const cartItemElement = screen.getByRole("cartItem");
    expect(cartItemElement).toBeInTheDocument();
    const productNameElement = screen.getByText(
      "ADIDAS 4DFWD X PARLEY RUNNING SHOES"
    );
    expect(productNameElement).toBeInTheDocument();
    const sizeElement = screen.getByText("Size 10");
    expect(sizeElement).toBeInTheDocument();
    const quantitylement = screen.getByText("Quantity 1");
    expect(quantitylement).toBeInTheDocument();
    const priceElement = screen.getByText("$125");
    expect(priceElement).toBeInTheDocument();
    const salePriceElement = screen.getByText("$100");
    expect(salePriceElement).toBeInTheDocument();
    const colorElement = screen.getByText("Yellow");
    expect(colorElement).toBeInTheDocument();
  });

  test("should toggle favourite state when heart icon is clicked", () => {
    renderComponent();

    const favouriteButton = screen.getByAltText("Add to favourite");

    fireEvent.click(favouriteButton);

    expect(favouriteButton.getAttribute("src")).toContain("heart-red.svg");

    fireEvent.click(favouriteButton);

    expect(favouriteButton.getAttribute("src")).toContain("heart-black.svg");
  });

  test("should open the modal when delete icon is clicked", () => {
    renderComponent();
    const deleteButton = screen.getByAltText("Delete Item");

    fireEvent.click(deleteButton);

    const dialogBox = screen.getByRole("dialog");
    expect(dialogBox).toBeInTheDocument();
  });

  test("should close the modal when No is clicked in the modal", () => {
    renderComponent();
    const deleteButton = screen.getByAltText("Delete Item");
    fireEvent.click(deleteButton);
    const dialogBox = screen.getByRole("dialog");
    expect(dialogBox).toBeInTheDocument();
    fireEvent.click(screen.getByText("No, cancel"));
    expect(dialogBox).not.toBeInTheDocument();
  });
});
