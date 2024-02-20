<template>
  <article class="not-prose w-16 flex flex-row">
    <div class="rounded overflow-hidden shadow-lg">
      <img
        :src="cake.img"
        alt="Cake img"
        class="my-0 transition-transform duration-500 hover:scale-110"
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
