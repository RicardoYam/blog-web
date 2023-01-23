<template>
    <el-container class="home-container">

        <!-- 头部 -->
        <el-header>
            <!-- 标题 -->
            <div>
                <span>DuoDuo</span>
            </div>

            <!-- 导航 -->
            <el-menu mode="horizontal" background-color="pink" text-color="#ffffff">
                <el-menu-item index="1"><i class="iconfont icon-sousuo"></i><span slot="title">Home</span></el-menu-item>
                <el-menu-item index="2"><i class="iconfont icon-dingwei"></i><span slot="title">Life</span></el-menu-item>
                <el-menu-item index="3"><i class="iconfont icon-fenlei"></i><span slot="title">Discovery</span></el-menu-item>
                <el-menu-item index="4"><i class="iconfont icon-shequ"></i><span slot="title">About Me</span></el-menu-item>
                <el-menu-item index="5"><i class="iconfont icon-geren"></i><span slot="title">Login</span></el-menu-item>
            </el-menu>
        </el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
    </el-container>

    <!-- <div class="home-container">
        <div class="main-container">
            <el-row :gutter="20">
                <el-col :span="16">
                    <div class="grid-content bg-purple"></div>
                </el-col>

                <el-col :span="8">
                    <div class="grid-content bg-purple"></div>
                </el-col>
            </el-row>
        </div>
    </div> -->
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.el-header {
    background-color: pink;
    opacity: 0.2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    color: white;

    .el-menu {

        .el-menu-item {
            margin-right: 4px;
            align-content: center;
            font-size: 12px;

            > i {
                margin-right: 4px;
                align-items: center;
            }
        }
    }
}

.el-main {
    background-color: white;
}

.el-footer {
    background-color: grey;
}


.home-container {
    height: 100%;
}

// .main-container {
//     background-color: white;
//     width: 80%;
//     height: 100%;
//     position: absolute;
//     left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%);
// }

// .bg-purple {
// background: #d3dce6;
// }

// .grid-content {
//     border-radius: 4px;
//     min-height: 36px;
//   }
</style>