<template>
  <div id="app">
    <container>
      <textInput val="Translate this"/>
    </container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Container from './components/layout/container.vue';
import TextInput from './components/elements/textInput.vue';

@Component({
  components: {
    Container,
    TextInput
  },
})

export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
