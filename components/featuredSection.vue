<template>
  <div>
    <h4 class="section-title">Fes un cop d'ull a les nostres creacions</h4>
    <div v-if="$device.isMobileOrTablet">
      <div class="flex flex-nowrap h-max overflow-x-scroll scroll-smooth -mx-2">
        <cakeCard v-for="cake in featuredList" :key="cake.id" :cake="cake" />
      </div>
    </div>
    <div v-else>
      <div class="relative">
        <div
          id="featuredListContainer"
          class="flex flex-nowrap h-max overflow-x-hidden scroll-smooth -mx-2"
        >
          <cakeCard v-for="cake in featuredList" :key="cake.id" :cake="cake" />
        </div>
        <i
          class="absolute top-1/2 left-5 border rounded-full border-surface-300 text-surface-300 z-10 scale-110 hover:bg-surface-600 transition-colors duration-500 cursor-pointer material-icons-outlined"
          @click="scrollLeft"
          >chevron_left</i
        >
        <i
          class="absolute top-1/2 right-5 border rounded-full border-surface-300 text-surface-300 z-10 scale-110 hover:bg-surface-600 transition-colors duration-500 cursor-pointer material-icons-outlined"
          @click="scrollRight"
          >chevron_right</i
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCakeStore } from "@/stores/cakeStore";
const cakeStore = useCakeStore();
const featuredList = cakeStore.featuredList;

const scrollLeft = () => {
  const left = document.getElementById("featuredListContainer");
  left.scrollLeft -= 500;
};
const scrollRight = () => {
  const right = document.getElementById("featuredListContainer");
  right.scrollLeft += 500;
};
</script>
