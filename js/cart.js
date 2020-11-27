let goodsList = document.querySelector('.goods-list')
ajax({
  method: 'POST',
  url: 'http://www.qigexiaoairen.cn:3001/index/cart',
  data: {
    user: 'coder',
  },
}).then(res => {
  let str = ''
  let data = JSON.parse(res).data
  for (const { id, img, name, price, sum } of data) {
    str += `
    <div class="goods-item">
            <input class="goods-check" type="checkbox" />
            <img src="${img}" alt="" />
            <p class="goods-title">${name}</p>
            <p class="goods-price">${price}</p>
            <div class="goods-count">
              <div class="count-des">-</div>
              <input class="goods-num" type="text" value="${sum}" />
              <div class="count-add">+</div>
            </div>
            <div v-bind="totalprice" class="totalprice">${price * sum}</div>
            <div num="${id}" class="goods-remove">删除</div>
          </div>
    `
  }
  goodsList.innerHTML = str
})
let backTop = document.querySelector('.backtop div')
// 商品列表的元素
let allCheck = document.querySelector('.signin-title>input')
let goodsItem = document.getElementsByClassName('goods-item')
let checks = document.getElementsByClassName('goods-check')
let goodsNum = document.querySelectorAll('.goods-num')
let totalPrice = document.querySelectorAll('.totalprice')
let allPrice = document.querySelector('.all-price-inner')
let allNum = document.querySelectorAll('.all-num-inner')

// 返回顶部
backToTop(backTop)
// 实现全选
allBoxCheck()
// 实现加减按钮计数
changeCount()
// 计算总价
getAllPrice()
// 表单元素改变触发
changePrice()

function allBoxCheck() {
  Array.from(checks).forEach(val => {
    val.onclick = function () {
      allCheck.checked = true
      Array.from(checks).forEach(val => {
        if (!val.checked) {
          allCheck.checked = false
        }
      })
      // 每次改变时给goods-list增加一个自定义属性，让观察器能检测到元素的变化
      goodsList.setAttribute('change', 'check')
    }
  })
  allCheck.onclick = function () {
    Array.from(checks).forEach(val => {
      val.checked = allCheck.checked
    })
    // 每次改变时给goods-list增加一个自定义属性，让观察器能检测到元素的变化
    goodsList.setAttribute('change', 'check')
  }
}

function changeCount() {
  goodsList.addEventListener('click', function (e) {
    if (e.target.classList.contains('count-des')) {
      if (e.target.nextElementSibling.value > 1) {
        e.target.nextElementSibling.value -= 1
        // 改变每个商品*数量的总价
        e.target.parentNode.nextElementSibling.innerText =
          parseInt(e.target.parentNode.previousElementSibling.innerText) * parseInt(e.target.nextElementSibling.value)
      }
    }
    if (e.target.classList.contains('count-add')) {
      let num = parseInt(e.target.previousElementSibling.value)
      e.target.previousElementSibling.value = num + 1
      // 改变每个商品*数量的总价
      e.target.parentNode.nextElementSibling.innerText =
        parseInt(e.target.parentNode.previousElementSibling.innerText) * parseInt(e.target.previousElementSibling.value)
    }
    if (e.target.classList.contains('goods-num')) {
      // 每次改变时给goods-list增加一个自定义属性，让观察器能检测到元素的变化
      goodsList.setAttribute('change', 'check')
    }
    // 移除当前
    if (e.target.classList.contains('goods-remove')) {
      // 发送请求删除当前
      ajax({
        method: 'POST',
        url: 'http://www.qigexiaoairen.cn:3001/index/cart/del',
        data: {
          id: e.target.getAttribute('num'),
        },
      }).then(res => {
        console.log(res)
      })
      e.target.parentNode.remove()
    }
  })
}
function changePrice() {
  console.log(goodsNum)
  goodsNum.forEach(val => {
    val.addEventListener('keyup', function () {
      getAllPrice()
      this.parentNode.nextElementSibling.innerText =
        parseInt(this.value) * parseInt(this.parentNode.previousElementSibling.innerText)
    })
  })
}

// 计算购物车中商品的总价
function getAllPrice() {
  let totalPrice = 0
  let totalNum = 0
  ;[...goodsItem].forEach(val => {
    if (val.children[0].checked) {
      totalPrice += parseInt(val.querySelector('.totalprice').innerText)
    }
    totalNum += parseInt(val.querySelector('.goods-num').value)
  })
  allPrice.innerText = totalPrice || 0
  allNum[0].innerText = totalNum || 0
  allNum[1].innerText = totalNum || 0
}

// 创建一个观察器，检测页面指定元素的变化，当元素变化时执行回调函数
const observer = new MutationObserver(getAllPrice)
observer.observe(goodsList, { subtree: true, childList: true, attributes: true })

// 用proxy实现对表单数据的双向绑定
let proxy = new Proxy(
  {},
  {
    get(obj, key) {},
    set(obj, key, val) {
      document.querySelectorAll(`[v-bind=${key}]`).forEach(item => {
        item.innerText = getGoodsTotalNum()
      })
      return true
    },
  }
)
// 遍历所有记录购物车数量的表单,取到所有表单累加的值
function getGoodsTotalNum() {
  let sum = 0
  document.querySelectorAll('.goods-num').forEach(inp => {
    sum += parseInt(inp.value)
  })
  return sum
}
document.querySelectorAll('.goods-num').forEach(val => {
  val.addEventListener('keyup', function () {
    proxy['goods-num'] = val.value
  })
})
