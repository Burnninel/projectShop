function card(id, productName, productImg, productValue, component) {
    var parcelValue = productValue / 10;  
    var card = 
                `
                  <div class="card cardItemShop" id="${id}">
                    <div class="itemShop">
                      <img src="../images/${productImg}.png" alt="imgCardShop" class="imgItem" >
                      <div class="formCardItemShop">
                        <h5 class="title">${productName}</h5>
                        <span class="productValue">R$${productValue}</span>
                        <span class="parcelProductValue">10x de R$${parcelValue} sem juros</span>
                        <button class="btnBuyCarousel">Comprar</button>
                      </div>
                    </div>
                  </div>
                `;

    $(`#${component}`).append(card);
};

function carousel(idCarousel, active) {  
  var carousel = 
                  `
                    <div class="carousel-item ${active}">
                        <div class="component" id="${idCarousel}">

                        </div>
                    </div>
                  `;

    $('.carousel-inner').append(carousel);
}

function component() {
  var carousel =  `<div class="carousel-inner"></div>`;

  $('#myCarousel').append(carousel);
}

function layoutCarousel() {
  
  component();
  
  carousel('firstCarousel', 'active');
  carousel('secondCarousel');

  card('one', '1', 'product1', '999.90', 'firstCarousel');
  card('two', '2', 'product1', '999.90', 'firstCarousel');
  card('three', '3', 'product1', '999.90', 'firstCarousel');
  card('four', '4', 'product1', '999.90', 'firstCarousel');

  card('five', '5', 'product1', '1999.90', 'secondCarousel');
  card('six', '6', 'product1', '1999.90', 'secondCarousel');
  card('seven', '7', 'product1', '1999.90', 'secondCarousel');
  card('eitch', '8', 'product1', '1999.90', 'secondCarousel');

}

$(document).ready(function() {
  layoutCarousel();

  // const mediaQuery = window.matchMedia('(max-width: 1000px)');

  // if (mediaQuery) {
  // } else {
  //   responsiveLayoutCarousel();
  // }

})

// Backucp:
// function responsiveLayoutCarousel() {
  
//   component();
  
//   carousel('firstCarousel', 'active');
//   carousel('secondCarousel');
//   carousel('thirdCarousel');
//   carousel('fourthCarousel');

//   card('Chubasa Frita', 'product1', '999.90', 'firstCarousel');
//   card('Chubasa Frita', 'product1', '999.90', 'firstCarousel');

//   card('Chubasa Frita', 'product1', '999.90', 'secondCarousel');
//   card('Chubasa Frita', 'product1', '999.90', 'secondCarousel');

//   card('Chasa Grdta', 'product1', '1999.90', 'thirdCarousel');
//   card('Chasa Grdta', 'product1', '1999.90', 'thirdCarousel');

//   card('Chasa Grdta', 'product1', '1999.90', 'fourthCarousel');
//   card('Chasa Grdta', 'product1', '1999.90', 'fourthCarousel');

// }