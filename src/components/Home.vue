<template>
    <el-container>
        <el-aside :width="iscollapse?'65px':'200px'">
            <div>
                <!-- TODO:logo src -->
                <img src="" alt="">
            </div>
            <div style="text-align: center;font-size: 10px;line-height: 24px;color: white;letter-spacing: 0.2em;cursor: pointer;"
            @click="collapse">
                |||
            </div>
            <el-menu
            background-color="rgb(33, 31, 50)"
            text-color="rgb(255, 255, 255)"
            active-text-color="rgb(64, 158, 255)"
            unique-opened
            :collapse="iscollapse"
            :collapse-transition="false"
            :router="true"
            >
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-s-home"></i>
                        <span>主页</span>
                    </template> 
                    <el-menu-item index="/manage">
                    <template slot="title">
                        <i class="el-icon-caret-right"></i>
                        <span>数据</span>
                    </template> 
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-tickets"></i>
                        <span>病历数据</span>
                    </template> 
                    <el-menu-item index="/record_import">
                    <template slot="title">
                        <i class="el-icon-caret-right"></i>
                        <span>导入</span>
                    </template> 
                    </el-menu-item>
                    <el-menu-item index="/record_modify">
                    <template slot="title">
                        <i class="el-icon-caret-right"></i>
                        <span>修改</span>
                    </template> 
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-full-screen"></i>
                        <span>影像数据</span>
                    </template> 
                    <el-menu-item index="/image_import">
                    <template slot="title">
                        <i class="el-icon-caret-right"></i>
                        <span>导入</span>
                    </template> 
                    </el-menu-item>
                    <el-menu-item index="/image_modify">
                    <template slot="title">
                        <i class="el-icon-caret-right"></i>
                        <span>修改</span>
                    </template> 
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">
                        <i class="el-icon-view"></i>
                        <span>影像显示</span>
                    </template> 
                    <el-menu-item index="/image_show">
                    <template slot="title">
                        <i class="el-icon-caret-right"></i>
                        <span>显示</span>
                    </template> 
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="5">
                    <template slot="title">
                        <i class="el-icon-finished"></i>
                        <span>智能诊断</span>
                    </template> 
                    <el-menu-item index="/diagnose">
                    <template slot="title">
                        <i class="el-icon-caret-right"></i>
                        <span>诊断</span>
                    </template> 
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="6">
                    <template slot="title">
                        <i class="el-icon-folder"></i>
                        <span>诊断记录</span>
                    </template> 
                    <el-menu-item index="/diagnose_query">
                    <template slot="title">
                        <i class="el-icon-caret-right"></i>
                        <span>查询</span>
                    </template> 
                    </el-menu-item>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header height="150px">
                <div style="height: 50px;display: flex;align-items: center;justify-content: space-between;">
                <!-- TODO:logo src -->
                    <img src="" alt="">
                    <el-row>
                        <el-button icon="el-icon-search" size="samll" circle></el-button>
                        <el-button icon="el-icon-bell" size="samll" circle></el-button>
                    </el-row>
                </div>
                <div style="height: 1px;background-color: rgb(210, 210, 210);padding: 1px;"></div>
                <div>
                    <img src="" alt="">
                    <span class="headline">
                        PJI医疗诊断系统
                    </span>
                    <div style="font-size: 16px;line-height: 28px;color:gray;padding-left: 20px;padding-top: 10px;">
                        PJI医疗诊断系统,基于计算机视觉技术的人工关节假体感染(PJI)识别方法,实现PJI感染的辅助诊断
                    </div>
                </div>
            </el-header>
            <el-main>
                <router-view>
                </router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    data()
    {
        return {
            iscollapse: false,
        };
    },
    methods: {
        collapse()
        {
            this.iscollapse = !this.iscollapse;
        }
    }
};
</script>

<style lang="less" scoped>
.el-container
{
    height: 100%;
}
.el-header
{
    background-color: white;
        align-items: center;
    }
.el-aside
{
    background-color: rgb(33, 31, 50);
    .el-menu
    {
        border-right: none;
    }
}
.el-main
{
    background-color: rgb(235, 235, 235);
}
span
{
    margin-left: 8px;
}
</style>