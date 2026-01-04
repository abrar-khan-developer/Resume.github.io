// navbar open close and also change icon function 

let navItems = document.querySelector('nav ul');
let navbtn = document.getElementById('navbtn')
let dashboard = document.getElementById('info-display')
let navBarItems = document.querySelectorAll('nav ul li a')

// navbar link color change logic
navBarItems.forEach((tag) => {
     tag.addEventListener('click',(e) => {
      console.log("it's click")
        linkAdd(e)
     })
  })

function linkAdd(e){
  navBarItems.forEach( (tag) => {
    tag.className = ''
  })
  e.target.className = 'active'
}

function hideMenuOfNav(){
    navItems.classList.toggle('show')

    navbtn.classList.toggle('fa-bars')
    navbtn.classList.toggle('fa-x')
}

// Content show or not funtions
function divShow(){
  contentDiv.classList.add('show')
}
function divHide(){
    let pOfDash = document.getElementById('dashboard-info')
    pOfDash.remove()
    contentDiv.classList.remove('show')
}
function divAddInfo(tag){
  dashboard.appendChild(tag)
}
// section-3
let projDiv = document.getElementById('project')
const imagesData = [
  { id : 1 , title: 'Website For Archetecture Designer', year: '2023' , imgUrl:'https://abrar-khan-developer.github.io/Resume.github.io/assests/pic/Archetecture.png',videoUrl : '../assests/video/Sedona.mp4'},
  { id : 2 , title: 'E-commerce Website', year: '2024', imgUrl:'https://abrar-khan-developer.github.io/Resume.github.io/assests/pic/e-commerce.png',videoUrl : '../assests/video/E-commmerce.mp4' },
  { id : 3 , title: 'Short Courses online Website', year: '2025',imgUrl:'https://abrar-khan-developer.github.io/Resume.github.io/assests/pic//education.png',videoUrl : '../assests/video'},
  { id : 4 , title: 'Responsive Dashboard', year: '2025' , imgUrl:'https://abrar-khan-developer.github.io/Resume.github.io/assests/pic//Dashboaard.png',videoUrl : '../assests/video/Dashboard.mp4'},
  { id : 5 , title: 'Headphones Sell', year: '2025' , imgUrl:'https://abrar-khan-developer.github.io/Resume.github.io/assests/pic//Headphone.png',videoUrl : '../assests/video/JPJ.mp4'},
  
];
imagesData.forEach((imageData , id) => {

  const cardDiv = document.createElement('div');
  cardDiv.className = 'card';
  cardDiv.style.backgroundImage = `url(../assests/pic/${imageData.imgUrl})`

 
  const h3 = document.createElement('h3');
  h3.textContent = imageData.title;

  
  const p = document.createElement('p');
  p.textContent = imageData.year;

  const icon = document.createElement('i')
  icon.className = 'fa-solid fa-play'
  icon.style.fontSize = '30px'

  const shadowDiv = document.createElement('div')
  shadowDiv.className = 'shadow'

  const video = document.createElement('video');
  video.src = imageData.videoUrl;     
  video.controls = true;      
  video.autoplay = false;
  video.loop = false;
  video.muted = false;
  video.style.width = '100%'
  video.style.height = '100%'

  video.id = 'dashboard-info'

  cardDiv.addEventListener('click',() => {
    divAddInfo(video)
  })

  shadowDiv.appendChild(icon)
  shadowDiv.appendChild(h3);
  shadowDiv.appendChild(p);

  
  cardDiv.appendChild(shadowDiv)
  projDiv.appendChild(cardDiv)

});

let contentDiv = document.querySelector('.contentShow')
let card = document.querySelectorAll('.card')
let contentBtn =  document.querySelector('.contentShow .content i')

contentBtn.addEventListener('click',divHide);
card.forEach((ele)=>{
  ele.addEventListener('click',divShow)
})


// section 4

