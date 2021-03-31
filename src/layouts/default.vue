<template>
  <header id="header" class="h-48px md:h-38px">
    <Header></Header>
  </header>
  <main>
    <router-view />
  </main>
  <Footer />
</template>

<style scoped>
#header {
  position: relative;
}
</style>
