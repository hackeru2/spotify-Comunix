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
const url = "https://api.spotify.com/v1/search?"
export default defineComponent({
   props: {
    type: String
  },
  setup(props) {
  
    const fetchApi = (q) =>  {

     return  fetch(url + 'q='+q+"&type="+props.type, { 
   headers: new Headers({
     'Authorization': 'Bearer BQD4VHIGU62o3JnWFMGqs8ndsQJCSmh5t31WiYQ_Ceh9uWCfygWml_qMXd-gGdbwQpnGnraR8M1PqSDZPK3P1DVuqOkmb7HsXy_RlgQKhqX14e2_szYPpNXa2Hjlx87SWMP-slveqdejeksZQz90t10ZYeNKFForrusX' , 
     'Content-Type': 'application/json'
   }), 
    
 }).then(r => r.json());

    }

    const value = ref('');
    const dataSource = ref([]);

    const onSelect = value => {
      console.log('onSelect', value);
    };

    const getRandomInt = (max, min = 0) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const searchResult = query => {
      return new Array(getRandomInt(5))
        .join('.')
        .split('.')
        .map((item, idx) => ({
          query,
          category: `${query}${idx}`,
          count: getRandomInt(200, 100),
        }));
    };

    const handleSearch = val => {
     
      dataSource.value = val ? searchResult(val) : [];
    };

    return {
      value,
      dataSource,
      onSelect,
      fetchApi,
      handleSearch,
    };
  },
  async created () {
    // let w =    await  this.fetchApi()
    // console.log(`w`, w)
  },
  methods : {
    hiamir() {
        alert("askjn")
    },
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
</style>