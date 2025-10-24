import data from "../../data/data"
import Product from "./Product";
import ShoppingCart from "./ShoppingCart";
import { useState } from "react";

function BoxProducts() {
  const [showCart, setShowCart] = useState(false)
  const [shoppingCart, setShoppingCart] = useState([])

  function addToCart(product) {
    setShoppingCart((currentCart) => [...currentCart, product])
  }

  function removeFromCart(productId) {
    const removeProduct = [...shoppingCart]
    removeProduct.splice(productId, 1)
    setShoppingCart(removeProduct)
  } 

  return (
    <main className="boxProducts">
      
      {data.map((data) => {
        return <Product key={data.id} {...data} addToShoppingCart={addToCart}/>
      })}
      
      <button className="btn-cart" onClick={() => setShowCart(true)}>
        🛒
      </button>

      <ShoppingCart
        showCart={showCart}
        onHideCart={() => setShowCart(false)}
      />
      
    </main>
  );
}

export default BoxProducts;

/*
        {data.map((data) => {
        return <Product key={data.id} {...data}/>
      })}
--------------------------

  {data.map(item => (
        <Product
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          imageUrl={item.imageUrl}
          description={item.description}
          category={item.category}
        />
      ))}
*/ 