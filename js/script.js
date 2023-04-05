// МЕНЮ-ГАМБУРГЕР
let burger = document.querySelector(".burger");                     // Помещает в переменную меню-бургер (его кнопку)
let menu = document.querySelector(".header__nav");                  // Помещает в переменную меню навигации по странице
let menuLinks = menu.querySelectorAll(".nav__item-link");           // Помещает в переменную-массив элементы меню навигации по странице (ссылки)

burger.addEventListener("click", function() {                       // Навешивает обработчик событий по клику на кнопке меню-бургера
  burger.classList.toggle("burger--active");                        // Добавляет/удаляет активный класс кнопке меню-бургера 
  menu.classList.toggle("header__nav--active");                     // Добавляет/удаляет активный класс меню навигации по странице
  document.body.classList.toggle("stop-scroll")                     // Не даёт сайту скролиться при активной кнопке меню-бургера
});

menuLinks.forEach(function(element) {                               // Проходится циклом по массиву из элементов меню навигации по странице, помещая каждый в переменную element
  element.addEventListener("click", function() {                    // Навешивает обработчик событий по клику на элемент меню навигации по странице
    burger.classList.remove("burger--active");                      // Удаляет класс активной у кнопки меню-бургера (возвращает кнопку в исходное состояние)
    menu.classList.remove("header__nav--active");                   // Удаляет класс активного у меню навигации по странице (скрывает его)
    document.body.classList.remove("stop-scroll")                   // Позволяет сайту снова скроллиться
  });
});

// ФОРМА ПОИСКА
document.addEventListener("DOMContentLoaded", (event) => {                              // Ждёт, когда загрузится страница
  document.getElementById("search-form--open").addEventListener("click", (event) => {   // Навешивает обработчик событий по клику на кнопку поиска (лупу)
    document.getElementById("search-form").classList.add("search-form--show");          // Добавляет активный класс форме поиска (отображает её)
  });
  document.getElementById("search-form--close").addEventListener("click", (event) => {   // Навешивает обработчик событий по клику на кнопку закрытия формы поиска (крестик)
    document.getElementById("search-form").classList.remove("search-form--show");        // Удаляет активный класс у формы поиска (скрывает её)
  });
  document.getElementById("search-form").addEventListener("submit", (event) => {         // Отключает перезагрузку страницы при отправке формы 
    event.preventDefault();
  })
});

// СЛАЙДЕР (КАРУСЕЛЬ) SWIPER
const swiper = new Swiper('.swiper-container', {
  // Опциональные параметры
  direction: 'horizontal',
  loop: true,

  // Пагинация
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});

// ТАБЫ
let tabsBtn = document.querySelectorAll(".tabs-nav__btn");      // Помещает в переменную-массив все кнопки переключения табов
let tabsItem = document.querySelectorAll(".tabs-item");         // Помещает в переменную-массив все табы (тексты, картинки, кнопки)

tabsBtn.forEach(function(element) {                             // Проходится циклом по каждой кнопке переключения табов, помещая каждую по очереди в переменную element
  element.addEventListener("click", function(event) {           // Навешивает обработчик события по клику на каждую кнопку переключения табов
    const path = event.currentTarget.dataset.path;              // Помещает в переменную data-атрибут (data-path) нажатой кнопки переключения табов

    tabsBtn.forEach(function(btn) {                             // Проходится циклом по каждой кнопке переключения табов, помещая каждую по очереди в переменную btn
      btn.classList.remove('tabs-nav__btn--active');            // Удаляет класс активной у всех кнопок переключения табов, у которых он есть
    });
    event.currentTarget.classList.add("tabs-nav__btn--active"); // Добавляет класс активной нажатой кнопке переключения табов 

    tabsItem.forEach(function(element) {                        // Проходится циклом по каждому табу, помещая каждый по очереди в переменную element
      element.classList.remove("tabs-item--active");            // Удаляет класс активного у всех табов, у которых он есть
    });
    document.querySelector(`[data-target="${path}"]`).classList.add("tabs-item--active"); // Добавляет класс активного табу, который соответствует нажатой кнопке,
  });                                                                                     // т.е. его data-target соответствует data-path кнопки переключения табов   
});

// АККОРДЕОН MICHU2K
new Accordion(".accordion-list", {
  elementClass: "accordion",
  triggerClass: "accordion__control",
  panelClass: "accordion__content",
  activeClass: "accordion--active"
});