export const projects = [
  {
    id: 1,
    title: "HR Management System",
    summary: "HRTech platform addressing fragmented HR data, manual reporting, and limited workforce visibility. Complete HR suite with employee profiles, departments, analytics dashboards, org charts, performance tracking, and automated reports. Features PDF/Excel/CSV exports via QuestPDF and ClosedXML, background jobs (Hangfire) for birthdays and anniversaries, Identity-secured authentication, and localisation (en-ZA / en-US). Includes soft-delete recycle bin and status tracking for workforce analytics. Impact: single source of truth for HR data, faster analytics/reporting cycles, and improved compliance oversight.",
    techStack: [".NET 8", "Razor Pages", "SQLite", "Hangfire", "Identity", "EF Core", "QuestPDF", "ClosedXML", "Bootstrap 5"],
    github: "https://github.com/AyaSox/HC-Management-System",
    demo: "https://hr-management-system-jstj.onrender.com",
    featured: true
  },
  {
    id: 2,
    title: "ESS Leave System",
    summary: "HRTech ESS leave portal solving email-based requests, policy inconsistencies, and poor visibility into balances/approvals. BCEA-compliant leave types, manager approval workflows, automatic 5-day auto-approval with day-4 urgent reminders, real-time in-app notifications, annual leave balance tracking (Used/Pending/Available), employee directory, and SQLite persistence via Docker/Railway with persistent volumes. Automatic manager role assignment based on direct reports. Impact: fewer email threads, faster approvals, and clear visibility of balances and team availability.",
    techStack: [".NET 8", "Razor Pages", "SQLite", "Docker", "Identity", "EF Core", "Railway", "Background Services"],
    github: "https://github.com/AyaSox/ESS-Leave-System",
    demo: "https://ess-leave-system-production.up.railway.app",
    featured: true
  },
  {
    id: 3,
    title: "ADS Corp Resource Booking System",
    summary: "Built to solve resource scheduling conflicts and low visibility across shared assets. Enterprise booking system for rooms, vehicles, and equipment with conflict detection, recurring bookings, usage analytics, and email notifications via MailKit. Features hybrid UI with Razor Pages for CRUD and MVC for dashboards, reports, and calendar views with ICS downloads. Impact: fewer double-bookings, higher utilisation of shared resources, and better forward planning for teams.",
    techStack: [".NET 8", "Razor Pages", "MVC", "SQL Server", "EF Core", "MailKit", "Bootstrap 5"],
    github: "https://github.com/AyaSox/ADS-Corp-Resource-Booking",
    demo: "https://resource-booking.onrender.com",
    featured: true
  },
  {
    id: 4,
    title: "TS Recruitment System (ATS)",
    summary: "HRTech ATS addressing spreadsheet-based hiring, CV sprawl, and lack of EE compliance tracking. Full-stack Applicant Tracking System with Employment Equity compliance for South African recruitment. Features job postings, drag-and-drop application funnel, candidate pipeline stages, CV management, EE reporting, analytics dashboards, and JWT authentication. Built with React TypeScript frontend and .NET API backend. Impact: centralised candidate pipeline, reduced manual tracking, and EE reporting readiness for audits.",
    techStack: [".NET 8 Web API", "React", "TypeScript", "PostgreSQL", "JWT", "EF Core", "Material-UI"],
    github: "https://github.com/AyaSox/Recruitment-system",
    demo: "https://ats-recruitment-frontend.onrender.com",
    featured: true
  },
  {
    id: 5,
    title: "HR Employee Offboarding Checklist System",
    summary: "Built to reduce risk from unmanaged exits, missed asset recoveries, access not revoked, and unclear cross-department accountability. Enterprise-grade multi-department offboarding workflow with role-based tasks, progress tracking, audit trails, automated email reminders via background services, document management system, RESTful API with Swagger docs, Chart.js analytics dashboards, and CSV/JSON exports. Supports Human Capital, IT, Finance, and Payroll departments. Impact: consistent offboarding, timely access revocation and asset recovery, and audit-ready records.",
    techStack: [".NET 8", "MVC", "Razor Pages", "SQL Server", "EF Core", "Chart.js", "RESTful API", "Background Services"],
    github: "https://github.com/AyaSox/hr-offboarding-checklist",
    demo: "https://hr-offboarding-checklist.onrender.com",
    featured: true
  },
  {
    id: 6,
    title: "FamBudget App",
    summary: "Full-stack family finance manager actively used in our household to help my wife and baby by giving clear visibility into spending and savings. Features income/expense tracking, monthly budgets per category with smart status alerts (Within/Close to Limit/At Budget/Over Budget), savings goals with progress tracking, bill reminders, rich dashboards with Recharts visualisation, period filters (month/quarter/YTD), and Excel-ready CSV exports. Built from a real need to manage medical, baby, and household expenses; now our single source of truth for family budgeting. Impact: consolidated finances in one place, improved on-time bill payments, and more predictable monthly cash flow. Built with clean architecture using .NET 8 API, React TypeScript, Material-UI, and SQLite/PostgreSQL.",
    techStack: [".NET 8 API", "React", "TypeScript", "Material-UI", "PostgreSQL", "Recharts", "EF Core", "Vite"],
    github: "https://github.com/AyaSox/FamBudget-App",
    demo: null,
    featured: false
  },
  {
    id: 7,
    title: "FamTrack Task & Reminder App",
    summary: "Family task and reminder management system built to solve a real household coordination challenge and is used daily by my family to organise doctor visits, bills, shopping, personal and baby care tasks. Provides categorised tasks, due date tracking with visual alerts, automated email reminders via SendGrid background service (every 30 minutes), real-time dashboard analytics, search/filtering, and JWT authentication. Implemented with clean architecture, repository pattern, dependency injection, React TypeScript frontend, and environment-based configuration (SQLite dev, PostgreSQL prod). Daily family operations tool reducing missed doctor appointments, bill due dates, and baby care tasks through automated reminders. Impact: fewer missed deadlines and appointments, clearer task ownership, and consistent follow-through across the household.",
    techStack: [".NET 8 API", "React", "TypeScript", "SendGrid", "Clean Architecture", "Material-UI", "PostgreSQL", "Railway"],
    github: "https://github.com/AyaSox/Sokhela_Familiy_TodoList_WebApp",
    demo: null,
    featured: false
  },
  {
    id: 8,
    title: "Lenda Kahle Micro-Lending Platform",
    summary: "FinTech micro-lending platform addressing the South African access-to-credit gap, many citizens struggle to obtain affordable, compliant finance. NCA-compliant platform with loan calculator, affordability assessment, application workflow with document upload (PDF/images up to 30MB), approval management, repayment tracking, admin dashboard, audit logging, real-time SignalR notifications, and email alerts. Impact: faster, transparent credit decisions with auditable workflows, improving trust and reducing manual processing time. Split-stack deployment with Dockerised backend on Render and React frontend on Vercel.",
    techStack: [".NET 8 Web API", "React", "TypeScript", "PostgreSQL", "JWT", "SignalR", "Material-UI", "Docker", "Vercel"],
    github: "https://github.com/AyaSox/microlending-api",
    demo: "https://lenda-kahle-app.vercel.app",
    featured: true
  }
];

