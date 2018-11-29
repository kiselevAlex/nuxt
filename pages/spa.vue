<template>
    <div class="w-full">
        <preloader v-if="preloader" />
        <div v-else class="raiting">
            <h1 class="raiting__title">Pейтинг франшиз 2018</h1>
            <div>
            <div v-for="el in raiting" :key="el.id" class="item">
                <div class="item__logo">
                <img :src="el.logo"/>
                </div>
                <div class="item__about">
                <div class="item__title">{{el.name}}</div>
                <div class="item__description">{{el.description}}</div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import preloader from '@/components/lib/preloader';

export default {
    components: {
        preloader
    },
    created(){
        this.$store.dispatch('raiting', {year: this.$route.params.year || (new Date()).getFullYear()});
    },
    computed: {
        raiting(){
            return this.$store.state.raiting;
        },
        preloader(){
            return this.$store.state.preloader;
        }
    }
}

</script>