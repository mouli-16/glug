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
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
      rel="stylesheet"
    />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap"
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
    <div class="col">
      <div class="card" v-for="event in events" :key="event">
        <div class="card-background">
          <div class="poster-container">
            <div class="poster">
              <img :src="event.event_image" alt="" />
            </div>
          </div>
        </div>

        <div class="card-head">
          <span class="date-box">
            <span class="date-day">11 </span>
            <span class="date-month">JAN</span>
          </span>
        </div>

        <div class="card-title">
          <div class="details">
            <h5>{{ event.title }}</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
              natus dolorem nihil eius quia molestiae cum
            </p>
            <router-link
              :to="{ name: 'EventsDetails', params: { id: event.id } }"
            >
              <div class="btn"><h6>Read More</h6> 
                <div class="border"></div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="footer">
      <hr />
      <div class="copyright">&copy; Glug NIT Durgapur</div>
    </div> -->
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
}
.col {
  padding: 10px;
}
.date-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ccc;
  border: 4px solid;
  font-weight: bold;
  padding: 5px 10px;
}
.date-box .date-day {
  font-size: 22px;
}
.card {
  display: inline-block;
  padding: 30px;
  width: 300px;
  height: 300px;
  position: relative;
  top: 400px;
  /* border: 2px solid red; */
}
.card .date-box {
  opacity: 0;
  transform: scale(0.5);
  transition: 300ms ease-in-out;
}
.card-background {
  /* border: 2px solid red; */
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  height: 300px;
  padding: 15px;
  background: rgba(0, 0, 0, 0.116);
  width: 300px;
}
.poster-container {
  height: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 60%);
  position: relative;
  overflow: hidden;
}
.poster {
  /* border: 2px solid red; */
  height: 100%;
  position: relative;
  transition: 300ms ease-in-out;
  background-repeat: no-repeat;
  background-size: cover;
}
.poster img {
  height: 200px;
  width: 300px;
}
.card-head {
  height: 150px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-title {
  /* border: 2px solid red; */
  z-index: 10;
  background: white;
  padding: 25px 10px 0px 10px;
  width: 250px;
  height: 40%;
  margin-bottom: 5px;
}
.details {
  position: relative;
  bottom: 30px;
}
.details p {
  font-size: 0.7em;
  text-align: left;
  font-family: 'Open Sans', sans-serif;
  color: #000;
}
.details h5 {
  font-size: 0.9em;
  color: rgba(128, 128, 128, 0.76);
  margin-bottom: 0px;
  text-transform: uppercase;
  text-align: left;
}
.card:hover .card-title h5 {
  color: #ffb535;
}
.card:hover .poster {
  transform: scale(1.2) rotate(5deg);
}
.card:hover .date-box {
  opacity: 1;
  transform: scale(1);
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
.btn h6{
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

<script>
export default {
  data() {
    return {
      events: [],
      showSlider: false,
    };
  },
  methods: {
    toggleSlider() {
      this.showSlider = !this.showSlider;
    },
  },
  mounted() {
    fetch(process.env.VUE_APP_EVENTS)
      .then((res) => res.json())
      .then((data) => (this.events = data))
      .catch((err) => console.log(err.message));

  },
};
</script>


