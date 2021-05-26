import './Product.css';
import { useState, useEffect } from 'react';

const Product = (props) => {  

  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct(props.product)
  }, [props])

  const getPrice = () => (product.priceRange ? product.priceRange.selling.low : 
           (product.price ? product.price.selling : ''))
  return ( 
    <>
    {product && (
      <div className="product" tabIndex="0" onClick={() => props.openModal(product)} > 
          <img className="heroImg" src={product?.hero?.href} />
          <div className="title">{product.name}</div>
          <span className="price">${getPrice()}</span>
      </div>)}
    </>
  );
}

export default Product;
