// portfolio-data.js

const portfolioData = {
  about: {
    title: "About Me",
    subtitle: "Turning Data Into Decisions",
    leadText: "I am a dedicated data analyst with a passion for transforming complex datasets into actionable business intelligence.",
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
      description: "Comprehensive analysis of water accessibility using modern BI tools for real-world social impact.",
      details: [
        "Data cleaning in Excel",
        "Interactive Power BI dashboards",
        "Key insights for development"
      ],
      link: "#",
      accentColor: "#05A9C7",
      mediaCaption: "🌊 Dashboard with Power BI · Impact in East Africa"
    },
    {
      name: "Retail Sales Dashboard",
      image: "images/Food_Mart.jfif",
      video: "videos/Food_Mart.mp4",
      description: "Interactive dashboards unveil trends and drive smarter retail decisions across regions.",
      details: [
        "Sales trend analysis",
        "Inventory and marketing automation"
      ],
      link: "#",
      accentColor: "#C75094",
      mediaCaption: "🛒 Visualizations for smarter inventory"
    },
    {
      name: "Loan Risk Predictor",
      image: "images/loan_risk.jpg",
      video: "videos/loan_risk_demo.mp4",
      description: "AI-powered model offers instant, visual risk scoring for loan applications.",
      details: [
        "Python & scikit-learn pipeline",
        "Deployed with Flask for instant results",
        "Achieved 87% test accuracy"
      ],
      link: "#",
      accentColor: "#F29E4C",
      mediaCaption: "💡 Live app for smarter loan approvals"
    },
    {
      name: "Survey Sentiment Analyzer",
      image: "images/survey_sentiment.jpg",
      video: "videos/survey_sentiment_demo.mp4",
      description: "Analyze open-ended survey responses with NLP to reveal customer satisfaction and key themes.",
      details: [
        "NLP processing with Python",
        "Word cloud and trend graphs",
        "Deployed dashboard for real-time results"
      ],
      link: "#",
      accentColor: "#31a24c",
      mediaCaption: "📊 Real-time insights powered by NLP"
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
      link: "https://your-verification-link.com" // Optional: external cert link
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
  return `<section><header class='major'><h2>${title}</h2></header>${html}</section>`;
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
  
  // Projects
  // html += renderSection(data.projects.title, data.projects.items.map(p=>{
	// let videoHtml = "";
	// if (p.video && typeof p.video === "string" && p.video.endsWith('.mp4')) {
	//   videoHtml = `<div class='centered-video'><video controls>
	// 	<source src='${p.video}' type='video/mp4'>
	// 	Your browser does not support the video tag.
	//   </video></div>`;
	// }
	// return `<div class='project'><h3>${p.name}</h3><img src='${p.image}' alt='${p.name}' style='max-width:300px;width:100%;border-radius:8px;margin-bottom:10px'><p>${p.desc}</p>${p.details?`<ul>${p.details.map(d=>`<li>${d}</li>`).join("")}</ul>`:""}${videoHtml}</div>`;
  // }).join("") );
  // Projects section rendering
// Projects section rendering
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
          <img src="${project.image}" alt="${project.name}" class="project-image" data-for-video="${idx}">
          <button class="show-video-btn outlined"
                  onclick="toggleVideo(${idx}, '${project.video}','${project.image}','${project.mediaCaption ? project.mediaCaption.replace(/'/g,"&#39;") : ""}')">Show Video</button>
        </div>
        <div class="project-media-caption caption-animate" id="caption-${idx}">
            ${project.mediaCaption ? `<span class="caption-text">${project.mediaCaption}</span>` : ""}
        </div>
        <div class="project-info">
          <h3>${project.name}</h3>
          <p>${project.description}</p>
          <ul>
            ${project.details.map(d=>`<li>${d}</li>`).join("")}
          </ul>
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
