import { Button, Col, Row } from "antd";
import PHFrom from "../../../components/form/PHFrom";
import PHInput from "../../../components/form/PHInput";
import {
  useAddAcademicDepartmentMutation,
  useGetAcademicFacultiesQuery,
} from "../../../redux/features/admin/academicManagement.api";
import PHSelect from "../../../components/form/PHSelect";
import { toast } from "sonner";

// const departmentDummyData = {
//   name: "Department of L1",
//   academicFaculty: "65b00f3510b74fcbd7a25d86",
// };

export default function CreateAcademicDepartment() {
  const {
    data: facultyData,
    isLoading,
    isFetching,
  } = useGetAcademicFacultiesQuery(undefined);

  const facultyOptions =
    facultyData?.data?.map(({ _id, name }) => ({ value: _id, label: name })) ||
    [];

  const [addAcademicDepartment] = useAddAcademicDepartmentMutation(undefined);

  const onSubmit = async (data: any) => {
    try {
      await addAcademicDepartment(data).unwrap();
      toast.success("Academic department created successfully");
    } catch (error) {
      toast.error("Failed to create academic department");
    }
  };

  return (
    <div>
      <PHFrom onSubmit={onSubmit}>
        <Row gutter={16}>
          <Col span={12}>
            <PHInput type="text" label="Department Name" name="name" />
          </Col>
          <Col span={12}>
            <PHSelect
              options={facultyOptions}
              disabled={isLoading || isFetching}
              label="Academic Faculty"
              name="academicFaculty"
            />
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
