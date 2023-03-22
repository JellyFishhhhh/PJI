<template>
    <div class="login_container">
        <div class="login_box">
            <div class="avater_box">
                <img src="../assets/asoul.jpg" >
            </div>
            <el-form :model="login_form" ref="login_form_ref" class="login_form">
                <el-form-item >
                    <el-input v-model="login_form.username" placeholder="  请输入账号" prefix-icon="el-icon-user">
                    </el-input>
                </el-form-item>
                <el-form-item >
                    <el-input type="password" v-model="login_form.pwd" placeholder="  请输入密码" prefix-icon="el-icon-lock">
                    </el-input>
                </el-form-item>
                <el-form-item class="buttons">
                    <el-button type="primary" @click="login" round>登录</el-button>
                    <el-button type="info" round>注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data()
    {
        return {
            login_form:
            {
                username:123,
                pwd:"",
            }   
            
        };
    },
    methods:
    {
        // TODO: respond格式
        login()
        {
            // 取消await注释->login前面加async
            // const { data: res } = await this.$http.post("login", this.login_form);
            // if (res.status !== 200) return this.$message.error('登录失败');
            this.$message.success('登陆成功');
            // window.sessionStorage.setItem("token", res.token);
            this.$router.push("/home");
        },
    }
}
</script>

<style lang="less" scoped>
.login_container
{
    background-color: #2b4b6b;
    height: 100%;
}
.login_box
{
    height: 300px;
    width: 450px;
    border-radius: 3px;
    background-color: rgb(245, 242, 242);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    .avater_box
    {
        height: 130px;
        width: 130px;
        border: 1px solid rgb(245, 242, 242);
        border-radius:50%;
        padding:10px;
        box-shadow: 0 0 10px #000;
        position: absolute;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color:rgb(245, 242, 242);
        img
        {
            height: 100%;
            width: 100%;
            border-radius:50%;
            background-color:rgb(187, 193, 193);
        }
    }

}
.buttons
{
    display: flex;
    justify-content: flex-end;
}
.login_form
{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 70px;
    box-sizing: border-box;
}
</style>
