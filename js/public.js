// 返回顶部
function backToTop(ele) {
  ele.onclick = function () {
    let zin = getComputedStyle(ele).zIndex || 0
    ele.style.zIndex = -1
    let timer = setInterval(() => {
      document.documentElement.scrollTop -= 60
      if (document.documentElement.scrollTop <= 0) {
        clearInterval(timer)
        ele.style.zIndex = zin
      }
    }, 20)
  }
}

// 取用户信息的函数
function getInfo(info, key) {
  return localStorage.getItem(info) && JSON.parse(localStorage.getItem(info))[key]
}
let uname = getInfo('userInfo', 'uname')
let str = ''
if (uname) {
  str = `
  <a href="javascript:;">您好，${uname}</a>
  <a class="login-out" href="javascript:;">退出</a>
`
} else {
  str = `
  <a href="javascript:;">考拉欢迎您</a>
  <a href="http://localhost:3000/login.html">登录</a>
  <a href="javascript:;">免费注册</a>
`
}
const header = `
      <div class="content">
        <nav class="nav-left">
          ${str}
          <a href="javascript:;">手机考拉</a>
        </nav>
        <nav class="nav-right">
          <a href="javascript:;">每日签到</a>
          <a href="javascript:;">我的订单</a>
          <a class="triangle" href="javascript:;">个人中心</a>
          <a class="triangle" href="javascript:;">客户服务</a>
          <a class="triangle" href="javascript:;">充值中心</a>
          <a class="triangle" href="javascript:;">消费者权益</a>
          <a class="triangle" href="javascript:;">更多</a>
          <a href="javascript:;">视频内容</a>
        </nav>
      </div>
  `
const search = `
      <h1>考拉海购</h1>
      <div class="input-wrap">
        <input type="text" placeholder="飞利浦" />
        <img class="img-l" src="./img/search.png" alt="" />
        <button></button>
        <img class="img-r" src="./img/search.png" alt="" />
      </div>
      <div class="cart">
        <img src="./img/02.png" alt="" />
        <span>购物车</span>
      </div>
      `

const footer = `
  <section class="promise content">
        <h4 class="clearfix">
          <div>正</div>
          <span>正品承诺</span>
          <span>正品保障 假一赔十</span>
        </h4>
        <h4>
          <div>正</div>
          <span>正品承诺</span>
          <span>正品保障 假一赔十</span>
        </h4>
        <h4>
          <div>正</div>
          <span>正品承诺</span>
          <span>正品保障 假一赔十</span>
        </h4>
        <h4>
          <div>正</div>
          <span>正品承诺</span>
          <span>正品保障 假一赔十</span>
        </h4>
      </section>

      <section class="other-link content">
        <div class="link-left">
          <div>
            <span>关注我们</span>
            <img src="./img/03.png" alt="" />
            <img src="./img/03.png" alt="" />
          </div>
        </div>
        <div class="link-middle">
          <dl>
            <dd>考拉保障</dd>
            <dt>假一赔十</dt>
            <dt>廉政举报</dt>
          </dl>
          <dl>
            <dd>考拉保障</dd>
            <dt>假一赔十</dt>
          </dl>
          <dl>
            <dd>考拉保障</dd>
            <dt>假一赔十</dt>
          </dl>
          <dl>
            <dd>考拉保障</dd>
            <dt>假一赔十</dt>
          </dl>
          <dl>
            <dd>考拉保障</dd>
            <dt>假一赔十</dt>
          </dl>
          <dl>
            <dd>考拉保障</dd>
            <dt>假一赔十</dt>
          </dl>
        </div>
        <div class="link-right">
          <span>扫描下载手机版</span>
        </div>
      </section>
  `

const copyright = `
      <div class="copyright content">
        <p>
          <span>增值电信业务经营许可证:浙B2 20160288</span>
          <span>(浙)网械平台备字[2018]第00007号</span>
          <span>阿里巴巴版权所有02003-2020隐私政策 -考拉海购</span>
        </p>
        <p>
          <span>网络文化经营许可证:浙网文(2020) 4340-180号</span>
          <span>浙江省网络食品销售第方平台提供者备案: 浙网食A33010006</span>
        </p>
        <p>
          <span>浙公网安备3010802002216号</span>
          <span>互联网药品信息服务资格证书编号(浙) -2017- 0027</span>
          <span>浙ICP备16011229号</span>
          <span>自营经营者信息</span>
        </p>
        <p>
          <img src="./img/trust.png" alt="" />
          <img src="./img/euseful.png" alt="" />
        </p>
      </div>
  `

const tips = `
      <a class="tips-red" href="javascript:;">首页</a>
      <a href="javascript:;">海外直购</a>
      <a href="javascript:;">工厂店</a>
      <a href="javascript:;">品质奶粉</a>
      <a href="javascript:;">人气面膜</a>
      <a href="javascript:;">充值</a>  
`
function createEle() {
  document.querySelector('#header') && (document.querySelector('#header').innerHTML = header)
  document.querySelector('.search') && (document.querySelector('.search').innerHTML = search)
  document.querySelector('#footer') && (document.querySelector('#footer').innerHTML = footer)
  document.querySelector('.copyright-wrap') && (document.querySelector('.copyright-wrap').innerHTML = copyright)
  document.querySelector('.tips').innerHTML && (document.querySelector('.tips').innerHTML = tips)
  // 退出功能
  document.querySelector('.login-out').addEventListener('click', function () {
    localStorage.removeItem('userInfo')
    history.go(0)
  })
}
try {
  createEle()
} catch (error) {}

// export { createEle }
/* 公共的头部尾部需要在HTML中写入以下标签,并引入JS文件
 * <header id="header"></header>
 * <section class="search content"></section>
 * <section class="foot-shadow"></section>
 * <footer id="footer"></footer>
 * <section class="copyright-wrap wrap"></section>
 *
 */
