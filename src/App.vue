<script setup lang="ts">
import SideBar from './components/sidebar.vue'
import ChatList from './components/chatlist.vue'
import ChatWindow from './components/chatwindow.vue'
</script>

<template>
  <div class="app">
    <SideBar />

    <ChatList />

    <ChatWindow />
  </div>
</template>
