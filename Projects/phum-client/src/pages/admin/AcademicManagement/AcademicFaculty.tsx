import { Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { useGetAcademicFacultiesQuery } from "../../../redux/features/admin/academicManagement.api";
import { TQueryParam } from "../../../types";
import { TAcademicFaculty } from "../../../types/academicManagement.type";

export type TTableData = Pick<TAcademicFaculty, "name">;

const AcademicFaculty = () => {
  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  const {
    data: facultyData,
    isLoading,
    isFetching,
  } = useGetAcademicFacultiesQuery(params);

  console.log("facultyData", facultyData);

  const tableData = facultyData?.data?.map(({ _id, name }) => ({
    key: _id,
    name: String(name),
  }));

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
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

      setParams(queryParams);
    }
  };

  return (
    <Table
      loading={isFetching || isLoading}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
    />
  );
};

export default AcademicFaculty;
