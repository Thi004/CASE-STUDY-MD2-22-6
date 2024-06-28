let listSale = [
    {
        name: ' [ĐĂNG KÝ MYSONY, GIẢM THÊM 200K] Tai nghe không dây có công nghệ chống ồn WH-1000XM5',
        price: '6,490,000₫',
        img: 'https://store.sony.com.vn/cdn/shop/products/6145c1d32e6ac8e63a46c912dc33c5bb_400x.png?v=1695816342',
        star: '&#9733; &#9733; &#9733; &#9733; &#9734;',
    },
    {
        name: ' [ĐĂNG KÝ MYSONY, GIẢM THÊM 200K] Tai nghe không dây có công nghệ chống ồn WH-1000XM4',
        price: '5,290,000₫',
        img: 'https://store.sony.com.vn/cdn/shop/products/WHM4white_400x.png?v=1694056028',
        star: '&#9733; &#9733; &#9733; &#9733; &#9734;'
    },
    {
        name: ' [ĐĂNG KÝ MYSONY, GIẢM THÊM 200K] Tai nghe Chống ồn không dây WF-1000XM5 (BD24)',
        price: '5,490,000₫',
        img: 'https://store.sony.com.vn/cdn/shop/files/Primary_image_black_0fdc450d-5025-45ae-9552-9adaa53b043a_400x.jpg?v=1712907019',
        star: '... '
    },
    {
        name: ' [ĐĂNG KÝ MYSONY, GIẢM THÊM 200K] Tai nghe Chống ồn không dây WF-1000XM5 - Màu trắng (BD24)',
        price: '5,490,000₫',
        img: 'https://store.sony.com.vn/cdn/shop/files/Primary_image_white_84f80a30-82bf-4acb-95af-953e4d6603c5_400x.jpg?v=1712907241',
        star: '... '
    },


    ]

let str = ``;
for (let i = 0; i < listSale.length; i++) {
    str += `
    <div class="col-3 mt-3">
                    <div>
                        <div class="card">
                            <img src="${listSale[i].img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${listSale[i].name}</h5>
                                <small class="text-muted">${listSale[i].star}</small>                              
                                <h5 class="card-title"  style="color: red">${listSale[i].price}</h5>                          
                            </div>
                            <div class="card-footer">                       
                                <h6 class="card-text">Thêm vào giỏ hàng</h6>
                            </div>
                        </div>
                    </div>
                </div>

                
    `
}
document.getElementById('showProductSale').innerHTML = str;

let listNew = [
    {
        name: ' [ĐĂNG KÝ MYSONY, GIẢM THÊM 200K] Tai nghe không dây ULT Wear | WH-ULT900N (ST)',
        price: '4,490,000₫ ',
        img: 'https://store.sony.com.vn/cdn/shop/files/ULT_WEAR_Black_Front-Large_b6b57978-b462-40e7-8e13-1f397904d382_600x.jpg?v=1713252838',
        star: '...',
    },
    {
        name: 'Máy chơi game PlayStation 5 Slim',
        price: '13,300,000₫',
        img: 'https://store.sony.com.vn/cdn/shop/files/PS5_D_SA_RNDR_LT_PROD_RGB_E32_240125_600x.png?v=1711962851',
        star: '...',
    },
    {
        name: 'Bộ máy chơi game PS5 hai tay cầm',
        price: '15,000,000₫',
        img: 'https://store.sony.com.vn/cdn/shop/files/PS5_2xDSWC_D_BNDL_RNDR_LT_PROD_RGB_ETCK_240206_600x.png?v=1712287416',
        star: '...',
    },
    {
        name: 'BRAVIA 3 - 55inch | K-55S30 | 4K HDR Processor X1™ | 4K Ultra HD | Dải tần nhạy sáng cao (HDR) | Smart TV (Google TV)',
        price: '17,890,000₫',
        img: 'https://store.sony.com.vn/cdn/shop/files/1_65_S30_blk_blk_outsideh_front-Mid_600x.png?v=1714962630',
        star: '...',
    },
    {
        name: '[Đặt hàng trước tặng Bravia Cam 4,5 triệu] BRAVIA 9 - 85inch | Bộ xử lý XR Processor | Mini LED | 4K Ultra HD | Dải tần nhạy sáng cao (HDR) | TV thông minh (Google TV)',
        price: '121,990,000₫',
        img: 'https://store.sony.com.vn/cdn/shop/files/TVFY23_UP_Primary_image_5dc0f9f4-e178-41b7-84a2-b497cfc7b37a_400x.jpg?v=1718252662',
        star: '...',
    },
    {
        name: '[Đặt hàng trước tặng Bravia Cam 4,5 triệu] BRAVIA 8 - 55inch | XR Processor | OLED | 4K Ultra HD | Dải tần nhạy sáng cao (HDR) | Smart TV (Google TV)',
        price: '44,890,000₫',
        img: 'https://store.sony.com.vn/cdn/shop/files/TVFY23_UM_Primary_image_400x.jpg?v=1718251304',
        star: '...',
    },
    {
        name: '[Đặt hàng trước tặng Bravia Cam 4,5 triệu] BRAVIA 8 - 65inch | XR Processor | OLED | 4K Ultra HD | Dải tần nhạy sáng cao (HDR) | Smart TV (Google TV)\n' +
            'Model: K-65XR80 VN3',
        price: '64,890,000₫',
        img: 'https://store.sony.com.vn/cdn/shop/files/TVFY23_UM_Primary_image_aba78009-f306-40c0-8159-1e4e22891ed8_400x.jpg?v=1718252487',
        star: '...',
    },
    {
        name: '[Đặt hàng trước tặng Bravia Cam 4,5 triệu] BRAVIA 9- 75inch | Bộ xử lý XR Processor | Mini LED | 4K Ultra HD | Dải tần nhạy sáng cao (HDR) | TV thông minh (Google TV)\n' +
            'Model: K-75XR90 VN3',
        price: '92,890,000₫',
        img: 'https://store.sony.com.vn/cdn/shop/files/TVFY23_UP_Primary_image_400x.jpg?v=1718252571',
        star: '...',
    },
    ]
let strNew = ``;
for (let i = 0; i < listNew.length; i++) {
    strNew += `
    <div class="col-3 mt-3">
                    <div>
                        <div class="card">
                            <img src="${listNew[i].img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${listNew[i].name}</h5>
                                <small class="text-muted">${listNew[i].star}</small>
                                <h5 class="card-title"  style="color: red">${listNew[i].price}</h5>
                            </div>
                            <div class="card-footer">
                                <h6 class="card-text">Thêm vào giỏ hàng</h6>
                            </div>
                        </div>
                    </div>
                </div>
    `
}
document.getElementById('showProductNew').innerHTML = strNew;

//Phần chú thích
function showNote() {
    document.getElementById("myNote").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.drop-btn')) {
        var dropdowns = document.getElementsByClassName("note-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Get the button back to top
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    }
    else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


