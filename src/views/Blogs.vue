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
        <li><router-link :to="{ name: 'Youtube' }">Youtube</router-link></li>
        <li><router-link :to="{ name: 'Members' }">Members</router-link></li>
        <li><router-link :to="{ name: 'Blogs' }">Blogs</router-link></li>
        <li><router-link :to="{ name: 'Events' }">Events</router-link></li>
        <li><router-link to="/">Home</router-link></li>
      </ul>
    </div>
    <router-view />
    <div class="container">
      <!-- <h1>OUR BLOGS</h1> -->
      <div class="content" v-for="blog in blogs" :key="blog">
        <h2>{{ blog.title }}</h2>
        <h5>
          Published on , by <span>{{ blog.author_name }}</span>
        </h5>
        <img :src="blog.thumbnail_image" alt="" />
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          voluptates ducimus aperiam dolorem ad labore quibusdam dolor
          necessitatibus velit voluptatum, dolorum voluptatibus iste iusto autem
          adipisci eos dicta. Repellendus laudantium ducimus explicabo
          repudiandae dolore possimus voluptates quasi quod placeat autem
          distinctio, obcaecati commodi alias. Beatae earum impedit quod
          corporis, neque eligendi quia ducimus dolorem dolorum voluptatibus
          iste iusto autem adipisci eos dicta. Repellendus laudantium ducimus
          explicabo 
        <router-link :to="{ name:'BlogsDetails',params :{id:blog.id} } ">
                  <span>Read More</span>
          </router-link>
        </h4>
        <hr>
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
  justify-content: center;
  position: relative;
  top: 400px;
  display: block;
  width: 900px;
  margin: auto;
  font-family: "Roboto", sans-serif;
  /* border: 2px solid red; */
}
/* .container h1 {
  font-size: 2.5em;
  position: relative;
  left: 80px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 10px;
  line-height: 55px;
} */
.container h2 {
  font-family: "Montserrat", sans-serif;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  text-align: left;
  font-size: 2em;
  line-height: 10px;
}
.container h5{
  font-family: "Mate SC", serif;
  font-family: "Roboto", sans-serif;
  color: grey;  
  text-align: left;
}
.content{
    position: relative;
    top: 100px;
    margin: 40px;
}
.content img {
  height: 200px;
  padding: 0px 10px 10px 10px;
  width: 200px;
  float: left;
  display: block;
}
.content h4 {
  font-size: 1em;
  text-align: left;
  line-height: 25px;
  font-family: "Mate SC", serif;
  font-family: "Roboto", sans-serif;
}
.content span{
    color: #a13fe8ab;
    text-decoration: none;
    text-transform: uppercase;
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
    fetch("https://api.nitdgplug.org/blog/posts/")
      .then((res) => res.json())
      .then((data) => (this.blogs = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
      formatDate(date) {
        return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    },
  }
};
</script>