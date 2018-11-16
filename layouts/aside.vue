<template>
    <div class="h-100">
        <el-button type="primary" class="main-menu__toggle" 
            @click="isCollapse = !isCollapse"
            :icon="!isCollapse ? 'el-icon-arrow-left' : 'el-icon-arrow-right'">
            {{!isCollapse ? 'Закрыть' : ''}}
        </el-button>
        <el-menu :router="true" class="main-menu" default-active="2" :collapse="isCollapse">
            <el-menu-item index="/shop">
                <i class="el-icon-document"></i>
                <span slot="title">Магазин</span>
            </el-menu-item>
            <el-menu-item index="/about">
                <i class="el-icon-menu"></i>
                <span slot="title">О нас</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: 'beAside',
    data() {
        return {
            isCollapse: false,
        }
    }
}
</script>
