<template>
<p>tentative :{{count}}</p>
<p>temps :{{time}} s</p>
 <button v-on:click="nouveau">nouveau</button>
<button >score</button>
<br>
<label>choose a number</label>
<br>
<input type="text" v-model="choice">
<br>
<button @click="verif">ok</button>
<div v-if="show">
 <h3>congratulation</h3>
 <h3>your timing:{{timing}}</h3>
 <h3>your score {{score}}</h3>
<label>give us your name</label>
<input type="text" v-model="name">
<button v-on:click="save">save the date</button>
</div>
</template>
<script>
 import axios from 'axios';
export default {
 
  name: 'Mytp',

  data(){
    return{
   choice:'',
   result:'',
   msg:'',
   count:0,
   score:0,
   show:false,
   time:0,
   timing:0,
   player:{
     name:"",
     score:"",
     timing:""
   },
  
    }
    },

  methods:{
    nouveau(){
      this.result=Math.floor(Math.random() * 60);
      console.log(this.result);  
     setInterval(() => {
      this.time++
    }, 1000)
    },
    verif(){
      this.count++
      if(this.result>this.choice){
        this.msg="plus petit"
        
        }
      else if(this.result<this.choice){
        this.msg="plus grand"
      }
      else{
       this.msg="congratulation"
       this.score=(10-(this.count+1))*10
       this.show=true
       this.timing=this.time
      }
      console.log(this.msg)
      console.log(this.count)
      console.log(this.timing)
    },
   async save(){
      this.player.name=this.name;
      this.player.score=this.score
      this.player.timing=this.timing
       await axios.post('http://localhost:3000/players',this.player)
    }
    
  },

}
</script>
<style >



</style>


