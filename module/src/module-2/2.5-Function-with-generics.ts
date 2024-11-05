{
  //
  // function with generics
  const createArray = (param: string) => {
    return [param];
  };

  const res1 = createArray("Bangladesh");

  //  dynamic generic function
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };
  const res2 = createArrayWithGeneric<string>("Bangladesh");
  const res3 = createArrayWithGeneric<boolean>(false);

  type TUser = { id: number; name: string };
  const resGenericObj = createArrayWithGeneric<TUser>({
    id: 234,
    name: "SHipon",
  });

  // dynamic generic tuple
  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => [
    param1,
    param2,
  ];

  const res10 = createArrayWithTuple<string, number>("Bangladesh", 234);
  const res11 = createArrayWithTuple<string, { name: string }>("Bangladesh", {
    name: "Asia",
  });

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Developer";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "Mr. X",
    email: "x@mail.com",
    devType: "NLWD",
  });
  const student2 = addCourseToStudent({
    name: "Mr. Y",
    email: "y@mail.com",
    hasWatch: "Apple Watch",
  });

  //
}
