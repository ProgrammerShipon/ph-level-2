import { Table, TableColumnType, TableProps } from "antd";
import { useState } from "react";
import { useGetAcademicDepartmentsQuery } from "../../../redux/features/admin/academicManagement.api";
import { TQueryParam } from "../../../types";

export type TTableData = {
  key: string;
  name: string;
  academicFaculty: string;
};

export default function AcademicDepartment() {
  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  const {
    data: departmentData,
    isLoading,
    isFetching,
  } = useGetAcademicDepartmentsQuery(params);

  const tableData =
    departmentData?.data?.map(({ _id, name, academicFaculty }) => ({
      key: _id,
      name: name,
      academicFaculty: academicFaculty.name,
    })) || [];

  const columns: TableColumnType<TTableData>[] = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
      filters: [],
    },
    {
      title: "Academic Faculty",
      key: "academicFaculty",
      dataIndex: "academicFaculty",
      filters: [],
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQueryParam[] = [];

      filters.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );
      filters.academicFaculty?.forEach((item) =>
        queryParams.push({ name: "academicFaculty", value: item })
      );

      setParams(queryParams);
    }
  };

  return (
    <div>
      {" "}
      <Table
        loading={isFetching || isLoading}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
      />
    </div>
  );
}
