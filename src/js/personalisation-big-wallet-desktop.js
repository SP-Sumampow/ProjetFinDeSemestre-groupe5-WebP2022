/************ assets ************/

//***** IMAGE SIMPLE*****//

import vindigoImg from '/images/product-long/vindigo-long-simple.svg';
import bordeauxImg from '/images/product-long/bordeaux-long-simple.svg';
import petulaImg from '/images/product-long/petula-long-simple.svg';
import chardonayImg from '/images/product-long/chardonnay-long-simple.svg';

//***** IMAGE WITH GRAPE GOLD *****/

import vindigoGoldImg from '/images/product-long/vindigo-long-grappe-or.svg';
import bordeauxGoldImg from '/images/product-long/bordeaux-grappe-or.svg';
import petulaGoldImg from '/images/product-long/petula-long-simple-grappe-or.svg';
import chardonayGoldImg from '/images/product-long/chardonnay-long-grappe-or.svg';

//***** IMAGE WITH GRAPE AND PEARL*****/


import vindigoGrappePearlImg from '/images/product-long/vindigo-long-grappe-or-perles.svg';
import bordeauxGrappePearlImg from '/images/product-long/bordeaux-grappe-or (1).svg';
import petulaGrappePearlImg from '/images/product-long/petula-long-simple-grappe-or (1).svg';
import chardonayGrappePearlImg from '/images/product-long/chardonnay-long-perles.svg';

//***** IMAGE WITH GRAPE AND METAL*****/


import vindigoGrappeMetalImg from '/images/product-long/vindigo-long-grappe-or-clour-or.svg';
import bordeauxGrappeMetalImg from '/images/product-long/bordeaux-grappe-or (2).svg';
import petulaGrappeMetalImg from '/images/product-long/petula-long-simple (1).svg';
import chardonayGrappeMetalImg from '/images/product-long/cgardonnay-long-grappe-or-clou-or.svg';

//***** IMAGE WITH BAR GOLD *****/

import vindigoBarImg from '/images/product-long/vindigo-long-barre-or.svg';
import bordeauxBarImg from '/images/product-long/bordeaux-long-barre-or.svg';
import petulaBarImg from '/images/product-long/petula-long-barre-or.svg';
import chardonayBarImg from '/images/product-long/chardonnay-long-barre-or.svg';

//***** IMAGE WITH BAR AND PEARL *****/

import vindigoBarPearlImg from '/images/product-long/vindigo-long-barre-or (1).svg';
import bordeauxBarPearlImg from '/images/product-long/bordeaux-long-barre-or (1).svg';
import petulaBarPearlImg from '/images/product-long/petula-long-barre-or (1).svg';
import chardonayBarPearlImg from '/images/product-long/chardonnay-long-barre-or-perles.svg';

//***** IMAGE WITH BAR AND METAL *****/

import vindigoBarMetalImg from '/images/product-long/vindigo-long-barre-or (2).svg';
import bordeauxBarMetalImg from '/images/product-long/bordeaux-long-barre-or (2).svg';
import petulaBarMetalImg from '/images/product-long/petula-long-barre-or-clou-or.svg';
import chardonayBarMetalImg from '/images/product-long/chardonnay-long-barre-or-clou-or.svg';


// Selectors

let selectors = {
  "product": {
    "title": document.querySelector('.personalisation-desktop__product__text__title'),
    "paragraph": document.querySelector('.personalisation-desktop__product__text__paragraph'),
    "image": document.querySelector('.personalisation-desktop__product__image img'),
    "gravure": document.querySelector('.personalisation-desktop__product__image span') //todo
  },
  "gravureInput": document.querySelector('.personalisation-desktop__input__text input'),
  "totalPrice": document.querySelector('.personalisation-desktop__price p'),
  "colorBtns": [
    { "element": document.querySelector('.colorBtn--vindigo'), productName: "vindigo" },
    { "element": document.querySelector('.colorBtn--bordeaux'), productName: "bordeaux" },
    { "element": document.querySelector('.colorBtn--petula'), productName: "petula" },
    { "element": document.querySelector('.colorBtn--chardonay'), productName: "chardonay" },
  ],
  "symbolBtns": [
    { "element": document.querySelector('.personalisation-desktop__input__symbol .symbolImage .symbolImage-grape'), symbolName: "grappe" },
    { "element": document.querySelector('.personalisation-desktop__input__symbol .symbolImage .symbolImage-bar'), symbolName: "bar" },
  ],
  "finishingBtns": [
    { "element": document.querySelector('.finishing--pearl'), finishingName: "pearl" },
    { "element": document.querySelector('.finishing--metal'), finishingName: "metal" },
  ],
};

