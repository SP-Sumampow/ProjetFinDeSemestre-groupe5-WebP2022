/************ assets ************/

//***** IMAGE SIMPLE*****//

import vindigoImg from '/images/products/vintigo-court-simple.svg';
import bordeauxImg from '/images/products/bordeaux-court-simple.svg';
import petulaImg from '/images/products/petula-court-simple.svg';
import chardonayImg from '/images/products/chardonay-court-simple.svg';

//***** IMAGE WITH GRAPE GOLD *****/

import vindigoGoldImg from '/images/products/vintigo-court-grappe-or.svg';
import bordeauxGoldImg from '/images/products/bordeaux-court-grappe-or.svg';
import petulaGoldImg from '/images/products/petula-court-grappe-or.svg';
import chardonayGoldImg from '/images/products/chardonay-court-grappe-or.svg';

//***** IMAGE WITH GRAPE AND PEARL*****/


import vindigoGoldPearlImg from '/images/products/vintigo-court-grappe-or-perles.svg';
import bordeauxGoldPearlImg from '/images/products/bordeaux-court-grappe-or-perles.svg';
import petulaGoldPearlImg from '/images/products/petula-court-grappe-or-perles.svg';
import chardonayGoldPearlImg from '/images/products/chardonay-court-grappe-or-perles.svg';

//***** IMAGE WITH GRAPE AND METAL*****/


import vindigoGoldMetalImg from '/images/products/vintigo-court-grappe-or-clou-or.svg';
import bordeauxGoldMetalImg from '/images/products/bordeaux-court-grappe-or-clou-or.svg';
import petulaGoldMetalImg from '/images/products/petula-court-grappe-or-clou-or.svg';
import chardonayGoldMetalImg from '/images/products/chardonay-court-grappe-or-clou-or.svg';

//***** IMAGE WITH BAR GOLD *****/

import vindigoBarImg from '/images/products/vintigo-court-barre-or.svg';
import bordeauxBarImg from '/images/products/bordeaux-court-barre-or.svg';
import petulaBarImg from '/images/products/petula-court-barre-or.svg';
import chardonayBarImg from '/images/products/chardonay-court-barre-or.svg';

//***** IMAGE WITH BAR AND PEARL *****/

import vindigoBarPearlImg from '/images/products/vintigo-court-barre-or-perles.svg';
import bordeauxBarPearlImg from '/images/products/bordeaux-court-barre-or-perles.svg';
import petulaBarPearlImg from '/images/products/petula-court-barre-or-perles.svg';
import chardonayBarPearlImg from '/images/products/chardonay-court-barre-or-perles.svg';

//***** IMAGE WITH BAR AND METAL *****/

import vindigoBarMetalImg from '/images/products/vintigo-court-barre-or-clou-or.svg';
import bordeauxBarMetalImg from '/images/products/bordeaux-court-barre-or-clou-or.svg';
import petulaBarMetalImg from '/images/products/petula-court-barre-or-clou-or.svg';
import chardonayBarMetalImg from '/images/products/chardonay-court-barre-or-clou-or.svg';


// PRODUCTS

let products = {
  "vindigo": {
        "key": "vindigo",
        "name": "Le Vindigo",
        "paragraph": "Le Vindigo doit son nom au célèbre vin bleu.Un Portefeuil à la couleur originale et rayonnante qui ne manquera pas de vous surprendre et de vous séduire.",
        "image": vindigoImage,
        "price": 550
    },
  "bordeaux": {
        "key": "bordeaux",
        "name": "Le Bordeaux",
        "paragraph": "Inspiré des plus grands vins de bordeaux. Sucombez à l’élégance de ce modèle qui saura vous séduire et vous accompagner pour toutes les occasions.",
        "image": bordeauxImage,
        "price": 550
    },
  "chardonay": {
        "key": "chardonay",
        "name": "Le Chardonay",
        "paragraph": "Le Vindigo doit son nom au célèbre vin bleu.Un Portefeuil à la couleur originale et rayonnante qui ne manquera pas de vous surprendre et de vous séduire.",
        "image": chardonayImage,
        "price": 550
    },
  "petula": {
        "key": "petula",
        "name": "Le Petula",
        "paragraph": "Inspiré d’un vin paré d’une belle robe rose sur une teinte légèrement violine. Laissez vous séduire par ce modèle plein de charme et de fraîcheur.",
        "image": petulaImage,
        "price": 1000
    }
};

let selectors = {
  "product": {
    "title": document.querySelector('h1.personalisation-desktop__product__text__title'),
    "paragraph": document.querySelector('p.personalisation-desktop__product__text__paragraph'),
    "image": document.querySelector('.personalisation-desktop__product__image img'),
  },
  "totalPrice": document.querySelector('.personalisation__price p'),
  "colorBtns": [
    { "element": document.querySelector('.colorBtn--vindigo'), productName: "vindigo" },
    { "element": document.querySelector('.colorBtn--bordeaux'), productName: "bordeaux" },
    { "element": document.querySelector('.colorBtn--petula'), productName: "petula" },
    { "element": document.querySelector('.colorBtn--chardonay'), productName: "chardonay" },
  ],
  "symbolBtns": [
    { "element": document.querySelector('.symbolImage-grape'), symbolName: "grape" },
    { "element": document.querySelector('.symbolImage-bar'), symbolName: "bar" },
  ],
  "finishingBtns": [
    { "element": document.querySelector('.finishing--pearl'), finishingName: "pearl" },
    { "element": document.querySelector('.finishing--metal'), finishingName: "metal" },
  ],
  
};




/********** PERSONALISATION **********/
var myPersonalisation = {
  colorKey: "",
  totalPrice: {
    color: 0,
    symbol: 0
  }
}

//********** PERSONALISATION - COLOR **********//

selectors.colorBtns.forEach(function (btnInfo) {
  btnInfo.element.addEventListener("click", function () {
    myPersonalisation.colorKey = products[btnInfo.productName].key
    refreshProductInfo(products[btnInfo.productName])
    refreshColorPrice(products[btnInfo.productName].price);
    console.log(myPersonalisation);
  })
})



