<template>
    <div class="login-container">
        <div class="login-input-wrap">
            <div>
                Hello World!
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
// import { useRouter } from 'vue-router';

const userForm = ref({
    username: '',
    password: ''
})

userForm.value.username = 'wjk'

</script>   
<style lang="scss" scoped>
.login-container{
    display: flex;
    align-content: center;
    width: 100%;
    height: 100vh;
    background: url('~@/assets/login-bg.jpg') no-repeat;
    background-size: 100%;
    .login-input-wrap{
        margin: auto;
        width: 750px;
        height: 300px;
        background: #FFFFFF;
        border-radius: 6px;
    }
}
</style>