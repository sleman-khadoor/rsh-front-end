<template>
    <div class="d-flex justify-content-center">
        <nav aria-label="...">
            <ul class="pagination">
                <li class="page-item mx-1">
                    <a class="page-link rounded-2">
                        <img src="@/assets/icon/prev-pag.svg"/>
                    </a>
                </li>
                <li class="page-item mx-1 active">
                    <a class="page-link rounded-2" href="#">1</a>
                </li>
                <li class="page-item mx-1" aria-current="page">
                    <span class="page-link rounded-2">2</span>
                </li>
                <li class="page-item mx-1">
                    <a class="page-link rounded-2" href="#">3</a>
                </li>
                <li class="page-item mx-1" aria-current="page">
                    <span class="page-link rounded-2">4</span>
                </li>
                <li class="page-item mx-1">
                    <a class="page-link rounded-2" href="#">5</a>
                </li>
                <li class="page-item mx-1" aria-current="page">
                    <span class="page-link rounded-2">6</span>
                </li>
                <li class="page-item mx-1">
                    <a class="page-link rounded-2" href="#">7</a>
                </li>
                <li class="page-item mx-1" aria-current="page">
                    <span class="page-link rounded-2">8</span>
                </li>
                <li class="page-item mx-1">
                    <a class="page-link rounded-2" href="#">9</a>
                </li>
                <li class="page-item mx-1" aria-current="page">
                    <span class="page-link rounded-2">10</span>
                </li>
                <li class="page-item mx-1">
                    <a class="page-link rounded-2" href="#">11</a>
                </li>
                <li class="page-item mx-1">
                    <a class="page-link rounded-2" href="#">
                        <img src="@/assets/icon/next-pag.svg"/>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>
<style scoped>
.page-link.active, .active > .page-link {
    background-color: #0B294A !important;
    border-color: #0B294A !important;
}
.pagination {
    --bs-pagination-color: #0B294A !important;
}
</style>