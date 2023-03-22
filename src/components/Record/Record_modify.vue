<template>
    <div>
        <!-- 面包屑导航区 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>病历数据</el-breadcrumb-item>
            <el-breadcrumb-item>修改</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 卡片视图区 -->
        <el-card shadow="hover" class="search_card">
            <!-- 搜索 -->
            <el-row>
                <el-col :span="7" style="margin-left: 800px;">
                    <div style="margin-top: 0px;">
                        <el-input 
                        placeholder="请输入病历号" 
                        v-model="queryinfo.query" 
                        clearable 
                        @clear="get_records_list">
                            <el-button @click="get_records_list" slot="append" icon="el-icon-search">
                            </el-button>
                        </el-input>
                    </div>
                </el-col>
            </el-row>
            <!-- 表格区 -->
            <el-table
            :data="record_list"
            stripe>
                <el-table-column
                prop="RID"
                label="病历号"
                width="200">
                </el-table-column>
                <el-table-column
                prop="Rname"
                label="姓名"
                width="200">
                </el-table-column>
                <el-table-column
                prop="Rsex"
                label="性别"
                width="200">
                </el-table-column>
                <el-table-column
                prop="Rdescribe"
                label="描述"
                width="200">
                </el-table-column>
                <el-table-column
                prop="Rtime"
                label="更新时间">
                </el-table-column>
                <el-table-column
                label="操作"
                width="200">
                    <template slot-scope="scope">
                        <el-button type="primary" icon="el-icon-edit" @click="show_modify_dialog(scope.row.RID)"></el-button>
                        <el-button type="danger" icon="el-icon-delete"></el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页区域 -->
            <el-pagination
            @current-change="handleCurrentChange"
            :current-page="queryinfo.pagenum"
            :page-size="queryinfo.pagesize"
            layout="total, prev, pager, next, jumper"
            :total="this.total">
            </el-pagination>
        </el-card>
        <!-- 修改信息对话框 -->
        <el-dialog
        title="修改信息"
        :visible.sync="modify_dialog_visiable"
        width="30%"
        >
        <el-form 
        :model="modify_form" 
        :rules="modify_form_rules" 
        ref="modify_form_ref"
        label-width="70px"
        :label-position="right">
            <el-form-item label="病历号" >
                <el-input v-model="modify_form.RID" disabled></el-input>
            </el-form-item>
            <el-form-item label="姓名" >
                <el-input v-model="modify_form.Rname" disabled></el-input>
            </el-form-item>
            <el-form-item label="病情" >
                <el-input v-model="modify_form.Rdescribe" ></el-input>
            </el-form-item>
            <el-form-item label="CRP" >
                <el-input v-model="modify_form.CRP" ></el-input>
            </el-form-item>
            <el-form-item label="ESR" >
                <el-input v-model="modify_form.ESR" ></el-input>
            </el-form-item>
            <el-form-item label="糖尿病" >
                <el-input v-model="modify_form.Diabetes" ></el-input>
            </el-form-item>
            <el-form-item label="高血压" >
                <el-input v-model="modify_form.Hypertension" ></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click= "()=>modify_dialog_visiable = false">取 消</el-button>
            <el-button type="primary" @click= "()=>modify_dialog_visiable = false">确 定</el-button>
        </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data()
    {
        return {
            // 请求病历的参数对象
            queryinfo:
            {
                query: '',
                pagenum: 1,
                pagesize:2,
            },
            // TODO:
            // record_list:[],
            record_list: [
                {
                    RID: 1,
                    Rname: "柳先杰",
                    Rsex: "男",
                    Rdescribe: "阳性",
                    Rtime:"2022-3-1",
                },
                {
                    RID: 2,
                    Rname: "刘书宇",
                    Rsex: "男",
                    Rdescribe: "阴性",
                    Rtime:"2022-3-18",
                },
            ],
            total: 3,
            modify_dialog_visiable: false,
            //查询到的modify信息对象
            modify_form: {},

        };
    },
    creat()
    {
        this.get_records_list();
    },
    methods:
    {
        async get_records_list()
        {
            // TODO:填写获取病历数据的URL
            const { data: res } = await this.$http.get('', { params: this.queryinfo });
            if (res.status !== 200)
            {
                return this.$message.error('获取病历数据失败');
            }
            this.record_list = res.record_list;
            this.total = res.total;
        },
        // 监听页码改变的事件
        handleCurrentChange(newPage)
        {
            this.queryinfo.pagenum = newPage;
            this.get_records_list();
        },
        // 展示编辑对话框
        async show_modify_dialog(id)
        {
            this.modify_dialog_visiable = true;
            // TODO:填写查询信息的URL
            // const { data: res } = await this.$http.get();
            // if (res.status !== 200)
            // {
            //     return this.$message.error("获取失败");
            // }
            // this.modify_form = res.modify_form;
            this.modify_form = {
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
        }
        
        
    }
};
</script>

<style lang="less" scoped>
.el-table
{
    margin-top: 15px;
    font-size: 14px;
}
.el-pagination
{
    margin-top: 20px;
    margin-left: 55%;
}
</style>