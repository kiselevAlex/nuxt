<template>
  <div class="w-full">
    <div class="raiting">
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

export default {
  middleware: ['init'],
  computed: {
    raiting(){
      return this.$store.state.raiting;
    }
  }
}

</script>