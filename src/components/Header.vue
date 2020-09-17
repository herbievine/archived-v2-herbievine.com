<template>
    <div class="header">
        <div class="logo" @click="this.$router.push({ name: 'Home' })">
            <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 2000 1000"
                style="enable-background:new 0 0 2000 1000;"
                xml:space="preserve"
                width="50px"
                height="25px"
                focusable="false"
            >
                <g id="Layer_1">
                    <path class="st0" d="M0,0" />
                    <path class="st0" d="M449.9,194.2" />
                </g>
                <g id="hv">
                    <path
                        class="st1"
                        d="M0,0l499.9,500.5L0,1000V0z M1000.5,1000L999.9,0l-500,500.5L1000.5,1000z M999.9,0l500,1000L2000,0H999.9z"
                    />
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                </g>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped lang="scss">
.header {
    width: 100vw;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    & .logo:hover {
        cursor: pointer;
    }
}

.st0 {
    fill: none;
}
.st1 {
    fill: #111111;
}
</style>
