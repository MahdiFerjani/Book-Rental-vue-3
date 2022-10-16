<template>
  <div class="bloc-modale" v-if="revele">
    <div class="overlay" v-on:click="toggleModale"></div>

    <div class="modale card">
      <div v-on:click="toggleModale" class="btn-modale btn btn-danger">X</div>
      <label>Emprunt Date</label>  
        <input  v-model="date_emprunt" type="date" required> 
          <label>Deal Date</label>  
        <input v-model="date_prevu" type="date" required>   
        <button @click="addAssign" type="submit" >ADD BOOK</button>
       
    </div>
    <FlashMessage/>
  </div> 
</template>


<script>
import axios from 'axios'
import authHeader from '../services/auth_header'

export default {
    
  name: "Modale",
  props: ["revele", "toggleModale" ,"bookid"]
,
 data(){
    return{
date_emprunt:"",
date_prevu:""
   
    }
  },
setup() {
    
    
  },
  methods:{
      addAssign(){
       let a=JSON.parse(localStorage.getItem('user'))
  
          let assign={
              date_emprunt:this.date_emprunt,
              date_prevu:this.date_prevu,
          }
          console.log(assign.date_emprunt)
         axios.post(`http://127.0.0.1:3333/addassign/user/${a.id}/book/${this.bookid}`,assign ,{ headers: authHeader() }).then( res => {
                    let { status,  error } = res.data;
                    if(status) {
                        this.$flashMessage.show({
                            type: 'success',
                            title: 'Don\'t Warry',
                            text: 'Be Happy!',
                            time: 5000,
                            blockClass: 'custom-block-class'
                        });
                    }
                    else {
                        this.$flashMessage.error({title: error.name || 'Error', message: error.message});
                    }
                })
                

                

      }
  }
,
created(){
    
}
};
</script>


<style>
.bloc-modale {
  position: fixed;
  top: 0;
  bottom: 20px;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  display: flex;
  
}


.overlay {
  background: rgba(33, 77, 51, 0.068);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.modale {
    
  background: #f1f1f1;
  color: #333;
  padding: 50px;
  position: fixed;
  top: 10%;
  font-family: "Josefin Sans",sans-serif;
    font-size: 1rem;
    font-weight: 400
}

.btn-modale {
  position: absolute;
  top: 10px;
  right: 10px;
}

input ,select {
width: 100%;
  padding: 12px 20px;
  margin: 14px 0;
  background-color: rgba(236, 236, 236, 0.8);
  border: 1px solid #ced4da;;
  border-radius:0.3rem;
  box-sizing: border-box;
  
  
}
button[type=submit] {
  width: 100px;
  background-color: #3782a8;
  color: white;
   margin: auto;
  bottom:20px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
   font-size: 1.5rem;
     font-weight: 700;
  
     font-family: "Amatic SC",cursive;
  
 
}

button[type=submit]:hover {
  background-color: #0c4764;
     font-size: 1.5rem;
     font-weight: 700;
     font-family: "Amatic SC",cursive;
}

</style>