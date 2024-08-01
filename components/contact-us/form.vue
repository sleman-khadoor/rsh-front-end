<template>
    <div class="row py-5">
        <div v-if="!steps"  class="col-lg-5 px-5 text-dark-blue justify-content-start">
            <div class="font-xx-large fw-semibold mb-3">
                {{props.title}}
            </div>
            <div class="font-large ff-meduim mb-4 lh-30">
                {{props.subTitle}}
            </div>
            <div class="d-flex justify-content-start text-meduim mb-4">
                 <div class="d-flex justify-content-center rounded-1 w-auto col-auto">
                    <img src="/icon/phone.svg" alt="rashm" height="20" width="20">
                </div>
                <span class="text-dark-blue px-1 my-auto" dir="ltr">+971 9854 2631 7852</span>
            </div>
            <div class="d-flex justify-content-start text-meduim mb-4">
                 <div class="d-flex justify-content-center rounded-1 w-auto col-auto">
                    <img src="/icon/email.svg" alt="rashm" height="20" width="20">
                </div>
                <span class="text-dark-blue px-1 my-auto">rasham@gmail.com</span>
            </div>
            <div class="d-flex justify-content-start text-meduim mb-4">
                 <div class="d-flex justify-content-center rounded-1 w-auto col-auto">
                    <img src="/icon/location.svg" alt="rashm" height="20" width="20">
                </div>
                <span class="text-dark-blue px-1 my-auto">Riyadh</span>
            </div>
        </div>
        <div v-else class="col-lg-5 px-5 text-dark-blue">
            <div class="d-flex text-large">
                <span class="font-xx-large fw-semibold">
                    {{props.title}}
                </span><span class="mx-2 font-large ff-meduim mt-auto">{{$t('departments.with')}}</span>
            </div>                        
            <div class="mb-3 font-large ff-meduim mb-5">{{props.subTitle}}</div>
            <div class="row mt-0 mb-4 align-content-center align-content-stretch align-items-stretch font-meduim ff-regular">
                <div class="col-1 p-0 justify-content-center text-center">
                    <img :src="`/icon/${props.circleSrc}.svg`" alt="rashm" height="22" width="22">
                    <div class="hr bg-grey h-100 mx-auto" style="width:3px;"></div>
                </div>
                <div class="col-11 mb-4 lh-25">
                    {{t('contactUs.steps.step1')}}
                </div>
            </div>
            <div class="row mt-0 mb-4 align-content-center align-content-stretch align-items-stretch font-meduim ff-regular">
                <div class="col-1 p-0 justify-content-center text-center">
                    <img :src="`/icon/${props.circleSrc}.svg`" alt="rashm" height="22" width="22">
                    <div class="hr bg-grey h-100 mx-auto" style="width:3px;"></div>
                </div>
                <div class="col-11 mb-4 lh-25">
                    {{t('contactUs.steps.step2')}}
                </div>
            </div>
            <div class="row mt-0 mb-4 align-content-center align-content-stretch align-items-stretch font-meduim ff-regular">
                <div class="col-1 p-0 justify-content-center text-center">
                    <img :src="`/icon/${props.circleSrc}.svg`" alt="rashm" height="22" width="22">
                </div>
                <div class="col-11 mb-4 lh-25">
                    {{t('contactUs.steps.step3')}}
                </div>
            </div>
        </div>
        <div class="col-lg-7 px-5">
            <form class="needs-validation"  @submit.prevent="checkValidate($event)" novalidate>
                 <div class="mb-4 d-flex justify-content-between">
                    <input type="text" class="form-control bg-snow form-control h-50px" v-model="contactUsForm.name" id="name" :placeholder="$t('contactUs.form.fullName')" required>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" class="form-control bg-snow form-control h-50px" v-model="contactUsForm.mobile" id="mobile" :placeholder="$t('contactUs.form.mobile')" required>
                </div>
                <div class="mb-4">
                    <input type="email" class="form-control bg-snow h-50px" v-model="contactUsForm.email" id="exampleInputEmail1" aria-describedby="emailHelp" :placeholder="t('contactUs.form.email')" required>
                    <div class="invalid-feedback">
                         {{$t('contactUs.form.emailValidation')}}
                    </div>
                </div>
                <div class="mb-4">
                    <textarea class="form-control bg-snow" v-model="contactUsForm.description" id="exampleFormControlTextarea1" rows="5" :placeholder="t('contactUs.form.description')" required></textarea>
                    <div class="invalid-feedback">
                         {{$t('contactUs.form.descriptionValidation')}}
                    </div>
                </div>
                <div v-if="steps" class="mb-2">
                    <div class="file-upload-container">
                        <input type="file" id="file-input" class="file-input" multiple @change="handleFileUpload" v-bind:disabled="flag">
                        <label for="file-input" class="file-label bg-snow text-light-grey h-50px">
                            <img src="/icon/link.svg" alt="Upload Icon" class="upload-icon"> <span class="label-text">&nbsp;{{t('contactUs.form.attachment')}}&nbsp;</span>
                        </label>
                    </div>
                    <div v-if="flag" class="text-danger mt-2">{{t('contactUs.form.attachmentValidation')}}</div>
                </div>
                <div v-if="steps" class="uploaded-files d-flex justify-content-start py-2 mb-2 flex flex-wrap">
                    <div v-for="(file, index) in files" :key="index" class="uploaded-file position-relative">
                        <img :src="file.url" class="img-thumbnail" alt="uploaded file">
                        <button type="button" class="btn-close position-absolute top-0 start-100 translate-middle" @click="removeFile(index)" aria-label="Close"></button>
                    </div>
                </div>
                <!-- 6LcrNxsqAAAAAIjAUgca8kLJT8-e4vlHbV7Emwvg -->
                <div class="form-group">
                            <div class="g-recaptcha" data-sitekey="6LcrNxsqAAAAAEc4693eTJKT7ANdpSHAAO-70jeV" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                            <input class="form-control d-none" data-recaptcha="true" required data-error="Please complete the Captcha">
                            <div class="help-block with-errors"></div>
                </div>
                <div class="d-grid gap-2">
                    <button type="submit" :disabled="disabledBtn" :class="dynamicClass">{{$t('contactUs.form.send')}}</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { createEmitter } from '~/node_modules/@intlify/shared/dist/shared';
