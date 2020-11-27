// 切换按钮
let gotoLogin = document.querySelector('.goto-login')
let gotoRegisiter = document.querySelector('.goto-regisiter')
// 大盒子
let myregisiter = document.querySelector('.tel-regisiter')
let mylogin = document.querySelector('.tel-login')
// 注册的表单元素
let reg = document.querySelector('.regi')
let regTel = document.querySelector('.reg-tel > input')
let regPwd = document.querySelector('.reg-pwd > input')
// 登录的表单元素
let login = document.querySelector('.login')
let loginTel = document.querySelector('.login-tel > input')
let loginPwd = document.querySelector('.login-pwd > input')

// 登录功能
login.addEventListener('click', function () {
  ajax({
    method: 'POST',
    url: 'http://www.qigexiaoairen.cn:3001/index/login/',
    data: {
      num: loginTel.value,
      pwd: loginPwd.value,
    },
  }).then(res => {
    console.log(loginTel.value, loginPwd.value)
    // 判断是否是合法账号密码，然后设置缓存
    setCookies(JSON.parse(res))
  })
})

// 注册功能
reg.addEventListener('click', function () {
  ajax({
    method: 'POST',
    url: 'http://www.qigexiaoairen.cn:3001/index/login/add',
    data: {
      num: loginTel.value,
      pwd: loginPwd.value,
    },
  }).then(res => {
    console.log(res)
    // 判断是否是合法账号密码，然后设置缓存
    setCookies(JSON.parse(res))
  })
})

// 设置缓存
function setCookies(data) {
  if (data.err == -1) {
    // 刷新页面
    history.go(0)
  } else {
    // 将用户的信息存储在缓存中
    localStorage.setItem('userInfo', JSON.stringify(data.data))
    location.assign('http://localhost:3000')
  }
}

gotoRegisiter.addEventListener('click', function () {
  myregisiter.classList.toggle('cannotsee')
  mylogin.classList.toggle('cannotsee')
})

gotoLogin.addEventListener('click', function () {
  myregisiter.classList.toggle('cannotsee')
  mylogin.classList.toggle('cannotsee')
})
