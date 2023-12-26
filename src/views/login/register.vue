<template>
  <div>
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
        <van-field
            v-model="passwordAgain"
            type="password"
            name="再次确认"
            label="再次确认"
            placeholder="请再次确认密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
    </div>
    <van-button class="btn register" @click="registerUser">确认</van-button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { addUser } from '@/api/index'
import { showToast } from 'vant';
// import { useRouter } from 'vue-router';

const userForm = ref({
    username: '',
    password: ''
})
const passwordAgain = ref('')

const checkDataHandler = () => {
    if (!userForm.value.username) {
        showToast('请填写用户名')
        return false
    }
    if (!userForm.value.password) {
        showToast('请填写密码')
        return false
    }
    if (!passwordAgain.value) {
        showToast('请填写确认密码')
        return false
    }
    if (passwordAgain.value !== userForm.value.password) {
        showToast('再次确认密码输入错误')
        return false
    }
    return true
}
const registerUser = async () => {
    try {
        if (!checkDataHandler()) {
          return
        }
        await addUser(userForm.value);
    } catch (error) {
        console.log(error)
    }
}

</script>
<style lang="scss" scoped>

.btn{
    margin: 30px;
    width: 690px;
    height: 70px;
    border-radius: 10px;
    background: #2bb9d5;
    color: #FFFFFF;
    font-family: PingFangSC-Regular, PingFang SC;
    text-align: center;
    font-size: 32px;
    font-weight: 500;
}
</style>