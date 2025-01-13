import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { JwtDecoded } from "../utils/JwtDecoded";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm({
    defaultValues: {
      userId: "A-0001",
      password: "admin123",
    },
  });
  const [login] = useLoginMutation();

  const handleLogin = async (inputData: FieldValues) => {
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
