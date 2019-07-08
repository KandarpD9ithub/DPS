<template>
<div class="row full_layer_row" @mouseover="getDynamicIndexOnHover">
    <HoverRow :indexId="dynamicIndex" />
    <div  :id="divData.id" v-for="(divData, index) in dynamicHtml" :key="index" :class="{'col-sm-12':divData.className =='col-sm-12', 'one':divData.type =='one', 'cell':true}"  >
         
         <!-- buttons on hovers -->
        <div class="icon_top_inner" v-for="(divDataInner, key) in divData.values" :key="key">
          <i v-if="divDataInner.text==''" class="fas fa-plus-circle" @click="setInnerDyanamicIndex(index), addClick(divData.type, divData.id)"></i>
            <i class="fas fa-plus-circle" v-if="divDataInner.text" @click="copyDiv(divData.className, divData.type)"></i>
        </div>

        <iconHoverComponent :divId="divData.id" :typeData="divData.type" :innerIndex="index" :mainIndex="dynamicIndex" />

        <DisplayDivData :divsdatacontent="divData"/>
    </div>
</div>
</template>
<script>
export default {
    methods: {

    }
}
</script>

<style>

</style>
