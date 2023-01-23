<template>
    <div class="login-container">
        <div class="login-box">
            <el-form v-model="loginForm" class="login-form" lable-position="top">
                <el-form-item>
                    <h1>Sign up to system</h1>
                </el-form-item>

                <!-- 用户名 -->
                <el-form-item label="Username">
                    <el-input v-model="loginForm.useranme" prefix-icon="iconfont icon-geren"></el-input>
                </el-form-item>

                <!-- 密码 -->
                <el-form-item label="Password">
                    <el-input v-model="loginForm.password" prefix-icon="iconfont icon-mima" type="password"></el-input>
                </el-form-item>

                <!-- 按钮 -->
                <el-form-item class="btns">
                    <el-button type="primary" size="default" @click="login">Sign In</el-button>
                    <el-button type="info" size="default" @click="">Sign Up</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loginForm: {
                    useranme: '',
                    password: ''
                }
            }
        },
        methods: {
            login() {
                
            }
        }
    }
</script>

<style lang="less" scoped>
.login-container {
    background-color: aqua;
    height: 100%;
}

.login-box {
    background-color: white;
    width: 50%;
    height: 50%;
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .login-form {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 60%;

        .btns {
            display: flex;
            justify-content: flex-end;
        }
    }
}
</style>