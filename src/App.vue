<template>
    <Header />
    <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// @ts-ignore
import Header from '@/components/Header'

export default defineComponent({
    name: 'App',
    components: {
        Header
    }
})
</script>

<style lang="scss">
* {
    margin: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
}
</style>
