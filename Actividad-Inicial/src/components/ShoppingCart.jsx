function ShoppingCart({
    showCart,
    onHideCart,
    onDeleteItem,
    listitemsCart
}) {
    function handleHideCart() {
        onHideCart();
    }

    function handleDeleteItem(index) {
        onDeleteItem(index);
    }

    return (
        <div className={`shopping-cart ${showCart ? "" : "none"}`}>
            <button
                className="btn-close-cart" onClick={handleHideCart}>
                ❌
            </button>

            <h2>Carrito de compra</h2>
            <div className="cart-content">
                {listitemsCart.map((item, index) => (
                    <div className="cart-item" key={`${item.id}-${index}`}>
                        <img src={item.imageUrl} alt={item.name} />
                        <div className="cart-item-details">
                            <span> {item.name} </span>
                            <span> {item.category} </span>
                            <p> {item.description} </p>
                            <span> ${item.price} </span>
                        </div>
                        <div>
                            <button onClick={() => handleDeleteItem(index)}>🗑️</button>
                        </div>
                    </div>
                    ))}



            </div>

            <div className="price-total">
                <p>Total: </p>
                <p></p>
            </div>
        </div>
    )
}

export default ShoppingCart;