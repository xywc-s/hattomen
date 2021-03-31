<template>
  <div class="bg-white">
    <svg
      class="relative w-full -sm:h-4vh h-10vh -mb-7px min-h-40px max-h-150px -md:(h-20px min-h-20px)"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shape-rendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g class="parallax">
        <use class="animate-move" xlink:href="#gentle-wave" x="48" y="0" fill="rgba(20,20,20,0.7)" />
        <use class="animate-move" xlink:href="#gentle-wave" x="48" y="3" fill="rgba(20,20,20,0.5)" />
        <use class="animate-move" xlink:href="#gentle-wave" x="48" y="5" fill="rgba(20,20,20,0.3)" />
        <use class="animate-move" xlink:href="#gentle-wave" x="48" y="7" fill="rgba(20,20,20)" />
      </g>
    </svg>
  </div>
</template>

<style scoped>
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
</style>
