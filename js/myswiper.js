/*
 * 轮播图部分
 */
// import Swiper from './swiper-bundle.min.js'
function mySwiper() {
  return new Swiper('.swiper-container', {
    loop: true, // 循环模式选项
    effect: 'fade', // 切换模式
    speed: 700, // 动画时间
    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    },
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
}

/*
 * 商品详情右侧轮播
 */
function rightSwiper() {
  return new Swiper('.main-right', {
    effect: 'fade', // 切换模式
    fadeEffect: {
      crossFade: true,
    },
    speed: 500, // 动画时间
    // 如果需要分页器
    pagination: {
      el: '.right-pagination',
      clickable: true,
    },
  })
}

/*
 * 热门品牌左侧轮播
 */
function hotSwiper() {
  return new Swiper('.fine-swiper', {
    loop: true, // 循环模式选项
    effect: 'fade', // 切换模式
    fadeEffect: {
      crossFade: true,
    },
    // 如果需要分页器
    pagination: {
      el: '.fine-pagination',
      type: 'progressbar',
    },
    // 如果需要前进后退按钮
    navigation: {
      prevEl: '.fine-button-prev',
      nextEl: '.fine-button-next',
    },
  })
}
mySwiper()
rightSwiper()
hotSwiper()
// export {
//   mySwiper,
//   rightSwiper,
//   hotSwiper,
// }
