<template>
  <div class="home">
      <section>
          <router-view></router-view>
      </section>
      <Foot></Foot>
  </div>
</template>

<script>
import Foot from '@/components/foot'
export default {
    name:'Home',
    components:{Foot}
}
</script>

<style lang="scss">
.home{
    width: 100%;
    height: 100%;
}
</style>