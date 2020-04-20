<template>
  <div class="foo">
      <van-tabbar v-model="active">
  <van-tabbar-item to="/home/page" icon="home-o">标签</van-tabbar-item>
  <van-tabbar-item to="/home/classify" icon="search">标签</van-tabbar-item>
  <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
  <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
export default {
    name:'Foot',
    data() {
        return {
            active: 0,
        }
    },
}
</script>

<style>

</style>