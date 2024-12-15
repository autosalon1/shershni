
 let cart = [];
 let total = 0;
 let currentUser = null;

 function addToCart(car) {
     cart.push(car);
     total += getCarPrice(car);
     alert(`${car} додано в кошик!`);
     updateCart();
 }

 function getCarPrice(car) {
     switch (car) {
 case 'Ford Mustang': return 800000;
 case 'Chevrolet Camaro': return 900000;
 case 'BMW M4': return 1200000;
 case 'Audi A5': return 1150000;
 case 'Mercedes-Benz C-Class': return 1300000;
 case 'Porsche 911': return 2500000;
 case 'Volkswagen Golf': return 750000;
 case 'Nissan Altima': return 850000;
 case 'Subaru Outback': return 1000000;
 default: return 0;
}
}
 function updateCart() {
     const cartItemsContainer = document.getElementById('cartItems');
     cartItemsContainer.innerHTML = '';

     cart.forEach((car, index) => {
         const item = document.createElement('div');
         item.className = 'cart-item';
         item.innerHTML = `
             <span class="cart-item-name">${car}</span>
             <button class="btn-remove" onclick="removeFromCart(${index})">Видалити</button>
         `;
         cartItemsContainer.appendChild(item);
     });
     document.getElementById('totalPrice').innerText = `Разом: ${total} грн`;
 }
 function buyCart() {
if (cart.length === 0) {
 alert("Ваш кошик порожній. Додайте автомобіль перед покупкою.");
 return;
}
alert(`Дякуємо за покупку! Ви придбали: ${cart.join(", ")} на суму ${total} грн.`);

// Очищення кошика після покупки
cart = [];
total = 0;
updateCart();
saveCart(); 
}

