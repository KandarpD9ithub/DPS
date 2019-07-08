<template>
    <div>
        <div v-for="(di, index) in divsdatacontent.values" :key="index">
            <span class="text" v-show="di.text != ''" v-html="di.text"></span>
            <span class="image" v-show="di.image != ''" v-html="di.image"></span>
            <span class="video" v-show="di.video != ''" v-html="di.video"></span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
