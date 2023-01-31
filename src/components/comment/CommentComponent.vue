<template>
  <b-input-group class="comment-form">
    <b-form-input placeholder="Комментарий к проекту" v-model="value" />
    <b-input-group-append>
      <b-button
        @click="addComment(value)"
        size="sm"
        text="Button"
        variant="primary"
      >
        <b-icon icon="pencil-fill" />
      </b-button>
    </b-input-group-append>
  </b-input-group>
</template>

<script>
export default {
  name: "CommentComponent",
  data() {
    return {
      value: "",
    };
  },
  mounted() {
    if (localStorage.comment) {
      this.value = localStorage.comment;
    }
  },
  methods: {
    addComment(comment) {
      localStorage.comment = comment;
    },
  },
};
</script>

<style scoped></style>
