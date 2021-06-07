import React from 'react'
import { useWish } from '../../context/Wishlist-Context'
import { WishItems } from "./WishItems";
import "../../css/style.css";

export function Wishlist() {
    const { wishState, wishDispatch } = useWish();
    return (
        <div>
            {wishState.itemsInWishlist.length === 0
                ?
                <div className="empty-cart-container">
                    <p className="empty-cart-msg">
                        Your Wishlist is empty. 
                        Let's make some wishes!
                    </p>
                </div>
                :
                <div className="wishlist-container">
                    <button
                        onClick={() => wishDispatch({ type: "CLEAR_WISHLIST", payload: wishState.itemsInWishlist })}
                        className="clear-wishlist-btn ">
                        Clear Wishlist
                    </button>
                    {wishState.itemsInWishlist.map((item) => (
                        < WishItems item={item} />
                    ))}
                </div>
            }
        </div>
    )
}