export const skills = {
  backend: [".NET 8", "ASP.NET Core", "REST APIs", "C#", "Java", "Entity Framework Core"],
  frontend: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Bootstrap"],
  databases: ["SQL Server", "PostgreSQL", "SQLite"],
  tools: ["Visual Studio 2022", "IntelliJ IDEA", "GitHub", "Docker", "SAP HCM", "Hangfire"],
  specialisations: ["HR Systems", "ATS Development", "Process Automation", "System Integration", "SAP SuccessFactors"]
};

export const experience = [
  {
    id: 1,
    title: "Human Resources Officer",
    company: "Adapt IT",
    period: "October 2019 - Present",
    description: "Supporting HR operations, systems implementation, and process improvements across recruitment, performance management, compliance, and employee development. Acting as system champion for HR technology while ensuring alignment with business goals.",
    highlights: [
      "Coordinate end-to-end recruitment and onboarding processes",
      "Administer performance management systems and biannual appraisals",
      "Ensure compliance with LRA, BCEA, EEA, and other SA labour legislation",
      "Manage SAP HCM system administration and user support",
      "Drive BBBEE compliance and Employment Equity reporting",
      "Lead Learning & Development initiatives using LMS systems (Udemy, Skillsoft)",
      "Implement HR policies and provide guidance to line managers"
    ]
  },
  {
    id: 2,
    title: "Human Capital Administrator",
    company: "Adapt IT",
    period: "April 2016 - September 2019",
    description: "Administered comprehensive HR functions including recruitment support, training coordination, performance management, and SAP HCM system management. Managed employee lifecycle from onboarding to offboarding.",
    highlights: [
      "Managed recruitment processes and candidate screening",
      "Coordinated training sessions and compiled Annual Training Reports",
      "Administered performance management processes for line managers",
      "Oversaw employee onboarding and conducted exit interviews",
      "Managed employee benefits (medical aid, retirement funds, insurance)",
      "Maintained personnel files and prepared payroll inputs",
      "Generated monthly HCM reports for Executive Committee"
    ]
  },
  {
    id: 3,
    title: "Assistant (Financial Aid Office)",
    company: "University of KwaZulu-Natal",
    period: "January 2016 - April 2016",
    description: "Supported financial aid operations by managing student information systems, processing bursary applications, and providing advisory services to students on financial aid matters.",
    highlights: [
      "Captured and verified student information on ITS Production System",
      "Processed and verified bursary application forms",
      "Provided advisory services to students on Financial Aid matters",
      "Generated reports and extracted information from IT systems"
    ]
  }
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Technology in Information & Technology Management",
    institution: "MANCOSA",
    year: "2024",
    subjects: ["Computer Programming", "Database Design & Management", "Software Engineering", "Systems Analysis & Design", "Information Systems", "IT Management", "Financial Reporting & Analysis", "Business Statistics"],
    achievements: []
  },
  {
    id: 2,
    degree: "SAP SuccessFactors",
    institution: "SAP",
    year: "2024",
    subjects: ["Configuring SAP SuccessFactors Employee Central Core", "Exploring SAP SuccessFactors Solutions", "SAP SuccessFactors Platform"],
    achievements: []
  },
  {
    id: 3,
    degree: "Bachelor of Social Science",
    institution: "University of KwaZulu-Natal",
    year: "2015",
    subjects: ["Human Resource Management (Major)", "Psychology (Major)"],
    achievements: ["Certificate of Merit in Individual Employment Relations & Law"]
  },
  {
    id: 4,
    degree: "UCT Human Resource Management Short Course",
    institution: "University of Cape Town",
    year: "2019",
    subjects: ["HR Management"],
    achievements: []
  }
];

