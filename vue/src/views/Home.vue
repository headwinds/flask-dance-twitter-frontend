<template>
  <div class="home">
    <Quiz msg="And now, your highness..."/>
  </div>
</template>

<script>
// @ is an alias to /src
import Quiz from '@/components/Quiz.vue'
import $backend from '../backend'

export default {
  name: 'home',
   data () {
    return {
      branches: null,
    }
  },
  mounted() {
    this.fetchResourceCabinQuest('cabinporn')
  },
  methods: {
    fetchResourceCabinQuest (name) {
      $backend.fetchCabinQuestQuiz(name)
        .then(responseData => {
          console.log("cabinquest quiz ", responseData);
          this.branches = responseData.branches
        }).catch(error => {
          this.error = error.message
        })
    },
  },
  components: {
    Quiz
  }
}
</script>

<style lang="scss">

</style>
