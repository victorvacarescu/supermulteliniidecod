<template>
  <div class="about">
    <Header/>
    <el-col :span="6" :offset="8">
      <el-form 
      :model="form"
      ref="form"        
      label-position="left"
      status-icon :rules="rules"
      label-width="120px">

        <el-form-item label="Titlu" prop="titlu">
          <el-input 
          v-model="form.titlu" 
          autocomplete="off">
          </el-input>
        </el-form-item>

        <el-form-item label="Cerinta" prop="cerinta">
          <el-input 
          type="textarea"
          v-model="form.cerinta" 
          autocomplete="off">
          </el-input>
        </el-form-item>

        <el-form-item label="Input" prop="input">
          <el-input
          v-model="form.input" 
          autocomplete="off">
          </el-input>
        </el-form-item>
              
        <el-form-item>
          <el-button type="primary" @click="submitForm('form')">Creare exercitiu</el-button>
          <el-button>Cancel</el-button>
        </el-form-item>

      </el-form>
    </el-col>
    
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'creare',
  components: {
    Header
  },
  data() {
      return {
        form: {
          titlu: '',
          cerinta: '',
          input: ''          
        },
        rules: {
          titlu: [
            { required: true, 
              message: 'campul titlu este obligatoriu', 
              trigger: 'blur'
            }
          ],
          cerinta: [
            { required: true, 
              message: 'campul cerinta este obligatoriu', 
              trigger: 'blur' 
            }
          ],
          input: [
            { required: true, 
              message: 'campul input este obligatoriu', 
              trigger: 'blur' 
            }
          ]
        }
      }
    },
  methods: {
    submitForm(formName) {
      console.log('da' + this.form)
      this.$refs[formName].validate((valid) => {
        if(valid){          
          this.$http
              .post('input/index',this.form)
              .then(function(response){
                console.log(response.body)
                if(response.body.Raspuns == true){
                  console.log('succes!')
                }
              })
        }
      })     
    }
  }
}
</script>