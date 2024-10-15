    export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#Experience" },
    { name: "Contact", link: "#Contacts" },
    ];

export const gridItems = [
  {
    id: 1,
    title: "Inspiring creativity through shared vision and collaboration.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "currently purchasing bachelor degree in Computer Science",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

    export const projects = [
    {
        id: 1,
        title: "SnapGram - Social Media App",
        des: "SnapGram is a new social media app that is easy to use and full of features. Built with React.js, Appwrite, React Query, TypeScript, Shadcn, and Tailwind CSS, SnapGram is fast, responsive, and looks great. Our strong authentication system keeps your account secure and private. On the Explore Page, you can discover posts and see top creators. You can like and save posts, and manage them on special pages. Each post has its own detailed page with related posts to keep you engaged. On your Profile Page, you can see all your liked posts and edit your profile. You can also browse and explore other users' profiles and posts. Creating a post is simple with our user-friendly Create Post Page, which includes easy file management and a drag-and-drop feature. You can edit your posts anytime. Our responsive design with a bottom bar makes it feel like a mobile app, and React Query helps with fast and efficient data loading. Using Appwrite as our backend service, SnapGram makes backend development easy with features like authentication, database management, and file storage",
        img: "/snapGram.png",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/appwriteio-icon.svg"],
        link: "https://aabdalnaby088.github.io/SnapGram/",
    },
    {
        id: 2,
        title: "FreshCart - Ecommerce",
        des: "Freachcart is an e-commerce application offering a range of features for a seamless shopping experience. Users can explore products, browse through categories and brands, and create wishlists with the flexibility to add or remove items. Each product has its own detailed page, and the shopping cart allows users to manage their selections, including adjusting quantities. Payment options include both cash on delivery and credit card transactions. To optimize functionality and user interface, I integrated several libraries, such as React Router DOM for navigation, Context API for state management, React Query for efficient data fetching, Slick Slider for enhanced visuals, React Helmet for SEO optimization, and Detect Offline for a resilient offline experience",
        img: "/frechCart.png",
        iconLists: ["/re.svg", "/icons8-bootstrap.svg", "/icons8-js.svg", '/logos--react-query-icon.svg', '/api-svgrepo-com.svg' ],
        link: "https://aabdalnaby088.github.io/FreshCart-Ecommerce/",
    },
    {
        id: 3,
        title: "CineChill - Movies Website",
        des: "CineChill is an entertainment web application meticulously crafted using the TMDB API to deliver a comprehensive and seamless user experience. This product boasts an array of features, including the ability to browse media with genre filters, conduct searches, and utilize an appealing slider showcasing the day's popular movies. The application also offers in-depth movie details, video trailers, and personalized recommendations for users exploring specific titles. To enhance performance and user navigation, I employed advanced technologies such as React Router for seamless single-page application (SPA) functionality. Additionally, Context API was utilized for efficient state management, while React Helmet ensured optimal SEO performance. The incorporation of React Detect Offline contributes to a robust offline experience. For media playback, React Player was integrated, and the sleek slider component, Slick Slider, enhances the visual appeal of the application. These technologies collectively contribute to creating a sophisticated and user-friendly entertainment platform.",
        img: "/cineChill.png",
        iconLists: ["/re.svg", "/icons8-bootstrap.svg", "/icons8-js.svg", "react-router.svg","react-query.svg" ],
        link: "https://aabdalnaby088.github.io/CineChill-MoviesSPA/",
    },
    {
        id: 4,
        title: "Fast Pizza - Simple pizza delivery",
        des: "This project is a simple React app designed for pizza delivery. It utilizes React Redux for state management, allowing for efficient handling of application data. The app also employs React Router for seamless navigation between different views and components. Styling is achieved with Tailwind CSS, providing a modern and responsive design. Users can browse the pizza menu, add items to their cart and see order estimate delivery date, creating an intuitive and enjoyable experience for pizza lovers.",
        img: "/fastPizza.png",
        iconLists: ["/re.svg", "/redux.svg", "/tail.svg", 'react-router.svg' ],
        link: "https://fast-pizza-xia9.vercel.app/",
    },
    {
        id: 5,
        title: "Ahmed's Portfolio - old Portfolio",
        des: "This portfolio showcases my journey as a front-end developer, built using React, HTML, CSS, and Bootstrap. It features a collection of my previous work, highlighting projects that demonstrate my skills in creating responsive and dynamic web applications. Each project reflects my commitment to clean code and user-centered design, providing visitors with a seamless browsing experience. This portfolio not only serves as a testament to my growth in web development but also as a platform to share my passion for crafting visually appealing and functional websites.",
        img: "/oldPortfolio.png",
        iconLists: ["/re.svg", "/icons8-bootstrap.svg", "/icons8-js.svg" ],
        link: "https://aabdalnaby088.github.io/Ahmed-s-Portfolio/",
    },
    {
        id: 6,
        title: "GameGlyphic",
        des: "I used my skills in Vanilla JavaScript, Bootstrap, CSS, and HTML to create a user-friendly website for gamers. The site lets users easily explore different game categories and find detailed information about each game. You can search for specific games and filter them by categories. It's a simple and fun way for gamers to discover and learn more about their favorite games. This project showcases my ability to build a website that looks good and works well, making it enjoyable for users who love gaming",
        img: "/gameGlyphic.png",
        iconLists: ["/html-5-logo-svgrepo-com.svg" , "/css-3-svgrepo-com.svg", "/icons8-bootstrap.svg", "/icons8-js.svg"],
        link: "https://aabdalnaby088.github.io/GameGlyphic/",
    },
    {
        id: 7,
        title: "Weather - simple Weather App",
        des: "I developed a dynamic and user-friendly weather application using a combination of Vanilla JavaScript, HTML, CSS, and Bootstrap. This web application provides real-time weather updates with a focus on delivering essential information at a glance. Users can easily access key weather metrics such as maximum temperature, minimum temperature, current temperature, wind speed, humidity, and more, ensuring a comprehensive overview of the current weather conditions. The user interface is designed for optimal usability, incorporating responsive design principles to guarantee a seamless experience across various devices. This project not only showcases my proficiency in front-end technologies but also demonstrates my ability to create intuitive and efficient applications that enhance user experience.Note :Make sure you enable unsecure content on your browser to make the Api work",
        img: "Weather.png",
        iconLists: ["/html-5-logo-svgrepo-com.svg" , "/css-3-svgrepo-com.svg", "/icons8-bootstrap.svg", "/icons8-js.svg"],
        link: "https://aabdalnaby073.github.io/WeatherApp/",
    },
    ];

    export const testimonials = [
    {
        quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    ];

    export const companies = [
    {
        id: 1,
        name: "cloudinary",
        img: "/cloud.svg",
        nameImg: "/cloudName.svg",
    },
    {
        id: 2,
        name: "appwrite",
        img: "/app.svg",
        nameImg: "/appName.svg",
    },
    {
        id: 3,
        name: "HOSTINGER",
        img: "/host.svg",
        nameImg: "/hostName.svg",
    },
    {
        id: 4,
        name: "stream",
        img: "/s.svg",
        nameImg: "/streamName.svg",
    },
    {
        id: 5,
        name: "docker.",
        img: "/dock.svg",
        nameImg: "/dockerName.svg",
    },
    ];

    export const workExperience = [
    {
        id: 1,
        title: "Senior computer science Student",
        desc: "a passionate Forth-year student in the Faculty of Computers and Artificial Intelligence at Cairo University, my commitment to expanding knowledge and skills within the field of computer science is unwavering",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Front-End Development - Route Academy",
        desc: "I completed a front-end development course where I learned HTML, CSS, JavaScript, and React. Through various projects, I gained hands-on experience and honed my skills in creating dynamic and responsive user interfaces. I'm passionate about front-end development and eager to continue growing in this field.",
        className: "md:col-span-2", 
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Back-End Development - Route Academy",
        desc: "To further enhance my expertise as a MERN stack developer, I am currently taking a back-end course focused on Node.js. This course is helping me deepen my understanding of server-side development, allowing me to build more robust and scalable applications.",
        className: "md:col-span-2", 
        thumbnail: "/exp4.svg",
    },

    ];

    export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        link: "https://github.com/aabdalnaby088"
    },
    {
        id: 2,
        img: "/icons8-facebook.svg",
        link:"https://www.facebook.com/profile.php?id=100063503326411&mibextid=kFxxJD"
    },
    {
        id: 3,
        img: "/link.svg",
        link:"https://www.linkedin.com/in/ahmed-mohamed-b44b7a240/"
    },
    ];