export const categories = [
  {
    id: 1,
    name: "Pizza",
    image: require("./assets/img/pizzaIcon.webp"),
  },
  {
    id: 2,
    name: "Hamburguesas",
    image: require("./assets/img/burguerIcon.webp"),
  },
  {
    id: 3,
    name: "Helado",
    image: require("./assets/img/heladoIcon.webp"),
  },
];

export const featured = {
  id: 1,
  title: "Los mejores antojos",
  description: "Los gustos que más nos gustan",
  restaurants: [
    {
      id: 1,
      name: "Freddo",
      image: require("./assets/img/freddo/freddoBG.webp"),
      description: "Heladería",
      lat: -34.5722257,
      lng: -58.4204568,
      address: "Godoy Cruz 2570",
      stars: 3.5,
      dishes: [
        {
          id: 1,
          name: "1 Kilo de Helado",
          description: "Helado de 1kg con 4 sabores a elección",
          price: 10900,
          image: require("./assets/img/freddo/freddo1.webp"),
        },
        {
          id: 2,
          name: "Tableta de Menta",
          description: "Cuadrado de helado de menta bañado con chocolate.",
          price: 1300,
          image: require("./assets/img/freddo/freddo2.webp"),
        },
      ],
    },
    {
      id: 2,
      name: "Costumbres Argentinas",
      image: require("./assets/img/costumbresArgentinas/costumbresBG.webp"),
      description: "Varios",
      lat: -34.5994124,
      lng: -58.4382933,
      address: "Av. Raúl Scalabrini Ortiz 348",
      stars: 4.2,
      dishes: [
        {
          id: 1,
          name: "Sándwich de Miga J&Q X 6",
          description: "Sándwich de miga de jamón y queso. 6 unidades.",
          price: 6565,
          image: require("./assets/img/costumbresArgentinas/costumbres1.webp"),
        },
        {
          id: 2,
          name: "Churro Relleno",
          description: "Churro relleno con dulce de leche.",
          price: 481,
          image: require("./assets/img/costumbresArgentinas/costumbres2.webp"),
        },
        {
          id: 3,
          name: "Medialunas con Jamón & Queso X 6",
          description: "6 medialunas rellenas de jamón y queso.",
          price: 4446,
          image: require("./assets/img/costumbresArgentinas/costumbres3.webp"),
        },
        {
          id: 4,
          name: "Pizza Mozzarella",
          description: "Pizza Mozzarella grande.",
          price: 4446,
          image: require("./assets/img/costumbresArgentinas/costumbres4.webp"),
        },
      ],
    },
  ],
};

export const featuredDos = {
  id: 1,
  title: "Para empezar la semana",
  description: "Empieza la semana con lo que más te gusta",
  restaurants: [
    {
      id: 1,
      name: "Kentucky",
      image: require("./assets/img/kentucky/kentuckyBG.webp"),
      description: "Pizzeria",
      lat: -34.61607,
      lng: -58.4317328,
      address: "Av. Rivadavia 4701",
      stars: 3.8,
      dishes: [
        {
          id: 1,
          name: "Combo Grupal Pizza Muzzarella",
          description:
            "Pizza grande muzzarella (8 porciones), 2 faina, gaseosa 1,5 L.",
          price: 8650,
          image: require("./assets/img/kentucky/kentucky1.webp"),
        },
        {
          id: 2,
          name: "Porción Napolitana + Porción Muzzarella",
          description:
            "Porción de pizza napolitana + porción de pizza de muzarrella + porción de faina + lata de gaseosa a elección.",
          price: 2500,
          image: require("./assets/img/kentucky/kentucky2.webp"),
        },
      ],
    },
    {
      id: 2,
      name: "McDonald's",
      image: require("./assets/img/mc/mcBG.webp"),
      description: "Comida rápida",
      lat: -34.5808369,
      lng: -58.4224775,
      address: " Av. Sta. Fe 4280",
      stars: 3.8,
      dishes: [
        {
          id: 1,
          name: "Doble Cuarto De Libra Mediano",
          description:
            "Hamburguesa doble carne 100% vacuna, dos fetas de queso cheddar, kétchup, mostaza y cebolla. ",
          price: 6600,
          image: require("./assets/img/mc/mc1.webp"),
        },
        {
          id: 2,
          name: "Mcnuggets X 20",
          description:
            "20 Mcnuggets de pechuga de pollo con 4 salsas a elección.",
          price: 5150,
          image: require("./assets/img/mc/mc2.webp"),
        },
      ],
    },
  ],
};
