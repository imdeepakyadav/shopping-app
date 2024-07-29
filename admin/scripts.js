let data = {
    "banner_slider": [
        {
            "image": "https://example.com/image1.jpg",
            "link": "https://example.com/link1"
        },
        {
            "image": "https://example.com/image2.jpg",
            "link": "https://example.com/link2"
        }
    ],
    "categories": [
        {
            "category_link": "https://fktr.in/C10sA0r",
            "category_name": "Mobiles",
            "category_image": "https://imdeepakyadav.github.io/shopping-apps/uploaded/categories/030924060241mobiles.jpg",
            "open_in": "webview"
        },
        {
            "category_link": "https://bitli.in/zjDxr0z",
            "category_name": "Electronic",
            "category_image": "https://imdeepakyadav.github.io/shopping-apps/uploaded/categories/030924055333electronics.webp",
            "open_in": "webview"
        }
    ],
    "stores": [
        {
            "store_link": "https://fkrt.it/3LRDRvNNNN",
            "store_name": "Flipkart",
            "store_image": "https://imdeepakyadav.github.io/shopping-apps/uploaded/stores/030924080609flipkart.png",
            "open_in": "webview"
        },
        {
            "store_link": "https://amzn.to/3Ev8KPG",
            "store_name": "Amazon",
            "store_image": "https://imdeepakyadav.github.io/shopping-apps/uploaded/stores/030924080446amazon.png",
            "open_in": "webview"
        }
    ],
    "strip_banner": [],
    "electronic": [],
    "top_deals": [],
    "food": [],
    "mens_wear": [],
    "womens_wear": [],
    "smartphone": [],
    "app_setting": [],
    "ad_setting": []
};

document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
    renderCategories();
});

function renderMenu() {
    const menuList = document.getElementById('menuList');
    const menuItems = [
        "categories",
        "banner_slider",
        "stores",
        "strip_banner",
        "electronic",
        "top_deals",
        "food",
        "mens_wear",
        "womens_wear",
        "smartphone",
        "app_setting",
        "ad_setting"
    ];
    menuItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="#${item}" onclick="showSection('${item}')">${item.replace('_', ' ')}</a>`;
        menuList.appendChild(listItem);
    });
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.classList.remove('hidden');
    }
}

function renderCategories() {
    const tableBody = document.querySelector('#categoriesTable tbody');
    tableBody.innerHTML = '';
    data.categories.forEach((category, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${category.category_name}</td>
            <td><img src="${category.category_image}" alt="${category.category_name}" width="50"></td>
            <td>${category.category_link}</td>
            <td>
                <button onclick="editCategory(${index})">Edit</button>
                <button onclick="deleteCategory(${index})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function addCategory() {
    document.getElementById('formContainer').classList.remove('hidden');
    document.getElementById('formTitle').innerText = 'Add Category';
    document.getElementById('categoryForm').reset();
    document.getElementById('categoryId').value = '';
}

function editCategory(index) {
    document.getElementById('formContainer').classList.remove('hidden');
    document.getElementById('formTitle').innerText = 'Edit Category';
    document.getElementById('categoryId').value = index;
    document.getElementById('categoryName').value = data.categories[index].category_name;
    document.getElementById('categoryImage').value = data.categories[index].category_image;
    document.getElementById('categoryLink').value = data.categories[index].category_link;
}

function deleteCategory(index) {
    data.categories.splice(index, 1);
    renderCategories();
}

document.getElementById('categoryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const category = {
        category_name: document.getElementById('categoryName').value,
        category_image: document.getElementById('categoryImage').value,
        category_link: document.getElementById('categoryLink').value
    };
    const index = document.getElementById('categoryId').value;
    if (index) {
        data.categories[index] = category;
    } else {
        data.categories.push(category);
    }
    document.getElementById('formContainer').classList.add('hidden');
    renderCategories();
});

function viewJSON() {
    const jsonContainer = document.getElementById('jsonContainer');
    const jsonOutput = document.getElementById('jsonOutput');
    jsonOutput.textContent = JSON.stringify(data, null, 2);
    jsonContainer.classList.remove('hidden');
}
