import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHFrom from "../components/form/PHFrom";
import PHInput from "../components/form/PHInput";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";
import { JwtDecoded } from "../utils/JwtDecoded";

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const { handleSubmit, register } = useForm({
  //   defaultValues: {
  //     userId: "A-0001",
  //     password: "admin123",
  //   },
  // });
  const defaultValues = {
    userId: "A-0001",
    password: "admin123",
  };
  const [login] = useLoginMutation();

  const handleLogin = async (inputData: FieldValues) => {
    console.log("inputData ", inputData);

    const toastId = toast("Logging in");

    try {
      const userInfo = {
        id: inputData.userId,
        password: inputData.password,
      };

      const res = await login(userInfo).unwrap();
      const token = res.data.accessToken;
      const user = JwtDecoded(token) as TUser;

      dispatch(setUser({ user, token }));
      navigate(`/${user.role}/dashboard`);
      toast("Login Successfully", { id: toastId, duration: 2000 });
    } catch (error) {}
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PHFrom onSubmit={handleLogin} defaultValues={defaultValues}>
        <PHInput type="text" name="userId" label="ID: " />
        <PHInput type="text" name="password" label="Password: " />
        <Button htmlType="submit"> Login </Button>
      </PHFrom>
    </Row>
  );

  // return (
  //   <div>
  //     <form onSubmit={handleSubmit(handleLogin)}>
  //       <div>
  //         <label htmlFor="userId">ID</label>
  //         <input
  //           id="userId"
  //           type="text"
  //           placeholder="Enter your id"
  //           {...register("userId")}
  //         />
  //       </div>
  //       <div>
  //         <label htmlFor="password">Password</label>
  //         <input
  //           id="password"
  //           type="text"
  //           placeholder="Enter your id"
  //           {...register("password")}
  //         />
  //       </div>

  //       <Button htmlType="submit"> Login </Button>
  //     </form>
  //   </div>
  // );
}
