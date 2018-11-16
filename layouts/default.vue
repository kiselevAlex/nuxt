<template>
    <el-container class="main">
        <el-header>
            <be-header/>
        </el-header>
        <el-container class="main-container">
            <aside class="main-aside">
                <be-aside />
            </aside>
            <el-container class="main-content">
                <el-main>
                    <nuxt/>
                </el-main>
                <el-footer>
                    <be-footer/>
                </el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
    import beFooter from './footer.vue';
    import beHeader from './header.vue';
    import beAside from './aside.vue';

    export default {
        components: {
            beFooter,
            beHeader,
            beAside
        }
    }
</script>