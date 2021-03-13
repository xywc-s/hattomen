<template>
  <header id="header">
    <Header></Header>
  </header>
  <main>
    <router-view />
    <div class="mt-5 mx-auto text-center opacity-25 text-sm">[Default Layout]</div>
  </main>
  <Footer />
</template>

<style scoped>
#header {
  position: relative;
  height: 38px;
}
</style>
