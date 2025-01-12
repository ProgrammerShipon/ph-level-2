import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { JwtDecoded } from "../utils/JwtDecoded";

export default function Login() {
  const dispatch = useAppDispatch();
  const { handleSubmit, register } = useForm({
    defaultValues: {
      userId: "A-0001",
      password: "admin123",
    },
  });
  const [login] = useLoginMutation();

  const handleLogin = async (inputData) => {
    console.log(inputData);
    const userInfo = {
      id: inputData.userId,
      password: inputData.password,
    };
    console.log(userInfo);
    const res = await login(userInfo).unwrap();
    const token = res.data.accessToken;
    const user = JwtDecoded(token);
    console.log({ user });
    dispatch(setUser({ user, token }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div>
          <label htmlFor="userId">ID</label>
          <input
            id="userId"
            type="text"
            placeholder="Enter your id"
            {...register("userId")}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="text"
            placeholder="Enter your id"
            {...register("password")}
          />
        </div>

        <Button htmlType="submit"> Login </Button>
      </form>
    </div>
  );
}
