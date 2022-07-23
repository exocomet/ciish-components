<template>
  <label :class="clsLabel||{}">
    <slot></slot>
    <select :id="id" :value="value" @change="onChange"
        :class="clsSelect||{}"
        class="form-select appearance-none
          block w-full px-3 py-1.5
          text-base font-normal text-gray-700
          bg-white bg-clip-padding bg-no-repeat
          border border-solid border-gray-300 rounded
          transition ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
          aria-label="">
      <option disabled value="">Select...</option>
      <option v-for="option in options" :key="option.uid" :value="option.uid">
        {{option.title}}
      </option>
    </select>
  </label>
</template>
<script>
export default {
  name: 'CiishSelect',
  props: ['id', 'value', 'options', 'clsLabel', 'clsSelect'],
  emits: ['update:value'],
  methods: {
    onChange(event) {
      this.$emit('update:value', event.target.value);
    },
  },
}
</script>
<style scoped></style>