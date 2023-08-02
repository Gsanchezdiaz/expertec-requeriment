import { useState, useEffect } from "react";
import "../assets/css/blog.css";

import ListCategories from "../components/ListCategories";
import ListPost from "../components/ListPost";
import Subcategoria from "./Subcategoria";
import {
  useParams,
  Routes,
  Route,
  Link,
  useResolvedPath,
} from "react-router-dom";

const Categoria = () => {
  const [subcategorias, setSubcategorias] = useState([]);
  const { id } = useParams();
  const url = useResolvedPath("").pathname;

  
  return (
    <>
      <div className="container">
        <h2 className="title-page">Requerimientos</h2>
      </div>
      <ListCategories />
      <ul className="category-list container flex">
        {subcategorias.map((subcategoria) => (
          <li
            className={`category-list__category category-list__category--${id}`}
            key={subcategoria}
          >
            <Link to={`${url}/${subcategoria}`}>{subcategoria}</Link>
          </li>
        ))}
      </ul>
      <Routes>
        <Route path="/" element={<ListPost url={`/posts?categoria=${id}`} />} />
        //
        <Route path="/:subcategoria" element={<Subcategoria />} />
      </Routes>
    </>
  );
};

export default Categoria;
