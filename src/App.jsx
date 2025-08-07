import React from 'react';
import { Container, Row, Col, Card, ListGroup, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function ProfessionalProfile() {
  return (
    <section>
      <h4 className="fs-4 fw-bold border-bottom pb-2 mb-3 text-primary">
        Professional Profile
      </h4>
      <p className="lead">
      Aspiring Junior Software Engineer with a background in healthcare and recent completion of a 12-week Full Stack Bootcamp at Sigma School. Built 25+ projects using React, Node.js, Firebase, and PostgreSQL, gaining hands-on experience in both frontend and backend development.
      <br />
      Throughout this journey, I've actively cultivated strong problem-solving skills, adaptability, and a user-first mindset, drawing from my healthcare background to build thoughtful, effective software. I bring empathy and attention to detail into every project and thrive in collaborative environments.
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
            src="images/profile-picture.jpg" 
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
      skills: ["React.js", "HTML5/CSS3", "Bootstrap", "JavaScript (ES6+)", "Responsive Design", "React Helmet", 
      "Semantic HTML"]
    },
    {
      category: "Backend Development",
      skills: ["Node.js", "Express.js", "REST APIs"]
    },
    {
      category: "Database",
      skills: ["PostgreSQL", "MongoDB", "Firebase/Firestore", "SQL"]
    },
    {
      category: "SEO & Analytics",
      skills: [
        "SEO Optimization", 
        "Structured Data (JSON-LD)", 
        "Google Search Console", 
        "Google Analytics"
      ]
    },
    {
      category: "DevOps & Tools",
      skills: ["Git/GitHub", "CI/CD Pipelines", "Vite", 
      "Vercel", 
      "Chrome DevTools"]
    }
  ];

  return (
    <Card className="mt-4 border-0 bg-dark text-white">
      <Card.Body>
        <h3 className="fs-5 fw-bold border-bottom pb-2 mb-3">Technical Skills</h3>
        
        {skillCategories.map((category, idx) => (
          <div key={idx} className="mb-3">
            <h6 className="text-light mb-2">{category.category}</h6>
            <div className="d-flex flex-wrap gap-1 mb-2">
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

function Experience({ jobTitle, company, duration, responsibilities, techStack }) {
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
        jobTitle="Sales and Operations Assistant"
        company="FREYJA Enterprise"
        duration="March 2023 - Present"
        responsibilities={[
          "Spearheaded digital expansion into China by launching Xiao Hong Shu account",
          "Managed website migration to Shopify; ensured data integrity and UX consistency",
          "Boosted e-commerce sales by 30% via strategic content, live showcases, and analytics",
          "Streamlined inventory, logistics, and fulfillment processes using data-driven insights"
        ]}
      />
      <Experience
        jobTitle="Freelance Ukulele Teacher"
        company="Ukubear Ukulele Education Institution"
        duration="December 2022 - December 2023"
        responsibilities={[
          "Designed and delivered engaging, gamified lessons for kids aged 4–12",
          "Coordinated concert events, managed schedules, and ensured smooth communication with parents", 
        ]}
      />
      <Experience
        jobTitle="House Officer"
        company="Sarawak General Hospital"
        duration="July 2021 - June 2022"
        responsibilities={[
          "Managed patient care, diagnostics, and treatment under multidisciplinary teams",
          "Mentored junior staff and improved efficiency in clinical documentation",
          "Performed minor procedures and ensured adherence to safety protocols"
        ]}
      />
    </section>
  );
}

function Education({ degree, institution, duration, details, relevantCourses }) {
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
        duration="September 2014 - June 2022"
        details="Graduated with Blue Diploma"
      />
    </section>
  );
}

function TechProjects({ name, liveUrl, backendUrl, summary, features, technologies }) {
  return (
    <Card className="mb-4 border-0 shadow-sm">
      <Card.Body>
        <Card.Title className="fs-5 fw-bold">{name}</Card.Title>
        <div className="mb-2">
          <a href={liveUrl} className="btn btn-sm btn-outline-primary me-2">Live URL</a>
          {backendUrl && <a href={backendUrl} className="btn btn-sm btn-outline-secondary">Github Repo</a>}
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
        backendUrl="https://replit.com/@freyjaglenda/Capstone-Project-API"
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
