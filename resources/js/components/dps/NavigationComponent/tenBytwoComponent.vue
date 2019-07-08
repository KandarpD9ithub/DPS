<template>
   <div>
        <div class="row full_layer_row" @mouseover="getDynamicIndexOnHover">
            <HoverRow :indexId="dynamicIndex" />
            <div  class="full_data">
                <div :class="{'col-sm-10': divData.className =='col-sm-10' ,
                 'col-sm-2': divData.className =='col-sm-2' , 'twentyone' : divData.type == 'twentyone', 'twentytwo' : divData.type == 'twentytwo', 'cell': true}" v-for="(divData, index) in dynamicHtml" :key="index" :id="divData.id" >
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
    </div> 
</template>

<script>
export default {

}
</script>

<style>

</style>
