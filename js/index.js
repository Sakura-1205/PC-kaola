window.addEventListener('DOMContentLoaded', function () {
  /*
   * 轮播图部分
   */
  const mySwiper = new Swiper('.swiper-container', {
    loop: true, // 循环模式选项
    effect: 'fade', // 切换模式
    speed: 700, // 动画时间
    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
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
  // 轮播区域元素
  let swiperWrap = document.querySelector('.swiper-wrap')
  let buttonPrev = document.querySelector('.swiper-button-prev')
  let buttonNext = document.querySelector('.swiper-button-next')
  let tabDetail = document.querySelector('.tab-detail')
  let tabDist = document.querySelector('.tab-dist')
  let tab = document.querySelector('.tab')
  let tabAs = document.querySelectorAll('.tab > a')
  // 左右导航元素
  let tipsNav = document.querySelector('.tips-nav')

  // 控制左右控制按钮显示隐藏
  buttonActive()
  // 控制tab详情显示隐藏
  tabDetailActive()

  // 控制tipsnav吸顶
  tipsNavFixed()
  // 动态生成轮播图组件
  // swiperNum()
  function buttonActive() {
    swiperWrap.addEventListener('mouseover', function () {
      buttonPrev.style.display = 'block'
      buttonNext.style.display = 'block'
    })
    swiperWrap.addEventListener('mouseleave', function () {
      buttonPrev.style.display = 'none'
      buttonNext.style.display = 'none'
    })
  }
  function tabDetailActive() {
    tabAs.forEach((a, key) => {
      a.onmouseenter = function () {
        tabDetail.style.display = 'block'
        tabDetail.style.display = 'block'
        // 同时改变数据
      }
    })
    tabDist.addEventListener('mouseleave', function (e) {
      tabDetail.style.display = 'none'
      tabDetail.style.display = 'none'
    })
  }
  // // 动态生成轮播图组件
  // function swiperNum() {

  // }
  /*
   * 左右导航部分
   */
  function tipsNavFixed() {
    document.addEventListener('scroll', function (e) {
      if (window.pageYOffset >= 670) {
        tipsNav.style.top = 695 + window.pageYOffset - 670 + 'px'
      } else {
        tipsNav.style.top = '695px'
      }
    })
  }
})
