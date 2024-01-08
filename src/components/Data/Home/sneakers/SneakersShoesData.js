import { nanoid } from "@reduxjs/toolkit";
import shoes1 from "../../../../assets/HomeShoes/firstSectionShoes/shoes1.png";
import shoes11 from "../../../../assets/HomeShoes/firstSectionShoes/shoes11.png";
import shoes12 from "../../../../assets/HomeShoes/firstSectionShoes/shoes12.png";
import shoes13 from "../../../../assets/HomeShoes/firstSectionShoes/shoes13.png";
import shoes2 from "../../../../assets/HomeShoes/firstSectionShoes/shoes2.png";
import shoes21 from "../../../../assets/HomeShoes/firstSectionShoes/shoes22.png";
import shoes22 from "../../../../assets/HomeShoes/firstSectionShoes/shoes23.png";
import shoes23 from "../../../../assets/HomeShoes/firstSectionShoes/shoes24.png";
import shoes3 from "../../../../assets/HomeShoes/firstSectionShoes/shoes3.png";
import shoes31 from "../../../../assets/HomeShoes/firstSectionShoes/shoes31.png";
import shoes32 from "../../../../assets/HomeShoes/firstSectionShoes/shoes32.png";
import shoes33 from "../../../../assets/HomeShoes/firstSectionShoes/shoes33.png";
import shoes4 from "../../../../assets/HomeShoes/firstSectionShoes/shoes4.png";
import shoes41 from "../../../../assets/HomeShoes/firstSectionShoes/shoes41.png";
import shoes42 from "../../../../assets/HomeShoes/firstSectionShoes/shoes42.png";
import shoes43 from "../../../../assets/HomeShoes/firstSectionShoes/shoes43.png";
import shoes5 from "../../../../assets/HomeShoes/firstSectionShoes/shoes5.png";
import shoes51 from "../../../../assets/HomeShoes/firstSectionShoes/shoes51.png";
import shoes52 from "../../../../assets/HomeShoes/firstSectionShoes/shoes52.png";
import shoes53 from "../../../../assets/HomeShoes/firstSectionShoes/shoes53.png";
import shoes6 from "../../../../assets/HomeShoes/firstSectionShoes/shoes6.png";
import shoes61 from "../../../../assets/HomeShoes/firstSectionShoes/shoes61.png";
import shoes62 from "../../../../assets/HomeShoes/firstSectionShoes/shoes62.png";
import shoes63 from "../../../../assets/HomeShoes/firstSectionShoes/shoes63.png";
import shoes7 from "../../../../assets/HomeShoes/firstSectionShoes/shoes7.png";
import shoes71 from "../../../../assets/HomeShoes/firstSectionShoes/shoes71.png";
import shoes72 from "../../../../assets/HomeShoes/firstSectionShoes/shoes72.png";
import shoes73 from "../../../../assets/HomeShoes/firstSectionShoes/shoes73.png";
import shoes8 from "../../../../assets/HomeShoes/firstSectionShoes/shoes8.png";
import shoes81 from "../../../../assets/HomeShoes/firstSectionShoes/shoes81.png";
import shoes82 from "../../../../assets/HomeShoes/firstSectionShoes/shoes82.png";
import shoes83 from "../../../../assets/HomeShoes/firstSectionShoes/shoes83.png";
import shoes9 from "../../../../assets/HomeShoes/firstSectionShoes/shoes9.png";
import shoes91 from "../../../../assets/HomeShoes/firstSectionShoes/shoes91.png";
import shoes92 from "../../../../assets/HomeShoes/firstSectionShoes/shoes92.png";
import shoes93 from "../../../../assets/HomeShoes/firstSectionShoes/shoes93.png";

