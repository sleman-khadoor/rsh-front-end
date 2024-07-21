<template>
    <div class="row bg-secondary m-0">
        <Title>Rashm Partners</Title>
        <Meta name="description" content="Rasham Partners" />
        <div class="col-11 mx-auto my-5 bg-primary text-center rounded-4">
            <div class="text-choco font-xx-large ff-meduim lh-25 pt-5 mb-5">
                Our Partners
            </div>
            <div class="text-dark-blue font-large ff-regular lh-22 px-5">
                Rashm is an exclusive agent for a number of prestigious publishers in various fields
                To communicate please fill out the form below
            </div>
            <div class="d-flex flex-wrap p-5 justify-content-center align-items-center">
            <div v-for="(partner,i) in partners" :key="i" class="col">
                <PartnersCard :partner="partner"/>
            </div>
            </div>
            <div class="row justify-content-center pb-5">
                <span class="font-large ff-meduim mb-2">To Request A service</span>
                <span class="font-meduim ff-regular lh-22 mb-2">Contact us at the following email</span>
                <div class="d-flex align-items-center w-auto mx-auto text-choco font-meduim ff-regular mb-2">
                    <img src="@/assets/icon/email-fill.svg" class="d-block my-auto mx-1" alt="..." width="20" height="20">
                    rasham@gmail.com
                </div>

            </div>
        </div>
    </div>
</template>
<script setup>
    const runTimeConfig = useRuntimeConfig();
    //get categories
    const { data: partners, pending, refresh} = await useFetch(`${runTimeConfig.public.API_URL}/partners`, {
        transform: (_partners) => _partners.data,
        headers: API_HEADER(),
        onResponse({ request, response, options }) {
            // Process the response data
            console.log('request responsed', response)
        },
        onRequestError({ request, options, error }) {
            // Handle the request errors
            console.log('request error', response)
        },
        onResponseError({ request, response, options }) {
            console.log('response error', response)
        }
    });
</script>