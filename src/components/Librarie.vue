<template>

<div >
<div class="card" v-for="(book,index) in books" :key= "index">
  <img :src="`${book.image}`" alt="" style="width:100%">
  <p class="title">{{book.titre}}</p>
  <p>{{book.description}}</p>
  <p>annee d'editon :{{book.year}} </p>

  <p v-if="book.exemplaire=='0'" class="nondispo">copie disponible :{{book.exemplaire}} </p>
  <p v-else class="dispo">copie disponible :{{book.exemplaire}} </p>
  <button @click="edit(book.id)">edit</button>
  <button @click="remove(book.id,index)">delete</button>
</div>
</div>
</template>

<script>
  import axios from 'axios';
import authHeader from '../services/auth_header';
export default {

  name: 'Librarie',

  data(){
    return{
    books:[]
    }

    },
        methods:{
       
            async getData(){
              console.log(authHeader())
              const res= await axios.get("http://127.0.0.1:3333/books",{ headers: authHeader() })
              for (let i of res.data){
               this.books.push(i); }
               
                },
                remove(id,index){
                console.log(id)
                axios.delete(`http://127.0.0.1:3333/bookremove/${id}`,{ headers: authHeader() })  
                this.books.splice(index, 1)
               },
                 edit(id) {
                this.$router.push({name:'EditBook',params:{bookid:id}})
                 }                  

              },
        
  async created(){
   this.getData()
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