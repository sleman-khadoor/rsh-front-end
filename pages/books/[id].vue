<template>
    <div class="row bg-secondary m-0">
        <Title>Book name With Rashm</Title>
        <Meta name="description" content="Book name with Rashm" />
        <div class="col-11 mx-auto my-5 bg-primary text-start rounded-4 pt-5 px-lg-5 px-md-5 px-sm-4 text-dark-blue">
            <div class="row">
                <div class="col col-auto px-0 mx-auto justify-content-center font-meduim lh-25 mb-5">
                    <img src="@/assets/img/book.jpg" class="d-block mx-auto mb-2" alt="..." height="340" width="280">
                    <div class="d-flex flex-wrap align-items-center ff-meduim mb-1"  style="width: 280px;">
                        Categories :
                        <span class="badge text-dark-blue bg-secondary font-small ff-regular m-1">History</span>
                        <span class="badge text-dark-blue bg-secondary font-small ff-regular m-1">Literature</span>
                        <span class="badge text-dark-blue bg-secondary font-small ff-regular m-1">History</span>
                        <span class="badge text-dark-blue bg-secondary font-small ff-regular m-1">Literature</span>
                    </div>
                    <div class="d-flex flex-wrap align-items-center ff-meduim mb-1"  style="width: 280px;">
                        Printing year :<span class="font-small ff-regular"> 23/7/2020</span>
                    </div>
                    <div class="d-flex flex-wrap align-items-center ff-meduim mb-1"  style="width: 280px;">
                        Format :
                        <span class="badge text-dark-blue bg-secondary font-small ff-regular mx-1">Paperback</span>
                    </div>
                    <div class="d-flex flex-wrap align-items-center ff-meduim mb-1"  style="width: 280px;">
                        ISBN : <span class="font-small ff-regular"> 5432863258</span>
                    </div>
                    <div class="d-flex flex-wrap align-items-center ff-meduim mb-1"  style="width: 280px;">
                        EISBN : <span class="font-small ff-regular" >5432863258</span>
                    </div>
                </div>
                <div class="col px-4">
                    <div class="font-x-large ff-meduim mb-3">Here write the name of the book{{id}}</div>
                    <div class="d-flex mb-3">
                        <img src="@/assets/icon/author-name.svg" class="d-block my-auto" alt="..." width="20" height="20">
                        <span class="font-meduim ff-regular text-choco mx-1">By Author Name</span>
                    </div>
                    <div class="font-small ff-regular lh-25 mb-4">
                        The book "The Shadow of the Wind" is a mysterious and wonderful novel by the Spanish writer Carlos Zafón.It
                        was published in 2001, translated into more than 50 languages, and sold millions of copies around the world
                        The novel is set in Barcelona after the Spanish Civil War, and follows the story of Daniel Semperí, a boy who
                        discovers a mysterious book called “The Shadow of the Wind” in a cemetery of forgotten books. Daniel
                        becomes fascinated by the book and its anonymous author, Julián Carax The book "The Shadow of the Wind
                        is a mysterious and wonderful novel by the Spanish writer Carlos Zafón The book "The Shadow of the Wind"
                        is a mysterious and wonderful novel by the Spanish writer Carlos Zafón.It was published in 2001, translated
                        into more than 50 languages, and sold millions of copies around the world The novel is set in Barcelona
                        after the Spanish Civil War, and follows the story of Daniel Semperí, a boy who discovers a mysterious book
                        called “The Shadow of the Wind” in a cemetery of forgotten books. Daniel becomes fascinated by
                        the book and its anonymous author, Julián Carax The book "The Shadow of the Wind is a mysterious and
                        wonderful novel by the Spanish writer Carlos Zafón.
                    </div>
                    <div class="d-flex align-items-center mb-3">
                        <img src="@/assets/icon/star.svg" class="d-block my-auto" alt="..." width="30" height="30">
                        <span class="font-large ff-regular text-choco mx-1">Reviews</span>
                    </div>
                    <div class="font-small ff-regular text-grey mb-2 lh-25">
                        after the Spanish Civil War, and follows the story of Daniel Semperí, a boy who discovers a myst
                        erious book called “The Shadow of the Wind” in a cemetery of forgotten books. Daniel becomes
                        fascinated by the book and its anonymous author
                    </div>
                    <div class="font-meduim ff-bold mb-3">
                        User Name
                    </div>
                    <div class="font-small ff-regular text-grey mb-2 lh-25">
                        after the Spanish Civil War, and follows the story of Daniel Semperí, a boy who discovers a myst
                        erious book called “The Shadow of the Wind” in a cemetery of forgotten books. Daniel becomes
                        fascinated by the book and its anonymous author
                    </div>
                    <div class="font-meduim ff-bold mb-3">
                        User Name
                    </div>
                    <div class="d-flex align-items-center mb-3 pt-2">
                        <img src="@/assets/icon/medal-star.svg" class="d-block my-auto" alt="..." width="25" height="25">
                        <span class="font-large ff-regular text-choco mx-1">Awards</span>
                    </div>
                    <div>
                        <ul>
                            <li> The Nobel Prize in Literatureis</li>
                            <li> The Pulitzer Prizeis an annual award for journalism</li>
                            <li> The Pulitzer Prizeis an annual award for journalism</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row p-0 pb-5 px-4">
                <BooksAuthor/>
            </div>
        </div>
    </div>
</template>
<script setup>
const { id } = useRoute().params
</script>
<style scoped>
.badge {
    border-radius: 0 !important;
}
</style>
