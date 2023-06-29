<template>
  <div class="nav">
    <ul id="gnb" class="d-flex" @mouseleave="handlerMouseoLeave">
      <li v-for="(menu, index) of navmenu" :key="index">
        <a :href="menu.href" class="menu" @mouseover="handlerMouseoOver">{{ menu.title }}</a>
        <div class="depth-bg">
          <div  class="depth-inner" >
            <ul class="d-flex flex-wrap">
              <li v-for="submenu of menu.submenu" :key="submenu.subtitle">
                <a :href="submenu.href">{{ submenu.subtitle }}</a>
              </li>
            </ul>
            <p class="d-flex flex-direction-column">
              <img src="src/assets/gnbTxtImg.png" alt="gnb텍스트이미지">
              <span>모바일로 쉽고 빠르게<br />주문해 보세요</span>
              <a href="/menu/fasteasy">Order Now</a>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from "vue"

const navmenu = ref([
  { 
    title: 'about', href: '/about', active: false, submenu:
    [
      { subtitle: '잠바 스토리', href: '/about/story' },
      { subtitle: '홍보동영상', href: '/about/movie'}
    ]
  },
  {
    title: 'menu', href: '/menu', active: false, submenu:
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
    title: 'campaign', href: '/event', active: false, submenu:
    [
      { subtitle: '진행중인 캠페인', href: '/event' },
      { subtitle: '지난 캠페인', href: '/event/oldevent' }
    ]
  },
  {
    title: 'store', href: '/store', active: false, submenu:
    [
      { subtitle: '매장안내', href: '/store' },
      { subtitle: '전세계 매장', href: '/store/world' }
    ]
  },
  {
    title: 'franchise', href: '/franchise', active: false, submenu:
    [
      { subtitle: '가맹설명회', href: '/menu/smooth' },
      { subtitle: '개설조건', href: '/menu/energybowl' },
      { subtitle: 'RTD주스', href: '/menu/rtd' },
      { subtitle: '주스', href:'/menu/juice' },
      { subtitle: '커피&차', href: '/menu/coffee' },
      { subtitle: '베이커리', href: '/menu/bakery' }
    ]
  },
  {
    title: 'online shop', href: '/shop', active: false, submenu:
    [
      { subtitle: '케이터링', href: '/menu/smooth' },
      { subtitle: '네이버 스마트 스토어', href: '/menu/energybowl' },
      { subtitle: '해피오더', href: '/menu/rtd' },
      { subtitle: '쿠팡이츠', href:'/menu/juice' },
      { subtitle: '요기요', href: '/menu/coffee' },
      { subtitle: '배달의 민족', href: '/menu/bakery' }
    ]
  },
  {
    title: 'customer service', href: '/cs', active: false, submenu:
    [
      { subtitle: '자주하는 질문', href: '/menu/smooth' },
      { subtitle: '채용안내', href: '/menu/energybowl' },
      { subtitle: '개인정보처리방침', href: '/menu/rtd' },
      { subtitle: '영상정보처리기기 운영관리', href:'/menu/juice' }
    ]
  }
])

// $('.gnb>li>a').on('mouseover focus',function(){
//   if($('.gnb').hasClass('active')){
//     $('.gnb .sub').hide();
//     $(this).next().show();
//   }else{
//     $(this).next().stop().slideDown();
//   }
//   $('.gnb').addClass('active');
// });
// $('.gnb').on('mouseleave focusout',function(){
//   $(this).removeClass('active');
//   $('.gnb .sub').stop().slideUp();
// });


function handlerMouseoOver(ev) {
  const gnb = document.getElementById('gnb')
  // 모든 depth-bg
  const subMenus = document.getElementsByClassName('depth-bg')
  // 현재 MouseOver된 depth-bg
  const next = ev.srcElement.nextElementSibling

  // gnb에 active가 있으면
  if(gnb.classList.contains('active')) {
    // 모든 depth-bg에 display none
    for(let sub of subMenus) {
      sub.style.display = 'none'
    }
  }
  else {
    next.animate([
      {height: '0px', transition: 'all ease-in-out 0.5s'},
      {height: '332px', transition: 'all ease-in-out 0.5s'}
    ], 500)
  }
    // 현재 MouseOver된 depth-bg만 display block
  next.style.display = 'block'
  // next.classList.add('active')
  next.style.height = '332px'
  gnb.classList.add('active')
}

function handlerMouseoLeave(ev) {
  const gnb = document.getElementById('gnb')
  const subMenus = document.getElementsByClassName('depth-bg')

  gnb.classList.remove('active')
  for(let sub of subMenus) {
    sub.style.height = '0'
    sub.style.transition = 'all ease-in-out 0.5s'
  }

  setTimeout(function () {
    for(let sub of subMenus) {
      sub.style.display = null
    }
  }, 500)  
}
</script>
<style lang="scss" scoped>
.nav {
  width: 100%;
  #gnb {
    float: right;
  }
  li:hover a::after {
    width: 58px;
  }
  a.menu {
    padding: 28px 24px 55px;
    display: block;
    color: #404040;
    font-weight: 900;
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
}
.depth-bg {
  // display: none;
  background: url(src/assets/subBg.png) center 0 no-repeat;
  height: 0;
  overflow: hidden;
  width: 100%;
  position: fixed;
  z-index: 10;
  left: 0;
  transition: all ease-in-out 0.5s;
}
.depth-inner {
  max-width: 1280px;
  margin: 0 auto;
  height: 100%;
  padding: 20px 30px;
  position: relative;
  ul {
    width: 500px;
    li {
      width: 50%;
      margin: 12px 0;
    }
    a {
      color: #404040;
      font-weight: 600;
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
.v-enter-active,
.v-leave-active {
  transition: height 0.5s ease;
}

.v-enter-from {
  height: 0px;
}
.v-enter-to {
  height: 332px;
}
.v-leave-from {
  height: 332px;
}
.v-leave-to {
  height: 0px;
}
</style>