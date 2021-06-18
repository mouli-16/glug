<template>
  <div>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
      rel="stylesheet"
    />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400&display=swap"
      rel="stylesheet"
    />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Mate+SC&family=Roboto:wght@300&display=swap"
      rel="stylesheet"
    />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&family=Roboto&display=swap"
      rel="stylesheet"
    />

    <div class="head">
      <svg x="0px" y="0px" viewBox="0 0 1665 800">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style="stop-color: #686de0; stop-opacity: 1"
            ></stop>
            <stop
              offset="100%"
              style="stop-color: #e056fd; stop-opacity: 1"
            ></stop>
          </linearGradient>
        </defs>

        <path
          class="st0 w0"
          d="M0.5,3.5h1800v400c0,0-531-130-900,0s-900,0-900,0V3.5z"
        />
        <path
          class="st0 w1"
          d="M0.5-0.5h1800v400c0,0-432.9-139-789,23c-378,172-1011-23-1011-23V-0.5z"
        />
        <path
          class="st0 w2"
          d="M0.5-0.5h1800v400c0,0-724.7-154.9-1084,0c-399,172-716,33-716,33V-0.5z"
        />
        <path
          class="st0 w3"
          d="M0.5-0.5h1800v400c0,0-351-190-900-40c-408.8,111.7-900,0-900,0V-0.5z"
        />
        <path
          class="st0 w4"
          d="M0.5-0.5h1800v400c0,0-495,147-900,0c-367.8-133.5-900,0-900,0V-0.5z"
        />
      </svg>
    </div>
    <div class="navbar">
      <div class="logo">
        <div id="GNU">GNU</div>
        <div id="Lug">LINUX USERS' GROUP</div>
      </div>
      <ul>
        <li><router-link :to="{ name: 'JoinUs' }">Join Us</router-link></li>
        <li><router-link :to="{ name: 'Members' }">Members</router-link></li>
        <li><router-link :to="{ name: 'Blogs' }">Blogs</router-link></li>
        <li><router-link :to="{ name: 'Events' }">Events</router-link></li>
        <li><router-link to="/">Home</router-link></li>
      </ul>
    </div>
    <router-view />
    <form >
        <label>Name:</label>
        <input type="text" required v-model="name">
        <label>Roll No:</label>
        <input type="text" required v-model="roll">
        <label>Email:</label>
        <input type="email" required v-model="email">
        <label>Branch:</label>
        <input type="text" required v-model="branch">
            <label>Audition For:</label>
        <div>
            <input type="checkbox" value="webD" v-model="roles">
            <label>WEB DEVELOPER</label>
        </div>
        <div>

            <input type="checkbox" value="AppD" v-model="roles">
            <label>APP DEVELOPER</label>
        </div>
        <div>

            <input type="checkbox" value="content writer" v-model="roles">
            <label>CONTENT WRITER</label>
        </div>
        <div>

            <input type="checkbox" value="gd" v-model="roles">
            <label>GRAPHIC DESIGNER</label>
        </div>
        <label>KNOW ANY PROGRAMMING LANGUAGE</label>
        <select v-model="pl">
            <option value="yes">YES</option>
            <option value="no">NO</option>
        </select>
        <label >SKILLS:</label>
        <input type="text" v-model="listSkill" @keyup="addSkill">
        <div v-for="skill in skills" :key="skill" class="skill">
           <span @click="deleteSkill(skill)">{{skill}}</span> 
        </div>
        <div class="submit">
            <button>SUBMIT</button>
        </div>
    </form>

 </div>
</template>

<style scoped>
template{
    padding: 10px;
}
.navbar {
  position: relative;
  color: white;
  /* bottom: 800px; */
}
.navbar .logo {
  float: left;
  position: relative;
  left: 10px;
  bottom: 40px;
  font-family: "Exo 2", sans-serif;
}
.head {
  width: 100%;
  height: 0px;
  position: relative;
  bottom: 60px;
  /* overflow: hidden; */
  /* border: 2px solid red; */
}
#GNU {
  font-size: 80px;
  font-family: "Mate SC", serif;
}
#Lug {
  color: #ffd40d;
  font-size: 20px;
  font-weight: bold;
}
.navbar li {
  display: block;
  float: right;
  margin: 30px;
  font-weight: bolder;
  position: relative;
  right: 7px;
}
.navbar a {
  color: white;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
}
.navbar a:hover {
  background-color: #9912ca81;
  padding: 6px;
  border-radius: 4px;
}
.navbar a.router-link-exact-active {
  /* font-size: 18px; */
  font-family: "Roboto", sans-serif;
  background-color: #9a12ca59;
  padding: 6px;
  border-radius: 4px;
  /* color: black; */
}
.st0 {
  opacity: 0.4;
  fill: url(#grad);
  stroke: #1a001a00;
  stroke-width: 0;
}
form{
    max-width: 550px;
    margin: 30px auto;
    background-color: rgba(128, 128, 128, 0.26);
    text-align: left;
    padding: 40px;
    border-radius: 10px;
    position: relative;
    top: 400px;
    /* border: 4px solid black; */
}
label{
    color: rgb(117, 112, 112);
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input,select{
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}
input[type="checkbox"]{
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}
.skill{
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background-color: honeydew;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
}
button{
    background-color: whitesmoke;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    border-radius: 10px;
}
button:hover{
    transform: scale(1.1);
    cursor: pointer;
}
.submit{
    text-align: center;
}
</style>
<script>
export default {
    data() {
        return {
            name:'',
            roll:'',
            email:'',
            branch:'',
            roles:[],
            pl:'yes',
            listSkill:'',
            skills: []


        }
},
        methods: {
            addSkill(e) {
                console.log(e)
                if(e.key === "," && this.listSkill){
                    if(!this.skills.includes(this.listSkill)){
                        this.skills.push(this.listSkill)
                    }
                    this.listSkill = ''
                }
            },
            deleteSkill(skill) {
                this.skills = this.skills.filter((item) => {
                    return skill !==item
                })
            },
            handleSubmit() {
                console.log('name:',this.name)
                console.log('roll no:',this.roll)
                console.log('email:',this.email)
                console.log('branch:',this.branch)
                console.log('skills:',this.skills)
                console.log('roles:',this.roles)
            }
    }
}
</script>