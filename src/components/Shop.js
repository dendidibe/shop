import React, {Component} from 'react';
import {connect} from "react-redux";
import {addToCart} from "./actions/actions";

class Shop extends Component {
    handleClick = (id) => {
        console.log(this.props.addedItems, this.props.total)
        this.props.addToCart(id)
    }
    render() {

        let itemList = this.props.items.map(item => {

            return (
                <div className="row">
                <div className="col s12 m7">
                <div className="card" key={item.id}  onClick={id => this.handleClick(item.id)}>
                    <div className="card-image">
                        <img src={item.img}/>
                            <span className="card-title">{item.title}</span>
                    </div>
                    <div className="card-content">
                        <p>{item.desc}</p>
                    </div>
                    <div className="card-action">
                        <a href="#">{item.price}</a>
                    </div>
                </div>

                </div>

                </div>
            )
        })

        return (
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {items: state.items, addedItems: state.addedItems, total: state.total}
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: id => dispatch(addToCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);