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
      <div class="routes">
        <ul>
          <li><router-link :to="{ name: 'JoinUs' }">Join Us</router-link></li>
          <li><router-link :to="{ name: 'Members' }">Members</router-link></li>
          <li><router-link :to="{ name: 'Blogs' }">Blogs</router-link></li>
          <li><router-link :to="{ name: 'Events' }">Events</router-link></li>
          <li><router-link to="/">Home</router-link></li>
        </ul>
      </div>
      <div class="hamburger" @click="toggleSlider">
        <img src="../assets/hamburger.png" alt="" />
        <div class="slider" v-if="showSlider">
          <ul>
            <li><router-link :to="{ name: 'JoinUs' }">Join Us</router-link></li>
            <li>
              <router-link :to="{ name: 'Members' }">Members</router-link>
            </li>
            <li><router-link :to="{ name: 'Blogs' }">Blogs</router-link></li>
            <li><router-link :to="{ name: 'Events' }">Events</router-link></li>
            <li><router-link to="/">Home</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <router-view />
    <div class="content">
      <h1>MEET OUR FAMILY</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum commodi
        possimus voluptatum! Quae tempora vero, fuga sunt hic facilis placeat?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
        repudiandae recusandae maiores aliquam aspernatur sunt eaque
        necessitatibus ad quibusdam ipsam.
      </p>
    </div>
    <div class="col">
      <div class="fourth">
        <h1>Final YEAR</h1>
        <div class="team" v-for="member in members" :key="member">
          <div v-if="member.year_name === 4 ? true : false">
            <div class="circle">
              <img :src="member.image" alt="" />
            </div>
            <div class="box">
              <h3>{{ member.first_name }} {{ member.last_name }}</h3>
              <a :href="member.facebook_link" target="_blank"
                ><img src="../assets/fb3.png" alt=""
              /></a>
              <a :href="member.linkedin_link" target="_blank"
                ><img src="../assets/lim3.png" alt=""
              /></a>
              <a :href="member.github_link" target="_blank"
                ><img src="../assets/gitm1.png" alt=""
              /></a>
            </div>
          </div>
        </div>
      </div>
      <div class="third">
        <h1>third YEAR</h1>
        <div class="team" v-for="member in members" :key="member">
          <div v-if="member.year_name === 3 ? true : false">
            <div class="circle">
              <img :src="member.image" alt="" />
            </div>
            <div class="box">
              <h3>{{ member.first_name }} {{ member.last_name }}</h3>
              <a :href="member.facebook_link" target="_blank"
                ><img src="../assets/fb3.png" alt=""
              /></a>
              <a :href="member.linkedin_link" target="_blank"
                ><img src="../assets/lim3.png" alt=""
              /></a>
              <a :href="member.github_link" target="_blank"
                ><img src="../assets/gitm1.png" alt=""
              /></a>
            </div>
          </div>
        </div>
      </div>
      <div class="second">
        <h1>second YEAR</h1>
        <div class="team" v-for="member in members" :key="member">
          <div v-if="member.year_name === 2 ? true : false">
            <div class="circle">
              <img :src="member.image" alt="" />
            </div>
            <div class="box">
              <h3>{{ member.first_name }} {{ member.last_name }}</h3>
              <a :href="member.facebook_link" target="_blank"
                ><img src="../assets/fb3.png" alt=""
              /></a>
              <a :href="member.linkedin_link" target="_blank"
                ><img src="../assets/lim3.png" alt=""
              /></a>
              <a :href="member.github_link" target="_blank"
                ><img src="../assets/gitm1.png" alt=""
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

 <script>
export default {
  data() {
    return {
      members: [],
      showSlider: false,
    };
  },
  methods: {
    toggleSlider() {
      this.showSlider = !this.showSlider;
    },
  },
  mounted() {
    fetch(process.env.VUE_APP_PROFILES)
      .then((res) => res.json())
      .then((data) => (this.members = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

 
<style scoped>
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
.hamburger img {
  display: none;
}
.hamburger:hover {
  cursor: pointer;
}
.slider {
  background: rgba(128, 128, 128, 0.199);
  color: #000;
  text-align: center;
  /* border: 2px solid red; */
  width: 120px;
  position: relative;
  left: 50px;
  float: right;
  animation: slide linear 3s 1;
  border-radius: 4px;
}
@keyframes wave {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}
.slider li {
  font-size: 0.8em;
  margin: 10px;
  color: #000;
}
.slider a{
  color: #000;
}
.content {
  float: left;
  /* border: 2px solid red; */
  width: 450px;
  position: relative;
  top: 400px;
  font-family: "Roboto", sans-serif;
  left: -20px;
  color: black;
}
.content h1 {
  font-size: 2em;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 10px;
  line-height: 55px;
  text-align: left;
  /* font-family: "Roboto", sans-serif; */
}
.content p {
  text-align: left;
  line-height: 20px;
  font-family: "Mate SC", serif;
  font-family: "Roboto", sans-serif;
}
.fourth {
  float: right;
  /* border: 2px solid red; */
  width: 100%;
  position: relative;
  top: 600px;
  font-family: "Roboto", sans-serif;
}
.third {
  float: right;
  /* border: 2px solid red; */
  width: 100%;
  position: relative;
  top: 800px;
  font-family: "Roboto", sans-serif;
}
.second {
  float: right;
  /* border: 2px solid red; */
  width: 100%;
  position: relative;
  top: 1000px;
  font-family: "Roboto", sans-serif;
}
.fourth h1 {
  font-size: 2em;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 10px;
  line-height: 55px;
}
.third h1 {
  font-size: 2em;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 10px;
  line-height: 55px;
}
.second h1 {
  font-size: 2em;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 10px;
  line-height: 55px;
}
.team {
  display: inline-block;
}
.circle {
  position: relative;
  top: 50px;
  left: 60px;
  height: 100px;
  object-fit: contain;
  width: 100px;
  /* border: 2px solid red; */
  z-index: 999;
  border-radius: 50%;
}
.circle img {
  height: 100px;
  width: 100px;
  z-index: 999;
  border-radius: 50%;
}
.box {
  height: 150px;
  font-size: 0.8em;
  margin: 10px;
  width: 200px;
  /* border: 2px solid black; */
  background-color: rgba(128, 128, 128, 0.123);
}
.box h3 {
  position: relative;
  top: 50px;
}
.box img {
  position: relative;
  top: 50px;
  margin: 5px;
  height: 20px;
  width: 20px;
}
.box img:hover {
  cursor: pointer;
  transform: scale(1.1);
}
@media only screen and (max-width: 607px) {
  .content {
    position: relative;
    top: 10px;
    width: 350px;
    left: 10px;
    padding: 10px;
  }
  .content h1 {
    font-size: 1.4em;
  }
  .content p {
    font-size: 0.9em;
  }
  #GNU {
    position: relative;
    top: 20px;
    font-size: 20px;
  }
  #Lug {
    font-size: 12px;
    position: relative;
    top: 20px;
  }
  .col {
    position: relative;
    bottom: 550px;
    margin: auto;
    width: 300px;
  }
  .contact {
    position: relative;
    right: 20px;
  }
  .routes {
    display: none;
  }
  .hamburger img {
    display: block;
    position: relative;
    float: right;
    bottom: 30px;
    height: 50px;
    width: 50px;
  }
}
</style>