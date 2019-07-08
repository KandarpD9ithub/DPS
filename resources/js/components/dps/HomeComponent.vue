<template>
  <div class="main-div">
    <div class="">
      <div v-if="divData.length > 0">
        <div :id="'div_'+index" v-for="(div, index) in divData" :key="index" draggable="true" @dragstart="dragStart(index, $event)" @dragover.prevent @dragenter="dragEnter" @dragleave="dragLeave" @dragend="dragEnd" @drop="dragFinish(index, $event)">
          <!-- <component @click="saveIndex(index)" :dynamicIndex="index" :is="div.name"></component> -->
          <component @click="saveIndex(index)" :dynamicIndex="index" :is="div.name" :dynamicId1="div.id1" :dynamicId2="div.id2" :dynamicId3="div.id3" :dynamicId4="div.id4" :style="div.style" :dynamicHtml="div.divs"></component>
        </div>
      </div>
    </div>
    <NavigationOverlayComponent/>
    
      <!-- <input type="text" v-model="test"> -->
      <!-- <button @click="applyChanges" class="btn btn-primary">Apply</button> -->
     
    <ModelInputComponent/>
    <FileModalComponent/>
    <ColorPicker />
    <HomeOverlay />
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import FullWidthComponent from "./NavigationComponent/fullWidthComponnt";
import TwoWidthComponent from "./NavigationComponent/twoSideComponent";
import ThreeWidthComponent from "./NavigationComponent/threeSideComponent";
import NavigationOverlayComponent from "./NavigationComponent/navigationOverlayComponent";
import FourByEightComponent from "./NavigationComponent/fourByEightComponent";
import EightByfourComponent from "./NavigationComponent/eightByfourComponent";
import FourColumnComponent from "./NavigationComponent/fourColumnComponent";
import ThreeByNineComponent from "./NavigationComponent/threeByNineComponent";
import NineByThreeComponent from "./NavigationComponent/nineByThreeComponent";
import TwoByTenComponent from "./NavigationComponent/twoByTenComponent";
import TenBytwoComponent from "./NavigationComponent/tenBytwoComponent";
import ModelInputComponent from "./modalComponent/modelInputComponent";
import FileModalComponent from "./modalComponent/fileModalComponent";
import ColorPicker from "./modalComponent/colorPickerModelComponet"
import HomeOverlay from "./common/homeOverlayButtonsComponet";
export default {
  components: {
    FullWidthComponent,
    TwoWidthComponent,
    ThreeWidthComponent,
    NavigationOverlayComponent,
    ModelInputComponent,
    FourByEightComponent,
    EightByfourComponent,
    FourColumnComponent,
    ThreeByNineComponent,
    NineByThreeComponent,
    TwoByTenComponent,
    TenBytwoComponent,
    FileModalComponent,
    ColorPicker,
    HomeOverlay,
  },

  data() {
    return {
      test: ""
    };
  },
  methods: {
    ...mapActions([]),
    
  },
  mounted() {
      var NewData = JSON.parse(localStorage.getItem("SavedData"));
    if (NewData) {
      this.ACTION_CHANGE_STATE(["divData", NewData]);
    }
  }
};
</script>

<style>
</style>
