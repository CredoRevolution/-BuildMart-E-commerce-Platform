function initOwlCarousel() {
  $('.info__list').owlCarousel({
    loop: true,
    margin: 100,
    center: true,
    autoWidth: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        dots: true,
      },
      320: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 5,
        nav: true,
        loop: false,
      },
    },
  })
}

$('.interesting-scroll__main').owlCarousel({
  loop: true,
  margin: 30,
  center: false,
  autoWidth: true,
  responsiveClass: true,
  autoplay: true,
  responsive: {
    320: {
      items: 2,
      dots: true,
      autoWidth: true,
      margin: 20,
      center: false,
    },
    768: {
      items: 3,
      margin: 0,
      nav: false,
      autoWidth: false,
      center: false,
    },
    1000: {
      items: 4,
      nav: false,
      loop: true,
    },
  },
})

// Функция для отключения Owl Carousel
function destroyOwlCarousel() {
  if ($('.info__list').hasClass('owl-carousel')) {
    $('.info__list').removeClass('owl-carousel')
    $('.info__list').removeClass('owl-theme')
  }
}

// Проверяем разрешение экрана с помощью медиа-запроса
function checkWindowSize() {
  if (window.matchMedia('(max-width: 575px)').matches) {
    initOwlCarousel() // Включаем Owl Carousel
  } else {
    destroyOwlCarousel() // Отключаем Owl Carousel
  }
}

// Вызываем проверку размера окна при загрузке страницы и при изменении размера окна
$(document).ready(function () {
  checkWindowSize()
})

$(window).resize(function () {
  checkWindowSize()
})

function toggleAnswer(element) {
  $('.faq-answer').css('display', 'none')
  $('.faq-icon img').attr('src', 'img/arrow-down.svg')
  $('.faq-question').css('color', '#F8F3F3')
  // Находим элемент с ответом, который находится после элемента с вопросом
  var answer = element.nextElementSibling
  // Переключаем видимость элемента с ответом
  if (answer.style.display === 'none') {
    answer.style.display = 'block'
    // Меняем знак плюс на минус
    element.querySelector('.faq-icon img').src = 'img/arrow-up.svg'
    element.style.color = '#E78E04'
  } else {
    answer.style.display = 'none'
    element.style.color = '#F8F3F3'
    // Меняем знак минус на плюс
    element.querySelector('.faq-icon img').src = 'img/arrow-down.svg'
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const navList = document.querySelector('.header-top__nav-list')
  const navListBefore = document.querySelector('.header-top__nav_menu')

  navListBefore.addEventListener('click', function () {
    navList.classList.toggle('active') // Переключаем состояние списка при клике
  })
})

function toggleHiddenItems(event) {
  var $currentButton = $(event.currentTarget)
  var $hiddenItems = $currentButton
    .closest('.catalog_full-list__list')
    .find('.catalog_full-list__item_hidden')
  $hiddenItems.toggle()

  // Изменение текста кнопки на "Показать все" или "Скрыть"
  var buttonText = $currentButton.text()
  $currentButton.text(buttonText === 'Показать все' ? 'Скрыть' : 'Показать все')
}

function toggleHiddenItemsServices(event) {
  var $currentButton = $(event.currentTarget)
  var $hiddenItems = $currentButton
    .closest('.many-services__table')
    .find('.many-services-table__service_hidden')
  if ($hiddenItems.css('display') == 'none') {
    $hiddenItems.css('display', 'flex')
    $currentButton.text('Скрыть')
  } else {
    $hiddenItems.css('display', 'none')
    $currentButton.text('Показать все')
  }
}

function toggleFilters(e) {
  $('.one-item-filter__main').removeClass('one-item-filter__main_active')
  $('.one-item-filter__main')
    .find('.one-item-filter-main__name_img')
    .attr('src', 'img/vector-filter-down.svg')
  $(this).parent().addClass('one-item-filter__main_active')
  if (
    $(this).find('.one-item-filter-main__name_img').attr('src') ===
    'img/vector-filter-down.svg'
  ) {
    $(this)
      .find('.one-item-filter-main__name_img')
      .attr('src', 'img/vector-filter-up.svg')
  }
}

var containerCatalog = $('.catalog-dropdown'),
  catalog = $('.header-top__nav-item__catalog'),
  containerClients = $('.clients-dropdown'),
  clients = $('.header-top__nav-item__clients')

function toggleCatalog(e) {
  if (catalog.is(e.target)) {
    $('.catalog-dropdown').show()
    $('.header-top__nav-item__catalog').addClass(
      'header-top__nav-item__catalog_active'
    )
    $('.close_catalog').attr('src', 'img/vector-close-catalog.svg')
    return
  }
  if (
    !containerCatalog.is(e.target) &&
    containerCatalog.has(e.target).length === 0
  ) {
    $('.catalog-dropdown').hide()
    $('.header-top__nav-item__catalog').removeClass(
      'header-top__nav-item__catalog_active'
    )
    $('.close_catalog').attr('src', 'img/more_svg.svg')
    return
  }
  if (
    $('.header-top__nav-item__catalog').hasClass(
      'header-top__nav-item__catalog_active'
    )
  ) {
  } else {
  }
}

function toggleClients(e) {
  if (clients.is(e.target)) {
    $('.clients-dropdown').show()
    $('.header-top__nav-item__clients').addClass(
      'header-top__nav-item__clients_active'
    )
    return
  }
  if (
    !containerClients.is(e.target) &&
    containerClients.has(e.target).length === 0
  ) {
    $('.clients-dropdown').hide()
    $('.header-top__nav-item__clients').removeClass(
      'header-top__nav-item__clients_active'
    )
    return
  }
}
$('body').on('click', toggleCatalog)
$('body').on('click', toggleClients)

function popupCall(event) {
  $('.popup-call').css('display', 'block')
  $('body').css('overflow', 'hidden')
  var scrollPosition = [
    self.pageXOffset ||
      document.documentElement.scrollLeft ||
      document.body.scrollLeft,
    self.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop,
  ]
  $('body').on('scroll', function () {
    window.scrollTo(scrollPosition[0], scrollPosition[1])
  })
}

function closePopupCall(event) {
  $('.popup-call').css('display', 'none')
  $('body').css('overflow', 'auto')
  $('body').off('scroll')
}

$('.one-item-main-filters__item_show').on('click', function () {
  $('.one-item__filter').toggle()
})

$('.one-item-main__list').on('click', function () {
  if ($(window).width() < 992) {
    $('.one-item__filter').hide()
  }
})

$('.catalog_full-list__item_more').on('click', toggleHiddenItems)
$('.services_full-list__item_more').on('click', toggleHiddenItemsServices)

$('#popup-call').on('click', popupCall)
$('.many-services-static__btn').on('click', popupCall)
$('.header-top__phone_adaptation').on('click', popupCall)
$('.popup-call__close').on('click', closePopupCall)
$('.popup-call__overlay').on('click', closePopupCall)

$('.one-item-filter-main__name').on('click', toggleFilters)

document
  .getElementById('header-top__search_dropdown')
  .addEventListener('click', function (event) {
    event.preventDefault()
  })
