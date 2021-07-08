<template>
  <a-row type="flex" justify="center" :gutter="[10,24]" >
    <a-col :sm="{span: 24 ,  order:2}"   :md="{span: track ? 13 : 24 , order:1 }"  >  
      <FetchInput   :playlist_id="playlist_id" @selected="onSelected"   />
      <transition-group name="flip-list" tag="ul">
    <li  v-for="(item, name) in data" :key="item" class="list-item">
      <b>{{name}}</b> :<span> {{ item }} </span>
    </li>
  </transition-group>
    </a-col>
    <a-col v-if="track"  :sm="{span: 24, order:1}"  :md="{span: 9 , order:2}" >  
     <iframe :src="`https://open.spotify.com/embed/track/${track}?si=5d9d0259d2a24551`" style="width:100%"   frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </a-col>      
  </a-row>  
</template>

<script>
import FetchInput from "./FetchInput.vue"
 
export default {
  props:['playlist_id'],
  components: { FetchInput },
methods: {
  onSelected(e) {
    console.log(`e`, e)
    this.track = e.id
    this.data = e
  }
},
  data() {
    return {
      data : {},
      track : ""
  }
},
}
</script>

<style>
.align-initial .ant-col {
/* text-align: initial; */

}
.flip-list-move {
  transition: transform 0.2s ease;
}
.list-item {
    list-style: none; 
  list-style-type: none;
  text-align: left;
  overflow:hidden; 
  white-space:nowrap; 
  text-overflow:ellipsis; 
   
   
}
</style>