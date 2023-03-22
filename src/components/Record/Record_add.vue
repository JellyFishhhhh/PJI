<template>
    <div>
        <!-- 面包屑导航区 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>病历数据</el-breadcrumb-item>
                <el-breadcrumb-item>导入</el-breadcrumb-item>
            </el-breadcrumb>
            
            <!-- 表格卡骗区 -->
            <el-card>
                <el-form :model="record_add_form" ref="login_form_ref" class="login_form" label-width="80px">
                    <el-row :gutter="0">
                        <el-col :span="8">
                            <el-form-item label="病历号" class="input" >
                                <el-input v-model="record_add_form.RID" >
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="姓名" class="input" >
                                <el-input v-model="record_add_form.Rname" >
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="5">
                        <el-col :span="8">
                            <el-form-item label="性别" class="input" >
                                <el-input v-model="record_add_form.Rsex" >
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="描述" class="input">
                                <el-input v-model="record_add_form.Rdescribe">
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="CRP" class="input">
                                <el-input v-model="record_add_form.CRP">
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="5">
                        <el-col :span="8">
                            <el-form-item label="有氧培养" class="input">
                                <el-input v-model="record_add_form.Rdescribe">
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="无氧培养" class="input">
                                <el-input v-model="record_add_form.CRP">
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="ESR" class="input">
                                <el-input v-model="record_add_form.ESR">
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="5">
                        <el-col :span="8">
                            <el-form-item label="高血压" class="input" >
                                <el-input v-model="record_add_form.Hypertension" >
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="糖尿病" class="input">
                                <el-input v-model="record_add_form.Diabetes">
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item class="buttons">
                                <el-button type="primary" @click="create" round>创建</el-button>
                                <el-button type="info" round>取消</el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </el-card>
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
            }   
            
        };
    },
    methods:
    {
        // TODO:提交的函数
        create()
        {
            this.$message.success('导入成功');
            this.$router.push("/home");
        }
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
