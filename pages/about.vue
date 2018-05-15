<template>
    <div class="about-page">
        <!--<h1>about</h1>-->
        <!--<nuxt-link to="/">Back to the home page</nuxt-link>-->
        <!--<el-container>
            <el-header height="200px" class="about-page-header">
                <div></div>
            </el-header>
            <el-main>-->
                <el-row>
                <!--<el-col :offset="20" :xs="8" :sm="8" :md="8" :lg="8" :xl="8"><span></span></el-col>-->
                    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                        <el-card class="box-card">
                            <div slot="header" class="clearfix">
                                <span>{{base.name}}</span>
                                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                            </div>
                            <div v-for="o in base.list" :key="o" class="text item">
                                {{ o.name }}
                            </div>
                        </el-card>
                        <el-card class="box-card">
                            <div slot="header" class="clearfix">
                                <span>{{item.name}}</span>
                                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                            </div>
                            <div v-for="o in item.list" :key="o" class="text item">
                                {{ o.name }}
                            </div>
                        </el-card>
                    </el-col>  
                    <el-col :offset="4" :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                        <el-card class="box-card">
                            <div slot="header" class="clearfix">
                                <span>{{mode.name}}</span>
                                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                            </div>
                            <div v-for="o in mode.list" :key="o" class="text item">
                                {{ o.name }}
                            </div>
                        </el-card>
                    </el-col> 
                </el-row>
            <!--</el-main>
            <el-footer>
            </el-footer>
        </el-container>-->
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
            'ABOUT_DATA'
        ]),  
        async init(){
            await this['ABOUT_DATA']()
            //console.log('this.aboutData',this.aboutData)
        }
    },
    computed:{
        ...mapGetters([
            'aboutData'
        ]),
        base(){
            return this.aboutData.base||{}
        },
        item(){
            return this.aboutData.item||{}
        },
        mode(){
            return this.aboutData.mode||{}
        }    
    }
}
</script>
<style lang="scss">
.about-page{
    margin-top:100px;
    padding:20px;
}
.about-page-header{
    background-color: #26aae1;
}
.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both
}

.box-card {
    width: 480px;
}
</style>
