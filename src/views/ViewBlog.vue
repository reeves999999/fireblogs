<template>
  <div class="post-view" v-if="currentBlog">
    <div class="container quillWrapper">
      <h2>{{ currentBlog.blogTitle }}</h2>
      <h4>
        Posted on:
        {{
          new Date(currentBlog.blogDate).toLocaleString("en-us", {
            dateStyle: "long"
          })
        }}
      </h4>
      <img :src="currentBlog.blogCoverPhoto" alt="" />
      <div class="post-content ql-editor" v-html="currentBlog.blogHTML"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewBlog",
  data() {
    return {
      currentBlog: null
    };
  },
  async mounted() {
    this.currentBlog = await this.$store.state.blogPosts.find(
      post => post.blogID === this.$route.params.blogid
    );
  }
};
</script>

<style lang="scss" scoped>
.post-view {
  h4 {
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 24px;
  }
}
</style>
