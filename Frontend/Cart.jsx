import React from "react";
import {useSelector} from 'react-redux';
function Cart() {
    console.log("Hello World!!!");
    const items_purchase=useSelector(state => state.products.cart.products);
    const total=useSelector(state=>state.products.cart.total);
    console.log(items_purchase);
    return(
        <>
        <h1>Your Cart</h1>
        {items_purchase.map(function(item,index)
        {
            return(
                <>
                    <div className="cart">
                        <div className="solve"><img src={item[0].Image}></img></div>
                        <div className="solve1">                    
                            <h2>{item[0].Name}</h2>
                            <h2>{item[0].Price}</h2>
                            <h2>{`Quantity:${item[0].Quantity}`}</h2>
                        </div>

                    </div>
                </>
            )
        })}
        <h1>{`Total:${total}`}</h1>
        </>  
    )
}
// console.log(m);
export default Cart;