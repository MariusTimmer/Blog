<template>
  <a :href="href">
    <div class="card">
      <div class="flex">
        <div v-if="image" class="media" width="6em">
          <img :src="image" :alt="title" />
        </div>
        <div class="details">
          <h2 class="title">{{ title }}</h2>
          <p v-if="excerpt" class="excerpt">{{ excerpt }}</p>
          <div class="author">
            <div>
              <h3 class="name">{{ author || "Marius Timmer" }}</h3>
              <p class="date">{{ formatDate(date) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>
<script>
export default {
  methods: {
    formatDate: (value) => {
      let date_object = new Date(value);
      return date_object.toLocaleDateString();
    }
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    }
  }
};
</script>
<style scoped>
.card {
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  margin-bottom: 1.5rem;
  overflow: hidden;
  width: 100%;
}

.card:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);
  transition: ease-in-out 0.2s all;
}

.flex {
  display: flex;
}

.media {
  width: 45%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.details {
  margin-left: 1.2rem;
}

.title {
  border-top: none;
  margin: 0 0;
}

.name {
  margin: 0 0;
  font-size: 0.7rem;
  color: #999;
}
</style>