<template>
    <div class="fb_container">
        FB Block
    </div>
</template>
<script>
export default {
    props:['data'], 
    name:'FB',
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
<style lang="scss">
    .fb_container{
        background-color:rgb(0, 4, 255);
        color:#ffffff;
    }
</style>