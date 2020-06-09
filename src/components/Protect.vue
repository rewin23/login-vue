 <template>
    <div class="container text-center">
      <h2>Por Favor ingrese contraseña para ingresar a este sitio.</h2>

      <div class="row">
        <div class="col-md-6 offset-md-3">
          <form v-on:submit.prevent="validateBeforeSubmit">
            <div class="form-group text-left">
              <input class="form-control" placeholder="password"  type="password" name="password" v-model.trim="password">
              <span class="error help-block" ></span>
            </div>
            <div class="text-danger" v-if="error"><p>Incorrect password.</p></div>
                  <input type="submit" value="Login" id="submit" >
          </form>
        </div>
      </div>
    </div>
</template>

<script>
import storageHelper from 'storage-helper';
import router from './../router'

export default {
    data () {
    return {
      error: null,
      password: null
     }
    },

    methods: {
    validateBeforeSubmit () {
      if (this.password === '2020uploaderpass') {
        this.error = false
        storageHelper.setItem('user-password', this.password)
        router.push('/');
      } else {
        this.error = true
      }
    }//end validation
  }
}
</script>


<style>
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}


.container{
  max-width:400px;
  margin:0 auto;
  background-color:white;
  text-align:center;
  padding:50px 0;
  box-shadow:0 0 20px rgba(0,0,0,.4);
  border-radius:3px;
}

form{
  max-width:250px;
  margin:0 auto;
  text-align:left;
}

p.seperator{
  margin:25px;
}
div.group{
  margin-top:15px;
}
label{
  display:block;
  margin-bottom:5px;
  
}
div.group input{
  width:100%;
  padding:10px 4px;
  outline:none;
}
input {
    width:100%;
    margin:1em;
}

input[type="submit"]{
  padding:15px 35px;
  outline:none;
  border:None;
  background-color:#20c198;
  color:white;
  transition:all .3s ease-in-out;
}
input[type="submit"]:hover{
  cursor:pointer;
  box-shadow:0 10px 15px -5px rgba(0,0,0,0.4);
}

</style>
