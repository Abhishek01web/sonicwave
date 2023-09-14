
import Product from './Product/Product';
import "./Products.scss";

const Products = ({ innerPage, headingText, products }) => {
    return <div className="products-container">
        {!innerPage && <div className="sec-heading">
            {headingText}
        </div> }
        <div className="products">
            {
               products?.map((curEle) => {
                return (
                    <>
                     <Product 
                       key={curEle.id}
                       data={curEle}
                     />
                    </>
                )
               })
            }
        </div>
    </div>;
};

export default Products;
