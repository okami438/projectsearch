<template>
  <div>
    <div class="search">
      <div class="search-container mx-auto mb-3 py-5">
        <search-component @search="getSearchValue" />
      </div>
    </div>
    <div class="main-container">
      <cards-container
        :is-loading="isLoading"
        :is-empty="isEmpty"
        :users="users"
      />
    </div>
    <div v-if="users.length > 0" class="pagination-container mx-4">
      <div class="row w-100">
        <div class="col-1 d-flex justify-content-start align-items-center">
          <select-component
            class="select-component"
            @action:change="mutationPerPage"
            :options="perPageOptions"
            :per-page="perPage"
          />
        </div>
        <div class="col-11 d-flex justify-content-center align-items-center">
          <b-pagination
            class="mb-0"
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            first-number
            last-number
            @page-click="fetchUser"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardsContainer from "@/views/cards/CardsContainer.vue";
import SearchComponent from "@/views/search/SearchComponent.vue";
import SelectComponent from "@/components/select/selectComponent.vue";
import { user } from "@/api";

export default {
  name: "TheMainComponent",
  components: {
    SelectComponent,
    CardsContainer,
    SearchComponent,
  },
  data() {
    return {
      searchValue: "",
      isLoading: false,
      users: [],
      isEmpty: false,
      perPage: 30,
      currentPage: 1,
      totalCount: 0,
      perPageOptions: [30, 50, 100],
    };
  },
  computed: {
    totalRows() {
      return Math.ceil(this.totalCount / this.perPage);
    },
  },
  mounted() {
    localStorage.search
      ? (() => {
          this.searchValue = localStorage.search;
          this.fetchUser();
        })()
      : null;
  },
  methods: {
    mutationPerPage(event) {
      this.perPage = event;
      this.fetchUser();
    },
    getSearchValue(value) {
      this.searchValue = value;
      this.fetchUser();
    },
    async fetchUser(event, page) {
      if (!this.searchValue) return;
      page ? (this.currentPage = page) : this.currentPage;
      this.isLoading = true;
      await user
        .getUsers({
          q: this.searchValue,
          page: this.currentPage,
          per_page: this.perPage,
        })
        .then(({ data }) => {
          this.users = data.items;
          this.totalCount = data.total_count;
          this.isLoading = false;
          data.items.length === 0
            ? (this.isEmpty = true)
            : (this.isEmpty = false);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style scoped>
.main-container {
  height: 75vh;
  overflow: auto;
}
.search {
  background: #dddddd;
}
.search-container {
  max-width: 80vw;
}

.pagination-container {
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.select-component {
  max-width: 75px;
}
</style>
