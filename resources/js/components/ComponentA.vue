<template>
  <div>
    <h1>Laravel10 + Vue3 Component Test</h1>
    <button @click="fetchData">fetch</button>
    <div v-if="data">
      <pre>Message: {{ data.message }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";

interface SampleData {
  message: string;
}

const data = ref<SampleData | null>(null);

const fetchData = async () => {
  try {
    const res = await axios.get("/api/sample");
    data.value = res.data;
  } catch (e: any) {
    console.error("Error: ", e);
  }
};
</script>
