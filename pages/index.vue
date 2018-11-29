<template>
  <div class="w-full">
    <div class="raiting">
      <h1 class="raiting__title">Pейтинг франшиз {{year}}</h1>
      <div class="f-l">
          <span class="m-r20"><nuxt-link active-class='active' :to="'/spa'">CSR</nuxt-link></span>
      </div>
      <div class="t-c">
          <span class="m-r20" v-for="y in years" :key="y"><nuxt-link active-class='active' :to="'/' + y">{{y}}</nuxt-link></span>
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

export default {
  middleware: ['init'],
  data() {
      return {
          years: ['2018','2017','2016','2015','2014']
      }
  },
  computed: {
    raiting(){
      return this.$store.state.raiting;
    },
    year(){
        return this.$route.params.year;
    },
  }
}

</script>