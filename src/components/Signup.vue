
<template>
<form class="form" v-on:submit.prevent="submit">
         <label>Name :</label>
        <input v-model="item.prenom" type="text" required>

        <label>LastName :</label>  
        <input  v-model="item.nom" type="text" required> 
         <label>Level :</label>
        <select v-model="item.niveau">
            <option value="master">master</option> 
            <option value="bachelor">bachelor</option> 
        </select>
        <label>Username :</label>  
        <input  v-model="item.username" type="text" required> 
         

          <label>Email :</label>  
        <input v-model="item.email" type="email" required> 

          <label>Password :</label>  
        <input  v-model="item.password" type="password" required>   

       
        <div class="button">
            <button class="submit" type="submit">Sign up here</button>
        </div>
    </form>

</template>
<script>
import signup from "./SignupService"
export default {
    name:'signup',
    data(){
        return{
         item:{
          nom:"",
          prenom:"",
          niveau:"",
          username: "",
          email: "",
          password: "",
            }
        }
    }
    ,

methods:{
async submit() {
      this.loading = true;
      const response = await signup(this.item);
      if (response.status==200) {
        // DO NOT USE LOCAL STORAGE
        localStorage.setItem("user", JSON.stringify(response.data));
        this.item = {
          nom:"",
          prenom:"",
          niveau:"",
          username: "",
          email: "",
          password: "",
         
        };
        this.loading = false;
        this.$router.push("/users");
      } else {
        
        console.log("Error", response);
        setTimeout(() => {
          this.loading = false;

        }, 1000);
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

</style>