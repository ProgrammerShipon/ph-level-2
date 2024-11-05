{
  //

  // Constraints
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";

    return {
      ...student,
      course,
    };
  };

  type TAddStudent = {
    id: number;
    name: string;
    email: string;
    devType?: string;
  };

  const student = addCourseToStudent<TAddStudent>({
    id: 34,
    name: "shipon",
    email: "msshipon234@gmail.com",
    devType: "NLWD",
  });

  //
}
