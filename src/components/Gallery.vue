<template>

<div >
<div class="card" v-for="(book,index) in books" :key= "index">
  <img :src="`${book.image}`" alt="" style="width:100%">
  <p class="title">{{book.titre}}</p>
  <p>{{book.description}}</p>
  <p>annee d'editon :{{book.year}} </p>

  <p v-if="book.exemplaire=='0'" class="nondispo">copie disponible :{{book.exemplaire}} </p>
  <p v-else class="dispo">copie disponible :{{book.exemplaire}} </p>
  
  <button v-on:click="toggleModale(book.id)">Rent me</button>
  
  <Modale :bookid="bookid" :revele="revele" :toggleModale="toggleModale"></Modale>
 
</div>

</div>
</template>

<script>
  import axios from 'axios';
  import Modale from "./Modal";
import authHeader from '../services/auth_header';
export default {

  name: 'Gallery',

  data(){
    return{
    books:[],
    revele: false,
    bookid:""
    }

    },
        methods:{
       
            async getData(){
              console.log(authHeader())
              const res= await axios.get("http://127.0.0.1:3333/books",{ headers: authHeader() })
              for (let i of res.data){
               this.books.push(i); }
               
                },
                 toggleModale(id) {
      this.revele = !this.revele;
      this.bookid=id
      }

    
                
              },
        
  async created(){
   this.getData()
},
components:{
    Modale
}
}

</script>
<style>

.card {

  margin-left: 10px;
  margin-top:50px;
  margin-bottom: 20px;
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.329);
  width: 225px;
  height: 350px;
  text-align: center;
  font-family: "Josefin Sans",sans-serif;
     font-size: 1rem;
    font-weight: 400;
  border-radius: 5px;
  display: inline-block;
  background-color: #ffffff;
}
img {
  border-radius: 12px;
  width: 150px;
  height:150px;
}

.title {
  color: rgb(8, 2, 22);
  font-size: 20px;
}
.dispo{
  color: rgb(40, 150, 73);
  font-size: 15px;

}
.nondispo{
  color: rgb(212, 32, 32);
  font-size: 15px;

}

</style>