<template>
    <div id="container">
        <el-row>
            <el-col :span="12"><div class="grid-content bg-purple">
                <section class="education">
                    <h3><svg class="icon xxx" aria-hidden="true">
                        <use xlink:href="#icon-book"></use>
                    </svg><span class="title">毕业院校</span></h3>
                    <ul>
                        <li>
                            <h4><svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-flag"></use>
                            </svg><span class="title">2004-2008</span></h4>
                            <dl class="content">
                                <dt>长沙文理专修学院</dt>
                                <dd><svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-flag"></use>
                                </svg>计算机应用（大专）</dd>
                            </dl>
                        </li>
                    </ul>
                </section>
                <section class="projects">
                    <h3><svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-projects"></use>
                    </svg><span class="title">项目经验</span></h3>
                    <ul>
                        <li v-for="item in projects.config">
                            <h4><svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-portfolio"></use>
                            </svg><span class="title">{{item.title}}</span></h4>
                            <dl class="content">
                                <dt>{{item.sort}}</dt>
                                <dd class="clearfix" v-for="(sub,index) in projects[item.field]">
                                    <span><svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-chilun1"></use>
                                    </svg>{{sub.content}}</span><span class="link"><a :href="`${sub.preview}`"><el-button size="mini">预览</el-button></a>
                                    <a :href="`${sub.code}`"><el-button size="mini">Code</el-button></a></span></dd>
                            </dl>
                        </li>
                    </ul>
                </section>
            </div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light clearfix">
                <section class="skill">
                    <h3><svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-skill"></use>
                    </svg><span class="title">技能</span></h3>
                    <ul>
                        <li>
                            <h4><svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-portfolio"></use>
                            </svg><span class="title">web前端</span></h4>
                            <dl v-for="item in skill.xxx">
                                <dt>{{item.title}}</dt>
                                <dd v-for="(ms,index) in skill[item.field]"><svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-star"></use>
                                </svg>{{ms.tips}}</dd>
                            </dl>
                            <h4><svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-chilun"></use>
                            </svg><span class="title">其他</span></h4>
                            <dl v-for="item in other">
                                <dd ><svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-star"></use>
                                </svg>{{item.tips}}</dd>
                            </dl>
                        </li>
                    </ul>
                </section>
            </div></el-col>
        </el-row>
    </div>
</template>

<script>
  export default {
    name: 'ResumePreview',
    computed: {
      projects(){
        return this.$store.state.projects
      },
      skill(){
        return this.$store.state.skill
      },
      other() {
        return this.$store.state.other
      }
    }
  }
</script>

<style  scoped lang="scss">
.clearfix:after {
    content: '';
    display: block;
    clear: both;
}

#container {
    background: #d3dce6;
    text-align: left;
    padding-left: 20px;
    section {
        z-index: 2;
        margin: 20px 0;
        position: relative;
        h3 {
            position: relative;
            font-size: 28px;
            color: #0F0E0D;
            font-weight: 700;
            .title {
                padding-left: 8px;
            }
            svg {
                font-size: 28px;
            }
        }
        ul {
            position: relative;
            li {
                h4 {
                    background: #333;
                    padding: 5px 2px;
                    margin: 12px 0;
                    color: white;
                    svg {
                        font-size: 24px;
                    }
                    .title {
                        padding-left: 12px;
                    }
                }
                dl {
                    padding-left: 30px;
                    padding-bottom: 10px;
                    dt {
                        font-size: 20px;
                        color: #000000;
                        font-weight: 700;
                        margin-bottom: 5px;
                    }
                    dd {
                        .link {
                            float: right;
                        }
                    }

                }
            }
        }
        li:before {
            content: '';
            display: block;
            border: 3px solid #333;
            height: 98%;
            position: absolute;
            z-index: -1;
            top: 6px;
            left: 12px;
        }
    }
    section:after {
        content: "";
        display: inline-block;
        width: 13px;
        height: 13px;
        background-color: #333;
        border-radius: 50% 50%;
        position: relative;
        left: 8px;
        top: -9px;
    }
    .bg-purple {
        margin-right: 15px;
    }
    .bg-purple-light {
        margin-right: 5px;
    }
    .grid-content {
        min-height: 400px;
    }
}
</style>