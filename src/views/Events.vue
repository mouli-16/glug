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
        <li><router-link :to="{ name: 'Youtube' }">Youtube</router-link></li>
        <li><router-link :to="{ name: 'Members' }">Members</router-link></li>
        <li><router-link :to="{ name: 'Blogs' }">Blogs</router-link></li>
        <li><router-link :to="{ name: 'Events' }">Events</router-link></li>
        <li><router-link to="/">Home</router-link></li>
      </ul>
    </div>
    <router-view />
    <div class="container" v-for="event in events" :key="event">
      <img :src="event.event_image" alt="" @click="toggleModal()" />
      <h3>{{ event.title }}</h3>
      <!-- <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsa neque
        sapiente! Expedita, aspernatur ducimus commodi velit nemo voluptates
        aliquam?
      </p> -->
    </div>
    <div class="footer">
      <hr />
      <div class="copyright">&copy; Glug NIT Durgapur</div>
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
.container {
  display: inline-block;
  position: relative;
  top: 400px;
  width: 520px;
  height: 300px;
  margin: 50px;
  /* border: 2px solid red; */
  border-radius: 10px;
  /* padding: 20px; */
  font-size: 18px;
  box-shadow: 10px 10px 10px 0px grey;
  font-family: "Roboto", sans-serif;
}
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.container img {
  float: left;
  border-radius: 10px 0px 0px 10px;
  height: 300px;
  width: 200px;
}
.container h3 {
  display: block;
  float: left;
  padding: 5px;
  font-family: "Poppins", sans-serif;
  color: rgba(128, 128, 128, 0.74);
}
.container p {
  /* border: 2px solid red; */
  line-height: 20px;
  font-family: "Mate SC", serif;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
}
.footer {
  padding: 15px;
  position: relative;
  top: 400px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.514);
}
.copyright {
  float: left;
  color: white;
  padding: 2px;
}
</style>

<script>
export default {
  data() {
    return {
      events: [],
      showModal: false,
    };
  },
  mounted() {
    fetch("https://api.nitdgplug.org/api/upcoming-events/")
      .then((res) => res.json())
      .then((data) => (this.events = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style>
</style>
