import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
import { bus } from './app'
import iconHoverComponent from './components/dps/common/iconHoverComponent'
import dataFont from "./components/dps/Font/data"
import HoverRow from "./components/dps/common/hoverOnRow"
import HoverButton from "./components/dps/common/hoverButtonCopyComponent"
import DisplayDivData from './components/dps/common/displayDataComponent'
export const globalMixin = {
    props: ['dynamicIndex', 'dynamicId1', 'dynamicId2', 'dynamicId3', 'dynamicId4', 'dynamicHtml', 'hoverDivDataLoop', 'divsdatacontent'],
    computed: {
        ...mapState([
            'divData',
            'showNavBar',
            'dynamicType',
            'editorTempData',
            'imageSize',
            'imagePath',
            'mediaType',
            'dynamicId',
            'innerDyanamicIndex',
            'enterImageData',
            'enterVideoData',
            'isEdit',
            'showText',
            'showVideo',
            'showImage',
            'textArea',
            'videoArea',
            'imageArea',
            'btnClicked',
        ])
    },
    components:{
        iconHoverComponent,
        HoverRow,
        HoverButton,
        DisplayDivData,
    },
    data() {
      return {
            font: 'testset',
            fontFamily: dataFont,
            libraryImages: [],
            
            dynamicStyle: '',
            fontFamilySelect: "",
            editorCodeTemplate: '',
            enterCodeData: '',
            showUi: false,
      };
    },
    created () {
        // console.log('created')
    },
    methods: {
        ...mapActions([
            'ACTION_CHANGE_STATE',
            'ACTION_ADD_VALUE_TO_DIV_DATA',
            'ACTION_REMOVE_VALUE_FROM_DIV_DATA',
            'ACTION_SET_CSS',
            'ACTION_COPY_DIV_DATA',
            'ACTION_EMPTY_DIVS_VALUE',
        ]),
        ...mapMutations([
            'REMOVE_ITEM_FROM_DIV_DATA',
            'REMOVE_ITEM_AT_DIV_DATA',
            'MOVE_ITEM_DIV_DATA',
        ]),
        addClick (type, dynamicId) {
            console.log(type, dynamicId , 'addClick')
            $('.editable').html('');
            this.ressetFunction(true) // reset function
            this.ACTION_CHANGE_STATE(['dynamicIndex', this.dynamicIndex])
            this.ACTION_CHANGE_STATE(['dynamicType', type])
            console.log(this.dynamicIndex, this.innerDyanamicIndex, this.divData[this.dynamicIndex], 'testset')
            this.ACTION_CHANGE_STATE(['editorTempData', this.divData[this.dynamicIndex][type]])
            this.ACTION_CHANGE_STATE(['dynamicId', dynamicId])
            this.ACTION_CHANGE_STATE(['isEdit', false])
            if (this.mediaType == 0) {
                this.ACTION_CHANGE_STATE(['enterCodeData', this.divData[this.dynamicIndex].divs[this.innerDyanamicIndex].values[0]['text']])   
            } else if (this.mediaType == 1) {
                this.ACTION_CHANGE_STATE(['enterImageData', this.divData[this.dynamicIndex].divs[this.innerDyanamicIndex].values[1]['image']])
            } else {
                // mediaType == 2
                this.ACTION_CHANGE_STATE(['enterVideoData', this.divData[this.dynamicIndex].divs[this.innerDyanamicIndex].values[2]['video']])
            }
           
            this.enterCodeData = this.divData[this.dynamicIndex].divs[this.innerDyanamicIndex].values[0]['text']
            // this.ACTION_CHANGE_STATE(['editorTempData', $('.editable').html()])
            // this.editorData = this.divData[this.dynamicIndex][type]
            // console.log(this.dynamicIndex)
            // console.log(this.editorTempData, 'e uifgffgsdhf')
            // console.log(this.enterCodeData, 'testdiv')
            if (this.editorTempData) {
                $('.editable').html(this.editorTempData)   
            } else {
                $('.editable').html('<p></p>')
            }
            //alert(this.editorTempData)
            $('#exampleModal').modal();
        },
        removeItem (item) {
            this.REMOVE_ITEM_FROM_DIV_DATA(item)
        },
        removeItemAt (index) {
            this.REMOVE_ITEM_AT_DIV_DATA(index)
        },
        dragStart (which, ev) {
            ev.dataTransfer.setData('Text', this.id);
            ev.dataTransfer.dropEffect = 'move'
            this.dragging = which;
        },
        dragEnter (ev) {
            /* 
            if (ev.clientY > ev.target.height / 2) {
                ev.target.style.marginBottom = '10px'
            } else {
                ev.target.style.marginTop = '10px'
            }
            */
        },
        dragLeave (ev) {
            /* 
            ev.target.style.marginTop = '2px'
            ev.target.style.marginBottom = '2px'
            */
        },
        dragEnd (ev) {
            this.dragging = -1
        },
        dragFinish (to, ev) {
            this.moveItem(this.dragging, to);
            ev.target.style.marginTop = '2px'
            ev.target.style.marginBottom = '2px'
        },
        moveItem (from, to) {
            // move item when drag and drop event fires
            if (to === -1) {
                this.removeItemAt(from);
            } else {
                this.MOVE_ITEM_DIV_DATA([from, to])
            }
        },
        addfont (command, showUI, value) {
            document.execCommand(command, showUI, value);
        },
        changeFontColor (color_picker) {
            this.addfont("foreColor", false, color_picker);
        },
        changePickerColor (cmPicker) {
            this.addfont("foreColor", false, cmPicker);
        },
        copyContent () {
            console.log('abc');
            // $("p").clone().appendTo("body");
            this.addfont("copy", false, null);
        },
        saveIndex (index) {
            this.ACTION_CHANGE_STATE(['dynamicIndex', index])
            // alert('jhdghhs')
        },
        applyChanges () {
            // alert(this.testDiv)
            if (this.mediaType == 1) {
                var style = this.dynamicStyle
                if (style == 'null') {
                    var images = '<img src="'+ this.imagePath +'" />'
                } else {
                    var styleData = style.split("*");
                    var images = '<img style="width:' + styleData[0] + 'px; height: ' + styleData[1] + 'px;" src="'+ this.imagePath +'" />'
                }
                var text = $('.editable').append(images)
                this.ACTION_ADD_VALUE_TO_DIV_DATA(images)
            } else if(this.mediaType == 2)  {
                // var images = '<video src="'+ this.imagePath +'" ></video>'
                var images = '<embed controls type="video/mp4" src="' + this.imagePath + '"/>'
                var text = $('.editable').append(images)
                this.ACTION_ADD_VALUE_TO_DIV_DATA(images)
            } else {
                var text = $('.editable').html();
                this.enterCodeData = text
                this.ACTION_ADD_VALUE_TO_DIV_DATA(text)
            }
            this.enterCodeData = text
            this.ACTION_CHANGE_STATE(['textArea', false])
            this.ACTION_CHANGE_STATE(['videoArea', false])
            this.ACTION_CHANGE_STATE(['imageArea', false])
            this.ACTION_CHANGE_STATE(['btnClicked', true])
        },
        closeModal () {
            this.ACTION_CHANGE_STATE(['textArea', false])
            this.ACTION_CHANGE_STATE(['videoArea', false])
            this.ACTION_CHANGE_STATE(['imageArea', false])
            this.ACTION_CHANGE_STATE(['btnClicked', true])
        },
        removeFromDiv (index) {
            this.REMOVE_ITEM_AT_DIV_DATA(index)
            // $("#exampleModal").toggle(); 
        },
        addImageToDiv (image) {
            this.ACTION_CHANGE_STATE(['imagePath', image])
        },
        openNav () {
            this.ACTION_CHANGE_STATE(['showNavBar', true])
            this.ACTION_CHANGE_STATE(['mediaType', 0])
            var newtest = (document.getElementById("myNav").style.height = "100%");
        },
        openTextArea(){
            this.ACTION_CHANGE_STATE(['textArea', true])
            this.ACTION_CHANGE_STATE(['btnClicked', false])
            this.ACTION_CHANGE_STATE(['mediaType', 0])
            this.ACTION_CHANGE_STATE(['imagePath', ''])
        },
        openMediaArea (type) {
            // type 1 = image and 2 = video
            this.ACTION_CHANGE_STATE(['mediaType', type])
            this.ACTION_CHANGE_STATE(['imagePath', ''])
            if (type === 1) {
                this.ACTION_CHANGE_STATE(['imageArea', true])
                this.ACTION_CHANGE_STATE(['btnClicked', false])
            } else {
                this.ACTION_CHANGE_STATE(['videoArea', true])
                this.ACTION_CHANGE_STATE(['btnClicked', false])
            }
        },
        imageStyleAdd (style) {
            this.dynamicStyle = style
        },
        newtest () {
            alert('hasghashg')
        },
        insertTag (headingTag) {
           document.execCommand('formatblock', false,  headingTag)
        },
        addStyleImg (textStyle, id) {
            console.log(textStyle, id);
            $('#'+id).css("text-align", textStyle);     
        } ,
        removeContent () {
            //remove Content form modal
            $('.editable').html('');
        },
        removeWholeContent (index) {
            this.ACTION_EMPTY_DIVS_VALUE(index)
        },
        setBackground (color) {
             //colorpicker for full row
            this.ACTION_CHANGE_STATE(['dynamicType', 'style'])
            var text = ['background-color', color]
            this.ACTION_SET_CSS(text)
        },
        openColorpicker (index) {
            this.ACTION_CHANGE_STATE(['dynamicIndex', index])
            //open model of color picker
            $('#colorPicker').modal();
           
        },
        setbackgroundColor (color) {
            //colorpicker for each coloumn
            var id = '#' + this.dynamicId
            $(id).parent().css('background-color', color)
        },
        applyCSS (style, value) {
            var css = [[style], value]
            this.ACTION_SET_CSS(css)
            // console.log(css, 'style css')
        },
        copyDiv (className, Type) {
            this.ACTION_COPY_DIV_DATA([className, Type])
            this.ACTION_CHANGE_STATE(['dynamicIndex', this.dynamicIndex])
            // console.log(this.dynamicIndex);
        },
        getDynamicIndexOnHover () {
            this.ACTION_CHANGE_STATE(['dynamicIndex', this.dynamicIndex])
            // console.log(this.dynamicIndex, 'getDynamicIndexOnHover')
        },
        setInnerDyanamicIndex (index) {
            this.ACTION_CHANGE_STATE(['innerDyanamicIndex', index])
            // console.log(this.innerDyanamicIndex,'setInnerDyanamicIndex')
        },
        getSecondPart(str) {
            return str.split('src=')[1];
            // get path after src
        },
        setEditPopupData (type, divId, innerIndex, mainIndex) {
            // console.log(type, divId, innerIndex, mainIndex);
            $('.editable').html('');
            this.ACTION_CHANGE_STATE(['textArea', false])
            this.ACTION_CHANGE_STATE(['imageArea', false])
            this.ACTION_CHANGE_STATE(['videoArea', false])

            // this.ACTION_CHANGE_STATE(['dynamicIndex', mainIndex])
            this.ACTION_CHANGE_STATE(['dynamicType', type])
            this.ACTION_CHANGE_STATE(['isEdit', true])
            // console.log(this.divData, mainIndex, innerIndex, 'this.divData')
            this.ACTION_CHANGE_STATE(['innerDyanamicIndex', innerIndex])
            this.ACTION_CHANGE_STATE(['dynamicId', divId])
            this.ACTION_CHANGE_STATE(['editorTempData', this.divData[mainIndex].divs[this.innerDyanamicIndex].values[0]['text']])
            this.ACTION_CHANGE_STATE(['enterImageData', this.divData[mainIndex].divs[this.innerDyanamicIndex].values[1]['image']])
            this.ACTION_CHANGE_STATE(['enterVideoData', this.divData[mainIndex].divs[this.innerDyanamicIndex].values[2]['video']])
            this.ressetFunction(false) // reset image, text and video function\
            if (this.editorTempData != '') {
                this.ACTION_CHANGE_STATE(['showText', true])
                this.ACTION_CHANGE_STATE(['mediaType', 0])
                this.ACTION_CHANGE_STATE(['textArea', true])
            }
            if (this.enterImageData != '') {
                var testImage = this.getSecondPart(this.enterImageData)
                testImage = testImage.replace(/\/>/g,"");
                testImage = testImage.replace(/\"/g,"");
                this.ACTION_CHANGE_STATE(['imagePath', testImage])
                this.ACTION_CHANGE_STATE(['showImage', true])
                this.ACTION_CHANGE_STATE(['mediaType', 1])
                this.ACTION_CHANGE_STATE(['imageArea', true])
            }
            if (this.enterVideoData != '') {
                this.ACTION_CHANGE_STATE(['showVideo', true])
                this.ACTION_CHANGE_STATE(['mediaType', 2])
                this.ACTION_CHANGE_STATE(['videoArea', true])
                var testImage = this.getSecondPart(this.enterVideoData)
                testImage = testImage.replace(/\/>/g,"");
                testImage = testImage.replace(/\"/g,"");
                this.ACTION_CHANGE_STATE(['imagePath', testImage])
            }
            if (this.editorTempData == '' && this.enterImageData == '' && this.enterVideoData == '') {
                
            }
            console.log(this.showText, this.showVideo, this.showImage, 'tsetsgdfddfgdf')
            this.enterCodeData = this.divData[mainIndex].divs[this.innerDyanamicIndex].values[0]['text']
            // this.ACTION_CHANGE_STATE(['editorTempData', $('.editable').html()])
            // this.editorData = this.divData[this.dynamicIndex][type]
            // console.log(this.dynamicIndex)
            // console.log(this.editorTempData, 'e uifgffgsdhf')
            // console.log(this.enterCodeData, 'testdiv')
            console.log(this.editorTempData);
            if (this.editorTempData) {
                $('.editable').html(this.editorTempData)   
            } else {
                $('.editable').html('<p></p>')
            }
            //alert(this.editorTempData)
            $('#exampleModal').modal();
        },
        ressetFunction (bool) {
            this.ACTION_CHANGE_STATE(['showText', bool])
            this.ACTION_CHANGE_STATE(['showVideo', bool])
            this.ACTION_CHANGE_STATE(['showImage', bool])
        },
        changeColor () {
            if (!this.showUi) {
               setTimeout(function () {
                    $('.box').toggleClass('clicked');  
               },0.2)
               this.showUi = !this.showUi;  
            } else {
              var self = this
               setTimeout(function () {
                 self.showUi = !self.showUi;
               },500)
               $('.box').toggleClass('clicked');  
            }
        },
        changeTIVState () {
            this.ACTION_CHANGE_STATE(['textArea', false])
            this.ACTION_CHANGE_STATE(['btnClicked', true])
            this.ACTION_CHANGE_STATE(['imageArea', false])
            this.ACTION_CHANGE_STATE(['videoArea', false])
        },
        removeAllDiv () {
            // Remove all child div
            if (confirm("Are you sure want to to delete ?")) {
                this.ACTION_CHANGE_STATE(['divData', []])
            }
        },
        saveData() {
            localStorage.setItem("SavedData", JSON.stringify(this.divData));
            console.log(this.divData, "divData");
            // console.log(SavedData)
            var NewData = JSON.parse(localStorage.getItem("SavedData"));
            this.exportHtml() // Call export html
            console.log(NewData, "my saved data");
          },
          exportHtml () {
            $(".main-div").find('.cell').removeClass('cell').addClass('mycell');
            $(".main-div").find('.fa-plus-circle').removeClass('fa-plus-circle').addClass('test-circle');
            $(".main-div").find('.one').removeClass('one').addClass('one_change1');
            $(".main-div").find('.two').removeClass('two').addClass('one_change2');
            $(".main-div").find('.three').removeClass('three').addClass('one_change3');
            $(".main-div").find('.four').removeClass('four').addClass('one_change4');
            $(".main-div").find('.full_layer_row').removeClass('full_layer_row').addClass('full_layer_row1');
            $(".main-div").find('.overlay_delete').css('display','none');
            $(".main-div").find('.home_data').css('display','none');
            $(".main-div").find('.hoverComponetRemove').hide();
      
            var markup = document.documentElement.innerHTML;
            console.log(markup, 'markup')
            setTimeout(function () {
              $(".main-div").find('.mycell').removeClass('mycell').addClass('cell');
              $(".main-div").find('.test-circle').removeClass('test-circle').addClass('fa-plus-circle');
              $(".main-div").find('.test-circle').removeClass('test-circle').addClass('fa-plus-circle');
              $(".main-div").find('.one_change1').removeClass('one_change1').addClass('one');
              $(".main-div").find('.one_change2').removeClass('one_change2').addClass('two');
              $(".main-div").find('.one_change3').removeClass('one_change3').addClass('three');
              $(".main-div").find('.one_change4').removeClass('one_change4').addClass('four');
              $(".main-div").find('.full_layer_row1').removeClass('full_layer_row1').addClass('full_layer_row');
              $(".main-div").find('.home_data').css('display','inline-block');
              $(".main-div").find('.overlay_delete').css('display','inline-block');
              $(".main-div").find('.hoverComponetRemove').show();
            },3000);
            
             axios.post('/api/save', {
                htmlData: markup
             })
             .then (response => {
                console.log(response)
             })
             .catch (errorResponse => {
                console.log(errorResponse.response.data, 'errorResponse')
             })
      
            // console.log(markup);
        }
    }
  };