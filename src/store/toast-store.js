import {defineStore} from 'pinia';
import {ref} from 'vue';

export const useToastStore = defineStore('toast', () => {

    let increment = 0;

    const message = ref({});

    function $reset(){
        message.value = {}
    }
    function toastMessage({
                              title,
                              body = null,
                              pos = 'top-end',
                              value = 10000,
                              variant = null,
                              textVariant = null,
                              progressVariant = 'info',
                          }) {
        message.value = {
            increment: increment++,
            title,
            body,
            pos,
            value,
            variant,
            textVariant,
            progressProps: {
                variant: progressVariant,
            },
        };
    }

    function toastInfo(text) {
        toastMessage({
            title: text,
            body: null,
        });
    }

    function toastError(text, body = null) {
        toastMessage({
            title: text,
            body,
            textVariant: 'danger',
            progressVariant: 'danger',

        });
    }

    return {
        toastMessage,
        toastError,
        message,
        $reset,
    };
});