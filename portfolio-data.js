// portfolio-data.js

const portfolioData = {
  about: {
    title: "About Me",
    subtitle: "Turning Data Into Decisions",
    leadText: "I'm Mazen Hasseb, a computer science student from Egypt driven by curiosity and purpose. I thrive at the intersection of data, technology, and real-world problem-solving. Whether it's: Developing a Smart Flood Protection system Improving fraud detection Building dashboards that uncover hidden insights My goal is always the same: to create meaningful impact. I believe every dataset tells a story, and every line of code should move the world forward. Through: Internships Freelance projects Continuous learning I’m building the skills and mindset to become a thoughtful and impactful data professional. Let’s connect and create something valuable together.",
    mainText: [
      "Leveraging advanced tools such as Power BI, Excel, SQL, and Python, I design insightful dashboards, monitor key performance indicators, and deliver data-driven solutions that empower strategic decision-making.",
      "My experience spans rigorous training at NTI and hands-on projects through the ALX Data Program, where I consistently prioritize clarity, measurable impact, and tangible results."
    ],
    highlights: [
      { icon: "fa-chart-line", title: "Data Visualization", description: "Creating clear, impactful dashboards" },
      { icon: "fa-brain",        title: "Problem Solving",    description: "Finding insights in complex data" },
      { icon: "fa-users",        title: "Collaboration",      description: "Working with teams to deliver results" }
    ],
    quickFacts: [
      { icon: "fa-graduation-cap", text: "Data Science Student at Alexandria National University" },
      { icon: "fa-location-dot",   text: "Based in Alexandria, Egypt" },
      { icon: "fa-language",       text: "Fluent in Arabic & English" },
      { icon: "fa-heart",          text: "Passionate about solving data puzzles" }
    ]
  },

  skills: {
    title: "Skills",
    heading: "Technical Expertise",
    subheading: "Transforming Data into Actionable Insights",
    description: `
    <div class="skills-container">
      <div class="skills-header-text">
        <h3 style="font-size: 2.5rem; margin-bottom: 10px; color: #4f8cff;">${this.heading || "Technical Expertise"}</h3>
        <p style="font-size: 1.2rem; color: #aaa; margin-bottom: 50px;">${this.subheading || "Transforming Data into Actionable Insights"}</p>
      </div>
      
      <div class="skills-grid-single">
        <!-- Python -->
        <div class="skill-card">
          <div class="skill-header">
            <h4>Python</h4>
            <span class="skill-years">2+ years</span>
          </div>
          <div class="skill-bar">
            <div class="skill-progress" style="width: 80%; background: linear-gradient(90deg, #FF6B6B, #FF8E53);"></div>
            <span class="skill-percentage">80%</span>
          </div>
        </div>
        
        <!-- R -->
        <div class="skill-card">
          <div class="skill-header">
            <h4>R</h4>
            <span class="skill-years">1+ years</span>
          </div>
          <div class="skill-bar">
            <div class="skill-progress" style="width: 70%; background: linear-gradient(90deg, #4ECDC4, #44A08D);"></div>
            <span class="skill-percentage">70%</span>
          </div>
        </div>
        
        <!-- SQL -->
        <div class="skill-card">
          <div class="skill-header">
            <h4>SQL</h4>
            <span class="skill-years">2+ years</span>
          </div>
          <div class="skill-bar">
            <div class="skill-progress" style="width: 70%; background: linear-gradient(90deg, #667eea, #764ba2);"></div>
            <span class="skill-percentage">70%</span>
          </div>
        </div>
        

        
        <!-- Excel -->
        <div class="skill-card">
          <div class="skill-header">
            <h4>Excel</h4>
            <span class="skill-years">1+ years</span>
          </div>
          <div class="skill-bar">
            <div class="skill-progress" style="width: 80%; background: linear-gradient(90deg, #4facfe, #00f2fe);"></div>
            <span class="skill-percentage">80%</span>
          </div>
        </div>
        
        <!-- Power BI -->
        <div class="skill-card">
          <div class="skill-header">
            <h4>Power BI</h4>
            <span class="skill-years">1+ years</span>
          </div>
          <div class="skill-bar">
            <div class="skill-progress" style="width: 90%; background: linear-gradient(90deg, #fa709a, #fee140);"></div>
            <span class="skill-percentage">90%</span>
          </div>
        </div>
        
        <!-- Java -->
        <div class="skill-card">
          <div class="skill-header">
            <h4>Java</h4>
            <span class="skill-years">2+ years</span>
          </div>
          <div class="skill-bar">
            <div class="skill-progress" style="width: 75%; background: linear-gradient(90deg, #30cfd0, #330867);"></div>
            <span class="skill-percentage">75%</span>
          </div>
        </div>
        
        <!-- Scikit-learn -->
        <div class="skill-card">
          <div class="skill-header">
            <h4>Scikit-learn</h4>
            <span class="skill-years">1+ years</span>
          </div>
          <div class="skill-bar">
            <div class="skill-progress" style="width: 80%; background: linear-gradient(90deg, #a8edea, #fed6e3);"></div>
            <span class="skill-percentage">80%</span>
          </div>
        </div>
        
        <!-- TensorFlow -->
        <div class="skill-card">
          <div class="skill-header">
            <h4>TensorFlow</h4>
            <span class="skill-years">1+ years</span>
          </div>
          <div class="skill-bar">
            <div class="skill-progress" style="width: 75%; background: linear-gradient(90deg, #ff9a9e, #fecfef);"></div>
            <span class="skill-percentage">75%</span>
          </div>
        </div>
        
        <!-- NLP -->
        <div class="skill-card">
          <div class="skill-header">
            <h4>NLP</h4>
            <span class="skill-years">1+ years</span>
          </div>
          <div class="skill-bar">
            <div class="skill-progress" style="width: 60%; background: linear-gradient(90deg, #ffecd2, #fcb69f);"></div>
            <span class="skill-percentage">60%</span>
          </div>
        </div>
      </div>
      

    </div>
    `
  },

education: {
  title: "Education",
  text: "Currently pursuing a Bachelor’s degree in Data Science and Artificial Intelligence at Alexandria National University, Faculty of Computer and Data Science. My academic journey is enriched by coursework in:",
  courses: [
    {
      icon: "🤖",
      title: "Machine Learning",
      description: "Learn supervised and unsupervised models, regression, classification, and clustering using real-world datasets."
    },
    {
      icon: "📈",
      title: "Probability & Statistics",
      description: "Understand distributions, hypothesis testing, confidence intervals, and statistical inference."
    },
    {
      icon: "🗃️",
      title: "Database Systems (SQL)",
      description: "Design and query relational databases, write optimized SQL queries, and manage data integrity."
    },
    {
      icon: "🐍",
      title: "Python Programming",
      description: "Develop scripts, automate tasks, analyze data, and build scalable programs using Python libraries."
    },
    {
      icon: "🧠",
      title: "Neural Networks",
      description: "Understand deep learning architectures, activation functions, backpropagation, and training models."
    },
    {
      icon: "🌲",
      title: "Data Structures & Algorithms",
      description: "Build efficient code using stacks, queues, trees, graphs, sorting & searching algorithms."
    }
  ]
},

experience: {
  title: "Work Experience",
  items: [
    {
      icon: "📊",
      role: "ALX Data Analytics Certificate",
      details: "Completed 6-month intensive program focused on data cleaning, visualization, and business insights."
    },
    {
      icon: "🏢",
      role: "NTI Advanced Data Analytics Training",
      details: "Summer internship involving real-world data projects, KPIs, dashboards, and reporting."
    },
    {
      icon: "🐍",
      role: "PowerBI DataCamp Certificate",
      details: "Practical applications in scripting, data analysis, and automation."
    }
  ]
},

  // projects: {
  //   title: "Projects",
  //   items: [
  //     {
  //       name: "Maji Ndogo Water Analysis",
  //       desc: "Comprehensive analysis of water accessibility, crime risk, and infrastructure in Maji Ndogo, resulting in strategic recommendations for community development.",
  //       details: [
  //         "✅ Data cleaning and preprocessing in Excel for high-quality datasets",
  //         "✅ Developed interactive Power BI dashboards and DAX calculations",
  //         "✅ Delivered critical insights on water access, gender-based risk, and budget allocation"
  //       ],
  //       image: "images/Maji_Ndogo.jfif",
  //       video: "images/Alx_1.mp4"
  //     },
  //     {
  //       name: "Food Mart Retail Analysis",
  //       desc: "Retail analytics project focused on optimizing marketing, sales strategies, and inventory management for improved business performance.",
  //       image: "images/Food_Mart.jfif",
  //       video: false
  //     }
  //   ]
  // },
projects: {
  title: "Projects",
  items: [
    {
      name: "Maji Ndogo Water Analysis",
      image: "images/Maji_Ndogo.jfif",
      video: "images/Alx_1.mp4",
      role: ["Cleaned and prepared data in Excel.",
               "Built Power BI dashboards to visualize water access and safety.",
               "Created DAX measures for KPIs like access percentage and budget efficiency.",
               "Identified key issues in funding, infrastructure, and gender-based risks.",
              "Analyzed gender-based crime risks linked to water collection and identified underfunded regions."
            ],
      problem: ["To evaluate and improve basic water access in the fictional town of Maji Ndogo, while identifying safety risks—particularly for women—during water collection. The challenge also included assessing whether budget allocation matched population needs and improvement outcomes."],
      technologies: ["Power BI", "Excel", "DAX", "Power Query"],
      learned:  ["Gained hands-on experience with real-world data cleaning and processing in Excel.",
                 "Improved my ability to create dynamic Power BI reports that uncover hidden patterns.",
                 "Enhanced proficiency in writing DAX expressions for filtering, conditional logic, and KPI calculations.",
                 "Learned to connect data insights to real-life problems, such as infrastructure inequality and gender-based safety concerns.",
                ],
      link: "https://www.linkedin.com/posts/mazen-hasseb-9914122b0_dataanalytics-powerbi-excel-activity-7313621570063589376-Hvmn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAErP0_0BJp8OlByLcVIOzOi0XVx_zVj2Kak",
      accentColor: "#05A9C7",
      mediaCaption: "🌊 Dashboard with Power BI · Impact in East Africa"
    },
    {
      name: "Retail Sales Dashboard",
      image: "images/Food_Mart.jfif",
      video: "images/NTI_PowerBI.mp4",
      role: ["Cleaned and transformed multi-source retail data using Power Query.",
             "Built interactive dashboards in Power BI with custom DAX measures.",
             "Analyzed customer segments, sales trends, and return rates.",
             "Delivered visual insights to support strategic decisions."
            ],
      problem:["Food Mart needed to better understand:",
              "Customer purchasing behavior, especially the profitability of Elite vs. Regular customers",
              "Sales and profit trends across regions, time periods, and product categories.",
              "The impact of demographics (family size, income, etc.) on sales.",
              "Product return patterns and the reasons behind high return rates for certain brands or regions.",
                "The challenge was to turn raw transactional and demographic data into actionable insights that could help improve marketing, product selection, and customer engagement strategies.",
              ],
      technologies: ["Power BI", "SQL", "DAX"],
      learned:  ["Gained hands-on experience in end-to-end business intelligence workflow using Power BI.",
                 "Improved my ability to translate business questions into analytical approaches using DAX and visuals.",
                 "Learned how to design effective, minimalist dashboards with interactivity and visual hierarchy.",
                 "Enhanced my data storytelling skills — delivering insights that are not only correct, but also easy to interpret for stakeholders.",
                 "Strengthened my knowledge of customer segmentation, retail KPIs, and geographical sales analysis.",
                 "Writing effective DAX for KPIs and segmentation",
                 "Designing clean, interactive dashboards",
                 "Turning data into clear, actionable business insights."
                ],
      link: "https://www.linkedin.com/posts/mazen-hasseb-9914122b0_food-mart-retail-activity-7355290292066865153-tNj1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAErP0_0BJp8OlByLcVIOzOi0XVx_zVj2Kak",
      accentColor: "#C75094",
      mediaCaption: "🛒 Visualizations for smarter inventory"
    },
    {
      name: "Emotion Detection System",
      image: "images/Emotion Detection.png",
      video: "images/streamlit-app1(Emotion_Detection).mp4",
      role: ["Developed a Python pipeline using scikit-learn for emotion detection.",
             "Integrated multilingual support for diverse user inputs.",
             "Deployed the model using Streamlit for real-time interaction."
            ],
      problem: ["Detecting human emotions from short text inputs is challenging due to language diversity and context ambiguity. The goal was to build a system that can: Handle non-English inputs using translation Accurately classify Joy, Anger, and Fear Provide real-time, user-friendly predictions"
              ],
      technologies: ["Python", "scikit-learn", "Streamlit","Google Translate API","Pandas","HuggingFace Transformers"],
      learned:  ["Mastered NLP preprocessing and fine-tuning transformer models",
                 "Integrated external APIs for language translation",
                 "Built an end-to-end interactive web app using Streamlit",
                 "Improved skills in data visualization and user-centric UI design",
                 "Enhanced understanding of multilingual NLP challenges",
                ],
      link: "https://lnkd.in/eDfFwwyf",
      accentColor: "#F29E4C",
      mediaCaption: "💡 Live app Emotion Detection with Multilingual Support"
    },
    {
      name: "Urban Pulse: Divvy Bike Share Analytics Dashboard",
      image: "images/Bikeshare Windy City.jpg",
      video: "images/Urban Pulse Divvy Bike Share Analytics Dashboard.png",
      role: ["Processed and cleaned 205,691 bike trip records using Power Query",
             "Built comprehensive Power BI dashboard with 8 interactive visualizations",
             "Delivered actionable recommendations for fleet optimization and station management"
            ],
      problem: ["Divvy Chicago needed to understand usage patterns, optimize bike distribution, and improve resource allocation across their 670-station network. With over 200,000 monthly rides, manual analysis was impossible, and stakeholders lacked real-time insights into:",
                 "Peak usage times and locations",
                 "Member vs. casual rider behaviors",
                 "Station performance metrics"
              ],
      technologies: ["Microsoft Power BI - Interactive dashboard development","Power Query (M) - Data cleaning and transformation","DAX - Advanced calculations and measures"],
      learned:  ["Advanced DAX formulas for time-based calculations",
                 "Power Query optimization for large datasets (200K+ rows)",
                 "Performance optimization for dashboard efficiency",
                 "Understanding urban mobility patterns and user behavior",
                 "Translating business requirements into technical solutions",
                ],
      link: "https://github.com/Mazenn3/Divvy-Bike-Share-Analytics-Dashboard",
      accentColor: "#31a24c",
      mediaCaption: "📊 Divvy Bike Share Analytics Dashboard"
    }
  ]
},
certificates: {
  title: "Certificates",
  items: [
    {
      image: "images/ALX_Certification.jpg",
      title: "ALX Data Analysis Certificate",
      date: "March 2025",
      provider: "ALX",
      description: "In my 6-month program with ALX and ExploreAI Academy, I learned to tell clear business stories from complex data. I dove deep into the entire process—from analysis with SQL to visualization with Power BI—and I'm eager to put those skills to work.",
      link: "https://savanna.alxafrica.com/certificates/LEYR7hzM2m" // Optional: external cert link
    },
    {
      image: "images/NTI_Adv_DA.jpg",
      title: "NTI Advanced Analytics",
      date: "July 2025",
      provider: "NTI",
      description: "I had the opportunity to work on everything from data cleaning and exploratory analysis to building insightful dashboards with Power BI.",
      link: ""
    },
    {
      image: "images/Aspire.png",
      title: "Aspire Leaders Program",
      date: "Apr 2024",
      provider: "Aspire",
      description: "Sharpened my leadership chops with the Harvard-affiliated Aspire Leaders Program.",
      link: ""
    }
  ]
}
};

