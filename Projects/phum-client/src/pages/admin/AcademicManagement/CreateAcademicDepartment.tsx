import { Button, Col, Row } from "antd";
import PHFrom from "../../../components/form/PHFrom";
import PHInput from "../../../components/form/PHInput";
import { useAddAcademicDepartmentMutation } from "../../../redux/features/admin/academicManagement.api";

export default function CreateAcademicDepartment() {
  const [addAcademicDepartment] = useAddAcademicDepartmentMutation(undefined);
  const onSubmit = (data: any) => {
    console.log("submit data ", data);

    addAcademicDepartment(data);
  };

  return (
    <div>
      <PHFrom onSubmit={onSubmit}>
        <Row gutter={16}>
          <Col span={12}>
            <PHInput type="text" label="Department Name" name="name" />
          </Col>
        </Row>

        <Button type="primary" htmlType="submit">
          {" "}
          Submit{" "}
        </Button>
      </PHFrom>
    </div>
  );
}
