import vindigoImage from '/images/products/vindigo.jpeg';
import bordeauxImage from '/images/products/bordeaux.jpg';
import chardonayImage from '/images/products/chardonay.jpg';
import petulaImage from '/images/products/petula.jpeg';

var positionInPersonalisation = 0;

let navigation = [{
  "title": "Couleurs",
  "selectorName": "color"
}, {
    "title": "Logo",
    "selectorName": "logo"
},{
    "title": "i dont know",
    "selectorName": "finishing"
}, {
    "title": "loool",
    "selectorName": "symbols"
}, {
    "title": "I REALLY REALY DONT KNOW",
    "selectorName": "gravure"
}];

let products = {
    "vindigo": {
        "name": "Le Vindigo",
        "paragraph": "Le Vindigo doit son nom au célèbre vin bleu.Un Portefeuil à la couleur originale et rayonnante qui ne manquera pas de vous surprendre et de vous séduire.",
        "image": vindigoImage,
        "price": 550
    },
    "bordeaux": {
        "name": "Le Bordeaux",
        "paragraph": "Inspiré des plus grands vins de bordeaux. Sucombez à l’élégance de ce modèle qui saura vous séduire et vous accompagner pour toutes les occasions.",
        "image": bordeauxImage,
        "price": 550
    },
    "chardonay": {
        "name": "Le Chardonay",
        "paragraph": "Le Vindigo doit son nom au célèbre vin bleu.Un Portefeuil à la couleur originale et rayonnante qui ne manquera pas de vous surprendre et de vous séduire.",
        "image": chardonayImage,
        "price": 550
    },
    "petula": {
        "name": "Le Petula",
        "paragraph": "Inspiré d’un vin paré d’une belle robe rose sur une teinte légèrement violine. Laissez vous séduire par ce modèle plein de charme et de fraîcheur.",
        "image": petulaImage,
        "price": 1000
    }
};

let selectors = {
  "navigation": {
    "rightBtn": document.querySelector('.personalisation__btn__right'),
    "leftBtn": document.querySelector('.personalisation__btn__left'),
    "title": document.querySelector('.personalisation__btn h2'),
    "personalisationStep": {
      "color": document.querySelector('.personalisation__choices__colors'),
      "logo": document.querySelector('.personalisation__choices__logo'),
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
  "btns": [
    { "element": document.querySelector('.btn--vindigo'), productName: "vindigo" },
    { "element": document.querySelector('.btn--bordeaux'), productName: "bordeaux" },
    { "element": document.querySelector('.btn--petula'), productName: "petula" },
    { "element": document.querySelector('.btn--chardonay'), productName: "chardonay" },
  ]
};

/************ PERSONALISATION ************/
console.log(vindigoImage);
var colors = document.querySelector('.personalisation__choices__colors');
var totalPrice = {
  colors: 0,
  logo: 50
};


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

function refreshNavigation() {
  console.log("current position " + positionInPersonalisation)
  if (positionInPersonalisation == 0) {
    selectors.navigation.leftBtn.style.visibility = "hidden";
  } else {
    selectors.navigation.leftBtn.style.visibility = "visible";
  }

  if (positionInPersonalisation == 4) {
    selectors.navigation.rightBtn.style.visibility = "hidden";
  } else {
    selectors.navigation.rightBtn.style.visibility = "visible";
  }

  let titleNavigation = navigation[positionInPersonalisation].title;
  selectors.navigation.title.innerHTML = titleNavigation + " " + (positionInPersonalisation + 1) + "/5" 
}

function transitionPersonalisationStep(beforeStep, afterStep) {
  beforeStep.style.visibility = "hidden";
  afterStep.style.visibility = "visible";
}

refreshNavigation();

/************ COLORS PERSONALISATION ************/


selectors.btns.forEach(function (btnInfo) {
  btnInfo.element.addEventListener("click", function () {
    refreshProductInfo(products[btnInfo.productName])
    refreshColorPrice(products[btnInfo.productName].price);
  })
})

// Product interface 

function refreshProductInfo(product) {
  selectors.product.title.innerHTML = product.name;
  selectors.product.paragraph.innerHTML = product.paragraph;
  selectors.product.image.src = product.image;
}

// Price 
function refreshColorPrice(amountAdded) {
  totalPrice.colors = amountAdded;
  refreshTotalAmout();
}

function refreshTotalAmout() {
  selectors.totalPrice.innerHTML = totalPrice.colors + totalPrice.logo + "€";
}



//f"zreyhgtfr  or (i = 0;i < colors.length; i++)

refreshTotalAmout();

    
        
    
