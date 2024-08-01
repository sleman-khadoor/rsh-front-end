<template>
    <div class="d-flex justify-content-center" dir="ltr">
        <nav aria-label="...">
            <ul class="pagination">
                <li class="page-item mx-1">
                    <a class="page-link rounded-2" href="#">
                        <img src="/icon/prev-pag.svg" alt="blog"/>
                    </a>
                </li>
                <li @click="$emit('updatePage', index)" :class="'page-item mx-1' + ((props.meta?.current_page === index) ? ' active' : '')"  v-for="index in props.meta?.last_page">
                    <a class="page-link rounded-2" href="#">{{ index }}</a>
                </li>
                <li class="page-item mx-1">
                    <a class="page-link rounded-2" href="#">
                        <img src="/icon/next-pag.svg" alt="blog"/>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  meta: object;
}>();
</script>
<style scoped>
.page-link.active, .active > .page-link {
    background-color: #0B294A !important;
    border-color: #0B294A !important;
}
.pagination {
    --bs-pagination-color: #0B294A !important;
}
</style>