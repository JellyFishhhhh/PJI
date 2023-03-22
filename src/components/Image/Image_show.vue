<template>
    <div>   
        <!-- 面包屑导航区 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>影像数据</el-breadcrumb-item>
            <el-breadcrumb-item>显示</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 描述列表卡片 -->
            <el-descriptions title="病历信息" :column="3"  :size="medium" border>
                <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-user"></i>
                    病历号
                </template>
                kooriookami
                </el-descriptions-item>
                <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-mobile-phone"></i>
                    姓名
                </template>
                18100000000
                </el-descriptions-item>
                <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-location-outline"></i>
                    性别
                </template>
                病情
                </el-descriptions-item>
                <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-tickets"></i>
                    CRP
                </template>
                <el-tag size="small">ESR</el-tag>
                </el-descriptions-item>
                <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-office-building"></i>
                    有氧培养
                </template>
                无氧培养
                </el-descriptions-item>
            </el-descriptions>
    </div> 
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
</style>