const cardsData = [
    {
      id : 1,
      imgSrc: '../assests/pic/html.png',
      title : 'HyperText Markup Language',
      skillName : 'HTML',
      description:
      `HTML (HyperText Markup Language) is the core language used for creating and structuring content on the web. It forms the backbone of every website, providing the essential framework that defines the layout and organization of web pages. HTML uses elements, which are represented by tags, to encapsulate different types of content such as text, images, links, forms, and multimedia. These elements are further customized with attributes to define additional properties, such as styles, links, and user interactions.      
      <br> HTML works in conjunction with CSS (Cascading Style Sheets) and JavaScript to build interactive and visually appealing websites. While HTML provides the structure, CSS is responsible for styling the content, and JavaScript adds dynamic functionality. One of the key features of HTML is its flexibility, allowing developers to create anything from simple static pages to complex web applications.       
      <br> HTML5, the latest version of the language, introduced several new semantic tags, multimedia capabilities, and APIs to enhance the web development experience. It supports video and audio elements, canvas for graphics, and improved form controls, making it a powerful tool for modern web development. Due to its simplicity, universality, and compatibility across all browsers, HTML remains the foundation for building and structuring the vast majority of websites and web applications`,
    },
    {
      id : 2,
      imgSrc: '../assests/pic/CSS-Logo.png',
      title : 'Cascading Style Sheets',
      skillName : 'CSS',
      description:
       "CSS (Cascading Style Sheets) is a language used to describe the presentation and layout of HTML elements on a web page. While HTML provides the structure of a webpage, CSS controls its visual appearance. CSS allows you to style elements by specifying properties like colors, fonts, margins, padding, and positioning. It enables web developers to separate content from design, making websites more flexible and easier to maintain. Using selectors, you can target specific elements and apply styles such as text alignment, background colors, and responsive layouts. CSS also supports advanced techniques like animations and transitions, enhancing the interactivity and user experience of a website. Additionally, CSS is used to ensure that a site looks good on all devices by utilizing media queries for responsive design",
    },
    {
      id : 3,
      imgSrc: '../assests/pic/javaScript.jpg',
      title : 'JavaScript',
      skillName : 'Javascript',
      description:
       "JavaScript is a powerful, high-level programming language that is primarily used to create interactive and dynamic content on the web. As one of the core technologies of web development (alongside HTML and CSS), JavaScript allows developers to implement complex features such as form validation, interactive maps, animations, and real-time updates without reloading the web page. It runs in the browser, which means it can be executed directly on the client side, making web pages more responsive and engaging. JavaScript is an event-driven, imperative, and functional language that supports object-oriented programming concepts. It can manipulate HTML and CSS elements using the Document Object Model (DOM) to change the content and style of a webpage dynamically. With the rise of Node.js, JavaScript is now also widely used for backend development, allowing developers to use the same language for both frontend and backend applications. Its versatility and rich ecosystem of libraries and frameworks, such as React, Angular, and Vue, have made JavaScript an essential skill for modern web development",
    },
    {
      id : 4,
      imgSrc: '../assests/pic/React.png',
      title : 'Reactjs JavaScript Library',
      skillName : 'Reactjs',
      description:
       "React.js is a JavaScript library for creating interactive user interfaces. It is maintained by Facebook along with a community of individual developers and companies. React uses single-page application (SPA) technology and introduces the concept of 'write once, use multiple times.' It handles routing on the client side, making websites faster and more responsive. With React, websites can update content dynamically without refreshing the entire page.",
    },
    {
      id : 5,
      imgSrc: '../assests/pic/Bootstrap.jpeg',
      title : 'Booststrap CSS Framework',
      skillName : 'Bootstrap',
      description:
       "Bootstrap is a popular, open-source front-end framework designed to simplify the development of responsive and mobile-first websites. It provides a set of pre-designed HTML, CSS, and JavaScript components, such as buttons, forms, navigation bars, grids, and modals, which are easy to implement and customize. By using Bootstrap, developers can quickly create aesthetically pleasing and functional websites without needing to write complex CSS from scratch. One of its key features is the responsive grid system, which automatically adjusts content to fit different screen sizes, making it ideal for building mobile-friendly websites. Bootstrap also includes a collection of utility classes that help with layout control, spacing, text alignment, and other styling properties. With its extensive documentation and community support, Bootstrap has become a go-to tool for web developers looking to speed up their workflow and ensure a consistent, professional look across websites",
    },
    {
      id : 5,
      imgSrc: '../assests/pic/Tailwind.png',
      title : 'Tailwind CSS Framework',
      skillName : 'Tailwind',
      description:
       "Tailwind CSS is a utility-first CSS framework that provides a highly customizable set of low-level utility classes to help developers create modern and responsive web designs. Unlike traditional CSS frameworks like Bootstrap, which offer pre-built components, Tailwind focuses on giving you the building blocks to create custom designs directly in your HTML. Instead of writing custom CSS for every element, you use utility classes such as text-center, bg-blue-500, or px-4 to apply styles directly in the markup. This approach allows for greater flexibility and faster development, as it eliminates the need for writing custom CSS rules or dealing with complex class names. Tailwind also supports responsive design out of the box, making it easy to create layouts that adapt to different screen sizes using responsive utility classes. Additionally, Tailwind's configuration file allows you to extend and modify the default design system, including colors, spacing, typography, and more, making it a great choice for developers who want fine-grained control over their designs without writing a lot of custom code.",
    },
    {
      id : 6,
      imgSrc: '../assests/pic/Nextjs.png',
      title : 'Next JavaScript Library for full stack',
      skillName :'Next js',
      description:
       "Next.js is a React-based framework built on top of the React library, designed to enhance the development of modern web applications. It significantly improves SEO capabilities compared to React.js, offering features like server-side rendering (SSR) and static site generation (SSG), which optimize search engine visibility. Next.js extends beyond the client side, enabling server-side development, making it a versatile choice for both front-end and back-end applications. Additionally, it seamlessly integrates into the MERN stack, providing a comprehensive solution for full-stack development without requiring additional learning.",
    },
  ];

  let skillDiv = document.getElementById('skills-section')

  cardsData.forEach((cardData) => {

    const cardDiv = document.createElement('div');
    cardDiv.className = 'skillCard';
  
    
    const icon = document.createElement('i')
    icon.className = "fa-solid fa-circle-info"

    const h3 = document.createElement('h3');
    h3.textContent = cardData.title;
  
    const wrapper = document.createElement('div')
   
    wrapper.className = 'img-wrapper'
    wrapper.style.backgroundImage = `url(${cardData.imgSrc})`

    
    wrapper.addEventListener('click' ,() => {

    let p = document.createElement('p')
    p.id = "dashboard-info"
    p.textContent = cardData.description

      divAddInfo(p)
      divShow()
    })  
  
    wrapper.appendChild(icon)
    cardDiv.appendChild(wrapper);
    cardDiv.appendChild(h3);


    skillDiv.appendChild(cardDiv);
  });
