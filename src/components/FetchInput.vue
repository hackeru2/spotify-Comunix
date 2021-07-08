<template>
  <div class="global-search-wrapper" style="width: 100%"> 
    <!-- @search="handleSearch" -->
    <a-auto-complete
      v-model:value="value"
      class="global-search"
      size="large"
      ref="what"
      style="width: 100%"
      option-label-prop="title"
      @select="onSelect"
      
      @input="handleSearch"
    >
      <template #dataSource>
        <a-select-option v-for="item in dataSource" :key="item.count" :title="item.name">
        <a-avatar :src="item.avatar" />
        <a-divider type="vertical" />
          <!-- {{ item.query }}   -->
            <a
            rel="noopener noreferrer"
          >
           
            {{ item.name }}
          </a>
           <a-divider type="vertical" />
            {{ item.release }}
          <!-- <span class="global-search-item-count">{{ item.count }} results</span> -->
          
        </a-select-option>
      </template>
      <a-input-search size="large" placeholder="input here" enterButton></a-input-search>
    </a-auto-complete>
  </div>
</template>
<script>
import {  defineComponent, ref,   } from 'vue';
import { message } from 'ant-design-vue';
import {setHeaders, refreshToken} from '../utils'

const url = "https://api.spotify.com/v1/search?response_type=code&client_id=6db74b4cae9e416f91bfc2072854a31d&limit=5&"
 

export default defineComponent({
   props: {
    type: String,
    playlist_id: String
  },
  setup(props, { emit }) {
    const value = ref('')
    const access_token = ref('')
    const dataSource = ref([])
    
    const getTracksApi = (q, token) => fetch(url + 'q='+q+"&type="+props.type, { headers:setHeaders(token)});
     
    const onSelect = (v , option) => {
      console.log('onSelect', v, {option});
      value.value = option.title
      console.log(dataSource.value[v].id  )
      emit('selected' , dataSource.value[v].id )
    };
  
  const getTracks =  async q =>  refreshAndTryAgain(q)  

  const  refreshAndTryAgain = async (q  ) => {

       if(!access_token.value) access_token.value = await refreshToken()
      let gtapi = await getTracksApi ( q , access_token.value)
      if ( gtapi.status == 401)  {
        access_token.value = await refreshToken()
        gtapi = await getTracksApi ( q , access_token.value)
      }
      return gtapi 
    }

  const handleSearch =   ({target}) => {
           
         target.value = target.value.replace(/[^a-z0-9\s-_&]/gi,'');
        

         if(target.value != value.value) {
          value.value  = target.value

          return  message.warning('A search field - should accept Unicode characters');
          }
        //  console.log(`value.value`, value.value , val)
        searchResult(target.value) 
         ;}
         
  const  searchResult = async  (query) => {
  
  let response = await  getTracks(query)
  let {tracks , artists} = await response.json()
  const {items} =  tracks ? tracks : artists ;
  console.log(items)
  if(!tracks) return ;
  dataSource.value = items
    .map((item, idx) => ({ 
      avatar :item.album.images[2].url, 
      query,
      id:item.id,
      name: item.name,  
      count: idx ,
      release : item.album.release_date
    }));
   }

return {
      value,
      // handleChange,
      handleSearch,
      onSelect,
      getTracksApi,
      dataSource ,
     searchResult,
      refreshToken,
    };
  },
  data() {
    return {
      access_token : '',
      // dataSource : [],
    }
  },
 methods: {
 
 },  
  async created () {
   this.access_token = await  this.refreshToken()
    // console.log(this.$refs.what.$el.childNodes[3].childNodes[1].childNodes)
// console.log(document.querySelector(".ant-input-search").childNodes[0].childNodes[1].value = 'dfgdfg');
  },
 
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
/* .ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled),
.ant-btn-primary {
  background: #1ed760 !important;
  border-color: #1ed760 !important;
}
.ant-btn-primary:hover {
  background: #6fe999 !important;
} */
</style>