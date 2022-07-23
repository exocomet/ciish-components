<template>
  <label>
    <slot></slot>
    <input :id="id" :value="value" :placeholder="placeholder"
        :type="type" :step="step" :disabled="disabled" @input="onInput">
  </label>
</template>
<script>
// type used for number, date, color, etc. input elements
// step attribute for type="number"
export default {
  name: 'CiishInput',
  props: ['id', 'value', 'placeholder', 'type', 'step', 'disabled'],
  emits: ['update:value'],
  methods: {
    onInput: function(event) {
      this.$emit('update:value', event.target.value);
    }
  },
}
</script>
<style scoped></style>