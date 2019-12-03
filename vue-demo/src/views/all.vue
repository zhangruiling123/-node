<template>
<div>
    <p v-for="(item,index) in list" :key="index"></p>
</div>
</template>
<script>
export default {
    data() {
        return {
            list:[]
        }
    },
    methods: {
        getData(){
            this.$axios('/api/list').then(res=>{
                this.list=res.data[0]
                console.log(res,'res')
            })
        }
    },
}
</script>