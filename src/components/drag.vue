<template>
    <div>
        <draggable
                class="syllable_ul"
                element="ul"
                :list="list"
                :options="options"
                :no-transition-on-drag="false"
                @start="start"
                @end="end"
        >
            <transition-group type="transition" :name="!drag? 'syll_li' : null" :css="true" >
                <li v-for="(item , idx) in list" :key="idx">
                    <div  class="inline-drag">
                        <span class="drag-index">{{idx+1}}</span>
                        <span>{{item.title}}</span>
                    </div>
                    <i :class="drag?'iconfont icon-zhankaishangxia':'iconfont icon-gengduo'"></i>
                </li>
            </transition-group>
        </draggable>
    </div>
</template>

<script>
    import draggable from "vuedraggable";

    export default {
        name: 'dragDemo',
        components: {
            draggable
        },
        data() {
            return {
                list: [
                    {title:'选择1'},
                    {title:'选择2'},
                    {title:'选择3'},
                    {title:'选择4'},
                    {title:'选择5'},
                ],
                drag:false,
                options:{
                    animation: 300,
                    group: "description",
                    ghostClass: "ghost",
                    dragClass:'dragClass'
                }
            }
        },
        methods: {

            //start ,end ,add,update, sort, remove 得到的都差不多
            start() {
                this.drag = true;
                this.options.dragClass = 'dragClass'
            }
            ,
            end() {
                this.drag = false;
                this.options.dragClass = ''
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    body{
        margin: 0!important;
    }
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    li{
        height: 44px;
        width: 100%;
        border: 1px solid #aaa;
        margin-bottom: 5px;
        align-items: center;
        display: flex;
        border-radius: 4px;
        justify-content: space-between;
        position: relative;
    }
    .inline-drag{
        display: flex;
        align-items: center;
    }
    .drag-index{
        width: 22px;
        height: 22px;
        border-radius: 50%;
        border: 1px solid #aaa;
        display: flex;
        align-item:center;
        justify-content: center;
        margin: 10px ;
        color: #fff;
        background: #aaa;
    }
    li i{
        margin-right: 5px;
    }
    li:active{
        background: #3322cc;
    }

    li:active .drag-index{
        background: #fff;
        color: #32c;
    }
    .dragClass li{
        background: #3322cc;
        /*color: #fff;*/
    }
    .dragClass li i{
        color: #fff!important;
    }
    .dragClass li .drag-index{
        color: #32c!important;
        background: #fff!important;
    }
    .ghost {
        opacity: 1;
        background: #32c;
        color: #fff;
    }
</style>
