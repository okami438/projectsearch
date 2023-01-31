<template>
  <div class="row hidden-md-up mx-4">
    <template v-if="!isLoading && !isEmpty">
      <card-item v-for="user in users" :key="user.id" :user="user" />
    </template>
    <div
      class="loading-container d-flex justify-content-center align-items-center"
      v-if="isLoading"
    >
      <b-spinner variant="primary" label="Spinning" />
    </div>
    <div
      class="w-100 cards-search-container d-flex justify-content-center align-items-center"
      v-if="!isLoading && isEmpty"
    >
      <h1 class="text-center">По данному запросу ничего не найдено</h1>
    </div>
  </div>
</template>

<script>
import CardItem from "@/views/cards/CardItem.vue";

export default {
  name: "CardsContainer",
  components: {
    CardItem,
  },
  props: {
    isLoading: {
      type: Boolean,
      required: true,
      default: false,
    },
    isEmpty: {
      type: Boolean,
      required: true,
      default: false,
    },
    users: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.loading-container {
  width: 100%;
  height: 89vh;
}
.cards-search-container {
  height: 89vh;
}
</style>
