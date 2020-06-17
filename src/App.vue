<template>
  <div id="app">
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: white;
  box-sizing: border-box;
}
p {
  margin: 0;
}
</style>
