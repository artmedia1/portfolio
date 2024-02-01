//Note: the projects are passed on to carousel and then is mapped to cards, need to update carousel and cards for additional fields
const projects = [
  {
    imageSrc: "/assets/portfolio.png",
    projectName: "Portfolio Website",
    projectDescription:
      "This project was a significant upgrade, long overdue to replace my outdated, simplistic, and quite frankly, cheesy old portfolio. It stands as one of the first projects I embarked on after teaching myself React, marking a milestone in my development skills. Additionally, it was my second foray into cloud services, and my first in utilizing AWS CloudFront and S3 buckets for hosting the site.",
    githubLink: "https://github.com/artmedia1/portfolio",
    demoLink: "https://randy-huynh.com",
  },
  {
    imageSrc: "/assets/climate-quest.png",
    projectName: "Climate Quest",
    projectDescription: "Climate Quest was my deep dive into the vast sea of APIs and their practical applications. The goal? To create a web application that didn't just tell you the weather in a city but also used the power of OpenAI to suggest activities and appropriate attire. It was like giving a personal touch to the weather forecast. This project wasn't just about integrating different APIs, though – it was also my first real experience in web hosting and getting my hands dirty with AWS. Climate Quest marked a significant milestone for me, combining data from various sources into a cohesive, user-friendly service. From figuring out the ins and outs of hosting to understanding how different APIs can work in harmony, this project was an exhilarating learning adventure. It was a good feeling to be able to get something up and running",
    githubLink: "https://github.com/artmedia1/Practice/tree/main/The%20Complete%202023%20Web%20Development%20Bootcamp/Sections/Section%2029%20-%20Capstone",
    demoLink: "https://climatequest.randy-huynh.com/search",
  },  
  {
    imageSrc: "/assets/alphen.gif",
    projectName: "Discord Bot - Alphen",
    projectDescription:
      "My first substantial personal project. I was getting my feet wet in coding and someone tossed the idea of playing around with the Discord API. API? That was new territory for me back then. So, what did I do? I decided to build a Discord bot. It wasn't just any bot; this one was special because it was where I got my first taste of using APIs and implementing a design pattern – the command pattern. I used it for its modularity, thinking ahead for all the cool features I might want to add later. This project was a game-changer for me, a big step up from the basic stuff, setting the stage for all the fun projects that followed.",
      githubLink: "https://github.com/artmedia1/Alphen"
  },
  {
    imageSrc: "/assets/travel-tracker.png",
    projectName: "Travel Tracker",
    projectDescription: "The Travel Tracker was my adventure into the world of databases and front-end integration. I was learning the how-tos and was presented with this challenge: 'Why not build something that tracks your travel adventures?' And I thought, 'Why not?' It was the perfect opportunity to learn about linking a database with a user interface. The idea was to create a place where I could log all the places I’ve visited or plan to visit, kind of like a digital scratch-off map. This project was a blend of practicality and wanderlust, teaching me a ton about data management and interactive web development (though I mainly only did the back-end) while feeding my dreams of globe-trotting.",
    githubLink: "https://github.com/artmedia1/Practice/tree/main/The%20Complete%202023%20Web%20Development%20Bootcamp/Sections/Section%2033%20-%20PostgreSql/33.8%20-%20Family%20Travel%20Tracker",
  },
  {
    imageSrc: "/assets/not-available.png",
    projectName: "Pollen Classification Neural Network",
    projectDescription: "Ah, the Capstone Project – my first big-time gig working with a team. We dove headfirst into the world of neural networks, developing a model that could classify different types of pollen. Think of it like a super-smart system sorting through thousands of data features. Python was our best friend throughout, with Tensorflow and Keras helping bring our neural network to life. And for the cherry on top? We used Matplotlib and Seaborn to create these cool visualizations that made our data look like art. It was an awesome learning curve. One small hiccup though – we were pretty green when it came to version control. So, guess what? We totally spaced on backing up our code base. A tough lesson learned, but hey, that's how you grow, right?"
  }
];

export default projects;
