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
      <div class="hamburger" @click="toggleSlider">
        <img src="../assets/hamburger.png" alt="" />
        <div class="slider" v-if="showSlider">
          <ul>
            <li  ><router-link :to="{ name: 'JoinUs' }">Join Us</router-link></li>
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
    <div class="container">
      <div class="card" v-for="blog in blogs" :key="blog">
        <div class="card_left">
          <img :src="blog.thumbnail_image" alt="" />
          <div class="date_box">
            <div class="date">12</div>
            <div class="month">JANUARY</div>
          </div>
        </div>
        <div class="symbols">
          <a href=""><img src="../assets/like.png" alt="" /> </a>
          <a href=""><img src="../assets/share.png" alt="" /> </a>
          <a href=""><img src="../assets/comment.png" alt="" /> </a>
        </div>
        <div class="card_info">
          <div class="card_head">
            <h3>{{ blog.title }}</h3>
            <h5>{{ blog.author_name }}</h5>
            <hr />
          </div>
          <div class="card_details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, qui.
          </div>
        </div>
        <router-link :to="{ name: 'BlogsDetails', params: { id: blog.id } }">
          <div class="btn">
            <h6>Read More</h6>
            <div class="border"></div>
          </div>
        </router-link>
      </div>
    </div>
     <div class="footer">
        <div class="contact">
          <img src="../assets/tel.png" alt="" />
          <h4>+91-9674345229</h4>
          <img src="../assets/email.png" alt="" />
          <h4>sikoerhbgi@gmail.com</h4>
          <img src="../assets/locate.png" alt="" />
          <h4>Durgapur WestBengal,743721</h4>
        </div>
        <hr />
        <div class="copyright">&copy; Glug NIT Durgapur</div>
        <div class="links">
          <a
            href="https://www.linkedin.com/company/lugnitdgp/mycompany/"
            target="_blank"
            ><img src="../assets/lim3.png" alt=""
          /></a>
          <a href="https://github.com/lugnitdgp" target="_blank"
            ><img src="../assets/gitm1.png" alt=""
          /></a>
          <a href="https://www.instagram.com/nitdgplug/" target="_blank"
            ><img src="../assets/insf.png" alt=""
          /></a>
          <a href="https://www.facebook.com/nitdgplug" target="_blank"
            ><img src="../assets/io.png" alt=""
          /></a>
          <a
            href="https://www.youtube.com/channel/UCYZPnN5vP5B1sINLLkI1aDA"
            target="_blank"
            ><img src="../assets/yt.png" alt=""
          /></a>
        </div>
    </div>
  </div>
</template>

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
}
.slider a{
  color: #000;
}
.container {
  position: relative;
  top: 500px;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: 200px;
  grid-row-gap: 50px;
}
.card {
  background-color: rgba(128, 128, 128, 0.219);
  height: 350px;
  width: 550px;
  margin: 20px;
  box-shadow: 10px 10px 10px 0px grey;
}
.card img {
  height: 200px;
  width: 330px;
  position: relative;
  bottom: 20px;
  right: 95px;
}
.date_box {
  position: relative;
  /* bottom: 20px; */
  right: 160px;
  font-size: 1.8em;
}
.date_box .date {
  font-size: 2em;
}
.date_box .month {
  font-family: "Roboto", sans-serif;
  font-size: 0.8em;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 10px;
}
.symbols img {
  height: 20px;
  width: 20px;
  position: relative;
  margin: 12px;
  left: 20px;
  bottom: 35px;
}

.card_info {
  position: relative;
  bottom: 370px;
  left: 350px;
  width: 160px;
  text-align: left;
  padding: 10px;
  padding-top: 25px;
  /* border: 2px solid red; */
}
.more img {
  height: 50px;
  width: 50px;
}
.card_head h5 {
  position: relative;
  bottom: 10px;
  color: #ffd40d;
}
.card h3 {
  font-size: 20px;
  font-family: "Mate SC", serif;
  text-transform: uppercase;
}
.card hr {
  color: black;
  position: relative;
  bottom: 20px;
}
.card_details {
  position: relative;
  bottom: 20px;
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
  position: relative;
  bottom: 330px;
  left: 200px;
}
.btn h6 {
  position: relative;
  bottom: 15px;
  left: 10px;
  z-index: 9;
}
.btn:hover {
  transform: scale(1.1);
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
.footer {
  padding: 15px;
  position: relative;
  top: 500px;
  height: 180px;
  background-color: rgba(0, 0, 0, 0.514);
}
.contact {
  text-align: left;
}

.contact h4 {
  position: relative;
  /* top: 590px; */
  /* display: block; */
  bottom: 10px;
  left: 130px;
  margin: 2px;
  color: white;
  font-family: "Mate SC", serif;
  font-family: "Roboto", sans-serif;
}
.contact img {
  position: relative;
  top: 15px;
  display: block;
  left: 60px;
  margin: -20px;
  height: 60px;
  width: 60px;
}
.copyright {
  float: left;
  color: white;
  padding: 2px;
}
.links {
  float: right;
}
.links img {
  margin: 5px;
  height: 20px;
  width: 20px;
}
.links img:hover {
  transform: scale(1.1);
  cursor: pointer;
}
@media only screen and (max-width: 607px) {
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
  .container {
    position: relative;
    top: 300px;
    display: block;
    margin: 10px;
    
    z-index: -999;
  }
  .card {
    width: 300px;
    height: 250px;
    margin-bottom: 100px;
    
  }
  .card img {
    width: 150px;
    position: relative;
    right: 60px;
  }
  .date_box {
    position: relative;
    right: 90px;
    bottom: 10px;
    font-size: 0.7em;
  }
  .date_box .date {
    font-size: 3.1em;
  }
  .symbols img {
    height: 10px;
    width: 10px;
    position: relative;
    margin: 12px;
    left: 50px;
  }

  .card_info {
    position: relative;
    bottom: 330px;
    left: 160px;
    width: 120px;
  }
  .more img {
    height: 10px;
    width: 10px;
  }
  .card h3 {
    font-size: 0.9em;
  }
  .card_details {
    font-size: 0.7em;
  }
  .btn{
    position: relative;
    left: 70px;
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

<script>
export default {
  data() {
    return {
      blogs: [],
      showSlider: false,
    };
  },
  mounted() {
    fetch(process.env.VUE_APP_BLOGS)
      .then((res) => res.json())
      .then((data) => (this.blogs = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    toggleSlider() {
      this.showSlider = !this.showSlider;
    },
  }
};
</script>