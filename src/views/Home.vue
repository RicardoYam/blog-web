<template>
    <el-container class="home-container">

        <div class="banner">
            <!-- 导航 -->
            <el-menu mode="horizontal" background-color="transparent" text-color="#ffffff">
                <el-menu-item index="1"><i class="iconfont icon-sousuo"></i><span slot="title">Home</span></el-menu-item>
                <el-menu-item index="2"><i class="iconfont icon-dingwei"></i><span slot="title">Life</span></el-menu-item>
                <el-menu-item index="3"><i class="iconfont icon-fenlei"></i><span slot="title">Discovery</span></el-menu-item>
                <el-menu-item index="4"><i class="iconfont icon-shequ"></i><span slot="title">About Me</span></el-menu-item>
                <el-menu-item index="5"><i class="iconfont icon-geren"></i><span slot="title">Login</span></el-menu-item>
            </el-menu>

            <div class="banner-title">
                <h1>
                    Ricardo's Blog
                </h1>
            </div>
        </div>
        

        <div class="main-content">
            <el-row :gutter="6">
                <el-col :span="16">
                    <el-card shadow="always" :body-style="{ padding: '20px' }">
                        <div slot="header">
                            <span>hello</span>
                        </div>
                        <!-- card body -->
                    </el-card>
                </el-col>

                <el-col :span="8">
                    <el-card shadow="always" :body-style="{ padding: '20px' }">
                        <div slot="header">
                            <span>hello</span>
                        </div>
                        <!-- card body -->
                    </el-card>
                </el-col>
            </el-row>
        </div>
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
.home-container {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .banner {
        background-image:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?cs=srgb&dl=pexels-lisa-1083822.jpg&fm=jpg);
        height: 100%;
        width: 100%;
        background-size: cover;
        background-position: center;
    
        .el-menu {
            width: 100%;
            opacity: 0.2;
            border-bottom: 0 !important;
            display: flex;
            justify-content: flex-end;

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

        .banner-title {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            color: white;
        }
    }

    .main-content {
        width: 70%;
    }
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