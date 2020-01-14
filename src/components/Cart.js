import React from 'react'
import M from 'materialize-css'
import {connect} from "react-redux";
import {addQuantity, subQuantity, removeFromCart} from "./actions/actions";


const  Cart = ({addedItem, total, addQuantity, subQuantity, removeFromCart}) =>  {

        const handleAddQuantity = id => {
            addQuantity(id)
            M.toast({html: 'Quantity added'})
        }
        const handleSubQuantity = id => {
            subQuantity(id)
            M.toast({html: 'Quantity subbed'})
        }
        const removeHandler = id => {
            removeFromCart(id)
            M.toast({html: 'Item removed'})
        }

         let addedItemList = addedItem.map(item => {
        return (
        <div className="col s12 m6 l4" key={item.id}>
            <h2 className="header">{item.title}</h2>
            <div className="card horizontal card-relative">
                <button className="example_a remove" onClick={() => removeHandler(item.id)}>X</button>
                <div className="card-image">
                    <img alt={item.desc} src={item.img}/>
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <p>{item.desc}</p>
                    </div>
                    <div className="card-action">
                        <span className="card-total">{item.quantity}</span>
                        <div className="button-controls">
                            <button className='deep-purple accent-3 quantity-button' onClick={() => handleAddQuantity(item.id)}>+</button>
                            <button className='deep-purple accent-3 quantity-button' onClick={() => handleSubQuantity(item.id)}>-</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )})
         return (
             <div className="container">
                 <h3 className="center">Total: {total}</h3>
                 <div className="row">
                     <div className="col m12">
                         {addedItemList}
                     </div>
                 </div>
             </div>
         )

}
const mapStateToProps = (state) => {
    return {
     addedItem: state.addedItems,
     total: state.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    addQuantity: id => dispatch(addQuantity(id)),
    subQuantity: id => dispatch(subQuantity(id)),
    removeFromCart: id => dispatch(removeFromCart(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);