console.log(selectors);


// PRODUCTS

let personalisationDetail = {
  products: {
    "vindigo": {
      "key": "vindigo",
      "name": "Le Vindigo",
      "paragraph": "Le Vindigo doit son nom au célèbre vin bleu.Un Portefeuil à la couleur originale et rayonnante qui ne manquera pas de vous surprendre et de vous séduire.",
      "image": vindigoImg,
      "price": 199
    },
    "bordeaux": {
      "key": "bordeaux",
      "name": "Le Bordeaux",
      "paragraph": "Inspiré des plus grands vins de bordeaux. Sucombez à l’élégance de ce modèle qui saura vous séduire et vous accompagner pour toutes les occasions.",
      "image": bordeauxImg,
      "price": 199
    },
    "chardonay": {
      "key": "chardonay",
      "name": "Le Chardonay",
      "paragraph": "Le Vindigo doit son nom au célèbre vin bleu.Un Portefeuil à la couleur originale et rayonnante qui ne manquera pas de vous surprendre et de vous séduire.",
      "image": chardonayImg,
      "price": 199
    },
    "petula": {
      "key": "petula",
      "name": "Le Petula",
      "paragraph": "Inspiré d’un vin paré d’une belle robe rose sur une teinte légèrement violine. Laissez vous séduire par ce modèle plein de charme et de fraîcheur.",
      "image": petulaImg,
      "price": 199
    }
  },
  symbols: {
    "bar": {
      "key": "bar",
      "image": {
        "vindigo": vindigoBarImg,
        "bordeaux": bordeauxBarImg,
        "chardonay": chardonayBarImg,
        "petula": petulaBarImg,
      },
      "price": 0
    },
    "grappe": {
      "key": "grappe",
      "image": {
        "vindigo": vindigoGoldImg,
        "bordeaux": bordeauxGoldImg,
        "chardonay": chardonayGoldImg,
        "petula": petulaGoldImg,
      },
      "price": 0
    }
  },
  finishies: {
    "pearl": {
      "key": "pearl",
      "image": {
        "vindigo": {
          "bar": vindigoBarPearlImg,
          "grappe": vindigoGrappePearlImg
        },
        "bordeaux": {
          "bar": bordeauxBarPearlImg,
          "grappe": bordeauxGrappePearlImg
        },
        "chardonay": {
          "bar": chardonayBarPearlImg,
          "grappe": chardonayGrappePearlImg
        },
        "petula": {
          "bar": petulaBarPearlImg,
          "grappe": petulaGrappePearlImg
        },
      },
      "price": 49
    },
    "metal": {
      "key": "metal",
      "image": {
        "vindigo": {
          "bar": vindigoBarMetalImg,
          "grappe": vindigoGrappeMetalImg  
        },
        "bordeaux": {
          "bar": bordeauxBarMetalImg,
          "grappe": bordeauxGrappeMetalImg
        },
        "chardonay": {
          "bar": chardonayBarMetalImg,
          "grappe": chardonayGrappeMetalImg 
        },
        "petula": {
          "bar": petulaBarMetalImg,
          "grappe": petulaGrappeMetalImg
        },
      },
      "price": 49
    }
  }, gravure: {
    "price": 49
  }
};



/********** PERSONALISATION **********/
var myPersonalisation = {
  colorKey: null,
  symbolKey: null,
  finishingKey: null,
  gravureKey: null,
  totalPrice: {
    color: 0,
    symbol: 0,
    finishing: 0,
    gravure: 0
  }
}

//********** PERSONALISATION - COLOR **********//

