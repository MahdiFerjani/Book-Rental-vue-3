<template>
    <table id="customers">
  <tr >
    <th>Name</th>
    <th>LastName</th>
    <th>Email</th>
    <th>Username</th>
    <th>Level</th>
  </tr>
  <tr v-for="(user,index) in users" :key= "index">
    <td >{{user.nom}}</td>
    <td>{{user.prenom}}</td>
    <td>{{user.email}}</td>
    <td>{{user.username}}</td>
    <td>{{user.niveau}}</td>
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
    users:[]
    }
    

},
 async created(){
   const res= await axios.get("http://127.0.0.1:3333/users",{ headers: authHeader() })
              for (let i of res.data){
               this.users.push(i); }
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