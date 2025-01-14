import { FieldValues, SubmitHandler } from "react-hook-form";
import PHFrom from "../../../components/form/PHFrom";
import PHInput from "../../../components/form/PHInput";
import { Button } from "antd";

export default function CreateAcademicSemester() {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <PHFrom onSubmit={onSubmit}>
      <PHInput type="text" name="name" />
      <Button htmlType="submit"> Create Academic Semester</Button>
    </PHFrom>
  );
}
