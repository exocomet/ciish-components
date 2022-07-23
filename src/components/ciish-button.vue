<template>
  <button :class="cls" v-on:click="onClick">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'CiishButton',
  props: ['cls'],
  data() {
    return {
    }
  },
  methods: {
    onClick(event) {
      console.log('Button event', event);
      // this.emit('click', event); // dont' know
    }
  },
}
</script>
<style scoped></style>