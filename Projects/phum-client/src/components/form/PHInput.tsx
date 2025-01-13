import { Input } from "antd";
import { Controller } from "react-hook-form";

type TPHInputProps = {
  type: string;
  name: string;
  label?: string;
};

export default function PHInput({ type, name, label }: TPHInputProps) {
  return (
    <div style={{ marginBottom: "20px" }}>
      {label && <label id={name}>{label}</label>}
      <Controller
        name={name}
        render={({ field }) => <Input {...field} type={type} id={name} />}
      />
    </div>
  );
}
