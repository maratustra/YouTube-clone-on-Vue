<template>
  <a href="#" :class="classes">
    {{ category }}
  </a>
</template>

<script>
export default {
  name: "CategoryItem",
  props: ['category', 'isActive'],
  computed: {
    classes() {
      // классы, которые применяются ко всем категориям
      const classes = ['px-3', 'py-1', 'transition', 'border', 'rounded-full']
      // значение isActive зависит от переданного значения isActive извне
      return this.isActive ? [
          ...classes, // добавляем классы для активной категории
        'bg-gray-600',
        'border-gray-700',
        'hover:border-gray-200',
        'text-white'
      ] : [
          ...classes, // либо для неактивной
        'bg-gray-100',
        'border-gray-300',
        'hover:bg-gray-200',
      ]
    }
  }
}
</script>

<style scoped>

</style>