<template>
    <div>
        <Title>Contact with Rashm</Title>
        <Meta name="description" content="Contact with Rashm" />
        <div class="row bg-secondary m-0">
            <div class="col-11 mx-auto my-5 bg-primary text-center rounded-4 py-2">
                <ContactUsForm :color="'bg-dark-blue'" :title="$t('contactUs.title')" :subTitle="$t('contactUs.subTitle')" :steps="false"/>
            </div>
        </div>
    </div>
</template>