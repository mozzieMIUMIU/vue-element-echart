<template>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="50px" class="demo-ruleForm">
        <div class="login-txt">登录页面</div>
        <el-form-item label="帐号" prop="account">
            <el-input v-model.number="ruleForm.account" :maxlength="5" placeholder="不超过5个字符"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" auto-complete="off" :maxlength="5" placeholder="不超过5个字符"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
    </el-form>

</template>
<script>
    export default {
        data() {
            return {
                ruleForm: {
                    account: '',
                    pass: ''
                },
                rules: {
                    account: [
                        { required: true, trigger: 'blur' },
                        { type: 'number', message: '必须为数字值'}
                    ],
                    pass: [
                        { required: true, trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        console.log(this.ruleForm);
                        this.$router.push({path:'/page-one',
                            query: {

                            }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        }
    }
</script>
<style scoped>
    .demo-ruleForm {
        width: 400px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -200px 0 0 -200px;
    }
    .login-txt{
        padding: 20px 0;
    }
</style>