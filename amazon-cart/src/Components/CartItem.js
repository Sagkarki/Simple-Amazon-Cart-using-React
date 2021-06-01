import React from 'react'
import './CartItem.css'

function CartItem() {
    return (
        <div className="CartItem">
            <div className="CartItem-image">
                <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-12-11-select-202104_GEO_IN_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=80&.v=1617865122000" alt=""/>
            </div>
            <div class="CartItem-info">
                <div className="info-title">
                    <h2>Apple iPad Pro</h2>
                </div>
                <div className="info-stock">
                    In Stock
                </div>
                <div className="item-actions">
                    <div className="item-quantity">

                    </div>
                    <div className="item-delete">
                        Delete
                    </div>
                </div>
            </div>
            <div className="CartItem-price">
                $769.06
            </div>
        </div>
    )
}

export default CartItem
