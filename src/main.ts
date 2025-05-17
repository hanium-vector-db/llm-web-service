import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 📌 router/index.ts 파일이 있어야 합니다
import './assets/tailwind.css';

const app = createApp(App);

app.use(router); // ✅ 라우터 연결
app.mount('#app');
