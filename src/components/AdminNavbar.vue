<template>
<nav class="topnav" id="topnav">
  <router-link to="/signup"  class="logo">
    <img src="https://www.vhv.rs/dpng/d/467-4676067_books-icon-transparent-background-clipart-png-download-transparent.png" alt="Logo">
    </router-link> 
    <router-link to="/books" exact-active-class="exact-active" >books</router-link>
    <router-link to="/addbook" exact-active-class="exact-active" >Add book</router-link>
     <router-link to="/users" exact-active-class="exact-active" >Users</router-link>
     <router-link to="/assigns" exact-active-class="exact-active" >Emprunts</router-link>
     <button @click="logout">logout</button>
  <button class="icon" @click="toggle()"><i class="fa fa-bars"></i></button>
</nav>
  <router-view/>
  
</template>
<script>
import authHeader from '../services/auth_header';
export default {
    name:'AdminNavbar',
  methods:{
  toggle() {
    const nav = document.getElementById("topnav");
    nav.className === "topnav" ? nav.className += " responsive" : nav.className = "topnav";
     console.log(authHeader())
    
},
logout(){
    localStorage.removeItem('jwt')
    localStorage.removeItem('user')
    this.$router.push('/login')
}
  }
}
</script>

<style >
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
