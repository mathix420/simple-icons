<template>
  <main>
    <h1 class="text-3xl text-center font-bold w-full mt-5 mb-8">Simple Icons</h1>

    <section class="flex flex-wrap justify-center">
      <IconCard v-for="data in allIcons" :key="data.slug" :data="data" />
    </section>
  </main>
</template>

<script>
import icons from 'simple-icons'

export default {
  computed: {
    allIcons() {
      return Object.values(icons).map((value) => {
        delete value.svg
        delete value.path
        return value
      })
    },
  },
}
</script>
