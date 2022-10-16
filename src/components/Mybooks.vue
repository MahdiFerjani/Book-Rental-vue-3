<template>
    <table id="customers">
  <tr >
    <th>Book title</th>
    <th>Description</th>
    <th>Isbn</th>
    <th>Emprunt Date</th>
    <th>Before Date</th>
    <th>image</th>
    <th>Action</th>
  </tr>
  <tr v-for="(MyAssign,index) in MyAssigns" :key= "index">
    <td >{{MyAssign.book}}</td>
    <td>{{MyAssign.description}}</td>
    <td>{{MyAssign.isbn}}</td>
    <td>{{MyAssign.emp}}</td>
    <td>{{MyAssign.rtr}}</td>
    <td>{{MyAssign.image}}</td>
    <td><button v-on:click="rm(MyAssign.id,index)">return</button></td>
  </tr>


</table>

</template>
<script>
import authHeader from '../services/auth_header'
import axios from 'axios';
export default {

    name: 'Users',
    data(){
    return{
    MyAssigns:[]
    }
    

},
methods:{
  async rm(id,index){
      console.log(id)
    await axios.post(`http://127.0.0.1:3333/ra/${id}`,{headers:authHeader()}).then( res => {
                    let { status,  error } = res.data;
                    if(status) {
                        this.$flashMessage.show({
                            type: 'success',
                            title: 'Thank you for return this book :)',
                            text: 'hope you enjoy it!',
                            time: 5000,
                            blockClass: 'custom-block-class'
                        });
                    }
                    else {
                        this.$flashMessage.error({title: error.name || 'Error', message: error.message});
                    }
                })
                

                
     this.MyAssigns.splice(index,1)
   }
},

 async created(){
     let a=JSON.parse(localStorage.getItem('user'))
   const res= await axios.get(`http://127.0.0.1:3333/myassign/${a.id}`,{headers:authHeader()})
     for (let i of res.data){
         if (i.status=='active'){
            const res2= await axios.get(`http://127.0.0.1:3333/book/${i.livreid}`,{ headers: authHeader() })
              let tab={
                  id:i.id,
                  book:res2.data.titre,
                  description:res2.data.description,
                  isbn:res2.data.isbn,
                  image:res2.data.image,
                  emp:i.date_emprunt,
                  rtr:i.date_prevu
              }
              this.MyAssigns.push(tab)
              
         }
         
     }
}
}
</script>
<style>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 90%;
  margin-left: auto;
    margin-right: auto;
   
}
#customers td, #customers th {
  border-radius: 2px;
  padding: 8px;
  text-align: center;
  font-family: "Josefin Sans",sans-serif;
  margin-left:10px;
    font-size: 1rem;
    font-weight: 400
  
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  font-family: "Amatic SC",cursive;
   font-size: 1.5rem;
     font-weight: 700;
  background-color: #3782a8;
  color: white;
  
}

</style>