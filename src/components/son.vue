<template>
  <div class="son">
      <ul>
          <li v-for="(v,k) in list" :key="k">
              <img :src="v.pic" alt="">
              <p>{{v.title}}</p>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:'Son',
    data() {
        return {
            list:[]
        }
    },
    mounted() {
        this.$axios.get('../../static/list.json').then(res=>{
            var id=this.$route.query.id
            res.data.result.forEach(v=>{
                if(v.cid==id){
                    this.list.push(v)
                }
            })
            console.log(res)
        })
    },
}
</script>

<style lang="scss" scoped>
ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li{
        width: 50%;
        img{
            width: 100%;
        }
    }
}
</style>