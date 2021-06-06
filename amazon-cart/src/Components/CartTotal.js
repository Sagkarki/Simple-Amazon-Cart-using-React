import React from 'react'
import NumberFormat from 'react-number-format';

function CartTotal({ items }) {

    const getTotalPrice = () => {
        let total = 0;
        items.forEach((item) => {
            total += (parseFloat(item.price) * item.quantity)
        })
        return total;
    }

    return (
        <div className="CartTotal">
            <h3>
                Subtotal({items.length} items): 
                <span className="CartTotal-price">
                    <NumberFormat value={getTotalPrice()} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} />
                </span>
            </h3>
            <button>
                Proceed to checkout
            </button>
        </div>
    )
}

export default CartTotal
