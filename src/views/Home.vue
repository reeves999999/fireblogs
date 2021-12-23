<template>
  <div class="home">
    <BlogPost v-if="!user" :post="welcomeScreen" />
    <BlogPost
      :post="post"
      v-for="(post, index) in sampleBlogPost"
      :key="index"
    />
    <div class="blog-card-wrap">
      <h3>View more recent blogs</h3>
      <div class="blog-cards">
        <BlogCard
          v-for="(post, index) in sampleBlogCards"
          :key="index"
          :post="post"
        />
      </div>
      <div v-if="!user" class="updates">
        <div class="container">
          <h2>Never miss a post. Register today</h2>
          <router-link class="router-button" :to="{ name: 'Register' }"
            >Register...<Arrow class="arrow arrow-light"
          /></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";
import BlogCard from "../components/BlogCard.vue";
import Arrow from "../assets/Icons/arrow-right-light.svg";
export default {
  name: "Home",
  components: {
    BlogPost,
    BlogCard,
    Arrow
  },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
          "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
        welcomeScreen: true,
        photo: "coding"
      },
      sampleBlogPost: [
        {
          title: "Title",
          blogHTML: "HTML title",
          blogCoverPhoto: "beautiful-stories"
        },

        {
          title: "Title 2",
          blogHTML: "HTML title 2",
          blogCoverPhoto: "designed-for-everyone"
        }
      ]
    };
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    },
    user() {
      return this.$store.state.user;
    }
  }
};
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}

.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }

    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }

    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>
