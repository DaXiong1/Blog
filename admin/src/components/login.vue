<template>
    <div class="login_box">
        <div class="login_content">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm" style="width: 400px;">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" v-model="ruleForm.password" autocomplete="off" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item style="float: right;">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { login } from '../api';

export default {
  data () {
    var validateUser = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('请输入用户名'));
        } else {
            callback();
        }
    };
    var validatePass = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('请输入密码'));
        } else {
            callback();
        }
    };
    return {
        ruleForm: {
            username: '',
            password: ''
        },
        rules: {
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          username: [
            { validator: validateUser, trigger: 'blur' }
          ]
        }
    }
  },
  methods: {
      resetForm (formName) {
        this.$refs[formName].resetFields();
      },
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const loading = this.$loading();
            login(this.ruleForm)
              .then(data => {
                if (data.code === 0) {
                  const result = data.result || {};
                  const token = result.token
                  window.localStorage.setItem('token', token)
                  const currentUrl = window.sessionStorage.getItem('cur_url')
                  currentUrl && (location.href = currentUrl) // 跳转至登录前的页面
                } else {
                  this.alertErrMsg(data.msg || data.message);
                }
                loading.close();
              })
              .catch(err => {
                console.error(err);
                this.alertErrMsg(err);
                loading.close();
              });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
  }
}
</script>
