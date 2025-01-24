import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TPHInputProps = {
  type: string;
  name: string;
  label?: string;
};

export default function PHInput({ type, name, label }: TPHInputProps) {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          {type === "file" ? (
            <Input
              type={type}
              {...field}
              value={field?.value?.fileName}
              onChange={(e) => field.onChange(e.target.files?.[0])}
            />
          ) : (
            <Input type={type} {...field} />
          )}
          {error && <span>{error.message}</span>}

          {/* <Input {...field} type={type} id={name} size="large" />
          {error && <small style={{ color: "red" }}>{error.message}</small>} */}
        </Form.Item>
      )}
    />
  );
}

// import { Form, Input } from "antd";
// import { Controller } from "react-hook-form";

// type TPHInputProps = {
//   type: string;
//   name: string;
//   label?: string;
// };

// export default function PHInput({ type = "text", name, label }: TPHInputProps) {
//   return (
//     <Controller
//       name={name}
//       render={({ field, fieldState: { error } }) => (
//         <Form.Item label={label}>
//           {type === "file" ? (
//             <Input
//               type={type}
//               {...field}
//               onChange={(e) => field.onChange(e.target.files?.[0])}
//             />
//           ) : (
//             <Input type={type} {...field} />
//           )}
//           {error && <span>{error.message}</span>}
//         </Form.Item>
//       )}
//     />
//   );
// }
