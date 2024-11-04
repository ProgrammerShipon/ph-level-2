{
  //
  // reuseable generic type
  type TGenericArray<T> = Array<T>;

  // generic type
  const rollNumbers: number[] = [2, 341, 4];
  const rollNumbers1: Array<number> = [2, 341, 4];
  const rollNumbersG: TGenericArray<number> = [2, 341, 4];

  const mentors: string[] = ["Mr. X", "Mr. Y", "Mr Z"];
  const mentors1: Array<string> = ["Mr. X", "Mr. Y", "Mr Z"];
  const mentorsG: TGenericArray<string> = ["Mr. X", "Mr. Y", "Mr Z"];

  const boolArray: boolean[] = [true, false, true];
  const boolArray1: Array<boolean> = [true, false, true];
  const boolArrayG: TGenericArray<boolean> = [true, false, true];

  const user: TGenericArray<{ name: string; age: number }> = [
    {
      name: "Shipon",
      age: 21,
    },
    {
      name: "Hossen",
      age: 16,
    },
  ];

  // -------------------------

  // generic tuple
  type TGenericTuple<X, Y> = [X, Y];

  const manush: TGenericTuple<string, string> = ["Mr. X", "Mr. Y"];

  const userWithID: TGenericTuple<number, { name: string; email: string }> = [
    234,
    { name: "shipon", email: "shipon@developershipon.com" },
  ];

  //
}
