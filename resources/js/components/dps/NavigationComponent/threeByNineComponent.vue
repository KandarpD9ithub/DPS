<template>
    <div  class="row full_layer_row" @mouseover="getDynamicIndexOnHover">
        <HoverRow :indexId="dynamicIndex" />
        <div  class="full_data">
            <div :class="{'col-sm-3': divData.className =='col-sm-3' ,
            'col-sm-9': divData.className =='col-sm-9' , 'fifteen' : divData.type == 'fifteen', 'sixteen' : divData.type == 'sixteen', 'cell': true}" v-for="(divData, index) in dynamicHtml" :key="index" :id="divData.id">
                <!-- buttons on hovers -->
                <div class="icon_top_inner" v-for="(divDataInner, key) in divData.values" :key="key">
                <i v-if="divDataInner.text==''" class="fas fa-plus-circle" @click="setInnerDyanamicIndex(index), addClick(divData.type, divData.id)"></i>
                    <i class="fas fa-plus-circle" v-if="divDataInner.text" @click="copyDiv(divData.className, divData.type)"></i>
                </div>
                <!-- <HoverButton :divsData="divData" /> -->
                <iconHoverComponent :divId="divData.id" :typeData="divData.type" :innerIndex="index" :mainIndex="dynamicIndex" />
                <DisplayDivData :divsdatacontent="divData"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
