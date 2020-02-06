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


import vindigoGrappePearlImg from '/images/products/vintigo-court-grappe-or-perles.svg';
import bordeauxGrappePearlImg from '/images/products/bordeaux-court-grappe-or-perles.svg';
import petulaGrappePearlImg from '/images/products/petula-court-grappe-or-perles.svg';
import chardonayGrappePearlImg from '/images/products/chardonay-court-grappe-or-perles.svg';

//***** IMAGE WITH GRAPE AND METAL*****/


import vindigoGrappeMetalImg from '/images/products/vintigo-court-grappe-or-clou-or.svg';
import bordeauxGrappeMetalImg from '/images/products/bordeaux-court-grappe-or-clou-or.svg';
import petulaGrappeMetalImg from '/images/products/petula-court-grappe-or-clou-or.svg';
import chardonayGrappeMetalImg from '/images/products/chardonay-court-grappe-or-clou-or.svg';

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

var positionInPersonalisation = 0;


let selectors = {
  "navigation": {
    "rightBtn": document.querySelector('.personalisation__btn__right'),
    "leftBtn": document.querySelector('.personalisation__btn__left'),
    "title": document.querySelector('.personalisation__btn h2'),
    "personalisationStep": {
      "color": document.querySelector('.personalisation__choices__colors'),
      "finishing": document.querySelector('.personalisation__choices__finishing'),
      "symbols": document.querySelector('.personalisation__choices__symbols'),
      "gravure": document.querySelector('.personalisation__choices__gravure')
    }
  },
  "product": {
    "title": document.querySelector('.personalisation__text h1'),
    "paragraph": document.querySelector('p.personalisation__text__paragraph'),
    "image": document.querySelector('.personalisation__image img'),
    "gravure": document.querySelector('.personalisation__gravure__text')
  },
  "gravureInput": document.querySelector('.personalisation__choices__gravure input'),
  "totalPrice": document.querySelector('.personalisation__price p'),
  "colorBtns": [
    { "element": document.querySelector('.btn--vindigo'), productName: "vindigo" },
    { "element": document.querySelector('.btn--bordeaux'), productName: "bordeaux" },
    { "element": document.querySelector('.btn--petula'), productName: "petula" },
    { "element": document.querySelector('.btn--chardonay'), productName: "chardonay" },
  ],
  "symbolBtns": [
    { "element": document.querySelector('.symbolImage-grape'), symbolName: "grappe" },
    { "element": document.querySelector('.symbolImage-bar'), symbolName: "bar" },
  ],
  "finishingBtns": [
    { "element": document.querySelector('.personalisation__choices__finishing__pearl'), finishingName: "pearl" },
    { "element": document.querySelector('.personalisation__choices__finishing__metal'), finishingName: "metal" },
  ],
};

let navigation = [{
  "title": "COULEURS",
  "selectorName": "color"
}, {
    "title": "SYMBOLES",
    "selectorName": "symbols"
},{
    "title": "FINITION",
    "selectorName": "finishing"
}, {
    "title": "GRAVURE",
    "selectorName": "gravure"
}];

let products = {
  "vindigo": {
    "key": "vindigo",
    "name": "Le Vindigo",
    "paragraph": "Le Vindigo doit son nom au célèbre vin bleu.Un Portefeuil à la couleur originale et rayonnante qui ne manquera pas de vous surprendre et de vous séduire.",
    "image": vindigoImg,
    "price": 550
  },
  "bordeaux": {
    "key": "bordeaux",
    "name": "Le Bordeaux",
    "paragraph": "Inspiré des plus grands vins de bordeaux. Sucombez à l’élégance de ce modèle qui saura vous séduire et vous accompagner pour toutes les occasions.",
    "image": bordeauxImg,
    "price": 550
  },
  "chardonay": {
    "key": "chardonay",
    "name": "Le Chardonay",
    "paragraph": "Le Vindigo doit son nom au célèbre vin bleu.Un Portefeuil à la couleur originale et rayonnante qui ne manquera pas de vous surprendre et de vous séduire.",
    "image": chardonayImg,
    "price": 550
  },
  "petula": {
    "key": "petula",
    "name": "Le Petula",
    "paragraph": "Inspiré d’un vin paré d’une belle robe rose sur une teinte légèrement violine. Laissez vous séduire par ce modèle plein de charme et de fraîcheur.",
    "image": petulaImg,
    "price": 1000
  }
};

let symbols = {
  "bar": {
    "key": "bar",
    "image": {
      "vindigo": vindigoBarImg,
      "bordeaux": bordeauxBarImg,
      "chardonay": chardonayBarImg,
      "petula": petulaBarImg,
    },
    "price": 23
  },
  "grappe": {
    "key": "grappe",
    "image": {
      "vindigo": vindigoGoldImg,
      "bordeaux": bordeauxGoldImg,
      "chardonay": chardonayBarImg,
      "petula": petulaGoldImg,
    },
    "price": 99
  }
};

let finishies = {
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
    "price": 1000
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
    "price": 2000
  }
};

var gravure = {
  "price": 13
};

/************ PERSONALISATION ************/
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


/************ NAVIGATION ************/

selectors.navigation.leftBtn.addEventListener("click", function () {
  let currentStepNameSelector = navigation[positionInPersonalisation].selectorName;
  let currentStepSelector = selectors.navigation.personalisationStep[currentStepNameSelector];
  positionInPersonalisation--;
  let afterStepName = navigation[positionInPersonalisation].selectorName;
  let afterStepNameSelector = selectors.navigation.personalisationStep[afterStepName];
  transitionPersonalisationStep(currentStepSelector, afterStepNameSelector);
  refreshNavigation();
})