// Helper to wrap a section
function renderSection(title, html) {
  const titleId = `section-${title.replace(/<[^>]*>?/gm, '').replace(/[^a-z0-9]/gi, '-').toLowerCase()}`;
  return `
    <section aria-labelledby="${titleId}">
      <header class='major'>
        <h2 id="${titleId}">${title}</h2>
      </header>
      <div class="section-content">
        ${html}
      </div>
    </section>
  `;
}
// Main renderer
function renderPortfolio(data) {
  let html = "";

  // About
  html += renderSection(
    `<span class="section-number">01</span> ${data.about.title}`,
    `<div class="about-wrapper">
      <div class="about-main">
        <h3 class="about-subtitle">${data.about.subtitle}</h3>
        <p class="about-lead">${data.about.leadText}</p>
        <div class="about-details">
          ${data.about.mainText.map(p=>
            `<p>${p.replace(/Power BI|Excel|SQL|Python/g, m=>`<span class="skill-highlight">${m}</span>`)}</p>`
          ).join("")}
        </div>
        <div class="about-highlights">
          ${data.about.highlights.map(h=>`
            <div class="highlight-card">
              <i class="fas ${h.icon}"></i>
              <h4>${h.title}</h4>
              <p>${h.description}</p>
            </div>
          `).join("")}
        </div>
      </div>
      <div class="about-sidebar">
        <div class="quick-facts">
          <h4><i class="fas fa-info-circle"></i> Quick Facts</h4>
          <ul>
            ${data.about.quickFacts.map(f=>`
              <li><i class="fas ${f.icon}"></i> ${f.text}</li>
            `).join("")}
          </ul>
        </div>
        <div class="about-cta">
          <h4>Let's Work Together</h4>
          <p>I'm always interested in new data challenges</p>
          <a href="elements.html" class="cta-button">Get In Touch</a>
        </div>
      </div>
    </div>`
  );

  // Skills
  html += renderSection(
    `<span class="section-number">02</span> ${data.skills.title}`,
    data.skills.description
  );


  // Education section rendering
html += renderSection(
  `<span class="section-number">03</span> ${data.education.title}`,
  `<div class="education-content">
    <p class="emphasized-text">${data.education.text}</p>
    <h3>🎓 Education – Relevant Courses</h3>
    ${data.education.courses.map(course => `
      <div class="education-course">
        <span class="education-course-icon">${course.icon}</span>
        <div>
          <div class="education-course-title">${course.title}</div>
          <div class="education-course-description">${course.description}</div>
        </div>
      </div>
    `).join('')}
  </div>`
);

// Work Experience section rendering
html += renderSection(
  `<span class="section-number">04</span> ${data.experience.title}`,
  `<div class="experience-content">
    ${data.experience.items.map(item => `
      <div class="experience-item">
        <span class="experience-icon">${item.icon}</span>
        <div>
          <h4 class="experience-role">${item.role}</h4>
          <p class="experience-details">${item.details}</p>
        </div>
      </div>
    `).join('')}
  </div>`
);
  
  // Projects section rendering with .project-meta and .tech-tag
  html += renderSection(
    `<span class="section-number">05</span> ${data.projects.title}`,
    `<div class="projects-fancy-grid">
      ${data.projects.items.map((project, idx) => `
        <div class="project-fancy-card" style="${project.accentColor ? `--proj-accent:${project.accentColor}` : ''}">
          <div class="project-badges">
            ${(project.badges || []).map(badge => `
              <span class="fancy-badge animated">
                <span class="emoji-badge">${badge.emoji || ""}</span>
                <span>${badge.label}</span>
              </span>
            `).join('')}
          </div>
          <div class="project-media-wrap" id="media-${idx}">
            <img src="${project.image}" alt="Screenshot of ${project.name} showing ${project.description ? project.description.substring(0, 70) + '...' : 'project interface'}" class="project-image">
            <button 
  class="show-video-btn outlined"
  onclick="toggleVideo(${idx}, '${project.video}','${project.image}','${project.mediaCaption ? project.mediaCaption.replace(/'/g,"&#39;") : ""}')"
  aria-label="Show video demonstration of ${project.name}"
  tabindex="0">
  Show Video
</button>
          </div>
          <div class="project-media-caption caption-animate" id="caption-${idx}">
              ${project.mediaCaption ? `<span class="caption-text">${project.mediaCaption}</span>` : ""}
          </div>
          <div class="project-info">
            <h3>${project.name}</h3>
            <div class="project-meta">
              <div><b>🧑‍💻Role & Responsibilities:</b> ${Array.isArray(project.role) ? `<ul>${project.role.map(r => `<li>${r}</li>`).join('')}</ul>` : (project.role || "N/A")}</div>
              <div><b>❓Problem Statement:</b> ${Array.isArray(project.problem) ? `<ul>${project.problem.map(p => `<li>${p}</li>`).join('')}</ul>` : (project.problem || "N/A")}</div>
              <div><b>🛠️Tools Used:</b> ${Array.isArray(project.technologies) ? project.technologies.map(t => `<span class='tech-tag'>${t}</span>`).join(' ') : "N/A"}</div>
              <div><b>📚What I Learned:</b> ${Array.isArray(project.learned) ? `<ul>${project.learned.map(l => `<li>${l}</li>`).join('')}</ul>` : (project.learned || "N/A")}</div>
            </div>
            <div class="project-actions">
              ${project.link ? `<a href="${project.link}" class="outlined" target="_blank" rel="noopener">View Project</a>` : ""}
            </div>
          </div>
        </div>
      `).join('')}
    </div>`
  );

// Update toggleVideo to animate/reveal the caption
window.toggleVideo = function(idx, videoUrl, posterUrl, caption) {
  const mediaWrap = document.getElementById(`media-${idx}`);
  const captionElem = document.getElementById(`caption-${idx}`);
  if (!mediaWrap) return;
  if (mediaWrap.querySelector('video')) {
    // Show image again
    mediaWrap.innerHTML = `
      <img src="${posterUrl}" alt="Project screenshot" class="project-image" data-for-video="${idx}">
      <button class="show-video-btn outlined" onclick="toggleVideo(${idx},'${videoUrl}','${posterUrl}','${caption||""}')">Show Video</button>
    `;
    // Animate caption
    if (captionElem) captionElem.classList.remove("caption-animate-visible");
  } else {
    mediaWrap.innerHTML = `
      <video src="${videoUrl}" controls autoplay poster="${posterUrl || ''}" class="project-video" style="outline: 2px solid var(--proj-accent,#4f8cff);" playsinline></video>
      <button class="show-video-btn outlined" onclick="toggleVideo(${idx},'${videoUrl}','${posterUrl}','${caption||""}')">Show Image</button>
    `;
    // Animate caption reveal
    if (captionElem) {
        captionElem.classList.add("caption-animate-visible");
        setTimeout(() => captionElem.classList.remove("caption-animate-visible"), 3400);
    }
  }
};
  // Certificates
html += renderSection(
  `<span class="section-number">06</span> ${data.certificates.title}`,
  `<div class="certificates-grid">
    ${data.certificates.items.map(c => `
      <div class="certificate-card">
        <a href="${c.image}" target="_blank">
          <img src="${c.image}" alt="${c.title}" class="certificate-img">
        </a>
        <div class="certificate-meta">
          <div>
            <span class="cert-title">${c.title}</span>
            ${c.link ? `<a href="${c.link}" class="cert-link" target="_blank" title="Verify certificate">🔗</a>` : ""}
          </div>
          <span class="cert-provider">${c.provider}</span>
          <span class="cert-date">${c.date}</span>
        </div>
        ${c.description ? `<div class="cert-desc">${c.description}</div>` : ""}
      </div>
    `).join('')}
  </div>`
);
  return html;
}
// Add this script tag after your portfolio data
window.showSkillCategory = function(index) {
  const tabs = document.querySelectorAll('.skill-tab');
  const categories = document.querySelectorAll('.skill-category');
  
  tabs.forEach((tab, i) => {
    tab.classList.toggle('active', i === index);
  });
  
  categories.forEach((category, i) => {
    category.classList.toggle('active', i === index);
  });
}
document.getElementById('dynamic-content').innerHTML = renderPortfolio(portfolioData);
