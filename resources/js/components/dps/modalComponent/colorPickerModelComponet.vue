<template>
    <div>
        <div class="modal fade bd-example-modal-lg show_data image_insert" id="colorPicker" tabindex="-1" role="dialog" aria-labelledby="fileModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Color Picker</h5>
                    </div>
                    <div class="modal-body">
                        <color-picker class="color_picker_model" v-model="colorModel" @input="changePickerColor"> </color-picker>
                    </div>
                    <div class="modal-footer">
                        <div class="inner_footer_content" @click="closeModal">
                            <a class="btn two" data-dismiss="modal">
                                <i class="fa fa-window-close" aria-hidden="true"></i>
                            </a>
                            <a class="btn one" data-dismiss="modal" @click="applyCSS('background-color', colorModel)">
                                <i class="fas fa-check"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ColorPicker from "vue-iro-color-picker";
export default {
    data() {
        return{
            colorModel:"",
        }
    },
  components: {
    "color-picker": ColorPicker
  },
}
</script>

<style>

</style>
