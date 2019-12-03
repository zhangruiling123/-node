<template>
<div>
    <!-- <div class="header">
        <router-link to="/all">全部</router-link>
        <router-link to="/jin">云进货商</router-link>
        <router-link to="/guan">关注用户</router-link>
        <router-link to="/cheng">成交</router-link>
    </div>
    <router-view></router-view> -->
    <input v-model="val"/><button>搜索</button>
    <nav>
        <ul>
            <li v-for="(val,i) in navdata" :key="i" @click="change(i)" :class="{active:curindex===i}">
                {{val.title}}
            </li>
        </ul>
    </nav>
    <div>
        <ul>
            <li v-for="(val,i) in resdata" :key="i">{{val.name}}</li>
        </ul>
    </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            val:'',
            navdata:[
                {
                    title:'云进货商',
                    num:'',
                    type:'buyer'
                },
                {
                    title:'全部',
                    num:'',
                    type:'all'
                },
                {
                    title:'关注用户',
                    num:'',
                    type:'like'
                },
                {
                    title:'成交',
                    num:'',
                    type:'ok'
                }
            ],
            resdata:[],
            alldata:[],
            curindex:0
        }
    },
    async mounted(){
        let data = await axios.get('/api/list')
        this.alldata= data.data.data;
        this.setNavdata(this.alldata)
        this.setResdata(this.navdata[this.curindex].type)
    },
    methods: {
        setNavdata(data){
            this.navdata=this.navdata.map(item=>{
                if(item.type === 'all'){
                    item.num =data.length
                }else{
                    item.num= data.reduce((prev,val)=>{
                        prev+=(val.type===item.type?1:0)
                        return prev
                    },0)
                }
                return item
            })
        },
        setResdata(type){
            if(type==='all'){
                this.resdata=this.alldata
            }else{
                this.resdata=this.alldata.filter(item=>item.type===type)
            }
        },
        change(i){
            this.curindex=i
            this.setResdata(this.navdata[i].type)
        },
        search(){
            if(this.val){
                axios.post('/api/search',{
                    val:this.val
                }).then(res=>{
                    this.resdata=res.data.data
                })
            }else{
                alert('请输入')
            }
        }
    },
}
</script>
<style lang="scss" scoped>
.active{
    color: aqua;
}

</style>