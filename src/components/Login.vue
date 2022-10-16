
<template>

<form class="form" v-on:submit.prevent="submit">
          <label>Email :</label>  
        <input v-model="item.email" type="email" required> 

          <label>Password :</label>  
        <input  v-model="item.password" type="password" required>   

       
        <div class="button">
            <button class="submit" type="submit">Signin</button>
        </div>
    </form>

</template>
<script>
import axios from 'axios';

export default {
    name:'login',
    data(){
        return{
         item:{
          email: "",
          password: "",
            }
        }
    }
    ,

methods:{
async submit(e) {
      
        e.preventDefault()
      if (this.item.password.length > 0) {
        axios.post('http://127.0.0.1:3333/signin',this.item)
        .then(response => {
          let is_admin = response.data.user.role
          localStorage.setItem('user',JSON.stringify(response.data.user))
          localStorage.setItem('jwt',JSON.stringify(response.data.token.token))

          if (localStorage.getItem('jwt') != null) {
            this.$emit('loggedIn')
            if (this.$route.params.nextUrl != null) {
              this.$router.push(this.$route.params.nextUrl)
            }
            else {
              if (is_admin == 'admin') {
                this.$router.push('assigns')
              }
              else {
                this.$router.push('/allbooks')
              }
            }
          }
        })
        .catch(function (error) {
          console.error(error.response);
        });
      }
}
  
}
}
</script>
<style >
.form {
    max-width: 600px;
    margin: 30px auto;
    background: #fff;
    text-align: left;
    padding: 20px;
    border-radius: 10px;
}

input, select {
  width: 35%;
  padding: 12px 20px;
  margin: 14px 0;
  background-color: rgba(236, 236, 236, 0.8);
  border: 1px solid #ced4da;;
  border-radius:0.3rem;
  box-sizing: border-box;
  
  
}
label{
     font-size: 1.5rem;
     font-weight: 700;
     font-family: "Amatic SC",cursive;
     margin-right: 20px;
     margin-left:10px
}




.pill {
    display: inline-block;
    margin: 20px 10px 0 0 ;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 12px;
    cursor: pointer;
    background: #eee;
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
.submit {
    text-align: center;
}

.error {
    color: #ff0000;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
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