import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router';
import '@/utils/rem';

import { createPinia } from 'pinia'

import 'vant/es/toast/style';
import 'vant/es/dialog/style';

import { Cell, Button, Field, List, allowMultipleToast, DatePicker, Popup, NumberKeyboard, Stepper, Tab, Tabs, Dialog, Toast } from 'vant';

const pinia = createPinia();

Toast.allowMultiple();

createApp(App)
    .use(router)
    .use(pinia)
    .use(Cell)
    .use(Button)
    .use(Field)
    .use(List)
    .use(DatePicker)
    .use(Popup)
    .use(NumberKeyboard)
    .use(allowMultipleToast)
    .use(Stepper)
    .use(Tab)
    .use(Tabs)
    .use(Dialog)
    .use(Toast)
    .mount('#app')
