import { Button, Col, Row } from "antd";
import PHFrom from "../../../components/form/PHFrom";
import PHInput from "../../../components/form/PHInput";
import { useAddAcademicFacultyMutation } from "../../../redux/features/admin/academicManagement.api";

const facultyDummyData = {
  name: "Faculty of Programming",
};

export default function CreateAcademicFaculty() {
  const [addAcademicFaculty] = useAddAcademicFacultyMutation(undefined);
  const onSubmit = async (data: any) => {
    console.log("submit data ", data);
    const result = await addAcademicFaculty(data);
    console.log("result ", result);
  };

  return (
    <div>
      <PHFrom onSubmit={onSubmit}>
        <Row gutter={16}>
          <Col span={12}>
            <PHInput type="text" label="Faculty Name" name="name" />
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