export const about = {
  name: "Ayanda Sokhela",
  title: "HR Professional & Software Developer",
  subtitle: ".NET | React | SQL | SAP HCM",
  bio: `I am an experienced HR professional with qualifications in Human Resources and a Bachelor of Commerce in Information Technology and Management. My journey combines deep HR expertise with modern software development skills.

My experience spans the education sector (University of KwaZulu-Natal) and Information Technology (Adapt IT). In my current role as a Human Resources Officer at Adapt IT, I work as an assistant to the Senior HR Business Partner, supporting the business by aligning HR initiatives with business goals.

I am passionate about using technology to create solutions that make work easier and more efficient. This drive led me to develop 8 full-stack applications, including HR management systems, ATS platforms, and resource booking solutions using .NET, React, and SQL technologies. Six of my applications are deployed and accessible via live demos.

I am looking for opportunities to use my technical skills and passion for technology to help build, support, and improve systems and processes in IT and business, while leveraging my extensive HR domain knowledge.`,
  linkedin: "https://www.linkedin.com/in/ayanda-sokhela-20283b11b/",
  github: "https://github.com/AyaSox",
  avatar: "/avatar-placeholder.svg",
  location: "Fontainebleau, Randburg, Gauteng",
  phone: "076 830 5647",
  nationality: "South African",
  languages: ["IsiZulu", "English"],
  availability: "One Month Notice"
};
