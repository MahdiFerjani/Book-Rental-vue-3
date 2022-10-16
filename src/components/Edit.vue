<template>

  <div class=layout>
     <form v-on:submit.prevent="EditForm">
        <label >titre</label>
        <input v-model="item.titre" name="titre" type="text">
        <label>année edition </label>
         <input v-model="item.year" name="annee" type="text">
         <label>isbn </label>
         <input v-model="item.isbn" name="isbn" type="text"><br>
        <label>resume:</label>
         <textarea v-model="item.description" name="description" rows="4" cols="50"></textarea><br>
         <label>image</label>
             <input v-model="item.image" name="image" type="text"><br>
              <label>exemplaire</label>
             <input v-model="item.exemplaire" name="exemplaire" type="text"><br>
     <button type="submit" >EDIT BOOK</button>
     </form>
</div> 
</template>
<script>
import axios from 'axios';
import router from '../router'
import authHeader from '../services/auth_header'
export default {

name: 'EditBooks',

  data(){
    return{
      id:this.$route.params.bookid,
      
    item:{
   
    titre:'',
    year:'',
    isbn:'',
    description:'',
    image:'',
    exemplaire:''
    }
    }
    
},
  methods:{
          
        EditForm(){
            axios.post(`http://127.0.0.1:3333/bookedit/${this.id}`,this.item,{ headers: authHeader() })
            router.push({path :'/books'})
        },
  
},       async created(){
          const res= await  axios.get(`http://127.0.0.1:3333/book/${this.id}`,{ headers: authHeader() })
          this.item=res.data
          console.log(this.item);
}

}
    </script> <style> 
input[type=text], select {
  width: 35%;
  padding: 12px 20px;
  margin: 14px 0;
  background-color: rgba(236, 236, 236, 0.8);
  border: 1px solid #ced4da;;
  border-radius:0.3rem;
  box-sizing: border-box;
  
  
}
textarea, select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  
  background-color: rgba(236, 236, 236, 0.8);
  border: 1px solid #ced4da;
  border-radius:0.3rem;
  box-sizing: border-box;
}

button[type=submit] {
  width: 50;
  background-color: #3782a8;
  color: white;
  padding: 14px 20px;

  border: none;
  border-radius: 12px;
  cursor: pointer;
   font-size: 1.5rem;
     font-weight: 700;
  
     font-family: "Amatic SC",cursive;
    position: absolute;
 
      left: 45%;
}

button[type=submit]:hover {
  background-color: #0c4764;
     font-size: 1.5rem;
     font-weight: 700;
     font-family: "Amatic SC",cursive;
}
label{
     font-size: 1.5rem;
     font-weight: 700;
     font-family: "Amatic SC",cursive;
     margin-right: 20px;
     margin-left:10px
}

.layout {
  border-radius: 16px;
  background-color: #ffffffef;
  padding: 20px;
  width:700px;
  height:400px;
  margin-left:auto;
  margin-right: auto;
}
 

    </style>
