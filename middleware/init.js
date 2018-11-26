export default async function({store}){
    await store.dispatch('raiting', (new Date()).getFullYear());
}