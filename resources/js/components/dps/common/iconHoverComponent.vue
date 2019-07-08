<template>
    <div class="hoverComponetRemove">
        <div class="inner_plus_data">        
        <i class="fas fa-align-left" @click="addStyleImg('left', divId)"></i>
        <!-- <i class="fas fa-align-left"></i> -->
        <i class="fas fa-align-center" @click="addStyleImg('center', divId)"></i>
        <i class="fas fa-align-right" @click="addStyleImg('right', divId)"></i>
        <i class="fas fa-trash-alt" @click="removeWholeContent(innerIndex)"></i>
        <!-- <i class="fas fa-cog" @click="addClick('one', dynamicId1)"></i> -->
        <i class="fas fa-cog" @click="setEditPopupData(typeData, divId, innerIndex, mainIndex)"></i>
      </div>
    </div>
</template>

<script>
export default {
  props: ['divId' , 'typeData', 'innerIndex', 'mainIndex']
}
</script>

<style>

</style>