export const sneakersShoesData = [
  {
    id: nanoid(),
    image: shoes1,
    title: "Blktop Rider Lithium Unisex Sneakers",
    price: 4490,
    offer: "10% discount on prepaid order",
    button: "Add To Cart",
    color: "Inky Blue-Persian Blue",
    size: "Uk 7",
    qty: 1,
    checked: false,
    cardImages: [
      {
        id: nanoid(),
        imgCard: shoes1,
      },
      {
        id: nanoid(),
        imgCard: shoes11,
      },
      {
        id: nanoid(),
        imgCard: shoes12,
      },
      {
        id: nanoid(),
        imgCard: shoes13,
      },
    ],
  },
  {
    id: nanoid(),
    image: shoes2,
    title: "Rider Future Vintage Unisex Sneakers",
    price: 3869,
    offer: "10% discount on prepaid order",
    button: "Add To Cart",
    color: " White-Rickie Orange",
    size: "Uk 7",
    qty: 1,
    checked: false,
    cardImages: [
      {
        id: 1,
        imgCard: shoes2,
      },
      {
        id: 2,
        imgCard: shoes21,
      },
      {
        id: 3,
        imgCard: shoes22,
      },
      {
        id: 4,
        imgCard: shoes23,
      },
    ],
  },
  {
    id: nanoid(),
    image: shoes3,
    title: "Fuse 2.0 Forged Men's Training Shoes",
    price: 4299,
    offer: "10% discount on prepaid order",
    button: "Add To Cart",
    color: "PUMA Black",
    size: "Uk 7",
    qty: 1,
    checked: false,
    cardImages: [
      {
        id: 1,
        imgCard: shoes3,
      },
      {
        id: 2,
        imgCard: shoes31,
      },
      {
        id: 3,
        imgCard: shoes32,
      },
      {
        id: 4,
        imgCard: shoes33,
      },
    ],
  },
  {
    id: nanoid(),
    image: shoes4,
    title: "Playmaker Pro Mid Trophies Unisex Basketball Shoes",
    price: 4999,
    offer: "10% discount on prepaid order",
    button: "Add To Cart",
    color: "Ash Gray-Cast Iron-PUMA Gold",
    size: "Uk 7",
    qty: 1,
    checked: false,
    cardImages: [
      {
        id: 1,
        imgCard: shoes4,
      },
      {
        id: 2,
        imgCard: shoes41,
      },
      {
        id: 3,
        imgCard: shoes42,
      },
      {
        id: 4,
        imgCard: shoes43,
      },
    ],
  },
  {
    id: nanoid(),
    image: shoes5,
    title: "RS 3.0 Energy Unisex Sneakers",
    price: 3999,
    offer: "10% discount on prepaid order",
    button: "Add To Cart",
    color: "White-Lemon Meringue",
    size: "Uk 7",
    qty: 1,
    checked: false,
    cardImages: [
      {
        id: 1,
        imgCard: shoes5,
      },
      {
        id: 2,
        imgCard: shoes51,
      },
      {
        id: 3,
        imgCard: shoes52,
      },
      {
        id: 4,
        imgCard: shoes53,
      },
    ],
  },
  {
    id: nanoid(),
    image: shoes6,
    title: "Scuderia Ferrari x Joshua Vides RS-X Unisex Sneakers",
    price: 5999,
    offer: "10% discount on prepaid order",
    button: "Add To Cart",
    color: "Rosso Corsa-Frosted Ivory",
    size: "Uk 7",
    qty: 1,
    checked: false,
    cardImages: [
      {
        id: 1,
        imgCard: shoes6,
      },
      {
        id: 2,
        imgCard: shoes61,
      },
      {
        id: 3,
        imgCard: shoes62,
      },
      {
        id: 4,
        imgCard: shoes63,
      },
    ],
  },
  {
    id: nanoid(),
    image: shoes7,
    title: "SOFTRIDE Premier So Splatter Men's Running Shoes",
    price: 3009,
    offer: "10% discount on prepaid order",
    button: "Add To Cart",
    color: "CASTLEROCK-Puma Black-Lime Squeeze",
    size: "Uk 7",
    qty: 1,
    checked: false,
    cardImages: [
      {
        id: 1,
        imgCard: shoes7,
      },
      {
        id: 2,
        imgCard: shoes71,
      },
      {
        id: 3,
        imgCard: shoes72,
      },
      {
        id: 4,
        imgCard: shoes73,
      },
    ],
  },
  {
    id: nanoid(),
    image: shoes8,
    title: "PWRFrame 2 Men's Training Shoes",
    price: 6399,
    offer: "10% discount on prepaid order",
    button: "Add To Cart",
    color: "Alpine Snow-Warm White-PUMA Navy",
    size: "Uk 7",
    qty: 1,
    checked: false,
    cardImages: [
      {
        id: 1,
        imgCard: shoes8,
      },
      {
        id: 2,
        imgCard: shoes81,
      },
      {
        id: 3,
        imgCard: shoes82,
      },
      {
        id: 4,
        imgCard: shoes83,
      },
    ],
  },
  {
    id: nanoid(),
    image: shoes9,
    title: "PWRFrame 2 Men's Training Shoes",
    price: 7999,
    offer: "10% discount on prepaid order",
    button: "Add To Cart",
    color: "Fast Yellow-PUMA Black",
    size: "Uk 7",
    qty: 1,
    checked: false,
    cardImages: [
      {
        id: 1,
        imgCard: shoes9,
      },
      {
        id: 2,
        imgCard: shoes91,
      },
      {
        id: 3,
        imgCard: shoes92,
      },
      {
        id: 4,
        imgCard: shoes93,
      },
    ],
  },
];
