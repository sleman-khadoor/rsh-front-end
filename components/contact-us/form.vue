<template>
    <div class="row py-5">
        <div v-if="!steps"  class="col-lg-5 px-5 text-dark-blue justify-content-start">
            <div class="font-xx-large fw-semibold mb-3">
                {{props.title}}
            </div>
            <div class="font-large ff-meduim mb-4 lh-30">
                {{props.subTitle}}
            </div>
            <div v-for="contact in contactInfo" class="d-flex justify-content-start text-meduim mb-4">
                 <div v-if="contact.type === 'phone'" class="d-flex justify-content-center rounded-1 w-auto col-auto">
                    <img src="/icon/phone.svg" alt="rashm" height="20" width="20">
                </div>
                <span v-if="contact.type === 'phone'" class="text-dark-blue px-1 my-auto" dir="ltr">{{contact.value}}</span>
                <div v-else-if="contact.type === 'email'" class="d-flex justify-content-center rounded-1 w-auto col-auto">
                    <img src="/icon/email.svg" alt="rashm" height="20" width="20">
                </div>
                <span v-else-if="contact.type === 'email'" class="text-dark-blue px-1 my-auto">{{contact.value}}</span>
                <div v-else-if="contact.type === 'en_location' || contact.type === 'ar_location'" class="d-flex justify-content-center rounded-1 w-auto col-auto">
                    <img src="/icon/location.svg" alt="rashm" height="20" width="20">
                </div>
                <span v-else-if="contact.type === 'en_location' || contact.type === 'ar_location'" class="text-dark-blue px-1 my-auto">{{contact.value}}</span>
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
                    <input type="text" class="form-control bg-snow form-control h-50px" @change="removeAlert()" v-model="contactUsForm.name" id="name" :placeholder="$t('contactUs.form.fullName')" required>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" class="form-control bg-snow form-control h-50px" @change="removeAlert()" v-model="contactUsForm.mobile" id="mobile" :placeholder="$t('contactUs.form.mobile')" required>
                </div>
                <div class="mb-4">
                    <input type="email" class="form-control bg-snow h-50px" @change="removeAlert()" v-model="contactUsForm.email" id="exampleInputEmail1" aria-describedby="emailHelp" :placeholder="t('contactUs.form.email')" required>
                    <div class="invalid-feedback">
                         {{$t('contactUs.form.emailValidation')}}
                    </div>
                </div>
                <div class="mb-4">
                    <textarea class="form-control bg-snow" @change="removeAlert()" v-model="contactUsForm.description" id="exampleFormControlTextarea1" rows="5" :placeholder="t('contactUs.form.description')" required></textarea>
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
                        <img v-if="file.type === 'pdf'" src="/img/pdf.png" class="img-thumbnail" alt="uploaded file">
                        <img v-else-if="file.type === 'docx' || file.type === 'doc'" src="/img/word.png" class="img-thumbnail" alt="uploaded file">
                        <img v-else :src="file.url" class="img-thumbnail" alt="uploaded file">
                        <button type="button" class="btn-close position-absolute top-0 start-100 translate-middle" @click="removeFile(index)" aria-label="Close"></button>
                    </div>
                </div>
                <!-- 6LcrNxsqAAAAAIjAUgca8kLJT8-e4vlHbV7Emwvg -->
                <!-- <div class="form-group">
                            <div class="g-recaptcha" data-sitekey="6LcrNxsqAAAAAEc4693eTJKT7ANdpSHAAO-70jeV" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                            <input class="form-control d-none" data-recaptcha="true" required data-error="Please complete the Captcha">
                            <div class="help-block with-errors"></div>
                </div> -->
                <div class="d-grid gap-2">
                    <button type="submit" :disabled="disabledBtn" :class="dynamicClass">{{$t('contactUs.form.send')}}</button>
                </div>
            </form>
            <div  v-if="requestMessage" :class="`mt-3 d-flex font-meduim justify-content-between alert `+ requestClass" role="alert">
                 <span class="m-0">{{$t(`contactUs.form.alert.${requestMessage}`)}}</span>
                 <button type="button" class="btn-close mt-0" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { createEmitter } from '~/node_modules/@intlify/shared/dist/shared';
