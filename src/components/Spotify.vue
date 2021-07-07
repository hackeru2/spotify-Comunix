<template>
 <a-row align="middle"   >
<a-col :sm="{ span: 20 , offset:2   }"   :xs="{ span: 24    }" :lg="{ span: 16, offset: 4 }" :xxl="{ span: 10, offset: 7 }"   :xl="{ span: 14, offset: 5 }"  >  
  <a-card hoverable style="margin:0 auto;   text-align:center">
    <template #cover>
       <Image />
    </template>
    <a-card-meta title="Europe Street beat" style="margin-bottom:10px">
      <template #description>www.instagram.com</template>
    </a-card-meta>
    <MyForm />
  </a-card>
    </a-col>
  </a-row>
</template>
<script>
import Image from "./Image.vue"
import MyForm from "./MyForm.vue"
export default {
  components: {  Image, MyForm },
  
}
</script>