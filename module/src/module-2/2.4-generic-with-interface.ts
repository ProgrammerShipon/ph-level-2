{
  //
  // generic interface
  interface TDeveloper<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  interface TSmartWatch {
    brand: string;
    model: string;
    display: string;
  }
  const poorDeveloper: TDeveloper<TSmartWatch> = {
    name: "Shipon",
    computer: {
      brand: "Asus",
      model: "X507M",
      releaseYear: 2013,
    },
    smartWatch: {
      brand: "Emilab",
      model: "kw66",
      display: "OLED",
    },
  };

  interface TAppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }
  interface TYamahaBike {
    model: string;
    engineCapacity: string;
  }
  const richDeveloper: TDeveloper<TAppleWatch, TYamahaBike> = {
    name: "Rich Dev",
    computer: {
      brand: "HP",
      model: "DW4",
      releaseYear: 2018,
    },
    smartWatch: {
      brand: "Emilab",
      model: "kw66",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yamaha",
      engineCapacity: "100cc",
    },
  };

  //
}
