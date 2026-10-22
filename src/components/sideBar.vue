<script setup lang="ts">
import ChatLogo from '../../public/Logo.png'
</script>

<template>
  <aside class="sidebar">
    <div class="logo">


      <a href="https://github.com/svg/svgo">
      <SVGOLogo />
      SVGO
    </div>

    <nav class="navigation">
      <button>💬</button>
      <button>👥</button>
      <button>🔔</button>
      <button>⚙️</button>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 72px;
  background-color: #ffffff;
  border-right: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  width: 45.2px;
  height: 40px;

  margin-top: 20px;

  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #6c4df6;
  color: white;

  font-weight: bold;
}

/* Styling the Navigation*/
.navigation {
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin-top: 40px;
}

.navigation button {
  border: none;
  background: none;

  cursor: pointer;

  font-size: 20px;
}
</style>
