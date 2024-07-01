<template>
     <div class="row bg-secondary m-0">
        <div class="col-11 mx-auto my-5 text-center rounded-4">
            <div class="mb-3">
                <DepartmentsOverlayImg 
                 :imgSrc="'department1'" 
                 :btnColor="'bg-gold'"
                 :btn="true"
                 :text="$t('departments.organizingEventsandConferences.overlayImg.text')"
                 :title="$t('departments.organizingEventsandConferences.overlayImg.title')"/>
            </div>
            <div id="contacts" class="mx-auto bg-primary text-center rounded-4 py-2">
                <ContactUsForm 
                :title="$t('departments.organizingEventsandConferences.form.title')" 
                :subTitle="$t('departments.organizingEventsandConferences.form.subTitle')" 
                :color="'bg-gold'" 
                :steps="true" />
            </div>
        </div>
        </div>
</template>
<script lang="ts">
import { useI18n } from 'vue-i18n';

export default defineComponent({
    setup() {
    const { t } = useI18n();
    let departments = [
        {
            title: t('departments.organizingEventsandConferences.departments.department1'),
            iconSrc: 'phone'
        },
        {
            title: t('departments.organizingEventsandConferences.departments.department2'),
            iconSrc: 'phone'
        },
        {
            title: t('departments.organizingEventsandConferences.departments.department3'),
            iconSrc: 'phone'
        }
    ];
    let contents = [
        {
            imgSrc: '1',
            title: 'Social media content',
            text: 'Posts on Facebook, Twitter Instagram and other platforms',
            class: 'col-lg-3 my-1 px-1',
        },
        {
            imgSrc: '2',
            title: 'Social media content',
            text: 'Posts on Facebook, Twitter Instagram and other platforms',
            class: 'col-lg-6 my-1 px-1',
        },
        {
            imgSrc: '3',
            title: 'Social media content',
            text: 'Posts on Facebook, Twitter Instagram and other platforms',
            class: 'col-lg-3 my-1 px-1',
        },
        {
            imgSrc: '4',
            title: 'Social media content',
            text: 'Posts on Facebook, Twitter Instagram and other platforms',
            class: 'col-lg-6 my-1 px-1',
        },
        {
            imgSrc: '5',
            title: 'Social media content',
            text: 'Posts on Facebook, Twitter Instagram and other platforms',
            class: 'col-lg-6 my-1 px-1',
        },
    ]
    return {
         t,
         departments,
         contents
    }
    },
});
</script>
