<template>
  <div class="head">
      <img src="../../static/2.png" alt="">
      <div class="input">
        <input type="text">
      </div>
      <div class="nav">
        <ul>
          <router-link tag="li" to="" v-for="(v,k) in list" :key="k">{{v.title}}</router-link>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
    name:'Head',
    data() {
      return {
        list:[]
      }
    },
    mounted() {
      this.$axios.get('../../static/fenlei.json').then(res=>{
        res.data.result.forEach((v,k)=>{
          if(k<5){
            this.list.push(v)
          }
        })
        console.log(res)
      })
    },
}
</script>

<style lang="scss" scoped>
.head{
  width: 100%;
  .input{
    width: 100%;
    display: flex;
    justify-content: space-around;
    input{
      width: 95%;
      height: 40px;
      border-radius: 15px;
      border: none;
      background: #f2f2f2;
    }
  }
}
img{
  width: 100%;
}
ul{
  width: 100%;
  display: flex;
  li{
    width: 20%;
    text-align: center;
  }
}
</style>