<template>
  <b-form-select
    :value="perPage"
    :options="options"
    @change="$emit('action:change', $event)"
    size="sm"
  />
</template>

<script>
export default {
  name: "selectComponent",
  props: {
    options: {
      type: Array,
      required: true,
      default: () => [],
    },
    perPage: {
      type: [String, Number],
      required: true,
      default: 30,
    },
  },
};
</script>

<style scoped></style>
