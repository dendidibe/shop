import {ADD_QUANTITY, SUB_QUANTITY, ADD_TO_CART, REMOVE_FROM_CART} from "../actions/actionTypes/actionTypes";
import Item1 from '../../images/item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpg'
import Item5 from '../../images/item5.jpg'
import Item6 from '../../images/item6.jpg'

const initialState = {
    items: [
        {id:1,title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:Item1},
        {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: Item2},
        {id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: Item3},
        {id:4,title:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:Item4},
        {id:5,title:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: Item5},
        {id:6,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item6}
    ],
    addedItems:[],
    total: 0

}


export const reducer = ( state = initialState, {type, payload}) => {
    switch (type) {

        case ADD_TO_CART:
            let addingItem = state.items.find(item => item.id === payload)
            let existedItem = state.addedItems.find(item => payload ===item.id)
            if(existedItem) {
                addingItem.quantity += 1;
                return {
                    ...state,
                    total: state.total + addingItem.price
                }
                } else {
                addingItem.quantity = 1;
                return {
                        ...state,
                        addedItems: [...state.addedItems, addingItem],
                        total: state.total + addingItem.price
                    }
                }
        case REMOVE_FROM_CART:
            let removingItem = state.addedItems.find(item => payload === item.id)
            let newItems = state.addedItems.filter(item => removingItem !== item.id)
            return {
                ...state,
                items: newItems,
                total: state.total - (removingItem.price * removingItem.quantity)
            }
        default:
            return state;
    }

}
