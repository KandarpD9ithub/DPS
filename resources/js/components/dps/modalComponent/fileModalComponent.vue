<template>
    <div class="file-modal">
         <div class="modal fade bd-example-modal-lg show_data image_insert" id="fileModal" tabindex="-1" role="dialog" aria-labelledby="fileModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Files</h5>
                    </div>
                    <div class="modal-body">
                        <div class="upload-main-class">
                            <div class="upload-class">
                                <input type="file" multiple id="uploadImage" @change="uploadImage">
                                <p>Drag your files here or click in this area.</p>
                            </div>
                            
                        </div>
                            <ul class="gallery row">
                                <!-- <li  class="col-sm-4" style="list-style: none;"  v-for="(image, index) in libraryImages" :key="index"><img :src="image.path" @click="addImageToDiv(image.path)" class="img-size" data-dismiss="modal" /></li> -->
                                <li  class="col-sm-4" style="list-style: none;"  v-for="(image, index) in libraryImages" :key="index" v-if="image.type == 1 && image.type == mediaType">
                                        <img :src="image.path" @click="addImageToDiv(image.path)" class="img-size" data-dismiss="modal" />
                                </li>   
                                <li  class="col-sm-4" style="list-style: none;"  v-for="(image, index) in libraryImages" :key="index" v-if="image.type == 2 && image.type == mediaType">
                                    <video :src="image.path" @click="addImageToDiv(image.path)" class="img-size" data-dismiss="modal"></video>                                    
                                </li> 
                            </ul>
                    </div>
                    <div class="modal-footer">
                        <div class="inner_footer_content" @click="closeModal">
                            <a class="btn two" data-dismiss="modal">
                                <i class="fa fa-window-close" aria-hidden="true"></i>
                            </a>
                            <a class="btn one" data-dismiss="modal">
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
export default {
    data () {
        return {
            
        }
    },
    mounted () {
        this.getLibraryImages()
    },
    methods: {
        getLibraryImages () {
            axios.get('api/imageLibrary')
            .then (response => {
                this.libraryImages = response.data.data
            })
            .catch (errorResponse => {
                console.log(errorResponse, 'erer')
            })
        },
        uploadImage(e) {
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.uploadImages(files[0]);
        },
        uploadImages(files) {
            console.log("Kandarp pandya", files);
            // upload image to database and folder
            // axios.defaults.headers.common['Authorization'] = this.$session.get('accessToken')
            var data = new FormData();
            var file = files;
            data.append("image", file);
            data.append("type", this.mediaType);
            axios.post("api/imageLibrary", data)
            .then(response => {
                this.libraryImages = response.data.data;
                document.getElementById("uploadImage").value = "";
            })
            .catch(errorResponse => {
                console.log(errorResponse, "errorResponse");
            });
        },
    }
}
</script>

