<template>
    <div>
        <span>分支测试1234</span>
        <span>{{$route.params.name}}</span>
    </div>
</template>

<script>
    export default {
        name: "Newly2",
        data() {
            return{
                newtext2:'新的2'
            }
        }
    }
</script>

<style scoped>

</style>