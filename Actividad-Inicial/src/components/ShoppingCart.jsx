function ShoppingCart({
    showCart,
    onHideCart
}) {
    function handleHideCart(){
        onHideCart();
    }
    return (
        <div className={`shopping-cart ${showCart ? "" : "none"}`}>
            <button
                className="btn-close-cart" onClick={handleHideCart}>
                ❌
            </button>
            <h2>Carrito de compra</h2>
            <div className="cart-content">

            </div>
            <div className="price-total">
                <p>Total: </p>
                <p></p>
            </div>
        </div>
    )
}

export default ShoppingCart;