import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const Product = ({id, title, img, price, inCart}) => {
  return (
    <div className='col-6 col-md-4 col-lg-4'>
        <div className="media--image">
          <Link to={`/product/${id}`}>
            <img src={img} alt={title} />
          </Link>
        </div>
        <Link to={`/product/${id}`} className="product_title">{title}</Link>
        <p className='price'>${price}</p>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  inCart: PropTypes.bool.isRequired
};

// Product.propTypes = {
//   product: PropTypes.shape({
//     id: PropTypes.number,
//     title: PropTypes.string,
//     img: PropTypes.string,
//     price: PropTypes.number,
//     inCart: PropTypes.bool
//   }).isRequired
// }

export default Product;