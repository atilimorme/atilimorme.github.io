// Swiper Library Initilize
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  // auto slide swiper
  // var nextSwiper = document.querySelector('.swiper-button-next');
  // setInterval(() => {
    
  //   nextSwiper.click();
  // }, 15000);

  // Nav go functions
  let products = document.getElementById('products');
  let mainDiv = document.querySelector('.main-div'); 
  let header = document.querySelector('header');
  let contact = document.getElementById('contact');
  let media = document.getElementById('media');
  let brands = document.getElementById('brands');
  let cert = document.getElementById('cert');
  let gMap = document.getElementById('g-map');
  let items = document.querySelectorAll('.item');
  function goProductFunc(){
    products.scrollIntoView();
    window.scrollBy({
      top: -80,
      behavior: 'smooth' 
    });
    
  }
  function goCorporateFunc(){
    mainDiv.scrollIntoView()
    window.scrollBy({
      top: -60,
      behavior: 'smooth' 
    });
  }
  function goUpFunc(){
    header.scrollIntoView({behavior:"smooth"})
  }
  function goContactFunc(){
    contact.scrollIntoView();
    window.scrollBy({
      top: -60,
      behavior: 'smooth'
    });
  }
  function goMediaFunc(){
    media.scrollIntoView();
    window.scrollBy({
      top: -75,
      behavior: "smooth"
    })
  }
  function goBrandsFunc(){
    brands.scrollIntoView();
    window.scrollBy({
      top: -70,
      behavior: "smooth"
    })
  }
  function goCertFunc(){
    cert.scrollIntoView();
    window.scrollBy({
      top: -70,
      behavior: "smooth"
    })
  }
  function goMapFunc(){
    gMap.scrollIntoView();
    window.scrollBy({
      top: -70,
      behavior: "smooth"
    })
  }


  let blury = document.getElementById('blur');
  ///open certifications function
  function openCertFunc(item){
    let cert = document.querySelector(`#cert-item${item}`);
    let certImg = document.querySelector(`#cert-item${item} img`);
    if(cert.classList.contains('opened')){
      certImg.style = 'width: 60%; position: relative;transform: unset;'
      blury.style = 'visibility:hidden; opacity: 0;'

    }else{
      certImg.style = `position:fixed; width: auto; height: 90%; z-index:9999999; left:50%; top:50%; transform:translate(-50%,-50%);box-shadow:0 0 15px #242424`
      blury.style = 'visibility: visible; opacity: 1';
    }
    cert.classList.toggle('opened');
  }

  //UP button
  let upBtn = document.getElementById('up-btn');
  window.addEventListener('scroll' , function(){
    if(this.window.scrollY > 100){
      upBtn.style = 'right: 1.5%'
    }else{
      upBtn.style = 'right: -60px'
    }
  })

  //focus item in navbar

  function removeItemFocus(){
    items.forEach(item=>{
      item.classList.remove('item-focus')
    })
  }
  items.forEach(item =>{
    item.addEventListener('click' , function(){
      removeItemFocus();
      this.classList.add('item-focus');
    })
  })

  // switch iten focus in navbar when scrollY arrive to element
  let corpItem = document.querySelector('.corp-item');
  let prodItem = document.querySelector('.prod-item');
  let facItem = document.querySelector('.fac-item')
  let certiItem = document.querySelector('.certi-item')
  let brandItem = document.querySelector('.brand-item');
  let mapItem = document.querySelector('.map-item');
  let contactItem = document.querySelector('.contact-item')
  window.addEventListener('scroll' , function(){
    if (window.scrollY >= mainDiv.offsetTop - 150){
      removeItemFocus();
      corpItem.classList.add('item-focus')
    }
    if (window.scrollY >= products.offsetTop - 150){
      removeItemFocus();
      prodItem.classList.add('item-focus')
    }
    if (window.scrollY >= media.offsetTop - 150){
      removeItemFocus();
      facItem.classList.add('item-focus')
    }
    if (window.scrollY >= cert.offsetTop - 150){
      removeItemFocus();
      certiItem.classList.add('item-focus')
    }
    if (window.scrollY >= brands.offsetTop - 150){
      removeItemFocus();
      brandItem.classList.add('item-focus')
    }
    if (window.scrollY >= gMap.offsetTop - 150){
      removeItemFocus();
      mapItem.classList.add('item-focus')
    }
    if (window.scrollY >= contact.offsetTop - 150){
      removeItemFocus();
      contactItem.classList.add('item-focus')
    }
  })

//open product item (fetch pages)

function openProduct(indx){
  let productsContent = document.getElementById('products-content');
  productsContent.style = 'display:none'
  if (indx == 1){
    fetch('./pages/home-textiles.html')
    .then(response => response.text())
    .then(data =>{
      products.innerHTML += data;
    })
    .catch(error => console.error('Error:', error));
  }
  if(indx == 2){
    fetch('./pages/wedding.html')
    .then(response => response.text())
    .then(data =>{
      products.innerHTML += data
    })
  }
  if(indx == 3){
    fetch('./pages/outerwear.html')
    .then(response => response.text())
    .then(data =>{
      products.innerHTML += data
    })
  }
  if(indx == 4){
    fetch('./pages/underwear.html')
    .then(response => response.text())
    .then(data =>{
      products.innerHTML += data
    })
  }
  if(indx == 5){
    fetch('./pages/medical.html')
    .then(response => response.text())
    .then(data =>{
      products.innerHTML += data
    })
  }
  if(indx == 6){
    fetch('./pages/teknik.html')
    .then(response => response.text())
    .then(data =>{
      products.innerHTML += data
    })
  }

  goProductFunc();
}

// Go back btn in products
function goBackProducts(){
  let productsContent = document.getElementById('products-content');
  productsContent.style = 'display: block'
  let productItem = document.getElementById('product-item');
  productItem.remove();
  goProductFunc();
}

// open burger lists inside navbar in mobile mode
let ulList = document.querySelector('ul.list');
function openBurgerList(){
  
  ulList.classList.toggle('open-list')
}

// hide list navbar if clicked on item in mobile mode
ulList.addEventListener('click' , function(){
  if(ulList.classList.contains('open-list')){
    setTimeout(() => {
      this.classList.remove('open-list');
    }, 200);
    
  }
})
