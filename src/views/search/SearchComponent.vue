<template>
  <div>
    <b-input-group class="mb-3">
      <b-form-input v-model="value" />
      <b-input-group-append>
        <b-button
          @click="$emit('search', value)"
          size="sm"
          text="Button"
          variant="primary"
        >
          <b-icon icon="search" />
        </b-button>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
export default {
  name: "SearchComponent",
  data() {
    return {
      value: "",
    };
  },
  created() {
    localStorage.search ? (this.value = localStorage.search) : this.value;
  },
  watch: {
    value(search) {
      localStorage.search = search;
    },
  },
};
</script>

<style scoped></style>
