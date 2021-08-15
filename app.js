//menu items

const menu = [

    {
        id: 1,
        title: "Pancakes",
        category: "breakfast",
        price: 8.00,
        img: "./img/pancakes.jpg",
        info: "This is a great recipe that I found in my Grandma's recipe book.Judging from the weathered look of this recipe card, this was a family favorite."
    },
    {
        id: 2,
        title: "Porridge",
        category: "breakfast",
        price: 6.80,
        img: "./img/poridge.jpg",
        info: "Oranges have a sweet but brightly acidic flavor, which suits them well as a topping for..."
    },
    {
        id: 3,
        title: "Meat Lover",
        category: "lunch",
        price: 15.00,
        img: "./img/meatLover.jpg",
        info: "Fresh  grilled chicken and pork with our best sauces."
    },
    {
        id: 4,
        title: "CLassic Tomato Soup",
        category: "lunch",
        price: 10.00,
        img: "./img/redSoup.jpg",
        info: "Tomato soup is an excellent source of antioxidants, including lycopene, flavonoids, and vitamins C and E, among many others."
    },
    {
        id: 5,
        title: "Pumpkin soup",
        category: "lunch",
        price: 14.89,
        img: "./img/pumpkin-soup.jpg",
        info: "Chopped pumpkin and onion into big chunks, mixed garlic and olive oil and grilled it for 25 minutes."
    },
    {
        id: 6,
        title: "Salad Bowl",
        category: "dinner",
        price: 17.00,
        img: "./img/salad-bowl.jpg",
        info: "Great recipe that I found in my Grandma's recipe book.Judging from the weathered look of this recipe card, this was a family favorite."
    },
    {
        id: 7,
        title: "Steak",
        category: "dinner",
        price: 30.00,
        img: "./img/steak.jpg",
        info: "A well-known meat scientist calls marbling the taste fat. In addition, a good steak has a bright, cherry red-color to the lean."
    },
    {
        id: 8,
        title: "Salad&Nuts",
        category: "dinner",
        price: 12.00,
        img: "./img/SaladNuts.jpg",
        info: "Fresh veggies and the best part THE NUTS"
    },
    {
        id: 9,
        title: "Vanilla Shake",
        category: "Drinks",
        price: 8.00,
        img: "./img/shake.jpg",
        info: "Perfect drink on a summer day"
    }

]

const section = document.querySelector(".row");
const buttons = document.querySelector('.container');

//load content
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    
    const categories = menu.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ['all'])

//adding buttons dinamically
    const categoryBtns = categories.map(function (category) {
        return `<button class="btn filter-btn mr-3" type="button" data-category=${category}>${category}</button>`;
    }).join('');

    buttons.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll('.filter-btn');

//filtering
 filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const category = e.currentTarget.dataset.category;
        const menuCategory = menu.filter(function (menuItem) {
            if (menuItem.category === category) {
                return menuItem;
            }
        })

        if (category === "all") displayMenuItems(menu);
        else displayMenuItems(menuCategory);

    })
})
})

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<div class="menu-item col-6 mb-3">
                  <img class="img photo" src=${item.img} alt=${item.title}>
                  <h4 class="underline item-info">${item.title}</h4>
                  <h4 class="price item-info">${item.price}$</h4>
                  <p class="description item-text">${item.info}</p>
              </div>`;
    })

    displayMenu = displayMenu.join('');
    console.log(displayMenu);
    section.innerHTML = displayMenu;
}




