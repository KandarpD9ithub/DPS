<template>
    <div>
         <div class="overlay_delete">
            <a class="btn">
                <span class="text_content">
                    <i class="fas fa-trash-alt" @click="removeFromDiv(indexId)"></i>
                </span>
            </a>
             <a class="btn">
                <span class="text_content">
                    <i class="fas fa-arrows-alt" ></i>
                </span>
            </a>
            <a class="btn" @click="openColorpicker(indexId, tempIndex)">
                <span class="text_content">
                    <i class="fas fa-eye-dropper"></i>
                </span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['indexId', 'tempIndex']
}
</script>

<style>

</style>
