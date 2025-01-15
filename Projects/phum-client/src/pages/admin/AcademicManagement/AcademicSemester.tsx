import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { TAcademicSemester } from "../../../types/academicManagement.type";
import { useState } from "react";

type TDataType = Pick<
  TAcademicSemester,
  "_id" | "name" | "year" | "startMonth" | "endMonth"
>;

const columns: TableColumnsType<TDataType> = [
  {
    title: "Name",
    dataIndex: "name",
    filters: [
      {
        text: "Autumn",
        value: "Autumn",
      },
      {
        text: "Fall",
        value: "Fall",
      },
      {
        text: "Summer",
        value: "Summer",
      },
    ],
  },
  {
    title: "Year",
    dataIndex: "year",
    filters: [
      {
        text: "2025",
        value: "2025",
      },
      {
        text: "2026",
        value: "2026",
      },
      {
        text: "2027",
        value: "2027",
      },
    ],
  },
  {
    title: "Start Month",
    dataIndex: "startMonth",
  },
  {
    title: "End Month",
    dataIndex: "endMonth",
  },
];

type TParams = { name: string; value: string };

export default function AcademicSemester() {
  const [params, setParams] = useState<TParams[]>([]);
  const { data: semesterData } = useGetAllSemestersQuery(params);

  const tableData = semesterData?.data?.map(
    ({ _id, name, startMonth, endMonth, year }) => ({
      key: _id,
      name,
      startMonth,
      endMonth,
      year,
    })
  );

  const onChange: TableProps<TDataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    // console.log("params", pagination, filters, sorter, extra);
    if (extra.action === "filter") {
      const queryParams: { name: string; value: string }[] = [];
      filters.name?.forEach((item) =>
        queryParams.push({ name: "name", value: String(item) })
      );

      // setParams(queryParams);
      setParams(queryParams);
    }
    if (extra.action === "filter") {
      const queryParams: TParams[] = [];
      filters.year?.forEach((item) =>
        queryParams.push({ name: "year", value: String(item) })
      );

      // setParams(queryParams);
      setParams(queryParams);
    }
  };

  return (
    <>
      <Table<TDataType>
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </>
  );
}
