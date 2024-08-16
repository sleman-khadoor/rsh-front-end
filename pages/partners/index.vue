<template>
    <div class="row bg-secondary m-0">
        <Title>Rashm Partners</Title>
        <Meta name="description" content="Rasham Partners" />
        <div class="col-11 mx-auto my-5 bg-primary text-center rounded-4">
            <div class="text-choco font-xx-large ff-meduim lh-25 pt-5 mb-4">
                {{t('ourPartners.title')}}
            </div>
            <div class="text-dark-blue font-large ff-regular lh-30 px-5">
                {{t('ourPartners.subTitle')}}
            </div>
            <div class="d-flex flex-wrap p-5 justify-content-center align-items-center">
            <div v-for="(partner,i) in partners" :key="i" class="col w-fc">
                <PartnersCard :partner="partner"/>
            </div>
            </div>
            <div class="row justify-content-center pb-5">
                <span class="font-large ff-meduim mb-2">{{t('ourPartners.toRequest')}}</span>
                <span class="font-meduim ff-regular lh-22 mb-2">{{t('ourPartners.contactMsg')}}</span>
                <div class="d-flex align-items-center w-auto mx-auto text-choco font-meduim ff-regular mb-2">
                    <img src="/icon/email-fill.svg" class="d-block my-auto mx-1" alt="..." width="20" height="20">
                    literary.agency@rashm.com.sa
                </div>

            </div>
        </div>
    </div>
</template>
<script setup>
const runTimeConfig = useRuntimeConfig();
const { t } = useI18n();
const partners = ref([]);
const partnersPending = ref(false);
const partnersError = ref(null);

// Fetch data function
const fetchData = async (url, dataRef, pendingRef, errorRef) => {
  pendingRef.value = true;
  errorRef.value = null;

  try {
    const response = await $fetch(`${runTimeConfig.public.API_URL}/${url}`, {
      headers: API_HEADER(),
    });
    dataRef.value = response.data;
  } catch (error) {
    errorRef.value = error;
    console.error(`Error fetching ${url}:`, error);
  } finally {
    pendingRef.value = false;
  }
};
// Fetch data on component mount
onMounted(async () => {
  try {
    await fetchData('partners', partners, partnersPending, partnersError);
  } catch (error) {
    console.error('Error during onMounted fetch:', error);
  }
});
</script>