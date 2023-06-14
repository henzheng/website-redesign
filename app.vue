<template>
  <div class="background">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style scoped>
.background {
    background: linear-gradient(hsla(0,0%,100%,0.925),hsla(0,0%,100%,0.925)), url('/images/sinnoh.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
}
</style>
