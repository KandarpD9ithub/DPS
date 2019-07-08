<template>
    <div class="container">
      <div class="row">
         <div class="col-sm-12 home_data">
            <div class="left_side" v-show="showUi">
              <ul class="home_over_button">
                  <li class="left_inner_overlay" @click="removeAllDiv">
                      <i class="fas fa-trash-alt"></i>
                  </li>
                  <li class="left_inner_overlay1">
                      <i class="fas fa-cog"></i>
                  </li>
              </ul>
            </div>
            <div class="home_over_button_absolute">
                <li class="open" v-show="!showUi"  @click="changeColor()">
                    <i class="fas fa-ellipsis-h"></i>
                </li> 
                <li v-show="showUi" class="open" @click="changeColor()" >
                    <i class="fas fa-times"></i>
                </li>
            </div>  
            <div class="right_side box"  v-show="showUi">
                  <ul class="home_over_button"> 
                    <li @click="changeWholeBackground" class="right_inner_overlay">
                        <i class="far fa-image"></i>
                    </li>
                    <li  class="right_inner_overlay" @click="saveData">
                        <i class="fas fa-save"></i>
                    </li>
                    <li  class="right_inner_overlay1" @click="exportHtml">
                        <i class="fas fa-download"></i>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
   methods: {
       changeWholeBackground () {
           $('.row-parent').css('background-color', '#000')
        // $('.row-parent').css('background-image', 'url(http://127.0.0.1:8000/uploads/0000/643382_1561374362.jpg)')
        //    387309_1561374477.jpg
       }
   } 
}
</script>

