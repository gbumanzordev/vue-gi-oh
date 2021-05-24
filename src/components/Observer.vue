<template>
  <div class="observer"></div>
</template>

<script>
export default {
  name: 'Observer',
  emits: ['scrolled'],
  data() {
    return {
      observer: null,
    };
  },
  mounted() {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.$emit('scrolled');
      }
    });

    this.observer.observe(this.$el);
  },
};
</script>
