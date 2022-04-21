import Product from '../components/Product';
import { useGlobalContext } from '../hooks/Context';

const ProductList = () => {
  const { storeProducts } = useGlobalContext();
  return (
    <div className="container">
      <div className="row justify-content-center">
        { storeProducts.map( product => {
          return <Product key={product.id} {...product}/>
        })} 
      </div>
    </div>
  );
};

export default ProductList;
