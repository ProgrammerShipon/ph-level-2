{
   //  utility types
   // pick
   type Person = {
      name: string;
      age: number;
      email?: string;
      contactNo: string;
   }

   type NameAge = Pick<Person, "name" | "age">;

   // Omit
   type ContactInfo = Omit<Person, "name" | "age">

   //  Required 
   type PersonRequired = Required<Person>;

   // Partial
   type PersonPartial = Partial<Person>

   // read only
   type PersonReadOnly = Readonly<Person>
   const person1: PersonReadOnly = {
     name: "Mr. XY",
     age: 34,
     contactNo: "234",
   };
   // person1.name = "shipon"

   // Record
   // type MyObj = {
   //    a: string;
   //    b: string;
   // };
   type MyObj = Record<string, string>
   const obj1: MyObj = {
      a: 'das',
   }
   
   // 
}