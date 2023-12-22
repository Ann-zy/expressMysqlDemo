<template>
    <div></div>
    <div class="login-container">
        <div class="login-input-wrap">
            <p class="title">Hello friend！</p>
            <div>
                <van-field
                    v-model="userForm.username"
                    name="用户名"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
                />
                    <van-field
                    v-model="userForm.password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                />
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
    box-sizing: border-box;
    display: flex;
    align-content: center;
    width: 100%;
    height: 100vh;
    background: url('~@/assets/images/login-bg.jpg') no-repeat;
    background-size: 100% 100%;
    .login-input-wrap{
        box-sizing: border-box;
        margin: auto;
        width: 600px;
        height: 700px;
        background: rgba($color: #FFFFFF, $alpha: 0.85);
        border-radius: 10px;
        .title{
            font-family: PingFangSC-Regular, PingFang SC;
            text-align: center;
            font-size: 60px;
            font-weight: 550;
        }
    }
}
</style>