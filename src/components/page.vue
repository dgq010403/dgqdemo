<template>
  <div class="page">
      <img src="../../static/2.png" alt="">
      <div class="input">
        <input type="text">
      </div>
      <div class="nav">
        <ul>
          <li v-for="(v,k) in list" :key="k" @click="dj(v._id)">{{v.title}}</li>
        </ul>
      </div>
      <div class="zh" v-show="!flag">
          <p>综合</p>
          <p>销量</p>
          <p>新品</p>
          <p>排序</p>
      </div>
      <div>
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
    name:'Page',
    data() {
      return {
        list:[],
        flag:true
      }
    },
    methods: {
        dj(id){
            this.$router.push({path:'/home/page/son',query:{id:id}})
            this.flag=false
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
.page{
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
.zh{
    width: 100%;
    display: flex;
    p{
        margin-left: 15px;
    }
}
img{
  width: 100%;
}
ul{
  width: 100%;
  display: flex;
  margin: 10px 0;
  li{
    width: 20%;
    text-align: center;
  }
}
</style>