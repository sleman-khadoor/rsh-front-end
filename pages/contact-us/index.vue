<template>
    <div>
        <Title>Contact with Rashm</Title>
        <Meta name="description" content="Contact with Rashm" />
        <div class="row bg-secondary m-0">
            <div class="col-11 mx-auto my-5 rounded-4">
                <div class="mb-3 text-center">
                    <DepartmentsOverlayImg 
                    :imgSrc="'contact-us'" 
                    :gallery="false"
                    :btn="false"
                    :btnColor="''"
                    :text="$t('contactUs.overlayImg.text')"
                    :title="$t('contactUs.overlayImg.title')"/>
                </div>
                <div class="mb-3 mx-auto bg-primary rounded-4 py-2">
                    <ContactUsForm :color="'bg-choco'" :title="$t('contactUs.title')" :subTitle="$t('contactUs.subTitle')" :steps="false" :circleSrc="''"/>
                </div>
            </div>
        </div>
    </div>
</template>