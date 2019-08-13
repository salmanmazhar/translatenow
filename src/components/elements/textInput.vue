<template>
  <input class="textInput" type="text" v-bind="val">
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class TextInput extends Vue {
  @Prop() private val!: string;
}
</script>

<style>
.textInput {
  height: 20px;
}
</style>