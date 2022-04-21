import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import ContentPlaceholder from "../components/ContentPlaceholder";
import ProductDetails from "../components/ProductDetails";


const Details = () => {
  const { id } = useParams();
  
  const { data: product, error, isPending } = useFetch('http://localhost:3001/storeProducts/' + id);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div className="container">
      { isPending && <ContentPlaceholder/> }
      { error && <div>{ error }</div> }
      { product && <ProductDetails { ...product } /> }
    </div>
  );
  
};


export default Details;
