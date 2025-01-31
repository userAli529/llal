let promotion = [
    {
        name: "Тример",
        category: " 🎁+5 лезвия",
        price: "1,300 сом",
        image: "img/photo_2025-01-24_21-02-47.jpg",
        link: "https://wa.me/message/LCGVHSKPUUYKD1",
        nome: '#1',    
        size: 'Размер: 30см'
        
    },
    {
        name: "Asics",
        category: "Court MZ",
        price: "3,300 сом",
        image: "img/(WMNS) Asics Court MZ 1203A127-200.jpg",
        link: "https://wa.me/message/LCGVHSKPUUYKD1",
        nome: '#2',
        size: "Размер: 39, 40, 41"

    },
    {
        name: "Wholesale",
        category: "Winter Blank ",
        price: "3,300 сом",
        image: "img/Wholesale Winter Blank Cotton Fleece Hoodie Unisex Zipper Oversize Cotton Custom Hoodie High Quality Cotton Hoodies For Women - Buy Women Winter Blank Cotton Fleece Hoodie Men Casual Oversize Cotton Custom Hoodie H.jpg",
        link: "https://wa.me/message/LCGVHSKPUUYKD1",
        nome: '#3',
        size: "Размеры:XL, 2XL"
    },
    {
        name: "Ethereum",
        category: "Cryptocurrency",
        price: "1,300 сом",
        image: "img/Bonnet Bombardier Kosta en coton - homme - Gris.jpg",
        link: "https://wa.me/message/LCGVHSKPUUYKD1",
        nome: '#4',
        size: "Размер: L, XL"
    },
    {
        name: "Wholesale",
        category: "Winter Blank ",
        price: "3,300 сом",
        image: "img/Елена _ AliExpress plus size.jpg",
        link: "https://wa.me/message/LCGVHSKPUUYKD1",
        nome: '#1',
        size: "Размеры:XL, 2XL"
    },
   
];

const productList = document.getElementById('product-card__wrapper2');


function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    let nomeText = product.nome ? `<p>${product.nome}</p>` : '';

    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <h2>${product.category}</h2>
        ${nomeText}
        <h1>${product.price}</h1>
        
        <a href="${product.link}">
            <button class="button">Заказать 🛒</button>
        </a>
    `;

    productList.appendChild(productCard);
}


function searchProduct(query) {
    const filteredProducts = promotion.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
    return filteredProducts;
}


const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', (e) => {
    const query = e.target.value;
    const foundProducts = searchProduct(query);


    productList.innerHTML = '';
 
    foundProducts.forEach(createProductCard);
});


promotion.forEach(createProductCard);
    