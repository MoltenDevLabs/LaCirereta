<template>
  <div>
    <h4 class="section-title">Fes un cop d'ull a les nostres creacions</h4>
    <div v-if="$device.isMobileOrTablet">
      <div class="flex flex-nowrap h-max overflow-x-scroll scroll-smooth -mx-2">
        <cakeCard v-for="cake in cakeList" :key="cake.id" :cake="cake" />
      </div>
    </div>
    <div v-else>
      <!-- UPPER ROW -->
      <div class="relative overflow-hidden">
        <div class="flex gap-4">
          <div
            id="featuredListUpperContainer"
            class="loop-scroll-left flex flex-nowrap h-max -mx-2"
          >
            <cakeCard
              v-for="cake in cakeList"
              :key="cake.id"
              :cake="cake"
            />
          </div>
          <div>
            <div
              id="featuredListUpperContainer"
              class="loop-scroll-left flex flex-nowrap h-max -mx-2"
              aria-hidden="true"
            >
              <cakeCard
                v-for="cake in cakeList"
                :key="cake.id"
                :cake="cake"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- BOTTOM ROW -->
      <div class="relative overflow-hidden my-4">
        <div class="flex gap-4">
          <div
            id="featuredListBottomContainer"
            class="loop-scroll-right flex flex-nowrap h-max -mx-2"
          >
            <cakeCard
              v-for="cake in cakeList"
              :key="cake.id"
              :cake="cake"
            />
          </div>
          <div>
            <div
              id="featuredListBottomContainer"
              class="loop-scroll-right flex flex-nowrap h-max -mx-2"
              aria-hidden="true"
            >
              <cakeCard
                v-for="cake in cakeList"
                :key="cake.id"
                :cake="cake"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCakeStore } from "@/stores/cakeStore";
const cakeStore = useCakeStore();
const cakeList = cakeStore.cakeList;
</script>

<style scoped>
@keyframes loop-scroll-left {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
}
@keyframes loop-scroll-right {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
}

#featuredListUpperContainer {
  animation: loop-scroll-left 25s linear infinite;
}
#featuredListBottomContainer {
  animation: loop-scroll-right 30s linear infinite;
}
</style>
