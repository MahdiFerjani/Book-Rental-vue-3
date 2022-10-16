<template>
<div id="tabs" class="container">
  
    <div class="tabs">
        <a v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]">Now</a>
        <a v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]">Returned</a>
        <a v-on:click="activetab=3" v-bind:class="[ activetab === 3 ? 'active' : '' ]">Out of delay</a>
    </div>

    <div class="content">
        <div v-if="activetab === 1" class="tabcontent">
           <table id="customers1">
               <tr >
                 <th>borrow date</th>
                 <th>deal date</th>
                 <th>return date</th>
                 <th>Name</th>
                 <th>LastName</th>
                 <th>Book</th>
                </tr>
            <tr v-for="(item,index) in now" :key= "index">
              <td >{{item.emprunt}}</td>
              <td>{{item.prevu}}</td>
              <td>N/A</td>
              <td>{{item.firstname}}</td>
              <td>{{item.lastname}}</td>
              <td>{{item.book}}</td>
           </tr>
            </table>
        </div>
        <div v-if="activetab === 2" class="tabcontent">
            <table id="customers1">
               <tr >
                 <th>borrow date</th>
                 <th>deal date</th>
                 <th>return date</th>
                 <th>Name</th>
                 <th>LastName</th>
                 <th>Book</th>
                </tr>
            <tr v-for="(item,index) in returned" :key= "index">
              <td >{{item.emprunt}}</td>
              <td>{{item.prevu}}</td>
              <td>{{item.retour}}</td>
              <td>{{item.firstname}}</td>
              <td>{{item.lastname}}</td>
              <td>{{item.book}}</td>
           </tr>
            </table>
        </div>
        <div v-if="activetab === 3" class="tabcontent">
            Content for tab three
        </div>
    </div>
  
</div>
</template>
<script>
import axios from 'axios';
import authHeader from '../services/auth_header';

export default {
    name:"Assigns",
    data(){
    return{
        now:[],
        returned:[],
        retard:[],
        activetab: 1 }
},
async created(){
    
   const res= await axios.get("http://127.0.0.1:3333/assigns",{ headers: authHeader() })
              for (let i of res.data){
               if (i.status==="active"){
                    const res1= await axios.get(`http://127.0.0.1:3333/user/${i.userid}`,{ headers: authHeader() })
                    const res2= await axios.get(`http://127.0.0.1:3333/book/${i.livreid}`,{ headers: authHeader() })

                   let a={
                       id:i.id,
                       status:i.status,
                       emprunt:i.date_emprunt,
                       retour:i.date_retour,
                       prevu:i.date_prevu,
                       lastname:res1.data.nom,
                       firstname:res1.data.prenom,
                       book:res2.data.titre
                   }
                   this.now.push(a);
               }
               if (i.status=="closed"){
                   const res1= await axios.get(`http://127.0.0.1:3333/user/${i.userid}`,{ headers: authHeader() })
                    const res2= await axios.get(`http://127.0.0.1:3333/book/${i.livreid}`,{ headers: authHeader() })

                   let a={
                       id:i.id,
                       status:i.status,
                       emprunt:i.date_emprunt,
                       retour:i.date_retour,
                       prevu:i.date_prevu,
                       lastname:res1.data.nom,
                       firstname:res1.data.prenom,
                       book:res2.data.titre
                   }
                   this.returned.push(a);
               }
               }
   console.log(this.now)
}
}
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container {  
    width: 100%; 
    margin: 40px auto;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.9em;
    color: #888;
}

/* Style the tabs */
.tabs {
    overflow: hidden;
    margin-left: 20px;
}

.tabs ul {
    list-style-type: none;
    
      display: grid;
  place-items: center;

}

.tabs a{
    float: left;
    cursor: pointer;
    padding: 12px 24px;
    transition: background-color 0.2s;
    border: 1px solid #ccc;
    border-right: none;
    background-color: #fff;
    border-radius: 5px 5px 5px 5px;
    font-weight: bold;
    width:380px;
     display: grid;
     place-items: center;
     color: #000;
      text-align: center;
  font-family: "Amatic SC",cursive;
   font-size: 1.5rem;
     font-weight: 700;
   
}
.tabs a:last-child { 
    border-right: 1px solid #ccc;
}

/* Change background color of tabs on hover */
.tabs a:hover {
    background-color:#3782a8 ;
    color: #fff;
}

/* Styling for active tab */
.tabs a.active {
    background-color: #0c4764;
    color: #fff;
    border-bottom: 2px solid #fff;
    cursor: default;
}

/* Style the tab content */
.tabcontent {
    
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 3px 3px 6px #e1e1e1
}
#customers1 {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
   
}
#customers1 td, #customers1 th {
  border-radius: 2px;
  padding: 5px;
  text-align: center;
  font-family: "Josefin Sans",sans-serif;
  
    font-size: 1rem;
    font-weight: 400
  
}

#customers1 tr:nth-child(even){background-color: #f2f2f2;}

#customers1 tr:hover {background-color: #ddd;}

#customers1 th {
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