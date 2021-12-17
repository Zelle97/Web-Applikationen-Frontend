<template>
  <div class="col-lg">
    <b-form-select :class="['color-picker-'+index]" :data=index v-on:change="changeDropdownColor"  v-model="selected" :options="colors"></b-form-select>
  </div>
</template>

<script>
export default {
  name: 'ColorInput',
  props: ['index'],
  computed: {
    colorMapArray () {
      return this.$store.getters['gameData/getColorMapArray']
    }
  },
  data () {
    return {
      selected: null,
      colors: [
        {value: null, text: 'Please select a Color'},
        {value: 1, text: 'Brown'},
        {value: 2, text: 'Red'},
        {value: 3, text: 'Green'},
        {value: 4, text: 'Yellow'},
        {value: 5, text: 'Blue'},
        {value: 6, text: 'Black'},
        {value: 7, text: 'White'},
        {value: 8, text: 'Orange'}
      ]
    }
  },
  methods: {
    changeDropdownColor: function (value) {
      for (let colorClass of this.colorMapArray) {
        document.getElementsByClassName('color-picker-' + this.index)[0].classList.remove(colorClass)
      }
      this.$store.dispatch('gameData/addInputColor', {index: this.index, value: this.colorMapArray[value - 1]})
      document.getElementsByClassName('color-picker-' + this.index)[0].classList.add(this.colorMapArray[value - 1])
    }
  }
}
</script>

<style scoped>

</style>
