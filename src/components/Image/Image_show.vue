<template>
    <div>   
        <!-- 面包屑导航区 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>影像数据</el-breadcrumb-item>
            <el-breadcrumb-item>显示</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 信息卡片区 -->
        <el-card>
            <!-- 搜索 -->
            <el-row>
                <el-col :span="7" style="margin-left: 800px;">
                    <div style="margin-top: 0px;">
                        <el-input 
                        placeholder="请输入病历号" 
                        v-model="queryinfo.query" 
                        clearable 
                        @clear="get_image">
                            <el-button @click="get_image" slot="append" icon="el-icon-search">
                            </el-button>
                        </el-input>
                    </div>
                </el-col>
            </el-row>
            <!-- 描述列表 -->
            <el-descriptions title="病历信息" :column="4"  :size="medium" border>
                <el-descriptions-item>
                <template slot="label">
                    病历号
                </template>
                1
                </el-descriptions-item>
                <el-descriptions-item>
                <template slot="label">
                    姓名
                </template>
                柳先杰
                </el-descriptions-item>
                <el-descriptions-item>
                <template slot="label">
                    性别
                </template>
                男
                </el-descriptions-item>
                <el-descriptions-item>
                <template slot="label">
                    CRP
                </template>
                
                </el-descriptions-item>

                <el-descriptions-item>
                <template slot="label">
                    ESR
                </template>
                
                </el-descriptions-item>

                <el-descriptions-item>
                <template slot="label">
                    有氧培养
                </template>
                
                </el-descriptions-item>

                <el-descriptions-item>
                <template slot="label">
                    无氧培养
                </template>
                
                </el-descriptions-item>

                <el-descriptions-item>
                <template slot="label">
                    高血压
                </template>
                
                </el-descriptions-item>

                <el-descriptions-item>
                <template slot="label">
                    糖尿病
                </template>
                
                </el-descriptions-item>
            </el-descriptions>
        </el-card>

        <!-- 图片卡片区 -->
        <el-card>
            <div>
                <h4>影像</h4>
            </div>
            <el-image 
                style="width: 400px; height: 400px; margin-left: 30%;"
                :src="url" 
                :preview-src-list="srcList">
            </el-image>
        </el-card>
    </div> 
</template>

<script>
export default {
    data()
    {
        return {
            queryinfo:
            {
                query:'',
            },
            // TODO:图片的url
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            srcList: [
            'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
            'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
            ]
        }
    },
    methods:
    {
        async get_image()
        {
            // TODO:填写获取病历数据的URL
            const { data: res } = await this.$http.get('', { params: this.queryinfo });
            if (res.status !== 200)
            {
                return this.$message.error('获取影像失败');
            }
            this.url = res.url;
            this.srcList = res.srcList;
        }
    }

}
</script>

<style lang="less" scoped>
</style>