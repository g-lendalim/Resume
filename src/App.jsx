import React from 'react';
import { Container, Row, Col, Card, ListGroup, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ProfilePicture from '/public/profile-picture.jpg';

function ProfessionalProfile() {
  return (
    <section>
      <h4 className="fs-4 fw-bold border-bottom pb-2 mb-3 text-primary">
        Professional Profile
      </h4>
      <p className="lead">    
        Full-Stack Software Developer with experience building business applications, automation workflows, and AI-powered solutions. With a foundation in healthcare and an appreciation for thoughtful system architecture, I strive to develop reliable, scalable, and user-friendly systems that balance technical excellence with practical impact.
      </p>
    </section>
  );
}

function ProfileCard() {
  return (
    <Card className="mt-2 text-center bg-dark text-white">
      <Card.Body>
        <div className="overflow-hidden rounded-circle mx-auto mb-3" style={{ width: '200px', height: '200px' }}>
          <Card.Img 
            variant="top" 
            src={ProfilePicture}
            className="img-fluid" 
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </div>
        <Card.Title as="h1" className="fs-3 fw-bold">Glenda Lim</Card.Title>
        <Card.Subtitle className="fs-5 text-light mb-2">Full-Stack Developer</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

function Contact() {
  return (
    <Card className="mt-4 border-0 bg-dark text-white">
      <Card.Body>
        <h3 className="fs-5 fw-bold border-bottom pb-2 mb-3">Contact</h3>
        <ListGroup variant="flush" className="bg-transparent">
          <ListGroup.Item className="border-0 ps-0 py-1 bg-transparent text-white">
            <i className="bi bi-telephone-fill me-2"></i>
            <a href="https://wa.me/60146804507" className="text-white text-decoration-none">
              +60146804507
            </a>
          </ListGroup.Item>
          <ListGroup.Item className="border-0 ps-0 py-1 bg-transparent text-white">
            <i className="bi bi-envelope-fill me-2"></i>
            <a href="mailto:freyjaglenda@gmail.com" className="text-white text-decoration-none">
              freyjaglenda@gmail.com
            </a>
          </ListGroup.Item>
          <ListGroup.Item className="border-0 ps-0 py-1 bg-transparent text-white">
            <i className="bi bi-geo-alt-fill me-2"></i> Kuala Lumpur
          </ListGroup.Item>
          <ListGroup.Item className="border-0 ps-0 py-1 bg-transparent text-white">
            <i className="bi bi-linkedin me-2"></i>
            <a href="https://www.linkedin.com/in/glenda-lim1104/" className="text-white text-decoration-none">
              linkedin.com/in/glenda-lim1104
            </a>
          </ListGroup.Item>
          <ListGroup.Item className="border-0 ps-0 py-1 bg-transparent text-white">
            <i className="bi bi-github me-2"></i>
            <a href="https://github.com/g-lendalim" className="text-white text-decoration-none">
              github.com/g-lendalim
            </a>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

function TechnicalSkills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        "React.js",
        "Next.js",
        "React Native",
        "Flutter",
        "TypeScript",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "shadcn/ui",
        "HTML5/CSS3"
      ]
    },
    {
      category: "Backend Development",
      skills: [
        "PHP",
        "Laravel",
        "Node.js",
        "Express.js",
        "REST API",
        "API Integration"
      ]
    },
    {
      category: "Database & Backend Services",
      skills: [
        "MySQL",
        "PostgreSQL",
        "Supabase",
        "Firebase/Firestore",
        "SQL",
        "Contentful"
      ]
    },
    {
      category: "AI & LLM Development",
      skills: [
        "OpenAI API",
        "Anthropic Claude API",
        "AI Chatbot Development",
        "Prompt Engineering",
        "Voiceflow",
        "Botpress"
      ]
    },
    {
      category: "Automation & Integrations",
      skills: [
        "Playwright",
        "WhatsApp Automation",
        "Google Sheets Automation",
        "Workflow Automation",
        "Third-Party API Integrations"
      ]
    },
    {
      category: "Development Tools & Platforms",
      skills: [
        "Git/GitHub",
        "Lovable",
        "Claude Code",
        "GitHub Copilot",
        "Cursor",
        "Vite",
        "Vercel",
        "CI/CD Pipelines",
        "Chrome DevTools"
      ]
    },
    {
      category: "SEO & Web Analytics",
      skills: [
        "Technical SEO",
        "Structured Data (JSON-LD)",
        "Google Search Console",
        "Google Analytics"
      ]
    }
  ];

  return (
    <Card className="mt-4 border-0 bg-dark text-white">
      <Card.Body>
        <h3 className="fs-5 fw-bold border-bottom pb-2 mb-3">Technical Skills</h3>
        
        {skillCategories.map((category, idx) => (
          <div key={idx} className="mb-3">
            <h6 className="text-light mb-2">{category.category}</h6>
            <div className="d-flex flex-wrap gap-2 mb-2">
              {category.skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  bg="secondary" 
                  className="px-2 fw-normal"
                  style={{ fontSize: '0.85rem' }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
}

function SoftSkills() {
  const softSkills = [
    { skill: "Problem-Solving & Analytical Thinking", icon: "🧠" },
    { skill: "Cross-Functional Collaboration", icon: "👥" },
    { skill: "Adaptability & Resilience", icon: "🔄" },
    { skill: "Languages: English, Mandarin, Malay (Fluent); Russian (Basic)", icon: "💬" },
  ];

  return (
    <Card className="mt-4 border-0 bg-dark text-white">
      <Card.Body>
        <h3 className="fs-5 fw-bold border-bottom pb-2 mb-3">Soft Skills</h3>
        <ListGroup variant="flush" className="bg-transparent">
          {softSkills.map((skill, index) => (
            <ListGroup.Item key={index} className="border-0 ps-0 py-1 bg-transparent text-white">
              <span className="me-2">{skill.icon}</span>
              {skill.skill}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

function Experience({ jobTitle, company, duration, responsibilities }) {
  return (
    <Card className="mb-4 border-0 shadow-sm">
      <Card.Body>
        <Card.Title className="fs-5 fw-bold">{jobTitle}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {company} | {duration}
        </Card.Subtitle>
        
        <ListGroup variant="flush">
          {responsibilities.map((item, index) => (
            <ListGroup.Item key={index} className="border-0 ps-0 py-1">
              • {item}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

function WorkExperience() {
  return (
    <section className="mt-5">
      <h4 className="fs-4 fw-bold border-bottom pb-2 mb-4 text-primary">Work Experience</h4>
      <Experience
        jobTitle="Software Developer"
        company="Onecare Wellness"
        duration="Mar 2026 – Present"
        responsibilities={[
          "Develop and maintain internal POS and administrative systems supporting sales, commissions, inventory, customer follow-up, refunds, and retail operations",
          "Developed a Sales & Commission Management system with configurable commission settings, enabling retail staff to track sales performance and streamlining commission administration",
          "Took ownership of the inventory management system, enhancing end-to-end stock operations across companies and multiple kiosks, covering stock requests, purchase orders (PO), delivery orders (DO), goods receiving notes (GRN), stock transfers, invoicing, and stock quarantine workflows",
          "Manage and enhance the e-commerce and POS promotion system, implementing SQL-driven promotional logic supporting amount-based, voucher-triggered, and product-based promotions, including automated free-gift allocation and promotion eligibility rules",
          "Developed Google Sheets and WhatsApp automation workflows to streamline KOL and marketing operations, reducing repetitive administrative tasks and improving workflow efficiency",
          "Contribute to an AI-powered Wellness Club application, developing features including an AI Wellness Quiz, conversational AI chatbot, and Daily Rituals to support personalised user engagement",
          "Develop a Flutter-based Attendance & Leave Management mini-app integrated into the company's main application, supporting employee attendance tracking and leave management workflows"
        ]}
      />
      <Experience
        jobTitle="Freelance Full-Stack Software Developer"
        company="Collinz Education Group"
        duration="April 2026 – July 2026"
        responsibilities={[
          "Developed a multi-role KPI and Staff Appraisal Management System using Lovable and Supabase to centralise staff performance management and evaluation",
          "Implemented role-based access control (RBAC) for six user groups (Admin, Director, HR, Head of Department, Coordinator, and Teacher) with permissions and workflows tailored to their respective responsibilities",
          "Developed modules for user, task, KPI, appraisal, and form management, supporting monthly and termly performance assessments and staff evaluation",
          "Translated stakeholder requirements into application features, designing and refining workflows to support the organisation's performance management processes."
        ]}
      />
      <Experience
        jobTitle="Product and Outcomes Assistant"
        company="Sigma School"
        duration="June 2025 - October 2025"
        responsibilities={[
          "Led the Product & Outcomes team, revamping the bootcamp curriculum and launching a post-graduation module to enhance graduate skills and job readiness",
          "Spearheaded the development of a Learning Management System (LMS) to streamline course delivery, track student progress, and centralize learning resources",
          "Co-developed an AI Coding Buddy to provide 24/7 curriculum-aware support while fostering independent problem-solving",
          "Built a Talent Dashboard and collaborated with hiring partners to create hiring-ready project templates, securing feedback and endorsements"
        ]}
      />
      {/* <Experience
        jobTitle="Sales and Operations Assistant"
        company="FREYJA Enterprise"
        duration="March 2023 - June 2025"
        responsibilities={[
          "Spearheaded digital expansion into China by launching Xiao Hong Shu account",
          "Managed website migration to Shopify; ensured data integrity and UX consistency",
          "Boosted e-commerce sales by 30% via strategic content, live showcases, and analytics",
          "Streamlined inventory, logistics, and fulfillment processes using data-driven insights"
        ]}
      /> */}
      {/* <Experience
        jobTitle="Freelance Ukulele Teacher"
        company="Ukubear Ukulele Education Institution"
        duration="December 2022 - December 2023"
        responsibilities={[
          "Designed and delivered engaging, gamified lessons for kids aged 4–12",
          "Coordinated concert events, managed schedules, and ensured smooth communication with parents", 
        ]}
      /> */}
      {/* <Experience
        jobTitle="House Officer"
        company="Sarawak General Hospital"
        duration="July 2021 - June 2022"
        responsibilities={[
          "Managed patient care, diagnostics, and treatment under multidisciplinary teams",
          "Mentored junior staff and improved efficiency in clinical documentation",
          "Performed minor procedures and ensured adherence to safety protocols"
        ]}
      /> */}
    </section>
  );
}

function Education({ degree, institution, duration, details }) {
  return (
    <Card className="mb-4 border-0 shadow-sm">
      <Card.Body>
        <Card.Title className="fs-5 fw-bold">{degree}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {institution} | {duration}
        </Card.Subtitle>
        <Card.Text>{details}</Card.Text>
      </Card.Body>
    </Card>
  );
}

function EducationList() {
  return (
    <section className="mt-5">
      <h4 className="fs-4 fw-bold border-bottom pb-2 mb-4 text-primary">Education</h4>
      <Education
        degree="Full Stack Web Development Bootcamp Course"
        institution="Sigma School"
        duration="February 2025 - April 2025"
        details="Completed a 12-week intensive program covering modern web technologies including HTML5, CSS3, JavaScript, React.js, Redux, Node.js, Express.js, SQL, Firebase, and Firestore, and built 25+ individual projects demonstrating frontend and backend development, RESTful API integration, and CI/CD deployment workflows."
      />
      <Education
        degree="Doctor of Medicine in General Medicine"
        institution="I.M. Sechenov First Moscow State Medical University"
        duration="September 2014 - June 2020"
        details="Graduated with Blue Diploma"
      />
    </section>
  );
}

function TechProjects({ name, liveUrl, githubRepo, summary, features, technologies }) {
  return (
    <Card className="mb-4 border-0 shadow-sm">
      <Card.Body>
        <Card.Title className="fs-5 fw-bold">{name}</Card.Title>
        <div className="mb-2">
          <a href={liveUrl} className="btn btn-sm btn-outline-primary me-2">Live URL</a>
          {githubRepo && <a href={githubRepo} className="btn btn-sm btn-outline-secondary">Github Repo</a>}
        </div>
        
        <div className="mb-3">
          {technologies.map((tech, idx) => (
            <Badge key={idx} bg="info" className="me-1 mb-1">{tech}</Badge>
          ))}
        </div>
        
        <Card.Text>{summary}</Card.Text>
        
        <h6 className="fw-bold mt-3">Key Features:</h6>
        <ListGroup variant="flush">
          {features.map((item, index) => (
            <ListGroup.Item key={index} className="border-0 ps-0 py-1">
              • {item}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

function TechProjectsList() {
  return (
    <section className="mt-5">
      <h4 className="fs-4 fw-bold border-bottom pb-2 mb-4 text-primary">Featured Tech Projects</h4>
      <TechProjects
        name="Sun Sierra – Corporate Website"
        liveUrl="https://www.sunsierra.com.my" 
        summary="Designed and developed a responsive, SEO-optimized corporate website for Sun Sierra, a Malaysian company specializing in building maintenance."
        technologies={[
          "HTML5",
          "CSS3",
          "JavaScript",
          "React",
          "SEO Optimization",
          "Google Analytics",
          "Responsive Design"
        ]}
        features={[
          "Built the website from scratch using modern web standards, with mobile-first responsive layout.",
          "Applied SEO best practices including semantic HTML, meta tags, and structured data (JSON-LD).",
          "Integrated Google Analytics and Search Console to enable performance tracking and SEO insights.",
          "Collaborated directly with the client to ensure brand consistency, content clarity, and visual appeal across pages."
        ]}
      />
      <TechProjects
        name="Safe Space - Mental Health Web Application"
        liveUrl="https://capstone-project-vert-eight.vercel.app"
        githubRepo="https://github.com/g-lendalim/capstone-project"
        summary="Full-stack mental health platform leveraging healthcare domain expertise to deliver evidence-based digital interventions with personalized user experience."
        technologies={[
          "React", 
          "Express.js", 
          "PostgreSQL", 
          "Firebase", 
          "OpenAI API",  
          "Responsive UI"
        ]}
        features={[
          "Engineered a step-based logging system to track mood, sleep, thoughts, and reflections, improving user self-awareness and consistency.",
          "Implemented secure Firebase Authentication with a structured onboarding modal for a smooth and personalized user journey.",  
          "Developed a modular alarm system (Morning, Bedtime, Medication, Therapy) integrated with daily logging to reinforce mental wellness routines.",
          "Built a comprehensive Support Page featuring interactive coping tools (e.g., box breathing), CRUD-enabled safety plans, a Support Circle with direct call access, and multi-channel emergency hotlines.",
          "Integrated an AI-powered chatbot and dynamic analytics dashboard to deliver real-time emotional support."
        ]}
      />
    </section>
  );
}

function App() {
  return (
    <Container fluid className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <Container>
        <Row className="g-4">
          <Col lg={4}>
            <div className="sticky-lg-top" style={{ top: '20px', zIndex: 1 }}>
              <ProfileCard />
              <Contact />
              <TechnicalSkills />
              <SoftSkills />
            </div>
          </Col>

          <Col lg={8}>
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <ProfessionalProfile />
              </Card.Body>
            </Card>
            
            <TechProjectsList />
            <WorkExperience />
            <EducationList />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
