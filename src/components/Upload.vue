<template>
  <div class="container">
        <file-upload :url='url' :accept='accept' @change="onFileChange" @success="success"></file-upload>
  </div>
</template>
 

<script>
  import Vue from 'vue'
  import FileUpload from 'v-file-upload'
  Vue.use(FileUpload)
  export default {
    name: 'Upload',
    data(){
      return {
        file: '',
        //url: 'https://utils.lobulo.dev/cv/pharmacies/api/locales/xlsx/load-xlsx',
        url: 'https://utils.lobulo.dev/cv/locales/colombia/api/xlsx/load-xlsx',
        filesUploaded: [],
        accept: 'xlsx'
      }
    },
  
    methods: {
      onFileChange (file) {
        // Handle files like:
        this.fileUploaded = file
      
      },

      success () {
        alert("Registros ingresados");
      }


    }

  }

</script>

<style>

.container{
  max-width:100%;
  margin:0 auto;
  background-color:white;
  text-align:center;
  padding:50px 0;
   box-shadow:0;

}


</style>