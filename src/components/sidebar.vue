<template>
    <div>
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <!--
                当前打开的sub-menu的 key 数组
                :default-openeds="['1', '3']"
            -->
            <el-menu :unique-opened="true" :default-openeds="['1']"  default-active="1-1">
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-menu"></i>导航一</template>
                    <el-menu-item index="1-1"><router-link :to="{ path: 'page-one' }">page1</router-link></el-menu-item>
                    <el-menu-item index="1-2"><router-link :to="{ path: 'page-two' }">page2</router-link></el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-menu"></i>导航一</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-header style="text-align: right; font-size: 12px">
            <el-dropdown>
                <i class="el-icon-setting" style="margin-right: 15px"></i>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item  @click.native="backLogin">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <span>王小虎</span>
        </el-header>
    </div>
</template>
<script>
    export default {
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                tableData: Array(20).fill(item)
            }
        },
        methods:{
            backLogin(){
                this.$router.push({path:'/login',
                    query: {

                    }
                })
            }
        }
    };
</script>
<style>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }
    .el-aside {
        color: #333;
        position: fixed;
        top:0;left: 0;
        overflow-x: hidden;
        height: 100%;
        z-index: 10;
    }
    .el-submenu .el-menu{
        text-indent: 2em;
    }
</style>

