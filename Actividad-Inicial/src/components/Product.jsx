function Product ({id, name, price, imageUrl, description, category, addToShoppingCart}) {
    
    function handleAddToCart(){
        addToShoppingCart({id, name, price, imageUrl, description, category});
        console.log("Producto añadido al carrito");
    }
    
    return (
        <div key={id} className="item">
            <h3 className="item-name">{name}</h3>
            <p className="item-price">${price}</p>
            <div>
                <img src={imageUrl} alt={name} className="item-image"/>
            </div>
            <p className="item-description">{description}</p>
            <p className="item-category">{category}</p>
            <button onClick={handleAddToCart}>Añadir al carrito</button>
        </div>
    )
}

export default Product;