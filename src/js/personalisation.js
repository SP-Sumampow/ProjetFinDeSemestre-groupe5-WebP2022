//colors img
import vindigoImage from '/images/products/vintigo-court-simple.svg';
import bordeauxImage from '/images/products/bordeaux-court-simple.svg';
import chardonayImage from '/images/products/chardonay-court-simple.svg';
import petulaImage from '/images/products/petula-court-simple.svg';

// symbol 
import vindigoBarreSymbolImage from '/images/products/vintigo-court-barre-or.svg';
import vindigoGrappeSymbolImage from '/images/products/vintigo-court-grappe-or.svg';

import bordeauxBarreSymbolImage from '/images/products/bordeaux-court-barre-or.svg';
import bordeauxGrappeSymbolImage from '/images/products/bordeaux-court-grappe-or.svg';

import chardonayBarreSymbolImage from '/images/products/chardonay-court-barre-or.svg';
import chardonayGrappeSymbolImage from '/images/products/chardonay-court-grappe-or.svg';

import petulabarreSymbolImage from '/images/products/petula-court-barre-or.svg';
import petulagrappeSymbolImage from '/images/products/petula-court-grappe-or.svg';

// finishing 
import vindigopearlFinishingImage from '/images/products/petula-court-grappe-or.svg';
import vindigometalFinishingImage from '/images/products/petula-court-grappe-or.svg';

import bordeauxpearlFinishingImage from '/images/products/petula-court-grappe-or.svg';
import bordeauxmetalFinishingImage from '/images/products/petula-court-grappe-or.svg';

import chardonaypearlFinishingImage from '/images/products/petula-court-grappe-or.svg';
import chardonaymetalFinishingImage from '/images/products/petula-court-grappe-or.svg';

import petulapearlFinishingImage from '/images/products/petula-court-grappe-or.svg';
import petulametalFinishingImage from '/images/products/petula-court-grappe-or.svg';

var positionInPersonalisation = 0;

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

let symbols = {
  "bar": {
    "image": {
      "vindigo": vindigoBarreSymbolImage,
      "bordeaux": bordeauxBarreSymbolImage,
      "chardonay": chardonayBarreSymbolImage,
      "petula": petulabarreSymbolImage,
      },
      "price": 550
  },
  "grappe": {
    "image": {
      "vindigo": vindigoGrappeSymbolImage,
      "bordeaux": bordeauxGrappeSymbolImage,
      "chardonay": chardonayGrappeSymbolImage,
      "petula": petulagrappeSymbolImage,
      },
      "price": 550
  }
};

let finishing = {
  "pearl": {
    "image": {
      "vindigo": vindigopearlFinishingImage,
      "bordeaux": bordeauxpearlFinishingImage,
      "chardonay": chardonaypearlFinishingImage,
      "petula": petulapearlFinishingImage,
      },
      "price": 550
  },
  "metal": {
    "image": {
      "vindigo": vindigometalFinishingImage,
      "bordeaux": bordeauxmetalFinishingImage,
      "chardonay": chardonaymetalFinishingImage,
      "petula": petulametalFinishingImage,
      },
      "price": 550
  }
};

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
  },
  "totalPrice": document.querySelector('.personalisation__price p'),
  "colorBtns": [
    { "element": document.querySelector('.btn--vindigo'), productName: "vindigo" },
    { "element": document.querySelector('.btn--bordeaux'), productName: "bordeaux" },
    { "element": document.querySelector('.btn--petula'), productName: "petula" },
    { "element": document.querySelector('.btn--chardonay'), productName: "chardonay" },
  ],
  "symbolBtns": [
    { "element": document.querySelector('.btn__choices__symbols__bar'), symbolName: "bar" },
    { "element": document.querySelector('.btn__choices__symbols__grape'), symbolName: "grappe" },
  ],
  "finishingBtns": [
    { "element": document.querySelector('.personalisation__choices__finishing__pearl'), finishingName: "pearl" },
    { "element": document.querySelector('.personalisation__choices__finishing__metal'), finishingName: "metal" },
  ],
  
};

/************ PERSONALISATION ************/
var myPersonalisation = {
  colorKey: "",
  totalPrice: {
    color: 0,
    symbol: 0
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
  positionInPersonalisation++;
  let afterStepName = navigation[positionInPersonalisation].selectorName;
  let afterStepNameSelector = selectors.navigation.personalisationStep[afterStepName];
  transitionPersonalisationStep(currentStepSelector, afterStepNameSelector);
  refreshNavigation();
})

function initMobileNavigation() {
  console.log("lolol");
  console.log(selectors.navigation.personalisationStep);
  selectors.navigation.personalisationStep.logo.style.visibility = "hidden";
  selectors.navigation.personalisationStep.finishing.style.visibility = "hidden";
  selectors.navigation.personalisationStep.symbols.style.visibility = "hidden";
  selectors.navigation.personalisationStep.gravure.style.visibility = "hidden";
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
    refreshSymbolInfo(symbol)
    refreshSymbolPrice(symbol.price)
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


function refreshTotalAmout() {
  selectors.totalPrice.innerHTML = myPersonalisation.totalPrice.color + myPersonalisation.totalPrice.symbol + "€";
}



//f"zreyhgtfr  or (i = 0;i < colors.length; i++)

refreshTotalAmout();

    
        
/************ finishing PERSONALISATION ************/


selectors.finishingBtns.forEach(function (btnFinisingInfo) {
  btnFinisingInfo.element.addEventListener("click", function () {
    var finishing = finishing[btnFinisingInfo.finishingName];
    refreshFinishingInfo(finishing)
    refreshFinishingPrice(finishing.price)
  })
})

function refreshFinishingInfo(finishing) {
  selectors.product.image.src = finishing.image[myPersonalisation.colorKey];
}

// Price 
function refreshSymbolPrice(amountAdded) {
  myPersonalisation.totalPrice.finishing = amountAdded;
  refreshTotalAmout();
}


function refreshTotalAmout() {
  selectors.totalPrice.innerHTML = myPersonalisation.totalPrice.color + myPersonalisation.totalPrice.symbol + "€";
}

//

refreshTotalAmout();

/************ gravure PERSONALISATION ************/


  