selectors.navigation.rightBtn.addEventListener("click", function () {
  let currentStepNameSelector = navigation[positionInPersonalisation].selectorName;
  let currentStepSelector = selectors.navigation.personalisationStep[currentStepNameSelector];
  if (isStepPersonaliseFiled() == false) {
    return
  }
  positionInPersonalisation++;
  let afterStepName = navigation[positionInPersonalisation].selectorName;
  let afterStepNameSelector = selectors.navigation.personalisationStep[afterStepName];
  transitionPersonalisationStep(currentStepSelector, afterStepNameSelector);
  refreshNavigation();
})

function initMobileNavigation() {
  console.log(selectors.navigation.personalisationStep);
  selectors.navigation.personalisationStep.finishing.style.display = "none";
  selectors.navigation.personalisationStep.symbols.style.display = "none";
  selectors.navigation.personalisationStep.gravure.style.display = "none";
}

function isStepPersonaliseFiled() {
  if (positionInPersonalisation == 0 && myPersonalisation.colorKey == null) {
    alert("Choisissez une couleur")
    return false
  } else if (positionInPersonalisation == 1 && myPersonalisation.symbolKey == null) {
    alert("Choisissez un symbole")
    return false
  } else if (positionInPersonalisation == 2 && myPersonalisation.finishingKey == null) {
    return false
  } else if (positionInPersonalisation == 3 && myPersonalisation.gravureKey == null) { 
    return false
  }
  return true
}

function refreshNavigation() {
  console.log("current position " + positionInPersonalisation)
  if (positionInPersonalisation == 0) {
    selectors.navigation.leftBtn.style.visibility = "hidden";
  } else {
    selectors.navigation.leftBtn.style.visibility = "visible";
  }

  if (positionInPersonalisation == 3) {
    selectors.navigation.rightBtn.style.visibility = "hidden";
  } else {
    selectors.navigation.rightBtn.style.visibility = "visible";
  }

  let titleNavigation = navigation[positionInPersonalisation].title;
  selectors.navigation.title.innerHTML = titleNavigation + " " + (positionInPersonalisation + 1) + "/4" 
}

function transitionPersonalisationStep(beforeStep, afterStep) {
  beforeStep.style.display = "none";
  afterStep.style.display = "flex";
}

initMobileNavigation();

/************ COLORS PERSONALISATION ************/


selectors.colorBtns.forEach(function (btnInfo) {
  btnInfo.element.addEventListener("click", function () {
    myPersonalisation.colorKey = products[btnInfo.productName].key
    refreshProductInfo(products[btnInfo.productName])
    refreshColorPrice(products[btnInfo.productName].price);
    console.log(myPersonalisation);
  })
})

// Product interface 

// Price 
function refreshColorPrice(amountAdded) {
  myPersonalisation.totalPrice.color = amountAdded;
  refreshTotalAmout();
}

function refreshProductInfo(product) {
  selectors.product.title.innerHTML = product.name;
  selectors.product.paragraph.innerHTML = product.paragraph;
  selectors.product.image.src = product.image;
}

refreshProductInfo(products[selectors.colorBtns[0].productName]);
///////////

/************ Symbol PERSONALISATION ************/

selectors.symbolBtns.forEach(function (btnSymbolInfo) {
  btnSymbolInfo.element.addEventListener("click", function () {
    var symbol = symbols[btnSymbolInfo.symbolName];
    myPersonalisation.symbolKey = symbol.key 
    console.log(symbol)
    refreshSymbolInfo(symbol);
    refreshSymbolPrice(symbol.price);
  })
})

function refreshSymbolInfo(symbol) {
  selectors.product.image.src = symbol.image[myPersonalisation.colorKey];
}

// Price 
function refreshSymbolPrice(amountAdded) {
  myPersonalisation.totalPrice.symbol = amountAdded;
  refreshTotalAmout();
}


//f"zreyhgtfr  or (i = 0;i < colors.length; i++)
    
        
/************ finishing PERSONALISATION ************/


selectors.finishingBtns.forEach(function (btnFinisingInfo) {
  btnFinisingInfo.element.addEventListener("click", function () {
    var finishing = finishies[btnFinisingInfo.finishingName];
    myPersonalisation.finishingKey = finishing.key;
    console.log(btnFinisingInfo.finishingName);
    refreshFinishingInfo(finishing)
    refreshFinishingPrice(finishing.price)
  })
})

function refreshFinishingInfo(finishing) {
  console.log(finishies[finishing.key].image[myPersonalisation.colorKey][myPersonalisation.symbolKey]);
  selectors.product.image.src = finishies[finishing.key].image[myPersonalisation.colorKey][myPersonalisation.symbolKey];
}

// Price 
function refreshFinishingPrice(amountAdded) {
  myPersonalisation.totalPrice.finishing = amountAdded;
  refreshTotalAmout();
}
//

refreshTotalAmout();

/************ gravure PERSONALISATION ************/

selectors.gravureInput.addEventListener('input', function(){
  selectors.product.gravure.innerHTML = this.value;
  if (this.value == "") {
    refreshFinishingGravurePrice(0)
  } else {
    refreshFinishingGravurePrice(gravure.price)
  }
});

// Price 
function refreshFinishingGravurePrice(gravurePrice) {
  myPersonalisation.totalPrice.gravure = gravurePrice;
  refreshTotalAmout();
}

/************ First code init ************/

function refreshTotalAmout() {
  selectors.totalPrice.innerHTML = myPersonalisation.totalPrice.color +
    myPersonalisation.totalPrice.symbol +
    myPersonalisation.totalPrice.finishing + 
    myPersonalisation.totalPrice.gravure + "€";
}


refreshTotalAmout();
