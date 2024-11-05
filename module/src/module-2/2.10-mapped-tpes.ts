{
  // mapped types
  const arrOfNumbers: number[] = [32, 2, 1, 4, 2, 4, 2, 4];
  //   const arrOfString: string[] = ["3", "3", "4", "5"];
  const arrOfString: string[] = arrOfNumbers.map((num) => num.toString());

  // console.log({ arrOfString });

  type AreaNumber = {
    height: number;
    width: number;
  };
  type HeightLook = AreaNumber["height"]; // look up type
  type AreaStringManual = {
    [key in "height" | "width"]: string;
  };
  type AreaStringDynamic<T> = {
    [key in keyof T]: T[key]; // look up type
  };

  const area1: AreaStringDynamic<{ height: string; width: number }> = {
    height: "100",
    width: 50,
  };
}
