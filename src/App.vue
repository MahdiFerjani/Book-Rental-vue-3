<template>

  <nav class="topnav" id="topnav">
     <router-link to="/signup"  class="logo">
     <img src="https://www.vhv.rs/dpng/d/467-4676067_books-icon-transparent-background-clipart-png-download-transparent.png" alt="Logo">
     </router-link> 
     
     <router-link v-if="isAdmin" to="/addbook" exact-active-class="exact-active">Add book</router-link>
     <router-link v-if="isAdmin" to="/assigns" exact-active-class="exact-active">Assigns</router-link>
     <router-link v-if="isAdmin" to="/books" exact-active-class="exact-active">books</router-link>
     <router-link v-if="isAdmin" to="/users" exact-active-class="exact-active">users</router-link>
     <router-link v-if="isUser" to="/mybooks" exact-active-class="exact-active" >my list book</router-link>
      <router-link v-if="isUser" to="/allbooks" exact-active-class="exact-active" >Books</router-link>
     <router-link v-if="iGuest" to="" exact-active-class="exact-active" >welcome</router-link>
      <router-link v-if="is" to="/users" exact-active-class="exact-active" >welcome</router-link>
     <button v-if="isAdmin" @click="logout">logout</button>
     <button v-if="isUser" @click="logout">logout</button>
  <button class="icon" @click="toggle()"><i class="fa fa-bars"></i></button>
</nav>
<router-view/>
</template>
<script>

//import AdminNavbar from './components/AdminNavbar.vue'
//import UserNavbar from './components/UserNavbar.vue'
//import Login from './components/Login.vue'
export default {
data(){
return {

}

},
methods:{

logout(){
    localStorage.removeItem('jwt')
    localStorage.removeItem('user')
    this.$router.push('/login')
}
},

computed: {
  isAdmin(){
    
    if (JSON.parse(localStorage.getItem('user')))   {
    let a=JSON.parse(localStorage.getItem('user'))  
   
   console.log(a)
  if (a.role=="admin"){
    return true
  } 
  else return false  }
  else return false
},
isUser(){
    if (JSON.parse(localStorage.getItem('user')))   {
   let a=JSON.parse(localStorage.getItem('user'))
   console.log(a)
  if (a.role=="user"){
    return true
  }
  else 
  return false}
  else return false

},
isGuest(){
   let a=JSON.parse(localStorage.getItem('user'))
   console.log(a)
  if (a){
    return true
  }
  else 
  return false
},
currentUser() {
      
       return localStorage.getItem('item')
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.role=="admin") {
        return true
      }

      return false;
    },
    showUserBoard() {
      if (this.currentUser && this.currentUser.role=="user") {
        return true
      }

      return false;
    },
},



  components:{
   //AdminNavbar,
   //UserNavbar,
  // Login
   
  },
  async created(){
this.isAdmin
this.isUser
this.isGuest
    
    }


,

}
</script>

<style >
body {
     margin: 0;
  
      background-color:  rgba(236, 236, 236, 0.8);
}
 
body {
     margin: 0;
  
      background-color:  rgba(236, 236, 236, 0.8);
}
 .topnav {
   background-color: #ffffff;
     overflow:hidden;
     width:100%;
     border-style: solid;
     border-color: transparent;
     border-width: 0.5px;
     margin-bottom: 20px;
}

 .topnav a {
     float: left;
     display: block;
     color:#000;
     text-align: center;
     padding: 13px 16px;
     text-decoration: none;
     font-size: 1.5rem;
     font-weight: 700;
     margin-top: 10px;
     margin-bottom: 10px;
    
   
     font-family: "Amatic SC",cursive;
}
 .topnav a:hover {
     background-color:  rgba(220, 240, 233, 0.8);;
     color :#3782a8;;
}
 .topnav .router-link-active  {
     background-color: #fff;
     color:#3782a8;;
}
 .topnav .logo {
     float: left;
     display: block;
     color: rgb(255, 255, 255);
     text-align: center;
     padding: 7px 10px 3px 10px;
     margin-top: 20px;
     text-decoration: none;
     font-size: 17px;
}
 .topnav .logo img {
     width: 30px;
     height: auto;
}
 .topnav .logo:hover {
     background: transparent;
}
 .topnav .icon {
   display: none;
}
 .container {
     padding: 0px 10px;
}
.topnav button{
  
  background-color: #bc6d48;
  color: white;
  padding: 14px 20px;
  margin-top: 10px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
   font-size: 1.5rem;
     font-weight: 700;
  
     font-family: "Amatic SC",cursive;
    position: absolute;
      left: 85%;
}

.topnav button:hover {
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

.mybutton {
  
  background-color: #03C894;
  color: white; 
   margin: auto;
   margin-left:787px ;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: "Audiowide", sans-serif;
  
}
 @media screen and (max-width: 600px) {
     .topnav a:not(:first-child) {
         display: none;
    }
     .topnav button.icon {
         background: #d8d8d8;
         float: right;
         display: block;
         padding: 16px 17px;
         border: 0;
         outline: none;
         cursor: pointer;
    }
     button.icon:focus, button.icon:hover {
         border: 0;
         outline: none;
         background: #b3b3b3;
    }
}
 @media screen and (max-width: 600px) {
     .topnav.responsive {
         position: relative;
    }
     .topnav.responsive a {
         float: none;
         display: block;
         text-align: left;
    }
     .topnav.responsive .icon {
         position: absolute;
         right: 0;
         top: 0;
    }
}
 
</style>
