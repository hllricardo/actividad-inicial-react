function Product ({id, name, price, imageUrl, description, category}) {
    return (
        <div key={id} className="item">
            <h3 className="item-name">{name}</h3>
            <p className="item-price">${price}</p>
            <div>
                <img src={imageUrl} alt={name} className="item-image"/>
            </div>
            <p className="item-description">{description}</p>
            <p className="item-category">{category}</p>
        </div>
    )
}

export default Product;