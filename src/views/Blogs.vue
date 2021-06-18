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
          <a href=""><img  src="../assets/like.png" alt="" /> </a>
          <a href=""><img src="../assets/share.png" alt="" /> </a>
          <a href=""><img src="../assets/comment.png" alt="" /> </a>
        </div>
        <div class="card_info">
          <div class="card_head">
            <h3>{{blog.title}} </h3>
            <h5>{{blog.author_name}} </h5>
            <hr>
          </div>
          <div class="card_details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, qui.
          </div>
        </div>
         <router-link
              :to="{ name: 'BlogsDetails', params: { id: blog.id } }"
            >
              <div class="btn"><h6>Read More</h6> 
                <div class="border"></div>
              </div>
            </router-link>
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
.container {
  position: relative;
  top: 500px;
  
}
.card {
  background-color: rgba(128, 128, 128, 0.425);
  height: 300px;
  width: 550px;
  display: inline-block;
  margin: 20px;
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
.date_box .date{
  font-size: 2em;
}
.date_box .month{
  font-family: "Roboto", sans-serif;
  font-size: .8em;
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

.card_info{
  position: relative;
  bottom: 370px;
  left: 350px;
  width: 160px;
  text-align: left;
  padding: 10px;
  padding-top: 25px;
  /* border: 2px solid red; */
}
.more img{
  height: 50px;
  width: 50px;
   
}
.card_head h5{
  position: relative;
  bottom: 10px;
  color: #ffd40d;
}
.card h3{
  font-size: 20px;
  font-family: "Mate SC", serif;
  text-transform: uppercase;
}
.card hr{
  color: black;
  position: relative;
  bottom: 20px;
}
.card_details{
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

</style>

<script>
export default {
  data() {
    return {
      blogs: [],
    };
  },
  mounted() {
    fetch(process.env.VUE_APP_BLOGS)
      .then((res) => res.json())
      .then((data) => (this.blogs = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    formatDate(date) {
      return moment(date).format("MMMM Do YYYY, h:mm:ss a");
    },
  },
};
</script>