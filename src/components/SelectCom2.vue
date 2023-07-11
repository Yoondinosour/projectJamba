<template>
  <div class="select" @click="dropdownMenu" :class="{ active : actived }">
    <div class="selected">
      <div class="selected-value">none</div>
      <div class="arrow"></div>
    </div>
    <ul>
      <li class="option">none</li>
      <li class="option">option 1</li>
      <li class="option">option 2</li>
      <li class="option">option 3</li>
      <li class="option">loooooooooooooooooong text option</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const actived = ref(false);

function selectOption(optionElement) {
  const selectBox = optionElement.closest(".select");
  const selectedElement = selectBox.querySelector(".selected-value");
  selectedElement.textContent = optionElement.textContent;
}

function dropdownMenu(e) {
  const targetElement = e.target
  const isOptionElement = targetElement.classList.contains("option");

  if (isOptionElement) {
    selectOption(targetElement);
    console.log(targetElement)
  }

  actived.value = !actived.value
}

document.addEventListener("click", function (e) {
  const targetElement = e.target;
  const isSelect = targetElement.classList.contains("select") || targetElement.closest(".select");
  
  if (isSelect) {
    return;
  }

  const allSelectBoxElements = document.querySelectorAll(".select");

  allSelectBoxElements.forEach(boxElement => {
    boxElement.classList.remove("active");
  });

});

</script>
<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
}
.select {
  display: inline-block;
  width: 200px;
  border: 1px solid #999;
  text-align: center;
  margin: 0 auto;
}

.select .selected {
  display: flex;
  justify-content: space-between;
  padding: 8px 5px;
}

.select .selected .selected-value {
  max-width: 160px;
}

.select .selected .arrow {
  width: 24px;
  background: #000;
  background-size: 50% 50%;
}

.select ul {
  width: 200px;
  border: 1px solid #999;
  position: absolute;
  background: #fff;
  border-top: none;
  margin: 1px 0 0 -1px;
  cursor: pointer;
}

.select ul li {
  padding: 8px 5px;
}
.select ul li,
.select .selected .selected-value {
  white-space: nowrap; /* 줄바꿈 안함 */
  overflow: hidden;
  text-overflow: ellipsis; /* 말줄임 적용 */
}
.select ul li:hover {
  background: rgba(168, 156, 235, 0.35)
}
.select ul {
  height: 0;
  overflow: hidden;
  transition: height .5s ease-in;
  border: none;
}

.select.active ul {
  height: 140px;
  overflow: scroll;
  transition: height .5s ease-out;
  border: 1px solid #efefef;
}
</style>