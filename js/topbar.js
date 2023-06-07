/**
 * 这里存放的是头部区域的js文件
 */


/**
 * topbar顶部导航的左侧区域的导航数据内容list(ul)
 * 点击哪个a标签,导航变色+字体图标(三角形)显示
 */

// 获取元素对象
var topbar = document.querySelector(".topbar")
var itemEls = topbar.querySelectorAll(".item")

// 用for循环遍历所有a标签
for (let itemEl = 0; itemEl < itemEls.length; itemEl++) {
  // console.log(itemEls[itemEl])
  itemEls[itemEl].onclick = function () {
    // 利用排他思想
    for (let itemEl = 0; itemEl < itemEls.length; itemEl++) {
      // 清除所有active类
      itemEls[itemEl].classList.remove("active")
    }
    // 设置当前类
    this.classList.add("active")
  }
}

/**
 * 在搜索框中点击label隐藏,input自动获取焦点;
 * input失去焦点,显示label
 */

var labelEl = document.querySelector("label")
var inputEl = document.querySelector("input")

// label的点击事件
labelEl.onclick = function () {
  // 隐藏label
  labelEl.style.display = "none"
  // input获得焦点
  inputEl.focus()
}

// input失去焦点事件
inputEl.onblur = function () {
  // 显示label
  labelEl.style.display = "block"
}