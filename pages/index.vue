<template>
  <div>
    <!-- HERO SECTION -->
    <heroSectionBackground
      class="opacity-80 h-[34rem] absolute top-0 -mx-[6%] min-w-full"
    />
    <heroSection class="relative mb-40 md:mb-44 mt-20 md:mt-12" />
    <!-- ENCERTA SECTION -->
    <encertaSection class="fade-in-effect mb-24" />
    <!-- FEATURED SECTION -->
    <featuredSection class="fade-in-effect mb-24" />
    <!-- CTA SECTION-->
    <ctaSection class="fade-in-effect mb-24" />
  </div>
</template>

<script setup>
useFadeInEffect();

onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
</script>

<style></style>
