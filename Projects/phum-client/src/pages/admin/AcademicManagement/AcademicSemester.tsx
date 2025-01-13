import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

export default function AcademicSemester() {
  const { data } = useGetAllSemestersQuery(undefined);
  console.log("data ", data);

  return (
    <div>
      <h1> This is academic semester component </h1>
    </div>
  );
}
