<template>
    <div class="row py-5">
        <div v-if="!steps"  class="col-lg-4 px-5 text-dark-blue text-start">
            <div class="font-xx-large fw-semibold mb-3">
                {{props.title}}
            </div>
            <div class="font-large weight-meduim mb-4">
                {{props.subTitle}}
            </div>
            <div class="d-flex justify-content-start text-meduim mb-4">
                 <div class="d-flex justify-content-center rounded-1 w-auto col-auto">
                    <img src="@/assets/icon/phone.svg" alt="rashm" height="20" width="20">
                </div>
                <span class="text-dark-blue px-1 my-auto">+971 9854 2631 7852</span>
            </div>
            <div class="d-flex justify-content-start text-meduim mb-4">
                 <div class="d-flex justify-content-center rounded-1 w-auto col-auto">
                    <img src="@/assets/icon/email.svg" alt="rashm" height="20" width="20">
                </div>
                <span class="text-dark-blue px-1 my-auto">rasham@gmail.com</span>
            </div>
            <div class="d-flex justify-content-start text-meduim mb-4">
                 <div class="d-flex justify-content-center rounded-1 w-auto col-auto">
                    <img src="@/assets/icon/location.svg" alt="rashm" height="20" width="20">
                </div>
                <span class="text-dark-blue px-1 my-auto">Riyadh</span>
            </div>
        </div>
        <div v-else class="col-lg-4 px-5 text-dark-blue text-start">
            <div class="d-flex text-large">
                <span class="font-xx-large fw-semibold">
                    {{props.title}}
                </span><span class="mx-2 font-large weight-meduim mt-auto">{{$t('departments.with')}}</span>
            </div>                        
            <div class="mb-3 font-large weight-meduim mb-5">{{props.subTitle}}</div>
            <div class="row mt-0 mb-4 align-content-center align-content-stretch align-items-stretch font-meduim weight-regular">
                <div class="col-2 justify-content-center text-center">
                    <img :src="`/_nuxt/assets/icon/${props.circleSrc}.svg`" alt="rashm" height="22" width="22">
                    <div class="hr bg-grey h-100 mx-auto" style="width:3px;"></div>
                </div>
                <div class="col-10 mb-4">
                    Fill out the form with the required information
                    and provide us with the material you want
                    to translate
                </div>
            </div>
            <div class="row mt-0 mb-4 align-content-center align-content-stretch align-items-stretch font-meduim weight-regular">
                <div class="col-2 justify-content-center text-center">
                    <img :src="`/_nuxt/assets/icon/${props.circleSrc}.svg`" alt="rashm" height="22" width="22">
                    <div class="hr bg-grey h-100 mx-auto" style="width:3px;"></div>
                </div>
                <div class="col-10 mb-4">
                    We will provide you with information about
                    our services and prices
                </div>
            </div>
            <div class="row mt-0 mb-4 align-content-center align-content-stretch align-items-stretch font-meduim weight-regular">
                <div class="col-2 justify-content-center text-center">
                    <img :src="`/_nuxt/assets/icon/${props.circleSrc}.svg`" alt="rashm" height="22" width="22">
                </div>
                <div class="col-10 mb-4">
                    We will deliver the translation to you within
                    the agreed upon time
                </div>
            </div>
        </div>
        <div class="col-lg-8 px-5">
            <form>
                 <div class="mb-4 d-flex justify-content-between">
                    <input type="text" class="form-control bg-snow" id="name" placeholder="full name">&nbsp;&nbsp;
                    <input type="number" class="form-control bg-snow" id="mobile" placeholder="mobile number">
                </div>
                <div class="mb-4">
                    <input type="email" class="form-control bg-snow" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address">
                </div>
               
                <div class="mb-4">
                    <textarea class="form-control bg-snow" id="exampleFormControlTextarea1" rows="5" placeholder="description"></textarea>
                </div>
                <div v-if="steps" class="mb-4">
                    <input type="file" class="form-control bg-snow" id="file" @change="handleFileUpload" multiple v-bind:disabled="flag">
                    <div v-if="flag" class="text-danger text-start">you can upload just 5 files</div>
                </div>
                <div v-if="steps" class="uploaded-files d-flex justify-content-start py-2 mb-4">
                    <div v-for="(file, index) in files" :key="index" class="uploaded-file position-relative">
                        <img :src="file.url" class="img-thumbnail" alt="uploaded file">
                        <button type="button" class="btn-close position-absolute top-0 start-100 translate-middle" @click="removeFile(index)" aria-label="Close"></button>
                    </div>
                </div>
                <div class="d-grid gap-2">
                    <button type="submit" :class="dynamicClass">Send</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script lang="ts">
import { ref } from 'vue'
export default defineComponent({
    props: ['title', 'subTitle', 'color', 'circleSrc', 'steps'],
    setup(props) {
        const files = ref([])

        const handleFileUpload = (event) => {
            if(event?.target?.files?.length < 6) {
                const uploadedFiles = event.target.files
                for (let i = 0; i < uploadedFiles.length; i++) {
                    const file = uploadedFiles[i]
                    const url = URL.createObjectURL(file)
                    files.value.push({ file, url })
                }
            } else {
                document.getElementById("file").value = '';
            }
            console.log('files',files.value.length);
            console.log('files',flag);
        }
        const removeFile = (index) => {
            // flag = false;
            files.value.splice(index, 1)
        }
        const flag = computed(() => {
            return files?.value?.length === 5 ? true : false
        })

        const dynamicClass = computed(() => {
        return `btn btn-primary p-2 border-0 font-x-large weight-regular ${props.color}`;
        });
        watch(flag,(newV, oldV) => {
            console.log('flaggg', newV);
        }, { deep: true });
        return {
            dynamicClass,
            files,
            flag,
            props,
            handleFileUpload,
            removeFile
        }
    }
})

// watchEffect((flag) =>console.log(flag));
// computed dynamic class

</script>
<style scoped>
.file-upload-container {
  width: 100%;
}

.uploaded-files {
  flex-wrap: nowrap;
}

.uploaded-file {
  margin-right: 10px;
}

.uploaded-file img {
  height: 100px;
  width: auto;
}
.btn-close{
    background-image: url('@/assets/icon/close-circle.svg');
    background-size: auto;
}
</style>