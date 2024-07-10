<template>
    <div id="home" class="bg-secondary">
        <Title>Rashm</Title>
        <Meta name="description" content="Rasham" />
            <div class="row mb-4">
                <div class="col-lg-6 col-md-6 col-sm-12 py-2">
                    <IndexCarousel/>
                </div>
            
                <div class="col-lg-6 col-md-6 col-sm-12 py-2 p-0">
                    <div class="d-flex mb-auto text-center h-100 rounded-4  bg-img">
                        <div class="p-3">
                            <div class="text-choco font-xx-large ff-bold pb-2 pt-3">Rashm</div>
                            <div class="text-dark-blue font-large ff-regular py-2 px-lg-5 px-md-4 px-sm-3">
                                With Rashm Cultural, we combine creative translation
                                with careful editing, give life to your texts through
                                linguistic proofreading, and pave the way for authors
                                with literary agency and professional marketing, to
                                connect you to your audience by writing
                                unique content.
                            </div>
                            <div class="mx-auto pt-2 pb-lg-3 pb-md-3 pb-sm-7">
                                <Search/>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
             <div class="row m-0">
                <button class="bg-btn-img m-1 rounded-5 border-0 float">
                </button>
            </div>
            <div class="row mb-4">
                <div class="col-lg-8 col-md-6 col-sm-12">
                    <div class="rounded-3 bg-dark-blue text-primary px-5 pt-3 pb-3 mb-3">
                        <div class="p-5 font-x-large ff-regular"> Explore <span class="text-choco">Rashm's</span> history and our vision of providing </div>
                    </div>
                    <IndexHistory :data="history" :bgColor="'bg-secondary'"/>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <img src="@/assets/img/printer.png" class="d-block w-100" alt="..." height="400" width="400">
                </div>
            </div>
            <div class="row mb-4">
                <IndexDiverseServices/>
            </div>
            <div class="row mb-4 pb-4 m-0">
                <ColourfullDiv :text="$t('index.checkoutLatestBooks')" :bgColor="'bg-choco'"/>
            </div>
            <div class="row mb-4 m-0">
                <IndexMultiCarousel :books="books"/>
            </div>
            <div class="row mb-4">
                <IndexBlogs/>
            </div>
        </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import { useI18n } from 'vue-i18n';

export default defineComponent({
    setup() {
        const { t } = useI18n();
        let books = [
        {
            iconSrc: 'book'
        },
        {
            iconSrc: 'book'
        },
        {
            iconSrc: 'book'
        },
        {
            iconSrc: 'book'
        },
        {
            iconSrc: 'book'
        },
        {
            iconSrc: 'book'
        },
        {
            iconSrc: 'book'
        },
        {
            iconSrc: 'book'
        },
        {
            iconSrc: 'book'
        },
        {
            iconSrc: 'book'
        }
        ];
        let history = [
            {
                text: t('index.history.history1')
            },
            {
                text: t('index.history.history2')
            },
            {
                text: t('index.history.history3')
            }
        ]
        return{
            books,
            history
        }
    },
})
</script>

<style scoped>
#home {
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 1%;
    padding-bottom: 1%;
}
.float{
	position: relative;
    display: flex;
    width: 70px;
    height: 70px;
    margin-top: -93px !important;
    margin-left: 46.5% !important;
    /* margin-right: 60% !important; */
}
.bg-img{
    background-image: url( '/assets/svg/Square.svg' );
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
}
.bg-btn-img{
    background-image: url( '/assets/svg/Button.svg' );
    background-repeat: no-repeat;
    background-size: cover;
}
.pb-sm-7{
    padding-bottom: 4rem !important;
}
</style>