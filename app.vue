<script setup lang="ts">
  const search = ref('')
</script>

<template>
  <div class="min-h-screen">
    <div class="text-center">
      <h1 class="mt-0 pt-4 mb-2 text-4xl font-bold text-primary">
        OnlyMaya - Food 🍕
      </h1>
      <p class="font-sans text-lg text-slate-500">
        List of place where I eat with my friends 🐼
      </p>
    </div>
    <div class="flex justify-content-center mb-4">
      <IconField>
        <InputIcon class="pi pi-search" />
        <InputText v-model="search" placeholder="Search" autocomplete="off" />
    </IconField>
    </div>
  </div>
</template>

<style>
html, body {
  margin: 0;
}
</style>
