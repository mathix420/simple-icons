<template>
  <section
    class="
      icon-card
      flex flex-col
      mx-2
      mt-2
      mb-4
      pt-4
      border-2 border-gray-300
      shadow-lg
      rounded-xl
      overflow-hidden
    "
    :style="`--bg-color: #${data.hex}; --color: ${textColor};`"
  >
    <button
      title="Download SVG image"
      class="px-4 my-4 transition-opacity hover:opacity-60 w-full flex justify-center"
    >
      <svg-icon :name="data.slug" height="56px" width="56px" />
    </button>
    <p class="px-4 my-2 h-full flex items-center text-lg font-semibold">{{ data.title }}</p>
    <footer class="grid grid-cols-4 w-full h-8 border-t-2">
      <button class="hex-btn font-thin text-sm col-span-2 px-3" title="Copy HEX color">
        #{{ data.hex }}
      </button>
      <a class="px-3 my-auto font-bold text-sm" href="#" title="Copy SVG image">SVG</a>
      <a class="px-3 my-auto font-bold text-sm" href="#" title="Download PDF image">PDF</a>
    </footer>
  </section>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    textColor() {
      const [r, g, b] = this.data.hex.match(/.{1,2}/g)
      return parseInt(r, 16) * 0.299 + parseInt(g, 16) * 0.587 + parseInt(b, 16) * 0.114 > 186
        ? '#000000'
        : '#ffffff'
    },
  },
}
</script>

<style lang="scss">
.icon-card {
  width: 240px;
  max-width: 240px;
}

.hex-btn {
  transition: background-color 0.3s ease, color 0.3s ease;
  background-color: var(--bg-color);
  color: var(--color);

  &:hover {
    color: var(--bg-color) !important;
  }
}
</style>