function removeFromCart(index) {
total -= getCarPrice(cart[index]);
cart.splice(index, 1);
updateCart();
saveCart(); 
}


 function showCarDetails(car) {
     document.getElementById('modalTitle').innerText = car;

     // Оновлюємо галерею
     const modalGallery = document.getElementById('modalGallery');
     modalGallery.innerHTML = '';

     const carImages = getCarImages(car);
     carImages.forEach((image) => {
         const img = document.createElement('img');
         img.src = image;
         img.onclick = () => openLargeImage(image); 
         modalGallery.appendChild(img);
     });

     // Додаємо опис автомобіля
     document.getElementById('modalDescription').innerText = getCarDescription(car);
     document.getElementById('carModal').style.display = 'block';
 }

 function closeModal() {
     document.getElementById('carModal').style.display = 'none';
 }

 // Функція для отримання зображень автомобіля
 function getCarImages(car) {
switch (car) {
 case 'Ford Mustang': return ['ford1.jpg', 'ford2.jpg', 'ford3.jpg'];
 case 'Chevrolet Camaro': return ['camaro1.jpg', 'camaro2.jpg', 'camaro3.jpg'];
 case 'BMW M4': return ['bmw41.jpg', 'bmw42.jpg', 'bmw43.jpg'];
 case 'Audi A5': return ['audi1.jpg', 'audi2.jpg', 'audi3.jpg'];
 case 'Mercedes-Benz C-Class': return ['mercedes1.jpg', 'mercedes2.jpg', 'mercedes3.jpg'];
 case 'Porsche 911': return ['porsche1.jpg', 'porsche2.jpg', 'porsche3.jpg'];
 case 'Volkswagen Golf': return ['golf1.jpg', 'golf2.jpg', 'golf3.jpg'];
 case 'Nissan Altima': return ['altima1.jpg', 'altima2.jpg', 'altima3.jpg'];
 case 'Subaru Outback': return ['outback1.jpg', 'outback2.jpg', 'outback3.jpg'];
 default: return [];
}
}

 // Функція для отримання опису автомобіля
 function getCarDescription(car) {
switch (car) {
 case 'Ford Mustang':
     return 'Ford Mustang – потужний спортивний автомобіль з 5.0-літровим V8 двигуном, потужністю 450 к.с. Прискорення до 100 км/год за 4.2 секунди. Витрата пального: 15 л/100 км. Оснащений технологією Sync 3 та системою безпеки Ford Co-Pilot360.';
 case 'Chevrolet Camaro':
     return 'Chevrolet Camaro – стильний купе з 6.2-літровим V8 двигуном, потужністю 455 к.с. Прискорення до 100 км/год за 4.0 секунди. Витрата пального: 13 л/100 км. Оснащений мультимедійною системою Chevrolet MyLink та системою активної безпеки.';
 case 'BMW M4':
     return 'BMW M4 – розкішний спортивний автомобіль з 3.0-літровим 6-циліндровим двигуном, потужністю 473 к.с. Прискорення до 100 км/год за 4.1 секунди. Витрата пального: 10 л/100 км. Має систему iDrive 7.0 та адаптивний круїз-контроль.';
 case 'Audi A5':
     return 'Audi A5 – елегантний автомобіль з 2.0-літровим TFSI двигуном, потужністю 249 к.с. Прискорення до 100 км/год за 6.0 секунд. Витрата пального: 7 л/100 км. Оснащений системою MMI та асистентом водія.';
 case 'Mercedes-Benz C-Class':
     return 'Mercedes-Benz C-Class – класичний автомобіль з 2.0-літровим 4-циліндровим двигуном, потужністю 255 к.с. Прискорення до 100 км/год за 5.9 секунд. Витрата пального: 8 л/100 км. Має систему MBUX і функції безпеки Pre-Safe.';
 case 'Porsche 911':
     return 'Porsche 911 – легендарний спорткар з 3.0-літровим 6-циліндровим двигуном, потужністю 379 к.с. Прискорення до 100 км/год за 4.0 секунди. Витрата пального: 9 л/100 км. Оснащений Porsche Communication Management і адаптивним спортивним шасі.';
 case 'Volkswagen Golf':
     return 'Volkswagen Golf – універсальний хетчбек з 1.4-літровим TSI двигуном, потужністю 150 к.с. Прискорення до 100 км/год за 8.0 секунд. Витрата пального: 5.5 л/100 км. Має систему Info-Entertainment з Apple CarPlay та Android Auto.';
 case 'Nissan Altima':
     return 'Nissan Altima – стильний седан з 2.5-літровим 4-циліндровим двигуном, потужністю 188 к.с. Прискорення до 100 км/год за 8.0 секунд. Витрата пального: 6.5 л/100 км. Оснащений системою NissanConnect і технологією безпеки ProPILOT Assist.';
 case 'Subaru Outback':
     return 'Subaru Outback – надійний кросовер з 2.5-літровим 4-циліндровим двигуном, потужністю 182 к.с. Прискорення до 100 км/год за 8.7 секунд. Витрата пального: 8 л/100 км. Оснащений системою EyeSight і повним приводом Subaru AWD.';
 default:
     return '';
}
}

 function openLargeImage(image) {
     document.getElementById('largeImage').src = image;
     document.getElementById('largeImageModal').style.display = 'block';
 }

 function closeLargeImage() {
     document.getElementById('largeImageModal').style.display = 'none';
 }

 // Закрити модальне вікно при натисканні за його межами
 window.onclick = function(event) {
     const modal = document.getElementById('carModal');
     if (event.target === modal) {
         closeModal();
     }
     const largeImageModal = document.getElementById('largeImageModal');
     if (event.target === largeImageModal) {
         closeLargeImage();
     }
 }

 function showCart() {
     document.getElementById('cart').style.display = 'block';
 }
 function showContacts() {
     document.getElementById('catalog').style.display = 'none';
     document.getElementById('contacts').style.display = 'block';
 }

 function showCatalog() {
     document.getElementById('catalog').style.display = 'block';
     document.getElementById('contacts').style.display = 'none';
 }

 // Додайте слухачі подій для кнопок навігації
 document.querySelector('.nav-bar a[href="#catalog"]').addEventListener('click', showCatalog);
 document.querySelector('.nav-bar a[href="#contacts"]').addEventListener('click', showContacts);
 



document.getElementById('logo').addEventListener('click', function(e) {
e.preventDefault();  
location.reload();   
});





// Глобальна змінна для авторизації
let isLoggedIn = false;

// Відкрити/закрити модальне вікно
function toggleAuthModal() {
const modal = document.getElementById("authModal");
modal.style.display = modal.style.display === "block" ? "none" : "block";
}

// Дія кнопки входу/виходу
function handleAuthAction() {
    if (isLoggedIn) {
        logout();
    } else {
        toggleAuthModal();
    }
}


