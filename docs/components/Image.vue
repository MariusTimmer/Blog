<template>
  <figure class="right col2">
    <img
        :title="imagedata.title || ''"
        :src="defaultSource"
    />
    <figcaption v-if="imagedata.caption">{{ imagedata.caption }}</figcaption>
  </figure>
</template>
<script>
export default {
  props: {
    imagedata: {
      type: Object,
      required: true,
    }
  },
  computed: {
    defaultSource() {
      return '/img/'+ this.imagedata.src +'.webp';
    },
    sourceSet() {
      return this.imagedata.srcset.join(', ');
    }
  }
};
</script>