// export default defineComponent({
const { locale } = useI18n()
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
const requestPending = ref(false)
const requestError = ref(null)
const requestSuccess = ref(null)
const requestMessage = ref(null)
const requestClass = ref(null)
const contacts = ref([]);
const contactsPending = ref(false);
const contactsError = ref(null);
// const uploadedFilesTosend = ref([])
const emit = defineEmits() ;
const contactUsForm = reactive({
            name: '',
            mobile: '',
            email: '',
            description: '',
            documents: [],
})
const handleFileUpload = (event) => {
            removeAlert()
            if(event?.target?.files?.length < 6) {
                const uploadedFiles = event.target.files
                for (let i = 0; i < uploadedFiles.length; i++) {
                    const file = uploadedFiles[i]
                    const name = file.name
                    var n = name.lastIndexOf('.');
                    var type = name.substring(n + 1);
                    contactUsForm.documents.push(file)
                    const url = URL.createObjectURL(file)
                    files.value.push({ file, url, type })
                }
                console.log('my files hereeee:', files.value);
            } else {
                document.getElementById("file").value = '';
            }
}
const removeFile = (index) => {
            removeAlert()
            files.value.splice(index, 1)
            contactUsForm.documents.splice(index, 1)
}
const flag = computed(() => {
            return files?.value?.length > 4 ? true : false
})
const disabledBtn = computed(() => {
    return (files?.value?.length > 5) || (requestPending === true)
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
    try {
            requestPending.value = true;
            let endpoint = null;
            const formData = new FormData();
            if(props.steps) {
                formData.append('service_name', props.serviceName);
                formData.append('fullname', contactUsForm.name);
                formData.append('email', contactUsForm.email);
                formData.append('mobile', contactUsForm.mobile);
                formData.append('description', contactUsForm.description);

                for (let i = 0; i < contactUsForm.documents.length; i++) {
                    formData.append(`documents[${i}]`, contactUsForm.documents[i]);
                }
                endpoint = '/service-requests'
                console.log('formData entries:', Array.from(formData.entries()));
            } else {
                formData.append('fullname', contactUsForm.name);
                formData.append('email', contactUsForm.email);
                formData.append('mobile', contactUsForm.mobile);
                formData.append('message', contactUsForm.description);
                endpoint = '/contact-requests'
                console.log('formData entries:', Array.from(formData.entries()));
            }
            
            const data = await $fetch(runTimeConfig.public.API_URL + endpoint, {
                headers: { ...headers.value },
                method: 'post',
                body: formData
            });
            requestMessage.value = data.message
            requestSuccess.value = data.success
            if(data.success) {
                requestClass.value = `alert-success`
                requestMessage.value = `success`
            } else {
                requestClass.value = `alert-danger`
                requestMessage.value = `danger`
            }
            console.log('responseData:', data);
    } catch (error) {
            requestError.value = error;
            console.error('Error fetching books:', error);
    } finally {
            requestPending.value = false;
    }
};

async function checkValidate(event) {
            const forms = document.querySelectorAll('.needs-validation')
            const form = Array.from(forms)[0]
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else {
                addRequest()
            }
            form.classList.add('was-validated')
};

function removeAlert() {
    requestMessage.value = null
};
// Fetch data function
const fetchData = async (url, dataRef, pendingRef, errorRef) => {
  pendingRef.value = true;
  errorRef.value = null;

  try {
    const response = await $fetch(`${runTimeConfig.public.API_URL}/${url}`, {
      headers: headers.value,
    });
    dataRef.value = response.data;
  } catch (error) {
    errorRef.value = error;
    console.error(`Error fetching ${url}:`, error);
  } finally {
    pendingRef.value = false;
  }
};
const contactInfo = computed(() => {
    return contacts.value.filter((e) =>
        locale.value === 'ar' ? (e.type !== 'twitter' && e.type !== 'instagram' && e.type !== 'linkedIn' && e.type !== 'facebook' && e.type !== 'en_location') :
        (e.type !== 'twitter' && e.type !== 'instagram' && e.type !== 'linkedIn' && e.type !== 'facebook'  && e.type !== 'ar_location')
    )}
);
onMounted(async ()=> {
    headers.value = API_HEADER(); // Set headers in the setup context
    try {
        await fetchData('contacts', contacts, contactsPending, contactsError);
    } catch (error) {
        console.error('Error during onMounted fetch:', error);
    }
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