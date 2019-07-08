<template>
  <div>
    <div class="modal fade show_data" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <a v-if="(textArea == false) || (btnClicked == true) || (imageArea == false) || (videoArea == false)" @click="changeTIVState" class="btn float-left">
              <i class="fas fa-arrow-left"></i>
            </a>
            <h5 class="modal-title">Settings</h5>
          </div>
          <div class="modal-body">
            <div class="tab-content">
              <div id="content" class="side_bar_content tab-pane active">
                <div v-show="textArea">
                  <div class="content_area">
                    <div class="font_content">Add Content</div>
                    <div class="font_body">
                      <!-- <div class="font_content">
                                            Body font Style
                      </div>-->
                      <ul>
                        <li>
                          <a @click="addfont('italic', false, null)" class="btn">
                            <i class="fas fa-italic"></i>
                          </a>
                        </li>
                        <li>
                          <a @click="addfont('bold', false, null)" class="btn">
                            <i class="fas fa-bold"></i>
                          </a>
                        </li>
                        <li>
                          <a @click="addfont('underline', false, null)" class="btn">
                            <i class="fas fa-underline"></i>
                          </a>
                        </li>
                        <li>
                          <a @click="addfont('insertOrderedList', false, null)" class="btn">
                            <i class="fas fa-list-ul"></i>
                          </a>
                        </li>
                        <li>
                          <a @click="addfont('insertUnorderedList', false, null)" class="btn">
                            <i class="fas fa-list-ol"></i>
                          </a>
                        </li>
                        <li>
                          <a @click="showCodeMap" class="btn">
                            <i class="fas fa-code"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="heading_tag">
                      <select name id @change="insertTag(headingTag)" v-model="headingTag">
                        <option value>Select Font</option>
                        <option value="h1">Heading &lt;h1&gt;</option>
                        <option value="h2">Heading &lt;h2&gt;</option>
                        <option value="h3">Heading &lt;h3&gt;</option>
                        <option value="h4">Heading&lt;h4&gt;</option>
                        <option value="h5">Heading &lt;h5&gt;</option>
                        <option value="h6">Heading &lt;h6&gt;</option>
                        <option value="p">Paragraph &lt;p&gt;</option>
                      </select>
                    </div>
                    <div v-show="!showCodeEditor" class="editable" contenteditable="true"></div>

                    <codemirror v-show="showCodeEditor" v-model="editorCodeTemplate" :options="cmOptions"></codemirror>
                  </div>
                  <div class="font_content">Body font</div>
                  <div class="heading_tag">
                    <select class="dataselect" @change="addfont('fontName', false , fontFamilySelect)" v-model="fontFamilySelect">
                      <option value="">
                        <span class="text_content" >Select Font</span>
                      </option>
                      <option v-for="(font, index) in fontFamily" :key="index" :value="font.family">{{ font.family }}</option>
                    </select>
                  </div>
                  <a class="btn">
                    <span class="text_content">
                      <i class="fas fa-trash-alt" @click="removeContent" ></i>
                    </span>
                  </a>

                  <div class="font_body">
                    <div class="font_content">Body Text Alignment</div>
                    <ul>
                      <li>
                        <a @click="addfont('justifyLeft' ,false, null)" class="btn">
                          <i class="fas fa-align-left"></i>
                        </a>
                      </li>
                      <li>
                        <a @click="addfont('justifyCenter', false, null)" class="btn">
                          <i class="fas fa-align-center"></i>
                        </a>
                      </li>

                      <li>
                        <a @click="addfont('justifyRight' ,false, null)" class="btn">
                          <i class="fas fa-align-right"></i>
                        </a>
                      </li>
                      <li>
                        <a @click="addfont('justifyFull' ,false, null)" class="btn">
                          <i class="fas fa-align-justify"></i>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="font_content">Body text Color</div>
                  <!-- <input
                    type="color"
                    name="favcolor"
                    value="#ff0000"
                    @change="changeColor"
                    class="form-control dataselect2"
                  >-->
                  <color-picker v-model="color_picker" @input="changeFontColor"></color-picker>
                  <!-- <button @click="setbackgroundColor(color_picker)">Set Background</button> -->
                  <button @click="applyCSS('background-color', color_picker)">Set Background</button>
                  <button @click="applyCSS('background-image', 'url(http://127.0.0.1:8000/uploads/0000/643382_1561374362.jpg)')">Set Background</button>
                </div>
                <div v-show="imageArea||videoArea" id="design" class="tab-pane">
                  <div class="content_tab_inner">
                    <div class="media_area">
                      <div
                        class="font_content"
                      >{{imageArea == true ? 'Upload Image' : 'Upload video'}}</div>
                      <button class="btn">
                        <span class="font_content" data-target="#fileModal" data-toggle="modal">Add Media</span>
                      </button>
                      <div class="content_area">
                        <div class="editables"></div>
                      </div>
                      <div v-if="imagePath != ''" class="select_size">
                        <div class="font_content">Image Size</div>
                        <select name id @change="imageStyleAdd(fileModel)" v-model="fileModel">
                          <option value="150*150">Thumbnail - 150*150</option>
                          <option value="300*300">Medium - 300*300</option>
                          <option value="620*620">FullSize - 620*620</option>
                          <option value="null">FullSize</option>
                          <option value="custom">Add Custom</option>
                        </select>
                        <div class="heigth-width" v-if="fileModel == 'custom'">
                          <input type="text" name="" id="" placeholder="Width" v-model="width" class="form-control">*<input type="text" name="" id="" placeholder="Height" v-model="height" class="form-control">
                          <button @click="imageStyleAdd(fileModel = width + '*' + height)">Apply</button>
                        </div>
                      </div>
                      <div class="add-media-show">
                        <img v-if="imageArea && imagePath != ''" :src="imagePath" alt="" srcset="">

                        <embed v-if="videoArea && imagePath != ''" controls :src="imagePath" />
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="btnClicked" class="tab_btn row">
                  <div v-if="showText" class="col-sm-6" @click="openTextArea">
                    <div class="content_btn">
                      <i class="fas fa-font"></i>
                      <br>Text
                    </div>
                  </div>
                  <div v-if="showImage" @click="openMediaArea(1)" class="col-sm-6">
                    <div class="content_btn">
                      <i class="far fa-images"></i>
                      <br>Image
                    </div>
                  </div>
                  <div v-if="showVideo" @click="openMediaArea(2)" class="col-sm-6">
                    <div class="content_btn">
                      <i class="fas fa-video"></i>
                      <br>Video
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <div class="inner_footer_content" @click="closeModal">
              <a class="btn two" data-dismiss="modal">
                <i class="fa fa-window-close" aria-hidden="true"></i>
              </a>
              <a class="btn three" @click="addfont('redo', false, null)">
                <i class="fas fa-redo-alt"></i>
              </a>
              <a class="btn four" @click="addfont('undo', false, null)">
                <i class="fas fa-undo"></i>
              </a>
              <a class="btn one" @click="applyChanges" data-dismiss="modal">
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
import { mapState, mapMutations, mapGetters, mapActions } from "vuex"
import ColorPicker from "vue-iro-color-picker"
// language js
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/htmlmixed/htmlmixed.js'
// theme css
import 'codemirror/theme/base16-dark.css'
export default {
  data() {
    return {
      fileModel: "150*150",
      showCodeEditor: false,
      headingTag: "",
      color_picker: "",
      code: this.editorTempData,
      width: 0,
      height: 0,
      cmOptions: {
        // codemirror options
        tabSize: 4,
        mode: 'text/html',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true,
        // more codemirror options, codemirror...
      }
    };
  },
  components: {
    "color-picker": ColorPicker
  },
  computed: {
    ...mapState(["editorTempData"]),
    codemirror() {
      return this.$refs.myCm.codemirror
    }
  },
  created() {},
  mounted() {
    $("#exampleModal").modal({
      focus: false,
      // Do not show modal when innitialized.
      show: false
    });
  },
  methods: {
    showCodeMap () {
      this.showCodeEditor = !this.showCodeEditor
      if (this.showCodeEditor) {
         this.editorCodeTemplate = $('.editable').html();
      } else {
        console.log(this.editorCodeTemplate)
        $('.editable').empty()
        $('.editable').html(this.editorCodeTemplate);
      }
    },
    onCmReady(cm) {
      console.log('the editor is readied!', cm)
    },
    onCmFocus(cm) {
      console.log('the editor is focus!', cm)
    },
    onCmCodeChange(newCode) {
      console.log('this is new code', newCode)
      this.code = newCode
    }
  }
};
</script>

<style>
</style>