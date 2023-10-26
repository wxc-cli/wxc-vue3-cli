<script setup lang="ts">
import { useStore } from '@/stores/user';

const store = useStore();
// 获取token
store.checkLocalToken();
</script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>
