export interface Product {
  key: string;
  name: string;
  price: number;
  discount: number;
  collections: string[];
  properties: string[];
}

const products: Product[] = [
  {
    key: "53",
    name: 'lower',
    price: 170.98,
    discount: 14,
    collections: ["shelf", "another", "central"],
    properties: ["nice", "developer"],
  },
  {
    key: "36",
    name: 'barn',
    price: 485.94,
    discount: 0,
    collections: ["above", "floor"],
    properties: ["loser"],
  },
  {
    key: "64",
    name: 'pleasure',
    price: 407.48,
    discount: 9,
    collections: ["fog", "community", "paid"],
    properties: ["cool", "teacher"],
  },
  {
    key: "9",
    name: 'wash',
    price: 470.52,
    discount: 23,
    collections: ["shelf", "another", "central"],
    properties: ["nice", "developer"],
  },
  {
    key: "1",
    name: 'copy',
    price: 669.85,
    discount: 9,
    collections: ["above", "floor"],
    properties: ["loser"],
  },
  {
    key: "46",
    name: 'talk',
    price: 288.83,
    discount: 0,
    collections: ["fog", "community", "paid"],
    properties: ["cool", "teacher"],
  },
  {
    key: "26",
    name: 'progress',
    price: 329.36,
    discount: 22,
    collections: ["shelf", "another", "central"],
    properties: ["nice", "developer"],
  },
  {
    key: "85",
    name: 'plane',
    price: 685.86,
    discount: 15,
    collections: ["above", "floor"],
    properties: ["loser"],
  },
  {
    key: "82",
    name: 'movement',
    price: 589.84,
    discount: 0,
    collections: ["fog", "community", "paid"],
    properties: ["cool", "teacher"],
  },
  {
    key: "2",
    name: 'accurate',
    price: 555.45,
    discount: 13,
    collections: ["shelf", "another", "central"],
    properties: ["nice", "developer"],
  },
  {
    key: "74",
    name: 'get',
    price: 477.82,
    discount: 21,
    collections: ["above", "floor"],
    properties: ["loser"],
  },
  {
    key: "92",
    name: 'tie',
    price: 182.85,
    discount: 0,
    collections: ["fog", "community", "paid"],
    properties: ["cool", "teacher"],
  },
  {
    key: "11",
    name: 'would',
    price: 571.38,
    discount: 0,
    collections: ["shelf", "another", "central"],
    properties: ["nice", "developer"],
  },
  {
    key: "26",
    name: 'plenty',
    price: 76.7,
    discount: 0,
    collections: ["above", "floor"],
    properties: ["loser"],
  },
  {
    key: "41",
    name: 'hurried',
    price: 657.62,
    discount: 12,
    collections: ["fog", "community", "paid"],
    properties: ["cool", "teacher"],
  },
  {
    key: "25",
    name: 'involved',
    price: 57.43,
    discount: 20,
    collections: ["shelf", "another", "central"],
    properties: ["nice", "developer"],
  },
  {
    key: "37",
    name: 'either',
    price: 521.58,
    discount: 13,
    collections: ["above", "floor"],
    properties: ["loser"],
  },
  {
    key: "100",
    name: 'indicate',
    price: 660.19,
    discount: 18,
    collections: ["fog", "community", "paid"],
    properties: ["cool", "teacher"],
  },
];

export { products }
