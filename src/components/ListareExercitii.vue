<template>
  <div class="hello">
    <h1>listam ceva</h1>
    <template>
      <el-col :span="20" :offset="2">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="Titlu"
            label="Titlu"
            width="180">
          </el-table-column>
          <el-table-column
            prop="Cerinta"
            label="Cerinta"
            width="180">
          </el-table-column>
          <el-table-column
            prop="Input"
            label="Input">
          </el-table-column>
          <el-table-column
            prop="Output"
            label="Output">
          </el-table-column>
          <el-table-column
            label="Actiuni">
            <template slot-scope="scope">
                <el-button                    
                    type="primary"
                    icon="el-icon-edit"
                    circle
                    ></el-button>
                <el-button
                    @click.native.prevent="deleteRow(scope.$index, tableData)"
                    type="danger"
                    icon="el-icon-delete"
                    circle
                    ></el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>      
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    }
  },
  methods:{
    interogare(){
      this.$http
          .post('listare/get_exercitii',{})
          .then(function(response){
            console.log(response)
            this.tableData = response.body.Exercitii
            //console.log(this.tableData[1].Id)
          })
    },
    deleteRow(index, rows) {
        console.log(index)
        this.$http.post('listare/sterge_exercitiu',{Id:this.tableData[index].Id})
                  .then(rows.splice(index, 1))                                                                          
      }
  },
  mounted(){
    this.interogare();
  }
  
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
