<template>
  <div class="hello">
    <router-link to="/helloworld/newly/xjj">新的lY</router-link>
    <router-link to="/helloworld/newly2/jjh">新的lY2</router-link>
   <div>
       <a href="#/newly3">123</a>
     <button @click="clicklY('newly')">ttttt</button>
   </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{

    }
  },
  methods:{
    clicklY(LYname){
      this.$router.push({
        name:LYname,
        params:{name:'xh'}
      })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
