// 首页数据
let banners, tabData

let tabNav = document.querySelector('.tab-dist .tab')
let slideitem = document.querySelectorAll('.swiper-wrap .swiper-slide')
ajax({
  method: 'GET',
  url: 'http://www.qigexiaoairen.cn:3001/public/index.json',
}).then(res => {
  banners = JSON.parse(res).banners
  tabData = JSON.parse(res).tab
  // 渲染轮播图
  swiperAcrive()
  // 渲染tab菜单
  dropTabDetail()
  // 控制tab详情显示隐藏
  tabDetailActive()
})

// 渲染轮播图
function swiperAcrive() {
  banners.forEach((val, index) => {
    slideitem[index].style.backgroundImage = `url(${val})`
  })
  new Swiper('.swiper-container', {
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
// 渲染tab菜单
function dropTabDetail() {
  let ele = `
    <p>
      <img src="./img/3.png" alt="" />
      <span>所有分类</span>
    </p>
  `
  tabData.forEach((val, index) => {
    ele += `
    <a href="javascript:;">
      <img src="${val.img}" alt="" />
      <span>${val.type}</span>
      <img src="./img/3.png" alt="" />
    </a>
    `
  })
  tabNav.innerHTML = ele
}

// 控制tab详情显示隐藏
function tabDetailActive() {
  let tablist = document.querySelectorAll('.tab-dist>.tab>a')
  let tabDist = document.querySelector('.tab-dist')
  let tabLeft = document.querySelector('.detail-left')
  tablist.forEach((a, key) => {
    a.onmouseenter = function () {
      tabDetail.style.display = 'block'
      tabDetail.style.display = 'block'
      // 同时改变数据
      for (let { type, img, value } of tabData) {
        if (type === a.children[1].innerHTML) {
          let ele = ''
          value.forEach(val => {
            ele += `
            <div>
              <h3>${val.title}</h3>
              <p>
              ${val.sorts
                .map(span => {
                  if (span.light) {
                    return '<span style="color: #ff1e32">' + span.name + '</span>'
                  } else {
                    return '<span>' + span.name + '</span>'
                  }
                })
                .join('')}
              </p>
            </div>
            `
          })
          tabLeft.innerHTML = ele
        }
      }
    }
  })
  tabDist.addEventListener('mouseleave', function (e) {
    tabDetail.style.display = 'none'
    tabDetail.style.display = 'none'
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
rightSwiper()
hotSwiper()

// ajax
function ajax(obj) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open(obj.method, obj.url)
    if (obj.method.toLowerCase() === 'get') {
      obj.url += '?'
      for (let key in obj.data) {
        obj.url += `${key}=${obj.data[key]}&`
      }
      // 避免浏览器缓存
      obj.url += `_=${Date.now()}`
      obj.url = obj.url.slice(0, -1)
      xhr.send()
    }
    if (obj.method.toLowerCase() === 'post') {
      let str = ''
      for (let key in obj.data) {
        str += `${key}=${obj.data[key]}&`
      }
      str = str.slice(0, -1)
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
      xhr.send(str)
    }
    xhr.onreadystatechange = function () {
      // 判断状态值.0-4代表五种状态,4代表最终完成
      if (xhr.readyState === 4) {
        // 判断状态码
        if (xhr.status === 200) {
          resolve(xhr.responseText)
        }
        reject('请求失败')
      }
    }
  })
}
