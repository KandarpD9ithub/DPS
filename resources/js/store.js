import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        // states
        selectedClass: [],
        divData: [],
        showNavBar: false,
        dynamicIndex: 0,
        dynamicType: 1,
        dynamicId: '',
        editorTempData: '<p>Content of the editor.</p>',
        imageSize:'',
        imagePath: '',
        mediaType: '',
        innerDyanamicIndex: '',
        enterImageData: '',
        enterVideoData: '',
        isEdit: false,
        showText: true,
        showVideo: true,
        showImage: true,
        textArea: false,
        videoArea: false,
        imageArea: false,
        btnClicked: true,
    },
    getters: {
        // getters
    },
    mutations: {
        // Dynamic state changes
        CHANGE_STATE (state, value) {
            state[value[0]] = value[1]
            // console.log(value[1], 'store')
        },
        SET_DIV_DATA (state, value) {
            // push data to the divData state
            var dynamicId1 = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            var dynamicId2 = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            var dynamicId3 = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            var dynamicId4 = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            var dynamicId5 = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            var tempArray = []
            var tempArray2= []
            if (value == 'FullWidthComponent') {
                tempArray = [
                    {
                        name:value,
                        type: 'one',
                        className:'col-sm-12',
                        id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                        values: [{
                                text: '',
                            },
                            {
                                image: '',
                            },
                            {
                                video: '',
                            }
                        ]  
                    }
                ]
            }
            else if (value == 'TwoWidthComponent') {
                
                tempArray = [ {
                    name: value,
                    type: 'two',
                    className: 'col-sm-6',
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                        text: '',
                        boolean1: false,
                        
                    },
                    {
                        image: '',
                        boolean2: false
                    },
                    {
                        video: '',
                        boolean3: false
                    }
                ]
                },
                {
                    name: value,
                    type: 'three',
                    className: 'col-sm-6',
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                            text: '',
                            boolean1: false
                        },
                        {
                            image: '',
                            boolean2: false
                        },
                        {
                            video: '',
                            boolean3: false
                        }
                    ]
                },  
            ]
            }
            else if (value == 'FourColumnComponent') {
                
                tempArray = [ {
                    name: value,
                    type: 'eleven',
                    className: 'col-sm-3',
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                            text: '',
                            boolean: false
                           
                        },
                        {
                            image: '',
                            boolean: false
                        },
                        {
                            video: '',
                            boolean: false
                        }
                    ]
                },
                {
                    name: value,
                    type: 'twelve',
                    className: 'col-sm-3',
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                            text: '',
                        },
                        {
                            image: '',
                        },
                        {
                            video: '',
                        }
                    ]
                },
                {
                    name: value,
                    type: 'thirteen',
                    className: 'col-sm-3',
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                            text: '',
                        },
                        {
                            image: '',
                        },
                        {
                            video: '',
                        }
                    ]
                },
                {
                    name: value,
                    type: 'fourteen',
                    className: 'col-sm-3',
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                            text: '',
                        },
                        {
                            image: '',
                        },
                        {
                            video: '',
                        }
                    ]
                },      
            ]
            }
            else if (value == 'TwoByTenComponent') {
                
                tempArray = [ {
                    name: value,
                    type: 'nineteen',
                    className: 'col-sm-2',
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                            text: '',
                        },
                        {
                            image: '',
                        },
                        {
                            video: '',
                        }
                    ]
                },
                {
                    name: value,
                    type: 'twenty',
                    className: 'col-sm-10',
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                            text: '',
                        },
                        {
                            image: '',
                        },
                        {
                            video: '',
                        }
                    ]
                },  
            ]
            }
            else if (value == 'ThreeWidthComponent') {
                
                tempArray = [ {
                    name: value,
                    type: 'four',
                    className: 'col-sm-4',
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                            text: '',
                        },
                        {
                            image: '',
                        },
                        {
                            video: '',
                        }
                    ]
                },
                {
                    name: value,
                    type: 'five',
                    className: 'col-sm-4',
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                            text:'',
                        },
                        {
                            image: '',
                        },
                        {
                            video: '',
                        }
                    ]
                },
                {
                    name: value,
                    type: 'six',
                    className: 'col-sm-4',
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                            text: '',
                        },
                        {
                            image: '',
                        },
                        {
                            video: '',
                        }
                    ]
                },    
            ]
            }
            else if (value == 'FourByEightComponent') {
                
                tempArray = [ {
                    name: value,
                    type: 'seven',
                    className: 'col-sm-4',
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                            text: '',
                        },
                        {
                            image: '',
                        },
                        {
                            video: '',
                        }
                    ]
                },
                {
                    name: value,
                    type: 'eight',
                    className: 'col-sm-8',
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                            text: '',
                        },
                        {
                            image: '',
                        },
                        {
                            video: '',
                        }
                    ]
                },
                    
            ]
            }
            else if (value == 'EightByfourComponent') {
                
                tempArray = [ {
                    name: value,
                    type: 'nine',
                    className: 'col-sm-8',
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                            text: '',
                        },
                        {
                            image: '',
                        },
                        {
                            video: '',
                        }
                    ]
                },
                {
                    name: value,
                    type: 'ten',
                    className: 'col-sm-4',
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                            text: '',
                        },
                        {
                            image: '',
                        },
                        {
                            video: '',
                        }
                    ]
                },
                    
            ]
            }
            else if (value == 'ThreeByNineComponent') {
                
                tempArray = [ {
                    name: value,
                    type: 'fifteen',
                    className: 'col-sm-3',
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                            text: '',
                        },
                        {
                            image: '',
                        },
                        {
                            video: '',
                        }
                    ]
                },
                {
                    name:value,
                    type: 'sixteen',
                    className: 'col-sm-9',
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                            text: '',
                        },
                        {
                            image: '',
                        },
                        {
                            video: '',
                        }
                    ]
                },
                    
            ]
            }
            else if (value == 'NineByThreeComponent') {
                
                tempArray = [ {
                    name: value,
                    type: 'seventeen',
                    className: 'col-sm-9',
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                            text: '',
                        },
                        {
                            image: '',
                        },
                        {
                            video: '',
                        }
                    ]
                },
                {
                    name: value,
                    type: 'eighteeen',
                    className: 'col-sm-3',
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                            text: '',
                        },
                        {
                            image: '',
                        },
                        {
                            video: '',
                        }
                    ]
                },
                    
            ]
            }
            else if (value == 'TenBytwoComponent') {
                
                tempArray = [ {
                    name: value,
                    type: 'twentyone',
                    className: 'col-sm-10',
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                            text: '',
                        },
                        {
                            image: '',
                        },
                        {
                            video: '',
                        }
                    ]
                },
                {
                    name: value,
                    type: 'twentytwo',
                    className: 'col-sm-2',
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                            text: '',
                        },
                        {
                            image: '',
                        },
                        {
                            video: '',
                        }
                    ]
                },
            ]
            }
          
           
            state.divData.push({name: value, divs: tempArray, two: '', three: '', four: '', five: '', six: '', seven: '', eight: '', nine: '', ten: '', eleven:'', twelve: '', thirteen:'', fourteen:'', fifteen:'', sixteen:'',seventeen:'', eighteeen:'', nineteen:'',twenty:'', twentyone:'', twentytwo:'', style: '', id1: dynamicId1, id2: dynamicId2, id3: dynamicId3, id4: dynamicId4, bgId: dynamicId5})
        },
        SET_DIV_VALUE (state, value) {
            var dynamicMediaType = ''
            if (state.mediaType == 0) {
                dynamicMediaType = 'text'
            } else if (state.mediaType == 1) {
                dynamicMediaType = 'image'
            } else {
                dynamicMediaType = 'video'
            }
            state.divData[state.dynamicIndex].divs[state.innerDyanamicIndex].values[state.mediaType][dynamicMediaType] = value
        },
        REMOVE_ITEM_FROM_DIV_DATA (state, value) {
            state.divData.splice(state.divData.indexOf(value), 1);
        },
        REMOVE_ITEM_AT_DIV_DATA (state, value) {
            console.log(value, 'REMOVE_ITEM_AT_DIV_DATA')
            state.divData.splice(value, 1);
        },
        MOVE_ITEM_DIV_DATA (state, value) {
            var from = value[0]
            var to = value[1]
            state.divData.splice(to, 0, state.divData.splice(from, 1)[0]);
        },
        REMOVE_VALUE_FROM_DIV_DATA (state, value) {
            state.divData[state.dynamicIndex][state.dynamicType] = ''
        },
        SET_CSS_TO_DIV_DATA (state, value) {
            var tempStyle = state.divData[state.dynamicIndex]['style']
            state.divData[state.dynamicIndex]['style'] = tempStyle + ' ; ' + value[0] + ': ' + value[1]
        },
        COPY_DIV_DATA (state, value) {
            state.divData[state.dynamicIndex]['divs'].push({
                className:value[0],
                type:value[1],
                values: [{
                        text:'',
                    },
                    {
                        image:'',
                    },
                    {
                        video:'',
                    }
                ]
            })
        },
        EMPTY_DIVS_VALUE (state, value) {
            // delete content from perticuler div
            // console.log(state.divData[state.dynamicIndex].divs[value].values[0].length)
            var mediaType = 0
            if (state.divData[state.dynamicIndex].divs[value].values[0].text != '' && state.divData[state.dynamicIndex].divs[value].values[0].text != '<p></p>') {
                mediaType = 0
            } else if (state.divData[state.dynamicIndex].divs[value].values[1].image != '') {
                mediaType = 1
            } else if (state.divData[state.dynamicIndex].divs[value].values[2].video != '') {
                mediaType = 2
            }
            var dynamicMediaType = ''
            if (mediaType == 0) {
                dynamicMediaType = 'text'
            } else if (mediaType == 1) {
                dynamicMediaType = 'image'
            } else {
                dynamicMediaType = 'video'
            }
            console.log(state.dynamicIndex, value, mediaType, dynamicMediaType)
            state.divData[state.dynamicIndex].divs[value].values[mediaType][dynamicMediaType] = ''
        }
    },
    actions: {
        // call mutation on actions
        ACTION_CHANGE_STATE (context, value) {
            context.commit('CHANGE_STATE', value)
        },
        ACTION_PUSH_TO_DIV_DATA (context, value) {
            context.commit('SET_DIV_DATA', value)
        },
        ACTION_ADD_VALUE_TO_DIV_DATA (context, value) {
            context.commit('SET_DIV_VALUE', value)
        },
        ACTION_REMOVE_VALUE_FROM_DIV_DATA (context, value) {
            context.commit('REMOVE_VALUE_FROM_DIV_DATA', value)
        },
        ACTION_SET_CSS (context, value) {
            context.commit('SET_CSS_TO_DIV_DATA', value)
        },
        ACTION_COPY_DIV_DATA (context, value) {
            context.commit('COPY_DIV_DATA', value)
        },
        ACTION_EMPTY_DIVS_VALUE(context, value) {
            context.commit('EMPTY_DIVS_VALUE', value)
        }
        
    },
    modules: {
        
    }

})