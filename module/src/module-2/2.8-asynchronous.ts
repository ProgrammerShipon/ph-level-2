{
  //
  type TTodo = {
    id: number;
    userId: number;
    title: string;
    completed: string;
  };
  const getTodo = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
    //  return await data;
  };
  getTodo();
  //   console.log(getTodo());

  // ---------------------------
  // promise
  type TSomeThing = { someThing: string };
  const createPromise = (): Promise<TSomeThing> => {
    return new Promise<TSomeThing>((resole, reject) => {
      const data: TSomeThing = { someThing: "Some Thing" };

      if (data) {
        resole(data);
      } else {
        reject("failed to load data");
      }
    });
  };

  // calling create promise function
  //   const showData = async (): Promise<string> => {
  const showData = async () => {
    try {
      const data: TSomeThing = await createPromise();
      console.log({ data });

      // return data;
    } catch (error) {
      console.error({ error });
      // return error as string;
    }
  };
  //   console.log({ out: showData() });
  //   showData();
  //
}
