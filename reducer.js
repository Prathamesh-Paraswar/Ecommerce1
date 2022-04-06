const initialState={
    products : [],
    cart:{
        products:[],
        total:0
    }
}

export default function reducer(state=initialState, action)
{
    switch(action.type)
    {
        case "products/fetch":
            return {
                ...state,
                products:action.payload
            }
        case "cart/addItem":
            const addedProduct=state.products.filter(item => item.id===action.payload)
            let flag=0;
            state.cart.products.map(function(item)
            {
                if(item[0].id===addedProduct[0].id)
                {
                    item[0].Quantity+=1;
                    flag=1;
                }
            })
            if(flag===0)
            {
                addedProduct[0].Quantity=1;
                state.cart.products=[...state.cart.products,addedProduct];
            }
            return {
                ...state,
                cart:{
                    ...state.cart,  
                    total:(state.cart.total + addedProduct[0].Price),
                }
            }
        default:
            return state;
    }
}