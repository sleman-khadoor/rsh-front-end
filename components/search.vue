<template>
    <div class="container mt-3 px-lg-5 px-md-3 px-sm-1" dir="ltr">
    <div class="input-group px-lg-5 px-md-3 px-sm-1">
      <label class="form-control bg-snow p-0 border-0">
      <input type="text" v-model="search.value" @change="emit('search', {key: search.key, value: search.value})" class="form-control bg-snow" style="height:50px !important;" placeholder="Search for a book" aria-label="Search for a book">
      </label>
      <div class="bg-snow">
        <div class="vr bg-choco opacity-1" style="width: 3px;margin-top: 10px;min-height: 1.7em !important;"></div>
      </div>
      <div class="input-group-append">
        <button class="snow btn btn-outline-secondary dropdown-toggle text-choco bg-snow font-small ff-regular" 
        style="height:50px !important;" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        {{search.name}}
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
const emit = defineEmits()
const route = useRoute().fullPath
const searchBy = [
  {
    name: 'Book Name',
    icon: 'book-name',
    key: 'title'
  },
  {
    name: 'Author Name',
    icon: 'author-name',
    key: 'author'
  }
];
if(route === '/en' || route === '/') {
  searchBy.pop()
}
const search = reactive({
  name: 'Book Name',
  key: 'title',
  value: ''
});
function selectSearchType(item) {
  search.key = item.key;
  search.name = item.name;
  emit('search', {key: search.key, value: search.value})
}
</script>

<style lang="scss" scoped>
.input-group .dropdown-toggle {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left: none;
  border-color: #d4d4d8;
}

.input-group .form-control {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: none;
}

.input-group .dropdown-menu {
  min-width: auto;
}

// search 
label {
  position: relative;
}

label:before {
  content: "";
  position: absolute;
  left: 10px;
  top: 0;
  bottom: 0;
  width: 20px;
  background: url("/icon/search-normal.svg") center / contain no-repeat;
}

input {
  padding: 10px 30px;
}

</style>