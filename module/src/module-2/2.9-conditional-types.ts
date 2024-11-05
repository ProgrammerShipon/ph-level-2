{
  //
  // conditional type
  type a1 = null;
  type b1 = undefined;
  type x = a1 extends null ? true : false;
  type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

  type TSheikh = {
    bike: string;
    car: string;
    ship: string;
    plane: string;
  };

  // car ase kina / bike ase kina /ship kina / tractor ase kina
  //   type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false;
  type CheckVehicle<T> = T extends keyof TSheikh ? true : false;

  type hasPlane = CheckVehicle<"plane">;

  //
}
