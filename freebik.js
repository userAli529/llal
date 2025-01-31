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
        name: "Тример",
        category: " 🎁+5 лезвия",
        price: "1,300 сом",
        image: "img/photo_2025-01-24_21-02-47.jpg",
        link: "https://wa.me/message/LCGVHSKPUUYKD1",
        nome: '#2',    
        size: 'Размер: 30см'
        
    },
    {
        name: "Тример",
        category: " 🎁+5 лезвия",
        price: "1,300 сом",
        image: "img/photo_2025-01-24_21-02-47.jpg",
        link: "https://wa.me/message/LCGVHSKPUUYKD1",
        nome: '#3',    
        size: 'Размер: 30см'
        
    },
    {
        name: "Тример",
        category: " 🎁+5 лезвия",
        price: "1,300 сом",
        image: "img/photo_2025-01-24_21-02-47.jpg",
        link: "https://wa.me/message/LCGVHSKPUUYKD1",
        nome: '#4',    
        size: 'Размер: 30см'
        
    },
    {
        name: "Тример",
        category: " 🎁+5 лезвия",
        price: "1,300 сом",
        image: "img/photo_2025-01-24_21-02-47.jpg",
        link: "https://wa.me/message/LCGVHSKPUUYKD1",
        nome: '#5',    
        size: 'Размер: 30см'
        
    },
    {
        name: "Тример",
        category: " 🎁+5 лезвия",
        price: "1,300 сом",
        image: "img/photo_2025-01-24_21-02-47.jpg",
        link: "https://wa.me/message/LCGVHSKPUUYKD1",
        nome: '#6',    
        size: 'Размер: 30см'
        
    },
];

const productList = document.getElementById('product-card__wrapper2');

// Функция для создания карточки товара
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
        <h4>${product.size}</h4>
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
