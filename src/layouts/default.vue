<template>
  <header id="header">
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
  height: 38px;
}
</style>
