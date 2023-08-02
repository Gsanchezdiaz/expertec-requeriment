import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import image from "../assets/img/logo-expertec.png";
import "../assets/css/componentes/Login.css";
import "../assets/css/componentes/button.css";
import { Validations } from "../assets/validations";
import axios from "axios";
import { access, defActualUser } from "../redux/actions/actions";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const entry = useSelector((state) => state.access);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      Validations({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  }

  function handleSubmit(event) {
    event.preventDefault();

    const { email, password } = userData;
    axios(
      `http://localhost:3001/loginUser?email=${email}&password=${password}`
    ).then(({ data }) => {
      if (!data.status) return alert("El usuario no existe o la contraseña es incorrecta");
      dispatch(defActualUser(data.userFind));
      dispatch(access());
      navigate("/");
      console.log(entry);
    });
  }
// form flex-direction: column;
  return (
    
    <div className="contenedor">
      
      <form  onSubmit={handleSubmit}>
        <div className="imagen">
        <img  src={image} alt="expert" />
        </div>
        <label className="labelX">Email: </label>
        <input
          className="input"
          type="text"
          name="email"
          onChange={handleChange}
        />
        <br />
        {errors.email ? <span className="errors">{errors.email}</span> : null}

        <br />
        <br />

        <label className="labelX">Password: </label>
        <input
          className="input"
          type="password"
          name="password"
          onChange={handleChange}
        />
        <br />
        {errors.password ? (
          <span className="errors">{errors.password}</span>
        ) : null}

        <br />
        <br />

        <button
          className="button"
          type="submit"
          disabled={
            !userData.email ||
            !userData.password ||
            errors.email ||
            errors.password
          }
        >
          Ingresar
        </button>
      </form>
      </div>
      
  );
};

export default Login;
