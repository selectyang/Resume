<template>
    <div id="header">
        <el-row>
            <el-col :span="24"><div class="bg-purple-dark">
                <div class="qrcode">
                    <img src="../assets/wechat.png"/>
                </div>
                <div class="figure">
                    <h1>杨家文</h1>
                    <p>前端开发工程师</p>
                </div>
                <ul class="contacts">
                    <li v-for="item in contacts">
                        <svg class="icon" aria-hidden="true">
                            <use :xlink:href="`#icon-${item.icon}`"></use>
                        </svg>
                        <a :href="`${item.url}`">{{item.content}}</a>
                    </li>
                </ul>
            </div></el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'Topbar',
  computed: {
    contacts () {
      return this.$store.state.contacts
    }
  }
}
</script>

<style lang="scss">
.clearfix:after {
    content: '';
    display: block;
    clear: both;
}

#header {
    .el-row {
        margin-bottom: 5px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .el-col {

    }
    .bg-purple-dark {
        background: #1F2D3D;
        color: white;
        padding: 30px 40px;
        .qrcode {
            float: left;
            img{
                width: 130px;
            }
        }
        .figure {
            float: right;
            h1{
                font-size: 72px;
                line-height: 1;
                margin: 0;
            }
            p{
                font-size: 20px;
                padding-top: 10px;
                padding-left: 70px;
            }
        }
        .contacts {
            padding-left: 150px;
            li {
                padding: 3px;
                text-align: left;
                font-size: 18px;
                color: white;
                a {
                    color: white;
                }
            }
        }
    }
}
</style>