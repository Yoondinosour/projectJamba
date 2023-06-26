<template>
  <div class="nav">
    <ul class="gnb d-flex">
      <li v-for="menu of navmenu" :key="menu.title">
        <a :href="menu.href" class="menu">{{ menu.title }}</a>
        <div class="depth-bg">
          <div class="depth-inner">
            <ul class="d-flex">
              <li v-for="submenu of menu.submenu" :key="submenu.subtitle">
                <a :href="submenu.href">{{ submenu.subtitle }}</a>
              </li>
            </ul>
            <p>
              <img src="src/assets/gnbTxtImg.png" alt="gnb텍스트이미지">
              <span>모바일로 쉽고 빠르게<br />주문해 보세요</span>
              <a href="/menu/fasteasy">Order Noew</a>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>

const navmenu = [
  { 
    title: 'about', href: '/about', submenu:
    [
      { subtitle: '잠바 스토리', href: '/about/story' },
      { subtitle: '홍보동영상', href: '/about/movie'}
    ]
  },
  {
    title: 'menu', href: '/menu', submenu:
    [
      { subtitle: '스무디', href: '/menu/smooth' },
      { subtitle: '에너지볼', href: '/menu/energybowl' },
      { subtitle: 'RTD주스', href: '/menu/rtd' },
      { subtitle: '주스', href:'/menu/juice' },
      { subtitle: '커피&차', href: '/menu/coffee' },
      { subtitle: '베이커리', href: '/menu/bakery' }
    ]
  },
  {
    title: 'campaign', href: '/compaign'
  },
  {
    title: 'store', href: '/store'
  },
  {
    title: 'franchise', href: '/franchise'
  },
  {
    title: 'online shop', href: '/shop'
  },
  {
    title: 'customer service', href: '/cs'
  }
]
</script>
<style lang="scss" scoped>
.nav {
  width: 100%;
  .gnb {
    float: right;
  }
  li:hover a::after {
    width: 58px;
  }
  a.menu {
    padding: 28px 24px 55px;
    display: block;
    color: #404040;
    font-weight: bold;
    font-size: 20px;
    position: relative;
    &:hover {
      color: #116f57;
    }
    &::after {
      content: '';
      position: absolute;
      top: 56px;
      left: 24px;
      width: 0;
      height: 12px;
      background: url(src/assets/menuHover.png);
      transition: .4s;
    }
  }
  li:last-child a{
    padding-right: 0px;
  }
  // li:first-child > div {
  //   display: block;
  // }
}
.depth-bg {
  display: none;
  background: url(src/assets/subBg.png) center 0 no-repeat;
  height: 332px;
  width: 100%;
  position: fixed;
  z-index: 10;
  left: 0;
}
.depth-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px 30px;
  ul {
    width: 500px;
    li {
      width: 50%;
    }
    a {
      color: #404040;
      font-weight: bold;
      font-size: 20px;
      &:hover {
        color: #116f57;
      }
    }
  }
  p {
    background: url(src/assets/gnbImg.png) 0 0 no-repeat;
    height: 210px;
    padding-left: 320px;
    top: 40px;
    right: 10px;
    position: absolute;
    text-align: right;
  }
}
</style>