// Показати форму реєстрації
function showRegister() {
document.getElementById("authForm").style.display = "none";
document.getElementById("registerForm").style.display = "block";
document.getElementById("authModalTitle").innerText = "Реєстрація";
}

// Показати форму входу
function showLogin() {
    document.getElementById("authForm").style.display = "block";
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("authModalTitle").innerText = "Вхід";
}
// Обробка входу
function handleLogin() {
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

if (email && password) {
 isLoggedIn = true;
 currentUser = email; 
 alert("Ви успішно увійшли!");
 toggleAuthModal();
 updateAuthButton();
 updateCartAccess();
 loadCart(); 
} else {
 alert("Будь ласка, введіть коректні дані.");
}
}


// Обробка реєстрації
function handleRegister() {
    const regEmail = document.getElementById("regEmail").value;
    const regPassword = document.getElementById("regPassword").value;
    const regConfirmPassword = document.getElementById("regConfirmPassword").value;

    if (!validateEmail(regEmail)) {
        alert("Будь ласка, введіть коректну електронну пошту.");
        return;
    }

    if (!regEmail || !regPassword || !regConfirmPassword) {
        alert("Будь ласка, заповніть усі поля.");
        return;
    }

    if (regPassword !== regConfirmPassword) {
        alert("Паролі не співпадають!");
        return;
    }

    // Повідомлення про успішну реєстрацію
    alert("Реєстрація успішна! Увійдіть у ваш акаунт.");
    
    // Автоматичний перехід на вікно входу
    showLogin();
}

// Оновити текст кнопки авторизації
function updateAuthButton() {
    const authButton = document.getElementById("authButton");
    authButton.innerText = isLoggedIn ? "Вийти" : "Вхід / Реєстрація";
}


// Перевірка доступу до кошика
function addToCart(car) {
if (!isLoggedIn) {
 alert("Ви повинні увійти в акаунт, щоб додати товар у кошик.");
 return;
}
cart.push(car);
total += getCarPrice(car);
alert(`${car} додано в кошик!`);
updateCart();
saveCart(); 
}

// Оновлення доступу до кнопок додавання товарів
function updateCartAccess() {
const buttons = document.querySelectorAll(".btn-add-to-cart");
buttons.forEach((button) => {
button.disabled = !isLoggedIn;
button.style.opacity = isLoggedIn ? "1" : "0.5";
});
}

// Ініціалізація (вимкнути кнопки додавання до входу)
document.addEventListener("DOMContentLoaded", () => {
updateCartAccess();
updateAuthButton();
});




// Збереження кошика в локальному сховищі
function saveCart() {
if (currentUser) {
 localStorage.setItem(`cart_${currentUser}`, JSON.stringify(cart));
 localStorage.setItem(`total_${currentUser}`, JSON.stringify(total));
}
}


// Завантаження кошика з локального сховища
function loadCart() {
if (currentUser) {
 const savedCart = JSON.parse(localStorage.getItem(`cart_${currentUser}`)) || [];
 const savedTotal = JSON.parse(localStorage.getItem(`total_${currentUser}`)) || 0;

 cart = savedCart; 
 total = savedTotal; 

 updateCart(); 
}
}


document.addEventListener("DOMContentLoaded", () => {
updateCartAccess();
updateAuthButton();

if (isLoggedIn && currentUser) {
 loadCart(); 
}
});


function closeModalOnOutsideClick(event) {
// Перевіряємо, чи клікнули поза межами вікна
const modalContent = document.querySelector('.custom-auth-modal-content');
if (!modalContent.contains(event.target)) {
toggleAuthModal(); // Закриваємо модальне вікно
}
}
function toggleAuthModal() {
const modal = document.getElementById("authModal");
modal.style.display = (modal.style.display === "block") ? "none" : "block";
}



// Слухач для зміни значення повзунка
document.getElementById("priceRange").addEventListener("input", function () {
const price = this.value;
document.getElementById("priceLabel").innerText = formatPrice(price) + " грн";
filterCarsByPrice(price);
});

// Функція для фільтрації машин за ціною
function filterCarsByPrice(maxPrice) {
const cars = document.querySelectorAll('.car-item');
cars.forEach(car => {
 const carPriceText = car.querySelector('.car-price').innerText;
 const carPrice = parseInt(carPriceText.replace('Ціна: ', '').replace(' грн', '').replace(/\s/g, ''));

 if (carPrice <= maxPrice) {
     car.style.display = 'block'; 
 } else {
     car.style.display = 'none'; 
 }
});
}

