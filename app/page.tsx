'use client';

import React, { useState } from 'react';
import { 
  Download, 
  Mail, 
  Code2, 
  GraduationCap, 
  FolderGit2, 
  ExternalLink, 
  Briefcase,
  Image as ImageIcon,
  Video as VideoIcon,
  X,
  Sparkles,
  HeartHandshake
} from 'lucide-react';

export default function Home() {
  const [activeModalImages, setActiveModalImages] = useState<string[] | null>(null);
  const [activeModalVideos, setActiveModalVideos] = useState<{ title: string; url: string }[] | null>(null);
  const [modalTitle, setModalTitle] = useState<string>('');

  // 1. หมวดหมู่ทักษะความสามารถ (Skills)
  const techSkillCategories = [
    {
      title: 'Mobile & UI Development',
      skills: ['Flutter (Dart)', 'Figma (UI/UX)'],
    },
    {
      title: 'Programming Languages',
      skills: ['Dart', 'Python', 'C', 'C++', 'TypeScript / JS'],
    },
    {
      title: 'Technical Tools & Platforms',
      skills: ['Git & GitHub', 'VS Code', 'Firebase', 'Vercel'],
    },
  ];

  // 1.2 ทักษะด้าน Soft Skills
  const softSkills = [
    '#Problem Solving',
    '#Adaptability',
    '#Continuous Learning',
    '#Communication',
    '#Teamwork',
    '#Detail-oriented',
  ];

  // 2. รายการผลงาน (Projects)
  const projects = [
    {
      title: 'Rally Application - Real-Time Pose Analysis',
      subtitle: 'Mobile Application for Remote Device Control (2024 - 2025)',
      category: 'Academic Capstone',
      status: 'เสร็จสมบูรณ์ (โปรเจกต์จบ)',
      isCompleted: true,
      description: 'แอปพลิเคชันมือถือแบบ Cross-platform สำหรับควบคุมอุปกรณ์ด้วยท่าทาง (Gesture Control) ประมวลผลภาพจากกล้องแบบ Real-time ร่วมกับ Machine Learning',
      highlights: [
        'ใช้ Google ML Kit Pose Detection API ตรวจจับและวิเคราะห์พิกัดโครงสร้างร่างกายแบบ Real-time',
        'ประยุกต์ใช้ K-Nearest Neighbors (KNN) และ 3-State Machine ตรวจจับและจำแนกท่าทางของผู้ใช้',
        'เชื่อมต่อ Firebase Realtime Database ส่งคำสั่งความหน่วงต่ำ (Low-latency)',
        'จำลองการสั่งการหุ่นยนต์ใน 2D Environment ด้วย ROS TurtleSim Simulation',
      ],
      techStack: ['Flutter', 'Dart', 'Google ML Kit', 'KNN Algorithm', 'Firebase', 'ROS'],
      githubUrl: 'https://github.com/jirattong/rally-ui-only',
      demoUrl: '',
      videos: [
        {
          title: '🎬 คลิปตัวอย่างสาธิตตอนทดสอบ (Pose Analysis Demo)',
          url: '/rally-demo.mp4', 
        },
        {
          title: '🤖 คลิปตัวอย่างการทดลองใช้กับ TurtleSim (ROS Simulation)',
          url: '/turtlesim-demo.mp4', 
        },
      ],
      screenshots: [],
    },
    {
      title: 'RouteAlert',
      subtitle: 'Real-Time Route & Transit Notification System',
      category: 'Academic / Team Project',
      status: 'กำลังพัฒนา (In Progress)',
      isCompleted: false,
      description: 'การพัฒนาแพลตฟอร์มสารสนเทศสำหรับติดตามสถานะและตำแหน่ง แจ้งเตือนเชิงพื้นที่ และประสานเส้นทางรถพยาบาลฉุกเฉินเพื่อสนับสนุนการส่งต่อผู้ป่วยฉุกเฉินในประเทศไทย',
      highlights: [
        'ออกแบบ UI/UX บน Figma ให้ใช้งานง่ายและเข้าถึงสะดวก',
        'พัฒนาระบบด้วย flutter และ เทคโนโลยี Geofencing',
      ],
      techStack: ['Flutter', 'Dart', 'Figma'],
      githubUrl: 'https://github.com/jirattong/route-alert-app',
      demoUrl: '',
      videos: [],
      screenshots: [],
    },
    {
      title: 'Moto Maintenance — Smart Motorcycle Care & AI Advisor',
      subtitle: 'Personal Side Project',
      category: 'Personal Project',
      status: 'Side Project',
      isCompleted: true,
      description: 'แอปพลิเคชันส่วนตัวสำหรับบันทึกประวัติการบำรุงรักษารถมอเตอร์ไซค์ บูรณาการ LLM จาก Google Gemini API (Free Key) คอยวิเคราะห์อาการเสีย ให้คำแนะนำเทคนิค และตอบข้อสงสัยแบบเรียลไทม์',
      highlights: [
        'พัฒนาระบบบันทึกประวัติการเปลี่ยนถ่ายน้ำมันเครื่อง อะไหล่ และการเช็กระยะสภาพรถส่วนตัว',
        'เชื่อมต่อ LLM ผ่าน Google Gemini API (Free Tier Key) วิเคราะห์อาการประมวลผลคำตอบเกี่ยวกับมอเตอร์ไซค์',
        'ช่วยบริหารจัดการประวัติการซ่อมบำรุง ค้นหาข้อมูล และรับคำแนะนำด้านเทคนิครถมอเตอร์ไซค์อย่างมีประสิทธิภาพ',
      ],
      techStack: ['TypeScript', 'Google Gemini API', 'Tailwind CSS', 'GitHub'],
      githubUrl: 'https://github.com/jirattong/moto-maintenance',
      demoUrl: 'https://moto-maintenance-nine.vercel.app/',
      videos: [],
      screenshots: [],
    },
  ];

  const closeModal = () => {
    setActiveModalImages(null);
    setActiveModalVideos(null);
  };

  return (
    <div className="min-h-screen bg-[#0e0e10] text-zinc-100 relative font-sans scroll-smooth">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-amber-400/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-2/3 right-1/4 w-[450px] h-[450px] bg-violet-600/10 rounded-full blur-[130px] pointer-events-none" />

      {/* ==================== NAVBAR / HEADER ==================== */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-purple-950/80 backdrop-blur-md border-b border-purple-800/40 shadow-lg shadow-purple-950/30 transition-all">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          
          <a href="#" className="text-base md:text-lg font-extrabold tracking-wider text-white hover:text-amber-400 transition-colors uppercase flex items-center gap-2">
            <span>JIRAT PANUNTA</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-purple-200/80">
            <a href="#about" className="hover:text-amber-400 transition-colors">เกี่ยวกับฉัน</a>
            <a href="#education-experience" className="hover:text-amber-400 transition-colors">ประวัติ & ประสบการณ์</a>
            <a href="#skills" className="hover:text-amber-400 transition-colors">ทักษะ</a>
            <a href="#projects" className="hover:text-amber-400 transition-colors">ผลงาน</a>
          </nav>

          {/* VIBRANT YELLOW PILL BUTTON */}
          <a
            href="/Resume_JiratP.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-zinc-950 text-xs font-bold transition-all shadow-lg shadow-amber-400/20 active:scale-95"
          >
            <Download className="w-4 h-4 stroke-[2.5]" />
            <span>Resume PDF</span>
          </a>

        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 pt-20 pb-12 relative space-y-24">

        {/* ==================== 1. EDITORIAL HERO SECTION ==================== */}
        <section id="about" className="relative min-h-[80vh] flex items-center justify-center py-8 overflow-hidden">
          
          <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none opacity-5 leading-none font-extrabold tracking-widest text-[11vw] uppercase text-white space-y-2">
            <div>PORTFOLIO</div>
            <div>PORTFOLIO</div>
            <div>PORTFOLIO</div>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
            
            {/* Left Column: Photo Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                
                {/* Yellow Outer Border */}
                <div className="absolute -inset-2 rounded-2xl border-2 border-amber-400/80 pointer-events-none" />

                <div className="relative w-full h-[420px] rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl">
                  {/* eslint-disable-next-html-link */}
                  <img
                    src="/profile.png"
                    alt="Jirat Panunta"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-zinc-950 via-zinc-900 to-zinc-800 flex flex-col items-center justify-center p-6 text-center text-zinc-500">
                    <span className="text-4xl mb-2">👨‍💻</span>
                    <span className="text-xs">วางรูปโปรไฟล์ที่ public/profile.png</span>
                  </div>
                </div>

                {/* Overlapping Intro Box */}
                <div className="absolute -bottom-6 -left-4 max-w-[280px] bg-amber-400 text-zinc-950 p-4 rounded-xl text-xs font-bold shadow-xl space-y-1">
                  <p className="leading-relaxed">
                    &quot;Computer Science student focused on crafting the best possible solutions through performance optimization and continuous learning.&quot;
                  </p>
                </div>

              </div>
            </div>

            {/* Right Column: Title & Badges */}
            <div className="lg:col-span-7 space-y-8 pt-6 lg:pt-0">
              
              <div className="space-y-3">
                <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white font-serif uppercase">
                  PORTFOLIO
                </h1>
                <p className="text-amber-400 font-mono text-sm md:text-base flex items-center gap-2">
                  <span>&gt;</span> Computer Science Student Intern
                </p>
              </div>

              <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl">
                สวัสดีครับ ผม นายจิรัฏฐ์ ปานันตา นิสิตสาขาวิทยาการคอมพิวเตอร์ ปี 4 มหาวิทยาลัยพะเยา พร้อมมุ่งมั่นที่จะเรียนรู้เทคโนโลยีใหม่ๆ และนำทักษะที่ได้ไปต่อยอดในการทำงานจริงร่วมกับทีมครับ
              </p>

              {/* Contact Links as Badges */}
              <div className="space-y-2.5 pt-2">
                <a
                  href="https://github.com/jirattong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-3.5 py-2 rounded-lg bg-[#18181b] border border-zinc-800 hover:border-amber-400/50 hover:bg-zinc-800/80 transition-all text-xs font-mono group"
                >
                  <span className="px-2 py-0.5 rounded bg-amber-400/10 text-amber-400 font-bold border border-amber-400/20">GH</span>
                  <span className="text-zinc-300 group-hover:text-white transition-colors">jirattong.github.io</span>
                </a>

                <br />

                <a
                  href="mailto:panuntajirat@gmail.com"
                  className="inline-flex items-center gap-3 px-3.5 py-2 rounded-lg bg-[#18181b] border border-zinc-800 hover:border-amber-400/50 hover:bg-zinc-800/80 transition-all text-xs font-mono group"
                >
                  <span className="px-2 py-0.5 rounded bg-amber-400/10 text-amber-400 font-bold border border-amber-400/20">EM</span>
                  <span className="text-zinc-300 group-hover:text-white transition-colors">panuntajirat@gmail.com</span>
                </a>

                <br />

                <a
                  href="tel:0948760595"
                  className="inline-flex items-center gap-3 px-3.5 py-2 rounded-lg bg-[#18181b] border border-zinc-800 hover:border-amber-400/50 hover:bg-zinc-800/80 transition-all text-xs font-mono group"
                >
                  <span className="px-2 py-0.5 rounded bg-amber-400/10 text-amber-400 font-bold border border-amber-400/20">PH</span>
                  <span className="text-zinc-300 group-hover:text-white transition-colors">094-876-0595</span>
                </a>
              </div>

            </div>

          </div>

        </section>

        {/* ==================== 2. EDUCATION & EXPERIENCE TIMELINE ==================== */}
        <section id="education-experience" className="py-12 border-t border-zinc-800/60">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            
            {/* Left Column: Education */}
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
                  <GraduationCap className="w-8 h-8 text-purple-400" />
                  Education
                </h2>
              </div>

              <div className="relative border-l-2 border-purple-500/30 pl-6 space-y-10 ml-2">
                {/* University Item */}
                <div className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-purple-500 border-4 border-[#0e0e10] group-hover:scale-125 transition-transform" />
                  
                  <span className="text-xs font-semibold text-amber-400 tracking-wider">2023 – PRESENT</span>
                  
                  <h3 className="text-lg font-bold text-white pt-1">Bachelor of Science (Computer Science)</h3>
                  <p className="text-zinc-300 text-sm font-medium">University of Phayao</p>
                  <p className="text-zinc-400 text-xs pt-1">School of Information and Communication Technology</p>
                  <div className="pt-2">
                    <span className="inline-block px-2.5 py-0.5 rounded bg-purple-500/10 text-purple-300 text-xs font-semibold border border-purple-500/20">
                      GPA: 3.68
                    </span>
                  </div>
                </div>

                {/* High School Item */}
                <div className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-purple-500/60 border-4 border-[#0e0e10] group-hover:scale-125 transition-transform" />
                  
                  <span className="text-xs font-semibold text-amber-400/80 tracking-wider">2020 – 2022</span>
                  
                  <h3 className="text-lg font-bold text-white pt-1">High School Diploma in Arts-Language (English)</h3>
                  <p className="text-zinc-300 text-sm font-medium">Phayaophitthayakhom School</p>
                  <div className="pt-2">
                    <span className="inline-block px-2.5 py-0.5 rounded bg-zinc-800 text-zinc-300 text-xs font-semibold border border-zinc-700">
                      GPA: 3.93
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Experience */}
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
                  <Briefcase className="w-8 h-8 text-purple-400" />
                  Experience
                </h2>
              </div>

              <div className="relative border-l-2 border-purple-500/30 pl-6 space-y-10 ml-2">
                {/* Makro Item */}
                <div className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-purple-500 border-4 border-[#0e0e10] group-hover:scale-125 transition-transform" />
                  
                  <span className="text-xs font-semibold text-amber-400 tracking-wider">MAR 2025 – MAY 2025</span>
                  
                  <h3 className="text-lg font-bold text-white pt-1">OCS (Outsourced Customer Sales)</h3>
                  <p className="text-purple-300 text-sm font-medium">Makro (Part-time)</p>
                  <ul className="text-zinc-400 text-xs pt-2 space-y-1.5 leading-relaxed list-disc list-inside">
                    <li>Picked and packed dynamic customer orders efficiently via Makro PRO app.</li>
                    <li>Verified order accuracy and proactively coordinated with delivery team or customers.</li>
                    <li>Managed invoices, tax receipts, and inventory transfer documentation accurately.</li>
                  </ul>
                </div>

                {/* Rally Project Item */}
                <div className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-purple-500/60 border-4 border-[#0e0e10] group-hover:scale-125 transition-transform" />
                  
                  <span className="text-xs font-semibold text-amber-400/80 tracking-wider">2024 – 2025</span>
                  
                  <h3 className="text-lg font-bold text-white pt-1">Lead Developer — Rally App</h3>
                  <p className="text-zinc-300 text-sm font-medium">University Capstone Project</p>
                  <p className="text-zinc-400 text-xs pt-2 leading-relaxed">
                    Designed and developed real-time pose analysis mobile app using Flutter & Google ML Kit API to track human coordinates and control remote devices.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ==================== 3. SKILLS SECTION (SOFTWARE & TOOLS + SOFT SKILLS) ==================== */}
        <section id="skills" className="py-12 space-y-10 border-t border-zinc-800/60">
          
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-white flex items-center justify-center gap-2">
              <Code2 className="w-7 h-7 text-purple-400" />
              Technical & Soft Skills
            </h2>
            <p className="text-zinc-400 text-sm md:text-base">
              ทักษะทางเทคนิค เครื่องมือ และทักษะการทำงานร่วมกับผู้อื่น
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Software & Technical Tools */}
            <div className="lg:col-span-7 p-6 rounded-2xl bg-[#18181b]/60 border border-zinc-800 space-y-6">
              <div className="border-b border-zinc-800 pb-3 flex items-center justify-between">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Software & Technical Tools
                </h3>
                <span className="text-xs text-zinc-500 font-mono">Technical Stack</span>
              </div>

              <div className="space-y-5">
                {techSkillCategories.map((category, idx) => (
                  <div key={idx} className="space-y-2.5">
                    <h4 className="text-xs font-semibold text-purple-300 uppercase tracking-wider">
                      {category.title}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3.5 py-1.5 rounded-xl bg-zinc-900 text-xs text-zinc-200 border border-zinc-800 hover:border-amber-400/50 hover:text-amber-300 transition-all shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Soft Skills */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#18181b]/60 border border-zinc-800 space-y-6">
              <div className="border-b border-zinc-800 pb-3 flex items-center justify-between">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-purple-400" />
                  Soft Skills
                </h3>
                <span className="text-xs text-zinc-500 font-mono">Interpersonal</span>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed">
                ทักษะการทำงานร่วมกัน การสื่อสาร และการปรับตัวในการทำงานเป็นทีม
              </p>

              <div className="flex flex-wrap gap-2.5 pt-1">
                {softSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full bg-amber-400/5 border border-amber-400/20 text-amber-300 text-xs font-semibold hover:bg-amber-400/10 hover:border-amber-400/40 transition-all cursor-default shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </section>

        {/* ==================== 4. PROJECTS SECTION ==================== */}
        <section id="projects" className="py-12 space-y-10 border-t border-zinc-800/60">
          
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-white flex items-center justify-center gap-2">
              <FolderGit2 className="w-7 h-7 text-purple-400" />
              Projects & Personal Labs
            </h2>
            <p className="text-zinc-400 text-sm md:text-base">
              ผลงานการพัฒนาแอปพลิเคชันและโปรเจกต์ทดลองส่วนตัว
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => {
              const hasMedia = (project.screenshots && project.screenshots.length > 0) || (project.videos && project.videos.length > 0);

              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#18181b]/80 border border-zinc-800 flex flex-col justify-between space-y-6 hover:border-amber-400/40 hover:bg-[#18181b] transition-all duration-300 group"
                >
                  <div className="space-y-3">
                    
                    {/* Category Tag & Completion Status */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-[11px] font-bold text-amber-300 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        {project.category}
                      </span>

                      {project.isCompleted ? (
                        <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20 flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                          {project.status}
                        </span>
                      ) : (
                        <span className="text-xs font-medium text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20 flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                          {project.status}
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-purple-400/80 pt-0.5">{project.subtitle}</p>
                    </div>

                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <ul className="text-xs text-zinc-400 space-y-1.5 pt-2 list-disc list-inside">
                      {project.highlights.map((item, hIdx) => (
                        <li key={hIdx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs px-2.5 py-1 rounded-md bg-zinc-900 text-zinc-300 border border-zinc-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-zinc-800 text-sm">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
                        >
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                          </svg>
                          Source Code
                        </a>
                      )}

                      <div className="flex items-center gap-3 ml-auto">
                        {/* ปุ่มเปิด Modal แสดงคลิปสาธิต (สไตล์ปุ่มเหมือนกัน) */}
                        {hasMedia && (
                          <button
                            onClick={() => {
                              setActiveModalImages(project.screenshots || []);
                              setActiveModalVideos(project.videos || []);
                              setModalTitle(project.title);
                            }}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-400/10 hover:bg-amber-400/20 text-amber-400 hover:text-amber-300 border border-amber-400/30 text-xs font-medium transition-all cursor-pointer"
                          >
                            {project.videos && project.videos.length > 0 ? (
                              <VideoIcon className="w-3.5 h-3.5" />
                            ) : (
                              <ImageIcon className="w-3.5 h-3.5" />
                            )}
                            <span>ดูตัวอย่างแอป</span>
                          </button>
                        )}

                        {/* ปุ่ม Live Demo สำหรับเปิดทดลองใช้เว็บจริง (สไตล์ปุ่มเหมือนกัน) */}
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-400/10 hover:bg-amber-400/20 text-amber-400 hover:text-amber-300 border border-amber-400/30 text-xs font-medium transition-all"
                          >
                            <span>ทดลองใช้แอป</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </section>

        {/* ==================== FOOTER ==================== */}
        <footer className="pt-16 pb-8 border-t border-zinc-800 text-center text-zinc-500 text-xs md:text-sm space-y-2">
          <p>© 2026 Jirat Panunta. Built with Next.js, Tailwind CSS & Vercel.</p>
          <p className="text-zinc-600 text-xs">University of Phayao • Computer Science Student</p>
        </footer>

      </main>

      {/* ==================== MEDIA POPUP MODAL ==================== */}
      {(activeModalImages || activeModalVideos) && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-fadeIn"
          onClick={closeModal}
        >
          <div 
            className="bg-[#18181b] border border-zinc-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 border-b border-zinc-800 flex items-center justify-between">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                {activeModalVideos && activeModalVideos.length > 0 ? (
                  <VideoIcon className="w-4 h-4 text-amber-400" />
                ) : (
                  <ImageIcon className="w-4 h-4 text-amber-400" />
                )}
                {modalTitle} — ตัวอย่างผลงาน
              </h3>
              <button
                onClick={closeModal}
                className="p-1 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Scrollable Media Gallery */}
            <div className="p-6 overflow-y-auto space-y-8 max-h-[75vh]">
              
              {/* MULTIPLE VIDEOS SECTION */}
              {activeModalVideos && activeModalVideos.map((vid, vIdx) => (
                <div key={vIdx} className="space-y-2">
                  <h4 className="text-sm font-semibold text-amber-400 flex items-center gap-2">
                    <VideoIcon className="w-4 h-4" />
                    {vid.title}
                  </h4>
                  <div className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 flex items-center justify-center">
                    {vid.url.includes('youtube.com') || vid.url.includes('youtu.be') ? (
                      <iframe
                        src={vid.url}
                        title={vid.title}
                        className="w-full aspect-video rounded-xl"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <video 
                        controls 
                        className="w-full max-h-[450px] rounded-xl object-contain bg-black"
                      >
                        <source src={vid.url} type="video/mp4" />
                        เบราว์เซอร์ของคุณไม่รองรับการเล่นวิดีโอนี้
                      </video>
                    )}
                  </div>
                </div>
              ))}

              {/* IMAGES SECTION */}
              {activeModalImages && activeModalImages.length > 0 && (
                <div className="space-y-4 pt-2 border-t border-zinc-800/80">
                  <h4 className="text-sm font-semibold text-zinc-300 flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-purple-400" />
                    รูปภาพหน้าตาแอป (Screenshots)
                  </h4>
                  {activeModalImages.map((src, imgIdx) => (
                    <div key={imgIdx} className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 flex items-center justify-center">
                      {/* eslint-disable-next-html-link */}
                      <img
                        src={src}
                        alt={`Screenshot ${imgIdx + 1}`}
                        className="max-h-[600px] w-auto object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <div className="p-8 text-center text-zinc-500 text-xs space-y-1">
                        <p className="font-semibold text-zinc-400">📷 แสดงภาพตัวอย่าง: {src}</p>
                        <p>กรุณาวางไฟล์รูปภาพของคุณไว้ที่โฟลเดอร์ <code className="text-amber-400">public{src}</code></p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          </div>
        </div>
      )}

    </div>
  );
}