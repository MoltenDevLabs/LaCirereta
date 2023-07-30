<template>
  <article class="not-prose w-full px-2 col-span-1">
    <div class="w-60 md:w-72 rounded overflow-hidden shadow-lg">
      <img
        :src="cake.img"
        alt="Cake img"
        class="w-full my-0 transition-transform duration-500 hover:scale-110"
      />
    </div>
  </article>
</template>

<script setup>
defineProps({
  cake: {
    type: Object,
    required: true,
  },
});
</script>