// export default defineComponent({
const props = defineProps({
  title: {
    type: String
  },
  serviceName: {
    type: String
  },
  subTitle: {
    type: String
  },
  color: {
    type: String
  },
  circleSrc: {
    type: String
  },
  steps: {
    type: Boolean
  },
});
const {t} = useI18n()
const runTimeConfig = useRuntimeConfig();
const headers = ref({})
const files = ref([])
const uploadedFilesTosend = ref([])
const emit = defineEmits() ;
const contactUsForm = reactive({
            name: '',
            mobile: '',
            email: '',
            description: '',
            documents: null,
})
const handleFileUpload = (event) => {
            if(event?.target?.files?.length < 6) {
                const uploadedFiles = event.target.files
                uploadedFilesTosend.value = event.target.files
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
            return files?.value?.length > 4 ? true : false
})
const disabledBtn = computed(() => {
            return files?.value?.length > 5 ? true : false
})

const dynamicClass = computed(() => {
        return `btn btn-primary p-2 border-0 font-x-large ff-regular h-50px ${props.color}`;
});
const filehandler = () => {
            const fileInput = document.getElementById('file-input');
            const label = document.querySelector('.file-label .label-text');

            fileInput.addEventListener('change', function () {
                const fileList = fileInput.files;
                if (fileList.length > 0) {
                    const fileNames = [];
                    for (let i = 0; i < fileList.length; i++) {
                        fileNames.push(fileList[i].name);
                    }
                    label.textContent = fileNames.join(', ');
                } else {
                    label.textContent = 'Upload an attachment';
                }
            });
};
async function addRequest () {
    console.log('testttttttttttt', uploadedFilesTosend.value);
    let documents = [];
    let i = 0;
    for(i; i < uploadedFilesTosend.value.length; i++) {
        documents.push(uploadedFilesTosend.value[i])
    };
    console.log('documeeeents', documents);
    console.log('documeeeents', documents.toArray());
    console.log('documeeeents', typeof documents);
    const { data: responseData } = await $fetch(`${runTimeConfig.public.API_URL}/service-requests`, {
        headers: {...headers.value, 'Content-Type': 'application/x-www-form-urlencoded', },
        method: 'post',
        body: new URLSearchParams({
            'service_name': props.serviceName,
            'fullname': contactUsForm.name,
            'email': contactUsForm.email,
            'mobile': contactUsForm.mobile,
            'description': contactUsForm.description,
            'documents': documents,
        })
    })
};
async function checkValidate(event) {
            const forms = document.querySelectorAll('.needs-validation')
            console.log('contuct us form', Array.from(forms));
            const form = Array.from(forms)[0]
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else {
                addRequest()
            }
            form.classList.add('was-validated')
};

onMounted(()=> {
    headers.value = API_HEADER()
})

</script>
<style scoped>
.file-upload-container {
  width: 100% !important;
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
    background-image: url('/icon/close-circle.svg');
    background-size: auto;
}
::file-selector-button {
  display: none;
}
input[type="file"]
{
  display: none;
}
/* .fileUpload input.upload 
{
    display: inline-block;
} */

.file-upload-container {
    position: relative;
    width: fit-content;
}

.file-input {
    display: none; /* Hide the default file input */
}

.file-label {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, border-color 0.3s ease;
}

.file-label:hover {
    background-color: #e9e9e9;
    border-color: #bbb;
}

.upload-icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
}
::placeholder {
  color: #B9B9B9 !important;
  opacity: 1; /* Firefox */
}
::-ms-input-placeholder { /* Edge 12 -18 */
  color: #B9B9B9;
}
.h-50px {
        height: 50px;
}
</style>