// Форматування ціни для відображення (наприклад, 1500000 -> 1,500,000)
function formatPrice(price) {
return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Оновлення тексту з ціною на основі значення повзунка
function updatePriceLabel() {
const price = document.getElementById("priceRange").value;
const formattedPrice = new Intl.NumberFormat().format(price);  // Форматуємо ціну з комами
document.getElementById("priceLabel").innerText = `${formattedPrice} грн`;
}

// Отримуємо елементи
const modal = document.getElementById("filterModal");
const openModalButton = document.getElementById("openFilterModal");
const closeModalButton = document.querySelector(".close-modal");

// Відкрити модальне вікно
openModalButton.addEventListener("click", () => {
    modal.style.display = "block";
});

// Закрити модальне вікно
closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Закрити модальне вікно при натисканні поза ним
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}
function handleLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!validateEmail(email)) {
        alert("Будь ласка, введіть коректну електронну пошту.");
        return;
    }

    if (email && password) {
        isLoggedIn = true;
        currentUser = email;
        alert("Ви успішно увійшли!");
        toggleAuthModal();
        updateAuthButton();
        updateCartAccess();
        loadCart();
    } else {
        alert("Будь ласка, введіть коректні дані.");
    }
}

function handleRegister() {
    const regEmail = document.getElementById("regEmail").value;
    const regPassword = document.getElementById("regPassword").value;
    const regConfirmPassword = document.getElementById("regConfirmPassword").value;

    if (!validateEmail(regEmail)) {
        alert("Будь ласка, введіть коректну електронну пошту.");
        return;
    }

    if (!regEmail || !regPassword || !regConfirmPassword) {
        alert("Будь ласка, заповніть усі поля.");
        return;
    }

    if (regPassword !== regConfirmPassword) {
        alert("Паролі не співпадають!");
        return;
    }

    alert("Реєстрація успішна! Увійдіть у ваш акаунт.");
    showLogin();
}


function logout() {
    // Скидання стану авторизації
    isLoggedIn = false;
    currentUser = null;

    // Очищення локального сховища
    localStorage.removeItem(`cart_${currentUser}`);
    localStorage.removeItem(`total_${currentUser}`);

    // Оновлення інтерфейсу
    alert("Ви вийшли з акаунта.");
    updateAuthButton();
    updateCartAccess();

    // Очистка кошика в UI
    cart = [];
    total = 0;
    updateCart();
}

document.addEventListener("DOMContentLoaded", () => {
    updateCartAccess();
    updateAuthButton();

    if (isLoggedIn && currentUser) {
        loadCart();
    }
});






function sendTelegramMessage(message) {
    const botToken = '7699208703:AAEJilADxOeYGEFCSlBwxDKONbaRZFph0Io';
    const chatId = '907680030'; // ID вашого чату

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
        }),
    })
    .then(response => {
        if (response.ok) {
            console.log('Повідомлення надіслано в Telegram!');
        } else {
            response.json().then(data => {
                console.error('Помилка:', data);
                alert(`Не вдалося надіслати повідомлення: ${data.description}`);
            });
        }
    })
    .catch(error => console.error('Помилка:', error));
}

function buyCart() {
    if (cart.length === 0) {
        alert('Ваш кошик порожній. Додайте автомобіль перед покупкою.');
        return;
    }

    const date = new Date().toLocaleDateString();
    const userEmail = currentUser; // Email користувача з авторизації

    // Отримання IP-адреси користувача через API ipify
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const userIp = data.ip; // IP-адреса користувача
            const message = `
                Покупка автомобіля:
                ----------------------
                Машини: ${cart.join(", ")}
                Сума: ${total} грн
                Дата: ${date}
                Email: ${userEmail}
                IP: ${userIp}
            `;

            sendTelegramMessage(message);

            alert('Дякуємо за покупку!');
            cart = [];
            total = 0;
            updateCart();
            saveCart();
        })
        .catch(error => {
            console.error('Не вдалося отримати IP-адресу:', error);
            alert('Покупка здійснена, але виникла помилка з надсиланням IP-адреси.');
        });
}