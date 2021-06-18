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
    <!-- <div v-if="showDetails"> -->
    <div class="content">
      <h1>{{ Details[i].title }}</h1>
      <p>
        {{ Details[i].p1 }}
      </p>
      <p>
        {{ Details[i].p2 }}
      </p>
      <!-- </div> -->
    </div>
    <div class="ani">
      <img src="../assets/linuxpenguin.gif" alt="" srcset="" />
    </div>
    <div class="social">
      <a href="https://www.instagram.com/nitdgplug" target="_blank"
        ><img id="insta" src="../assets/insta.png" alt="" srcset=""
      /></a>
      <a href="https://www.facebook.com/nitdgplug" target="_blank"
        ><img id="fb" src="../assets/fb.png" alt="" srcset=""
      /></a>
      <a
        href="https://www.linkedin.com/company/lugnitdgp/mycompany/"
        target="_blank"
        ><img id="li" src="../assets/linkedin.png" alt="" srcset=""
      /></a>
      <a href="https://github.com/lugnitdgp" target="_blank"
        ><img id="git" src="../assets/git.png" alt="" srcset=""
      /></a>
    </div>
    <div class="col">
      <div class="cards" v-for="card in cards" :key="card">
        <div class="card">
          <img :src="card.image" alt="" />
          {{ card.heading }}
        </div>
      </div>
      <div class="quote">
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          expedita!" <br />~Lorem
        </p>
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
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      Details: [
        {
          title: "WHAT WE DO",
          id: 1,
          p1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
          p2: "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatcupidatat non proident, sunt in culpa qui officia deserunt mollit anim idest laborum.",
        },
        {
          title: "WHO WE ARE",
          id: 2,
          p1: "ipsum officiis temporibus, praesentium magnam pariatur itaque voluptatem deserunt odio quam distinctio porro officia dicta nisi. Hic, impedit harum! Asperiores itaque aliquid necessitatibus veritatis sit culpa, ducimus placeat voluptas",
          p2: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus magni, provident dolores eos amet officiis ut autem fuga, iure doloribus iusto recusandae qui",
        },
        {
          title: "OUR VISION",
          id: 3,
          p1: "officia quam provident quas nam a eligendi labore accusamus porro perspiciatis veniam accusantium minus cumque, architecto reiciendis omnis consequatur eveniet nemo dolorum earum fugiat amet? Nam laudantium id assumenda sequi odit quas quis autem, possimus eaque deserunt. Cum, itaque perferendis, a nihil, vel similique repellat omnis ",
          p2: "expedita amet nulla nostrum, nihil praesentium excepturi, unde natus. Blanditiis deserunt, rem dolor tenetur consequatur veritatis accusamus ducimus hic",
        },
      ],
      i: 1,
      cards: [],
      showSlider: false,
    };
  },
  methods: {
    changeId() {
      if (this.i === 4) this.i = 0;
      else this.i += 1;
    },
    toggleSlider() {
      this.showSlider = !this.showSlider;
    },
  },
  mounted() {
    setInterval(this.changeId, 5000);
    fetch("https://api.nitdgplug.org/api/carousel/")
      .then((res) => res.json())
      .then((data) => (this.cards = data))
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
.content {
  float: left;
  /* border: 2px solid red; */
  width: 450px;
  position: relative;
  top: 380px;
  font-family: "Roboto", sans-serif;
  left: -20px;
}
.content h1 {
  font-size: 2.5em;
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
.ani {
  position: relative;
  top: 350px;
  left: 80px;
}
.social {
  position: relative;
  left: 400px;
}
#git {
  position: relative;
  top: 295px;
  right: 170px;
  height: 50px;
  width: 50px;
  opacity: 0.2;
}
#git:hover,
#insta:hover,
#li:hover,
#fb:hover {
  opacity: 0.8;
  cursor: pointer;
}
#insta {
  position: relative;
  top: 120px;
  height: 50px;
  width: 50px;
  opacity: 0.2;
}
#fb {
  position: relative;
  top: 50px;
  left: 70px;
  height: 50px;
  width: 50px;
  opacity: 0.2;
}
#li {
  position: relative;
  top: 210px;
  left: 80px;
  height: 50px;
  width: 50px;
  opacity: 0.2;
}
.head {
  width: 100%;
  height: 0px;
  position: relative;
  bottom: 60px;
  /* overflow: hidden; */
  /* border: 2px solid red; */
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
  color: #000;
  text-align: center;
  /* border: 2px solid red; */
  width: 100px;
  float: right;
  animation: slide linear 3s 1;
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
.cards {
  display: inline-block;
}
.card {
  position: relative;
  top: 400px;
  width: 200px;
  height: 300px;
  margin: 30px;
  /* border: 2px solid red; */
  border-radius: 10px;
  /* padding: 20px; */
  font-size: 18px;
  box-shadow: 10px 10px 10px 0px grey;
  font-family: "Roboto", sans-serif;
}
.card img {
  height: 200px;
  width: 200px;
}
.quote {
  position: relative;
  top: 450px;
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
  .content {
    position: relative;
    top: 10px;
    left: 30px;
    width: 300px;
  }
  .content h1 {
    font-size: 1.2em;
  }
  .content p {
    font-size: 0.8em;
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
  .ani {
    position: relative;
    top: 30px;
    left: 20px;
  }
  .col {
    position: relative;
    bottom: 350px;
  }
  .social {
    position: relative;
    bottom: 330px;
    left: 15px;
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
