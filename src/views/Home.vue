<template>
    <div class="home-container">
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
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.home-container {
    background-color: aqua;
    height: 100%;
}

.main-container {
    background-color: white;
    width: 80%;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.bg-purple {
background: #d3dce6;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>