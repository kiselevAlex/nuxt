<template>
    <div class="w-full">

        <preloader v-if="preloader" />
        <div v-else class="raiting">
            <h1 class="raiting__title">Pейтинг франшиз {{year}}</h1>
            <div class="f-l">
                <span class="m-r20"><nuxt-link :to="'/'">SSR</nuxt-link></span>
            </div>
            <div class="t-c">
                <span class="m-r20" v-for="y in years" :key="y"><nuxt-link active-class='active' :to="'/spa/' + y">{{y}}</nuxt-link></span>
            </div>
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
    data() {
        return {
            years: ['2018','2017','2016','2015','2014']
        }
    },
    components: {
        preloader
    },
    watch: {
        '$route'(){
            this.$store.dispatch('raiting', {year: this.$route.params.year || (new Date()).getFullYear()});
        }
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
        },
        year(){
            return this.$route.params.year;
        },
    }
}
</script>