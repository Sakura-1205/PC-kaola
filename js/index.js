// import { createEle } from './public.js'
// import { mySwiper, rightSwiper, hotSwiper } from './myswiper.js'
/*
 * 统一获取元素
 */
// createEle()
// 搜索栏
let search = document.querySelector('.search')
let stickySearch = document.querySelector('.sticky-search-wrap')
// 轮播区域元素
let swiperWrap = document.querySelector('.swiper-wrap')
let swiperSlide = document.querySelector('.swiper-slide')
let buttonPrev = document.querySelector('.swiper-button-prev')
let buttonNext = document.querySelector('.swiper-button-next')
let tabDetail = document.querySelector('.tab-detail')
let tabDist = document.querySelector('.tab-dist')
let tab = document.querySelector('.tab')
let tabAs = document.querySelectorAll('.tab > a')
// 左右导航元素
let tipsNav = document.querySelector('.tips-nav')
let backTop = document.querySelector('.back-top')

/*
 * 左右导航部分
 */

// 控制左右控制按钮显示隐藏
buttonActive()

// 返回顶部
backToTop(backTop)

/*
 * 顶部搜索栏
 * 吸顶效果
 */

// 控制tab详情显示隐藏
tabDetailActive()

// 控制tipsnav吸顶
tipsNavFixed()
// 动态生成轮播图组件
// swiperNum()

function tipsNavFixed() {
  window.addEventListener('scroll', function (e) {
    // console.log(window.pageYOffset)
    if (window.pageYOffset > 55) {
      search.style.visibility = 'hidden'
      stickySearch.style.visibility = 'visible'
    } else {
      search.style.visibility = 'visible'
      stickySearch.style.visibility = 'hidden'
    }
    if (window.pageYOffset >= 620) {
      tipsNav.style.position = 'fixed'
      tipsNav.style.top = '75px'
    } else {
      tipsNav.style.position = 'absolute'
      tipsNav.style.top = '695px'
    }
  })
}

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

// // 动态生成轮播图组件
// function swiperNum() {

// }
