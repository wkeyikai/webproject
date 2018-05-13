<template>
    <nav>
        <el-menu
        :background-color="'rgba(0,0,0,.0)'"
        :text-color="'#ffffff'" 
        :active-text-color="'#ffffff'"
        default-active="1" 
        collapse-transition="true"
        class="el-menu-demo" 
        mode="horizontal" 
        @select="handleSelect"
        >
            <el-menu-item v-for="(item,idx) in data" :href="item.path" :key="idx" :index="idx">{{item.name}}</el-menu-item>
        </el-menu>
    <!-- <a v-for="(item,idx) in data" :href="item.path">{{item.name}}</a>      -->
    </nav>
</template>
<script>
export default {
    props:['data'], 
    name:'navBar',
    data(){
        return {}
    },
    methods: {
        start() {
            this.loading = true
        },
        finish() {
            this.loading = false
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>