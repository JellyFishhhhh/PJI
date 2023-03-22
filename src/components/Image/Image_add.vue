<template>
    <div>
        <!-- 面包屑导航区 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>影像数据</el-breadcrumb-item>
                <el-breadcrumb-item>导入</el-breadcrumb-item>
            </el-breadcrumb>
            
            <!-- 病历号卡片区 -->
            <el-card>
                <el-form :model="record_add_form" ref="login_form_ref" class="login_form" label-width="80px">
                    <el-row :gutter="0">
                        <el-col :span="8">
                            <el-form-item label="病历号" class="input" >
                                <el-input v-model="record_add_form.RID" >
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>   
                </el-form>
            </el-card>
            
            <!-- 图片卡片区 -->
            <el-card style="margin-top: 2%;">
                <!-- TODO:填写action -->
                <el-upload
                style="margin-left: 7%;"
                action="#"
                list-type="picture-card"
                :auto-upload="false">
                    <i slot="default" class="el-icon-plus"></i>
                    <div slot="file" slot-scope="{file}">
                    <img
                        class="el-upload-list__item-thumbnail"
                        :src="file.url" alt=""
                    >
                    <span class="el-upload-list__item-actions">
                        <span
                        class="el-upload-list__item-preview"
                        @click="handlePictureCardPreview(file)"
                        >
                        <i class="el-icon-zoom-in"></i>
                        </span>
                    </span>
                    </div>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-card>

            <!-- 确认按钮 -->
            <div style="margin-top: 2%;margin-left: 80%;">
                <el-button type="primary" @click="create" round>导入</el-button>
                <el-button type="info" round>取消</el-button>
            </div>
    </div>
</template>

<script>
export default {
    data()
    {
        return {
            record_add_form:
            {
                RID: 1,
                Rname: "柳先杰",
                Rsex: "男",
                Rdescribe: "阳性",
                CRP: "",
                ESR: "",
                Aerobic: "",
                Anaerobic: "",
                Diabetes: "无",
                Hypertension: "无",
            },
            dialogImageUrl: '',
            dialogVisible: false,
        };
    },
    methods:
    {
        // TODO:提交form的函数
        create()
        {
            // 手动上传到服务器
            this.$refs.upload.submit();
            this.$message.success('导入成功');
            this.$router.push("/home");
        },

        handlePictureCardPreview(file)
        {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
        },
    }
}
</script>

<style lang="less" scoped>
.input
{
    width: 80%;
}
.el-row
{
    margin-top: 50px;
}
</style>
