import { useNavigate } from 'react-router-dom';
import "./Product.scss";

const Product = ({ data }) => {
    const navigate = useNavigate();
    const { id, img, name, price } = data;

    return <div className="product-card" onClick={() => navigate(`/product/${id}`)}>
        <div className="thumbnail">
            <img src={img} alt={img} />
        </div>
        <div className="prod-details">
            <span className="name">{name}</span>
            <span className="price">&#8377; {price}</span>
        </div>
    </div>
};

export default Product;
