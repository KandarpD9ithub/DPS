<template>
    <div>
        <div class="icon_top_inner" v-for="(divDataInner, key) in divsData.values" :key="key">
          <i v-if="divDataInner.text == ''" class="fas fa-plus-circle" @click="addClick(divsData.type, divsData.id), setInnerDyanamicIndex(index)"></i>
            <i class="fas fa-plus-circle" v-if="divDataInner.text" @click="copyDiv(divsData.className, divsData.type)"></i>
        </div>
    </div>
</template>

<script>
export default {
    props: ['divsData']

}
</script>

<style>

</style>
