<template>
  <div>
    <Navbar title="Ring" />
    <div class="app--spacing">
      <Ring v-model="progress" />
      <br />
      <Ring
        v-model="progress"
        :size="80"
        :strokeWidth="4"
        :innerStrokeWidth="5"
        color="pink"
        textColor="pink"
        outerColor="#e8e8e8"
      />
      <br />
      <Ring
        v-model="progress"
        :size="70"
        :strokeWidth="4"
        :innerStrokeWidth="5"
        color="#f00"
        textColor="#f00"
        outerColor="#fdd3d3"
        backgroundColor="#fff"
      />
      <br />
      <VButton type="primary" @click="add" :disabled="progress === 100">
        增加10%
      </VButton>
      <VButton @click="sub" :disabled="progress === 0">减少10%</VButton>
    </div>
  </div>
</template>

<script>
import Ring from 'lvan/ring'

export default {
  components: {
    Ring
  },
  data() {
    return {
      progress: 10
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      if (this.progress >= 100) {
        clearInterval(this.timer)
      } else {
        this.progress += 10
      }
    }, 100)
  },
  methods: {
    sub() {
      if (this.progress === 0) return
      this.progress -= 10
    },
    add() {
      if (this.progress === 100) return
      this.progress += 10
    }
  }
}
</script>
