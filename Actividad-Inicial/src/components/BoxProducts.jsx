import data from "../../data/data"
import Product from "./Product";

function BoxProducts() {

  return (
    <main className="boxProducts">
      
      {data.map((data) => {
        return <Product key={data.id} {...data}/>
      })}
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