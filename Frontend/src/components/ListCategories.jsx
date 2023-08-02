
import { Link } from "react-router-dom";

import "../assets/css/blog.css";
import data from "../data";

const ListCategories = () => {


  const { categorias } = data;

  return (
    <div>

      <ul className="category-list container flex">
        {categorias.map((category) => (
          <Link to={`/categoria/${category.id}`} key={category.id}>
            <li
              className={`category-list__category category-list__category--${category.id}`}
            >
              {category.nombre}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ListCategories;
