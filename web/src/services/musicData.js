import band1 from "../assets/musicProfile/band1.jpg";
import band2 from "../assets/musicProfile/band2.jpg";
import solo1 from "../assets/musicProfile/solo1.jpg";
import solo2 from "../assets/musicProfile/solo2.jpg";

import band3 from "../assets/musicProfile/band3.jpg";
import band4 from "../assets/musicProfile/band4.jpg";
import band5 from "../assets/musicProfile/band5.jpg";
import band6 from "../assets/musicProfile/band6.jpg";
import solo3 from "../assets/musicProfile/solo3.jpg";
import solo4 from "../assets/musicProfile/solo4.jpg";
import solo5 from "../assets/musicProfile/solo5.jpg";
import solo6 from "../assets/musicProfile/solo6.jpg";
import solo7 from "../assets/musicProfile/solo7.jpg";

export const musicProfile = [
  {
    id: "0",
    nameOfTheGroup: "Banda PCH",
    image: band1,
    sizeOfTheGroup: "group",
    teach: false,
    teachWhat: [],
    placesToPlay: ["Bar", "Chácara", "Evento de Empresa"],
    howFarToPlay: 50,
    priceByHour: 450,
    musicStyles: ["Rock", "Pop", "Internacional"],
    offerInstrumentals: true,
  },
  {
    id: "1",
    nameOfTheGroup: "NickelForward",
    image: band2,
    sizeOfTheGroup: "group",
    teach: false,
    teachWhat: [],
    placesToPlay: [
      "Evento de Empresa",
      "Sarau",
      "Concerto em teatro",
      "Concerto ao ar livre",
    ],
    howFarToPlay: 120,
    priceByHour: 550,
    musicStyles: ["Pagode", "Nacional", "Internacional"],
    offerInstrumentals: false,
  },
  {
    id: "2",
    nameOfTheGroup: "Cristiano ShowMan",
    image: solo1,
    sizeOfTheGroup: "individual",
    teach: false,
    teachWhat: [],
    placesToPlay: [
      "Festa de Casamento",
      "Bar",
      "Casa de Show",
      "Concerto em teatro",
      "Sarau",
    ],
    howFarToPlay: 60,
    priceByHour: 300,
    musicStyles: ["Rock", "Pop", "Internacional", "Blues"],
    offerInstrumentals: true,
  },
  {
    id: "3",
    nameOfTheGroup: "Maria Betanha",
    image: solo2,
    sizeOfTheGroup: "individual",
    teach: true,
    teachWhat: ["Violão", "Guitarra", "Bateria"],
    placesToPlay: [
      "Evento de Empresa",
      "Casa de Show",
      "Concerto em teatro",
      "Concerto ao ar livre",
      "Sarau",
    ],
    howFarToPlay: 120,
    priceByHour: 650,
    musicStyles: ["Pagode", "Jazz", "Nacional", "Internacional"],
    offerInstrumentals: false,
  },
  {
    id: "4",
    nameOfTheGroup: "Junin do Sax",
    image: solo3,
    sizeOfTheGroup: "individual",
    teach: false,
    teachWhat: [],
    placesToPlay: [
      "Concerto ao ar livre",
      "Casa de Show",
      "Concerto em teatro",
      "Evento de Empresa",
      "Sarau",
    ],
    howFarToPlay: 90,
    priceByHour: 620,
    musicStyles: ["Jazz", "Nacional", "Internacional"],
    offerInstrumentals: true,
  },
  {
    id: "5",
    nameOfTheGroup: "Enzo da Viola",
    image: solo4,
    sizeOfTheGroup: "individual",
    teach: true,
    teachWhat: ["Violão", "Guitarra"],
    placesToPlay: [
      "Evento Social",
      "Concerto ao ar livre",
      "Bar",
      "Concerto em teatro",
      "Evento de Empresa",
    ],
    howFarToPlay: 80,
    priceByHour: 430,
    musicStyles: ["Rock", "Blues", "Pop", "Canto"],
    offerInstrumentals: true,
  },
  {
    id: "6",
    nameOfTheGroup: "O Grande Julio",
    image: solo5,
    sizeOfTheGroup: "individual",
    teach: true,
    teachWhat: ["Violão", "Guitarra", "Canto"],
    placesToPlay: [
      "Chácara",
      "Bar",
      "Concerto ao ar livre",
      "Concerto em teatro",
      "Evento de Empresa",
    ],
    howFarToPlay: 150,
    priceByHour: 470,
    musicStyles: ["Rock", "Nacional", "Pop"],
    offerInstrumentals: true,
  },
  {
    id: "7",
    nameOfTheGroup: "Ray Carlos",
    image: solo6,
    sizeOfTheGroup: "individual",
    teach: false,
    teachWhat: [],
    placesToPlay: [
      "Casa de Show",
      "Concerto ao ar livre",
      "Concerto em teatro",
      "Evento de Empresa",
      "Bar",
    ],
    howFarToPlay: 110,
    priceByHour: 350,
    musicStyles: ["Blues", "Rock", "Pop"],
    offerInstrumentals: true,
  },
  {
    id: "8",
    nameOfTheGroup: "Hugo Kiko",
    image: solo7,
    sizeOfTheGroup: "individual",
    teach: true,
    teachWhat: ["Bateria", "Guitarra", "Violão"],
    placesToPlay: [
      "Evento de Empresa",
      "Sarau",
      "Casa de Show",
      "Concerto em teatro",
      "Bar",
    ],
    howFarToPlay: 160,
    priceByHour: 399,
    musicStyles: ["Internacional", "Blues", "Rock", "Pop"],
    offerInstrumentals: true,
  },
];
