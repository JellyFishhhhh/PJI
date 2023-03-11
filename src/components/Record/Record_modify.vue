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
            <div>
                <!-- 搜索 -->
                <el-row>
                    <el-col :span="7" style="margin-left: 800px;">
                        <div style="margin-top: 0px;">
                            <el-input placeholder="请输入病历号">
                                <el-button slot="append" icon="el-icon-search"></el-button>
                            </el-input>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </el-card>
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
            record_list: [],
            total: 0,
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
        }
    }
};
</script>

<style lang="less" scoped>
.search_card
{
    height: 70px;
}
</style>