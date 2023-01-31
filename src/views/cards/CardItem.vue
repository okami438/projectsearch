<template>
  <div class="card p-2 m-2">
    <b-card-text class="text-left my-2">
      {{ user.name }}
    </b-card-text>
    <b-row no-gutters>
      <div class="d-flex align-items-center col-12 my-1">
        <b-avatar
          size="50px"
          :href="user.html_url"
          :src="user.owner.avatar_url"
        ></b-avatar>
        <a class="d-flex ml-2" :href="user.owner.html_url">
          {{ user.owner.login }}
        </a>
      </div>
      <div class="d-flex justify-content-start w-100 my-1">
        <div class="d-flex align-items-center mx-2 my-1">
          <b-icon icon="star-fill" />
          <span class="mx-1">{{ user.stargazers_count }}</span>
        </div>
        <div class="d-flex align-items-center mx-2 my-1">
          <b-icon icon="eye-fill" />
          <span class="mx-1">{{ user.watchers_count }}</span>
        </div>
      </div>
    </b-row>
    <comment-component />
  </div>
</template>

<script>
import CommentComponent from "@/components/comment/CommentComponent.vue";
export default {
  name: "CardItem",
  components: { CommentComponent },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  width: 440px;
  height: 218px;
  background: #ffffff;
  border: 1px solid #a2a3a4;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

a:link {
  color: black;
  background-color: transparent;
  text-decoration: none;
}
a:visited {
  color: #6c6c6c;
  background-color: transparent;
  text-decoration: none;
}
</style>
