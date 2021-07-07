<template>
  <div>
       <a-image 
      src="https://www.tgspot.co.il/wp-content/uploads/2018/04/Spotify-Logo.png"
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