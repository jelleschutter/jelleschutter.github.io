<template>
  <div class="gh-repo-list">
    <Repository v-for="repo in repos" :key="repo.id" :repo="repo"/>
  </div>
</template>

<script lang="ts">
import { ref, Ref, defineComponent } from 'vue';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import Repository from './Repository.vue';
import { Repository as RepositoryModel } from '../models/Repository';

export default defineComponent({
  props: {
    username: {
      type: String,
      required: true,
    },
  },
  components: {
    Repository,
  },
  setup(props) {
    const repos: Ref<RepositoryModel[]> = ref([]);

    const config: AxiosRequestConfig = {
      method: 'get',
      url: `https://api.github.com/users/${props.username}/repos?sort=pushed`,
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    };

    axios(config)
      .then((res: AxiosResponse<RepositoryModel[]>) => {
        repos.value = res.data;
      })
      .catch((error: Error) => {
        console.log(error);
      });

    return {
      repos,
    };
  },
});
</script>

<style scoped lang="scss">
.gh-repo-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