selectors.colorBtns.forEach(function (btnInfo) {
  btnInfo.element.addEventListener("click", function () {
    let product = personalisationDetail.products[btnInfo.productName];
    myPersonalisation.colorKey = product.key
    refreshProductInfo(product)
    refreshColorPrice(product.price);
  })
})

// Price 
function refreshColorPrice(amountAdded) {
  refreshProductPicture();
  refreshTotalAmout();
}

function refreshProductInfo(product) {
  selectors.product.title.innerHTML = product.name;
  selectors.product.paragraph.innerHTML = product.paragraph;
  selectors.product.image.src = product.image;
}

/************ Symbol PERSONALISATION ************/

selectors.symbolBtns.forEach(function (btnSymbolInfo) {
  console.log(btnSymbolInfo.element)
  btnSymbolInfo.element.addEventListener("click", function () {

    if (myPersonalisation.colorKey == null) {
      alert("Choisissez une couleur")
      return
    }
    

    var symbol = personalisationDetail.symbols[btnSymbolInfo.symbolName];
    myPersonalisation.symbolKey = symbol.key 
    console.log(symbol)
    refreshProductPicture();
    refreshSymbolPrice(symbol.price);
  })
})


// Price 
function refreshSymbolPrice(amountAdded) {
  myPersonalisation.totalPrice.symbol = amountAdded;
  refreshTotalAmout();
}


/************ Symbol FINITION ************/

selectors.finishingBtns.forEach(function (btnFinisingInfo) {
  btnFinisingInfo.element.addEventListener("click", function () {

    if (myPersonalisation.symbolKey == null) {
      alert("Choisissez un symbole")
      return
    }

    var finishing = personalisationDetail.finishies[btnFinisingInfo.finishingName];
    myPersonalisation.finishingKey = finishing.key;
    console.log(btnFinisingInfo.finishingName);
    refreshFinishingInfo(finishing)
    refreshFinishingPrice(finishing.price)
  })
})

function refreshFinishingInfo(finishing) {
  console.log(personalisationDetail.finishies[finishing.key].image[myPersonalisation.colorKey][myPersonalisation.symbolKey]);
  selectors.product.image.src = personalisationDetail.finishies[finishing.key].image[myPersonalisation.colorKey][myPersonalisation.symbolKey];
}

// Price 
function refreshFinishingPrice(amountAdded) {
  myPersonalisation.totalPrice.finishing = amountAdded;
  refreshTotalAmout();
}
//

/************ gravure PERSONALISATION ************/

selectors.gravureInput.addEventListener('input', function () {
  
  if (myPersonalisation.finishingKey == null) {
    alert("Choisissez une finition")
    return
  }

  selectors.product.gravure.innerHTML = this.value;
  if (this.value == "") {
    refreshFinishingGravurePrice(0)
  } else {
    refreshFinishingGravurePrice(personalisationDetail.gravure.price)
  }
});

// Price 
function refreshFinishingGravurePrice(gravurePrice) {
  myPersonalisation.totalPrice.gravure = gravurePrice;
  refreshTotalAmout();
}

/************ First code init ************/

function refreshProductPicture() {
  if (myPersonalisation.colorKey != null && myPersonalisation.finishingKey != null && myPersonalisation.symbolKey) {
    console.log(personalisationDetail.symbol);
    selectors.product.image.src = personalisationDetail.finishies[myPersonalisation.finishingKey].image[myPersonalisation.colorKey][myPersonalisation.symbolKey];
  } else if (myPersonalisation.colorKey != null) {
    selectors.product.image.src = personalisationDetail.symbols[myPersonalisation.symbolKey].image[myPersonalisation.colorKey]
  } else {
    console.log(personalisationDetail.product);
    selectors.product.image.src = personalisationDetail.products.bordeaux.image
  }
}


function refreshTotalAmout() {
  selectors.totalPrice.innerHTML = myPersonalisation.totalPrice.color +
    myPersonalisation.totalPrice.symbol +
    myPersonalisation.totalPrice.finishing + 
    myPersonalisation.totalPrice.gravure + "€";
}

refreshProductPicture();
refreshTotalAmout();