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
      <div class="routes">
        <ul>
          <li><router-link :to="{ name: 'JoinUs' }">Join Us</router-link></li>
          <li><router-link :to="{ name: 'Members' }">Members</router-link></li>
          <li><router-link :to="{ name: 'Blogs' }">Blogs</router-link></li>
          <li><router-link :to="{ name: 'Events' }">Events</router-link></li>
          <li><router-link to="/">Home</router-link></li>
        </ul>
      </div>
      <div class="hamburger">
        <img src="../assets/hamburger.png" alt="" />
      </div>
    </div>
    <router-view />
    <div class="container">
      <div class="inner_container">
        <div v-if="blog">
          <div class="centre">
            <h1>{{ blog.title }}</h1>
            <img :src="blog.thumbnail_image" alt="" />
          </div>
          <div class="details" v-html="blog.content_body"></div>
          <div class="btn" @click="back">
            <h6>CLOSE</h6>
            <div class="border"></div>
          </div>
        </div>
        <div v-else>
          <div class="preloader"></div>
        </div>
      </div>
    </div>
  </div>
</template>

 <script>
export default {
  props: ["id"],
  data() {
    return {
      blog: null,
    };
  },
  mounted() {
    fetch(process.env.VUE_APP_BLOGS + this.id)
      .then((res) => res.json())
      .then((data) => (this.blog = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
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
.container {
  margin: auto;
  width: 800px;
  position: relative;
  top: 500px;
  text-align: left;
  border: 4px solid rgba(0, 0, 0, 0.226);
  padding: 10px;
}
.container h1 {
  font-size: 2.5em;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 55px;
  text-align: centre;
  /* font-family: "Roboto", sans-serif; */
  font-family: "Montserrat", sans-serif;
  font-family: "Roboto", sans-serif;
}
.inner_container {
  border: 2px solid rgba(0, 0, 0, 0.226);
  padding: 20px;
}
.container img {
  height: 250px;
  width: 250px;
}
.container details {
  text-align: left;
  line-height: 20px;
  font-family: "Montserrat", sans-serif;
  font-family: "Roboto", sans-serif;
}
.centre {
  text-align: center;
  padding-top: 20px;
}
.btn {
  background: white;
  color: #000;
  box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;
  font-size: 1em;
  height: 30px;
  width: 80px;
  display: inline-block;
  padding-right: 10px;
}
.btn h6 {
  position: relative;
  bottom: 15px;
  left: 27px;
  z-index: 9;
}
.btn:hover {
  transform: scale(1.1);
  cursor: pointer;
}
.btn {
  text-decoration: none;
}

.border {
  height: 50px;
  position: relative;
  bottom: 80px;
  right: 20px;
  width: 50px;
  display: inline-block;
  /* border: 2px solid red; */
  background: #ffb535;
  vertical-align: bottom;
  clip-path: polygon(0 0, 50% 0, 100% 100%, 0% 100%);
}
.preloader {
  width: 40px;
  height: 40px;
  position: relative;
}
.preloader:before,
.preloader:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  margin: -8px 0 0 -8px;
  width: 16px;
  height: 16px;
  background: #3fb8af;
  animation: da1-1 2s infinite, da1-2 0.5s infinite;
}
.preloader:after {
  background: #ff3d7f;
  animation-delay: -1s, 0s;
}

@keyframes da1-1 {
  0% {
    top: 0;
    left: 0;
  }
  25% {
    top: 100%;
    left: 0;
  }
  50% {
    top: 100%;
    left: 100%;
  }
  75% {
    top: 0;
    left: 100%;
  }
  100% {
    top: 0;
    left: 0;
  }
}
@keyframes da1-2 {
  80%,
  100% {
    transform: rotate(0.5turn);
  }
}
@media only screen and (max-width: 607px) {
  .container {
    position: relative;
    top: 100px;
    width: 300px;
  }
  .container h1 {
    font-size: 1.8em;
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
    bottom: 350px;
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