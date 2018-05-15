<template>
    <div class="prodect-page">
        <!--<h1>about</h1>-->
        <!--<nuxt-link to="/">Back to the home page</nuxt-link>-->
        <el-row>
            <!--<el-col :offset="20" :xs="8" :sm="8" :md="8" :lg="8" :xl="8"><span></span></el-col>-->
            <el-col :span="4" v-for="(o, index) in list" :key="o" :offset="index > 0 ? 0 : 0">
                <el-card :body-style="{ padding: '0px' }">
                    <img src="~/static/hamburger.png" class="image">
                    <div style="padding: 14px;">
                        <span>{{o.name}}</span>
                        <div class="bottom clearfix">
                        <time class="time">{{ currentDate }}</time>
                        <el-button type="text" class="button">操作按钮</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import {mapActions,mapGetters} from 'vuex'
export default {
    //middleware: 'auth'  ,
    layout:'layoutA',
    components: {
    },
    created(){
        this.init()
    },
    methods:{
        ...mapActions([
            'PRODECT_DATA'
        ]),  
        async init(){
            await this['PRODECT_DATA']()
            //console.log('this.aboutData',this.aboutData)
        }
    },
    computed:{
        ...mapGetters([
            'prodectData'
        ]),
        list(){
            return this.prodectData.list
        } 
    }
}
</script>
<style lang="scss">
.prodect-page{
    margin-top:100px;
    padding:20px;
}
.time {
    font-size: 13px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
}

.button {
    padding: 0;
    float: right;
}

.image {
    width: 100%;
    display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
</style>
