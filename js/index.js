// document.querySelector('h1').onclick = function (){
//   alert(123);
// };

window.addEventListener('load', function () {


  //头部导航栏,下拉菜单

  //大盒子委托对象
  let box = document.querySelector('#topNavRight')
  //下拉li
  let pullDown = document.querySelectorAll('.pullDown')
  //小三角
  let trans = document.querySelectorAll('.red1 > i')

  box.addEventListener('mouseover', function (e) {
    let target = e.target
    if (target.className == 'pullDown') {
      target.children[1].style.display = 'block'
      target.children[0].children[0].className = 'trans'
      target.addEventListener('mouseleave', function () {
        this.children[1].style.display = 'none'
        this.children[0].children[0].className = ''
      })
    }
  })

  //吸顶效果

  function getScrollTop() {
    var scrollTop = 0
    if (document.documentElement && document.documentElement.scrollTop) {
      scrollTop = document.documentElement.scrollTop
    } else if (document.body) {
      scrollTop = document.body.scrollTop
    }

    return scrollTop
  }

  let nav_dom = document.querySelector('#docHead')

  //换logo
  let logo = document.querySelector('#docHeadWrap > a')

  //左侧导航
  let indexleft = document.querySelector('#indexleft')
  //右侧导航
  let rightBarNew = document.querySelector('#rightBarNew')



  window.addEventListener('scroll', function () {
    if (getScrollTop() > 50) {
      nav_dom.classList.add('fix')
      indexleft.style.top = '670px'
      rightBarNew.style.top = '670px'
    } else {
      nav_dom.classList.remove('fix')
      indexleft.style.top = '772px'
      rightBarNew.style.top = '772px'
    }

    //  两侧导航栏定位
    if (getScrollTop() > 600) {
      indexleft.style.top = '66px'
      indexleft.style.position = 'fixed'
      rightBarNew.style.top = '66px'
      rightBarNew.style.position = 'fixed'
    } else {
      indexleft.style.top = '670px'
      indexleft.style.position = 'absolute'
      rightBarNew.style.top = '670px'
      rightBarNew.style.position = 'absolute'
      if (getScrollTop() < 50) {
        indexleft.style.top = '772px'
        rightBarNew.style.top = '772px'
      }
    }
  })



  // 分类划入改变颜色
  let ul = document.querySelector('#funcTab')

  ul.addEventListener('mouseover', function (e) {
    let target = e.target
    if (target.nodeName == 'A') {
      target.className = 'red'
      target.addEventListener('mouseleave', function (e) {
        this.className = ''
      })
    }
  })

  //二级菜单显示隐藏

  let list = document.querySelector('#list')

  list.addEventListener('mouseover', function (e) {
    let target = e.target
    if (target.nodeName == 'LI') {
      /* target.style.background = '#fff'
      target.children[0].classList.add('iconhv')
      target.children[1].style.display = 'inline-block'
      target.children[2].classList.add('bgr') */
      target.classList.add('z-hover')
      target.lastElementChild.style.display = 'block'
      //移出
      target.addEventListener('mouseleave', function (e) {
        /* this.style.background = ''
        this.children[0].classList.remove('iconhv')
        this.children[1].style.display = 'none'
        this.children[2].classList.remove('bgr') */
        this.classList.remove('z-hover')
        this.lastElementChild.style.display = 'none'

      })
    }

  })

  //滑动显示小红心 
  let redBox = document.querySelector('.brandListContainer')

  redBox.addEventListener('mouseover', function (e) {
    let target = e.target
    if (target.nodeName == 'A') {
      target.children[1].style.display = 'block'
      target.addEventListener('mouseleave', function (e) {
        this.children[1].style.display = 'none'
      })
    }
  })

  //轮播图
  var mySwiper = new Swiper('.swiper-container', {
    effect: 'fade', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: true,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    /* scrollbar: {
      el: '.swiper-scrollbar',
    }, */
  })



})