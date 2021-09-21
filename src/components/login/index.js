import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import "./style.css";

const Login = ({ setCompleteRequest, setFailedRequest }) => {
  const formSchema = yup.object().shape({
    username: yup.string().required("USERNAME OBRIGATÓRIO"),
    password: yup.string().required("SENHA OBRIGATÓRIA"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    axios
      .post("https://kenzieshop.herokuapp.com/sessions/", data)
      .then((res) => {
        console.log(res);
        window.localStorage.clear();
        window.localStorage.setItem("authToken", res.data.access);
        setCompleteRequest(true);
      })
      .catch((err) => {
        console.log(err);
        setFailedRequest(true);
      });
  };

  return (
    <div className="container">
      <h1>CADASTRO</h1>
      <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
        <div className="input">
          <input placeholder="USERNAME*" {...register("username")} />
          {<span>{errors.username?.message}</span>}
        </div>

        <div className="input">
          <input
            type="password"
            placeholder="SENHA*"
            {...register("password")}
          />
          {<span>{errors.password?.message}</span>}
        </div>

        <div className="btn">
          <button type="submit">LOGIN</button>
        </div>
      </form>
    </div>
  );
};
export default Login;
