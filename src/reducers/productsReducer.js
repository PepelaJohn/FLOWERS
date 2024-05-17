import * as ACTIONS from "../constants/index";
export default (products = [], action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
      const currentCart = JSON.parse(localStorage.getItem("cart")) || [];

      const objectisInCart = currentCart.some(
        (val) => val._id === action.payload._id
      );
      let newCart;
      if (objectisInCart) {
        newCart = currentCart.map(
          (item) =>
            (item._id = action.payload._id
              ? { ...action.payload, count: item.count + 1 }
              : item)
        );
      } else {
        newCart = [{ ...action.payload, count: 1 }, ...currentCart];
      }
      localStorage.setItem("cart", JSON.stringify(newCart));
      return products
      

    default:
      return products;
  }
};
