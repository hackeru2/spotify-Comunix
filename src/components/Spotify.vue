<template>
 <a-row align="middle"   >
<a-col :sm="{ span: 20 , offset:2   }"   :xs="{ span: 24    }" :lg="{ span: 16, offset: 4 }" :xxl="{ span: 10, offset: 7 }"   :xl="{ span: 14, offset: 5 }"  >  
  <a-card hoverable style="margin:0 auto;   text-align:center">
    <template #cover>
       <Image />
    </template>
     
      <!-- <iframe :src="`https://embed.spotify.com/?uri=spotify:user:sharemyplaylists.com:playlist:${playlist_id}&amp;theme=white`" frameborder="0" allowtransparency="true" style="width:340px; height:400px; margin-top:5px; margin-left:15px; margin-bottom:21px;"></iframe> -->
 
    <!-- <a-card-meta title="Europe Street beat" style="margin-bottom:10px"> -->
      <!-- <template #description>www.instagram.com</template> -->
    <!-- </a-card-meta> -->
    <MyForm :playlist_id="playlist_id" />
  </a-card>
    </a-col>
  </a-row>
</template>
<script>
import Image from "./Image.vue"
import MyForm from "./MyForm.vue"
export default {
  components: {  Image, MyForm },
  data() {
    return {
      playlist_id : "6tDwXyLI9DRcqQ8e9yDSVA"
    }
  },
}
</script>