<template>
  <div>
       <a-image 
       height="200px"
       width="500px"
      src="https://impersonatorsmusic.com/wp-content/uploads/2019/01/listen-on-spotify-logo.png"
    />
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      window:{
        width:0, height:0
      }
    }
  },
 created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    unmounted() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        }
    }
}
</script>

<style>

</style>vue