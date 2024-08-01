<template>
    <div class="container mt-3 px-lg-5 px-md-3 px-sm-1">
    <div class="input-group px-lg-5 px-md-3 px-sm-1">
      <label :class="dropdown ? 'form-control bg-snow p-0 border-0 border-right-none' : 'form-control bg-snow p-0 border-0'">
      <input type="text" @keydown.enter="navigateToBooksPage()" v-model="search.value" @change="emit('search', {key: search.key, value: search.value})" :class="dropdown ? 'form-control border-right-none bg-snow' :  'form-control bg-snow'" 
      style="height:50px !important;" :placeholder="$t('search.label')" aria-label="Search for a book">
      </label>
      <div v-if="dropdown" class="bg-snow">
        <div class="vr bg-choco opacity-1" style="width: 3px;margin-top: 10px;min-height: 1.7em !important;"></div>
      </div>
      <div v-if="dropdown" class="input-group-append">
        <button class="snow btn btn-outline-secondary dropdown-toggle text-choco bg-snow font-small ff-regular" 
        style="height:50px !important;" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <span class="mx-1">{{search.name}}</span>
        </button>
        <div class="dropdown-menu dropdown-menu-right bg-snow font-x-small ff-regular">
          <div v-for="(item,index) in searchBy">
          <div class="d-flex text-center p-lg-1 my-1" @click="selectSearchType(item)">
            <img :src="`/icon/${item.icon}.svg`" class="d-block my-auto mx-1" alt="..." width="20" height="20">
            <a class="dropdown-item text-choco px-1" href="#">{{item.name}}</a>
          </div>
          <div v-if="index !== searchBy.length-1" class="hr bg-choco opacity-1" style="height: 1px;"></div>
          </div>          
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  dropdown: {
    type: Boolean,
  },
  value: {
    type: String,
  }
})
const { t } = useI18n()
const emit = defineEmits()
const route = useRoute().fullPath
const searchBy = [
  {
    name: t('search.by.book'),
    icon: 'book-name',
    key: 'title'
  },
  {
    name: t('search.by.author'),
    icon: 'author-name',
    key: 'author'
  }
];
const search = reactive({
  name: t('search.by.book'),
  key: 'title',
  value: ''
});
async function navigateToBooksPage() {
// ... or as a route object with query parameters
await navigateTo({
  path: '/books',
  query: {
    searchKey: search.value
  }
})
}
function selectSearchType(item) {
  search.key = item.key;
  search.name = item.name;
  emit('search', {key: search.key, value: search.value})
}
onMounted(async () => {
  console.log(props.value);
  const query = useRoute().query;
  if(query) {
    search.value = query.searchKey
  }
})
</script>

<style lang="scss" scoped>
[dir="ltr"] .input-group .dropdown-toggle {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left: none;
  border-color: #d4d4d8;
}
[dir="rtl"] .input-group .dropdown-toggle {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: none;
  border-color: #d4d4d8;
}

// .input-group .form-control {
//   border-top-right-radius: 0;
//   border-bottom-right-radius: 0;
//   border-right: none;
// }
[dir="ltr"] .border-right-none {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: none;
}
[dir="rtl"] .border-right-none {
  border-top-right-radius: 0.375rem !important;
  border-bottom-right-radius: 0.375rem !important;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left: none;
}

.input-group .dropdown-menu {
  min-width: auto;
}

// search 
label {
  position: relative;
}

[dir="ltr"] label:before {
  content: "";
  position: absolute;
  left: 10px;
  top: 0;
  bottom: 0;
  width: 20px;
  background: url("/icon/search-normal.svg") center / contain no-repeat;
}
[dir="rtl"] label:before {
  content: "";
  position: absolute;
  right: 10px;
  top: 0;
  bottom: 0;
  width: 20px;
  background: url("/icon/search-normal.svg") center / contain no-repeat;
}

input {
  padding: 10px 30px;
}

</style>