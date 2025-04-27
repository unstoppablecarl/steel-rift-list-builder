import {defineStore} from 'pinia';
import {ref} from 'vue';

export const useToastStore = defineStore('toast', () => {

    const message = ref({
        title: null,
        body: null,
        pos: null,
        value: null,
        progressProps: {
            variant: 'info',
        },
    });

    function toast({title, body}){
        message.value = {
            title,
            body,
            pos: 'top-end',
            value: 10000,
            progressProps: {
                variant: 'info',
            },
        };
    }

    function toastMessage(text) {
        toast({
            title: text,
            body: null,
        });
    }


    return {
        toast,
        toastMessage,
        message,
    };
});