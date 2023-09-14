import { useNavigate } from "react-router-dom";

import "./Category.scss";

const Category = ({ categories }) => {
   const navigate = useNavigate();

   return <div className="shop-by-category">
      <div className="categories">
         {categories?.map((curEle) => {
               const { id, image } = curEle;
               return (
                  <div className="category" key={id} onClick={() => navigate(`/category/${id}`)}>
                     <img src={image} alt={image} />
                  </div>
               )
            })
         }
      </div>
   </div>;
};

export default Category;
