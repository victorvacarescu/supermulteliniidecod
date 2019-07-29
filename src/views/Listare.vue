<template>
  <div class="home">
    <Header/>    
    <ListareExercitii/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import ListareExercitii from '@/components/ListareExercitii.vue'

export default {
  name: 'listare',
  components: {
    Header,
    ListareExercitii
  }
}
</script>
