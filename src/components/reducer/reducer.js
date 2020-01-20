import {
  ADD_QUANTITY,
  SUB_QUANTITY,
  ADD_TO_CART,
  REMOVE_FROM_CART
} from "../actions/actionTypes/actionTypes";
import Item1 from "../../images/item1.jpeg";
import Item2 from "../../images/item2.jpeg";
import Item3 from "../../images/item3.jpeg";
import Item4 from "../../images/item4.jpg";
import Item5 from "../../images/item5.jpeg";
import Item6 from "../../images/item6.jpeg";

const initialState = {
  items: [
    {
      id: 1,
      title: "Winter body",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 110,
      img: Item1
    },
    {
      id: 2,
      title: "Adidas",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 80,
      img: Item2
    },
    {
      id: 3,
      title: "Vans",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 120,
      img: Item3
    },
    {
      id: 4,
      title: "White",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 260,
      img: Item4
    },
    {
      id: 5,
      title: "Cropped-sho",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 160,
      img: Item5
    },
    {
      id: 6,
      title: "Blues",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
      img: Item6
    }
  ],
  addedItems: [],
  total: 0
};

export const reducer = (state = initialState, { type, payload }) => {
  let addedItem = state.items.find(item => item.id === payload);
  let removingItem = state.addedItems.find(item => payload === item.id);

  switch (type) {
    case ADD_TO_CART:
      let existedItem = state.addedItems.find(item => payload === item.id);
      if (existedItem) {
        addedItem.quantity += 1;
        return {
          ...state,
          total: state.total + addedItem.price
        };
      } else {
        addedItem.quantity = 1;
        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: state.total + addedItem.price
        };
      }
    case REMOVE_FROM_CART:
      let newItems = state.addedItems.filter(item => payload !== item.id);
      let total = state.total
        ? state.total - removingItem.price * removingItem.quantity
        : 0;
      return {
        ...state,
        addedItems: newItems,
        total
      };
    case ADD_QUANTITY:
      addedItem.quantity += 1;
      let newTotal = state.total + addedItem.price;
      return {
        ...state,
        total: newTotal
      };
    case SUB_QUANTITY:
      let minucedTotal = state.total - addedItem.price;

      if (addedItem.quantity === 1) {
        let newItems = state.addedItems.filter(item => payload !== item.id);
        return {
          ...state,
          total: minucedTotal,
          addedItems: newItems
        };
      } else {
        addedItem.quantity -= 1;
        return {
          ...state,
          total: minucedTotal
        };
      }
    default:
      return state;
  }
};
