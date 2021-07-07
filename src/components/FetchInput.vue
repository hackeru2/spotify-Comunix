<template>
  <div class="global-search-wrapper" style="width: 100%">
    <a-auto-complete
      v-model:value="value"
      class="global-search"
      size="large"
      style="width: 100%"
      option-label-prop="title"
      @select="onSelect"
      @search="handleSearch"
    >
      <template #dataSource>
        <a-select-option v-for="item in dataSource" :key="item.category" :title="item.category">
          Found {{ item.query }} on
            <a
            :href="`https://s.taobao.com/search?q=${item.query}`"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ item.category }}
          </a>
           
          
          <span class="global-search-item-count">{{ item.count }} results</span>
        </a-select-option>
      </template>
      <a-input-search size="large" placeholder="input here" enterButton></a-input-search>
    </a-auto-complete>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
import {setHeaders, refreshToken} from '../utils'
const url = "https://api.spotify.com/v1/search?response_type=code&client_id=6db74b4cae9e416f91bfc2072854a31d&limit=5&"
export default defineComponent({
   props: {
    type: String
  },
  setup(props) {

    const getTracksApi = (q, token) => fetch(url + 'q='+q+"&type="+props.type, { headers:setHeaders(token)});
    
    
   
    
    

    const value = ref('');
    const dataSource = ref([]);

    const onSelect = value => {
      console.log('onSelect', value);
    };

    // const getRandomInt = (max, min = 0) => {
    //   return Math.floor(Math.random() * (max - min + 1)) + min;
    // };

    

 

    return {
      value,
      dataSource,
      onSelect,
      getTracksApi,
     
      refreshToken,
    };
  },
  data() {
    return {
      access_token : ''
    }
  },
  async created () {
    // let w =    await  this.getTracksApi()
   this.access_token = await  this.refreshToken()
   this.access_token+="234"
  },
  methods : {

  handleSearch (val) {
      this.dataSource.value = val ? this.searchResult(val) : [];
  },
   async getTracks  (q) {
       this.refreshAndTryAgain(q, this.access_token)  
      
  },
  async searchResult  (query) {
  
  let response = await  this.getTracks(query)

  let  {tracks} = await response.json()
  
  let _return = tracks.items
    .map((item, idx) => ({ //, idx
      query,
      category: item.name, // `${query}${idx}`,
      count: idx ,
    }));
    console.log(`_return`, _return)
    return _return
},
  async refreshAndTryAgain (q , token)  {
      // let token = await refreshToken()
      console.log(`token`, token)
      let gtapi = await this.getTracksApi ( q , token)
      if ( gtapi.status == 401)  {
        this.access_token = await refreshToken()
        gtapi = await this.getTracksApi ( q , this.access_token)
      }
      return gtapi 
    }
  }
});
</script>
<style>
.global-search-wrapper {
  padding-right: 50px;
  display: inline-block;
}

.global-search {
  width: 100%;
}

.global-search.ant-select-auto-complete .ant-select-selection--single {
  margin-right: -46px;
}

.global-search.ant-select-auto-complete .ant-input-affix-wrapper .ant-input:not(:last-child) {
  padding-right: 62px;
}

.global-search.ant-select-auto-complete .ant-input-affix-wrapper .ant-input-suffix button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.global-search-item {
  display: flex;
}

.global-search-item-desc {
  flex: auto;
  text-overflow: ellipsis;
  overflow: hidden;
}

.global-search-item-count {
  flex: none;
}
</style>