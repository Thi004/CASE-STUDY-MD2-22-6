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
                    <div class="card-group">
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
    ]
let strNew = ``;
for (let i = 0; i < listNew.length; i++) {
    strNew += `
    <div class="col-3 mt-3">
                    <div class="card-group">
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