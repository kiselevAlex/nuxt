export default async function({store, route}){
    await store.dispatch('raiting', {year: route.params.year || (new Date()).getFullYear()});
}