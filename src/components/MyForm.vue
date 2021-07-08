<template>
  <a-row :gutter="[0,24]" class="align-initial">
    <a-col :sm="{span: 24 ,  order:2}"   :md="{span: 15 , order:1 }"  >  
      <FetchInput type="track"/>
    </a-col>
     
    <a-col  :sm="{span: 24, order:1}"  :md="{span: 7 , order:2}" >  
      <a-radio-group default-value="track" button-style="solid" size="large" @change="({target}) => type=target.value">
        <a-radio-button value="artist">
          Artist
        </a-radio-button>
        <a-radio-button value="track">
          Track
        </a-radio-button>
      </a-radio-group>
    </a-col>      
  </a-row>  
</template>

<script>
import FetchInput from "./FetchInput.vue"
export default {
  components: { FetchInput },
data() {
  return {
    type : "track"
  }
},
}
</script>

<style>
.align-initial .ant-col {
text-align: initial;

}
</style>