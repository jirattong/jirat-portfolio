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
  HeartHandshake,
  Phone,
  Globe,
  Heart,
  ArrowUp
} from 'lucide-react';

export default function Home() {
  const [activeModalProject, setActiveModalProject] = useState<any>(null);

  // 1. หมวดหมู่ทักษะทางเทคนิค (Technical Skills & Tools)
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
      skills: ['Git & GitHub', 'VS Code', 'Microsoft Office', 'Canva', 'Firebase', 'Vercel'],
    },
  ];

  // 1.2 ทักษะทางด้าน Soft Skills
  const softSkills = [
    '#Teamwork & Collaboration',
    '#Fast Learner',
    '#Effective Communication',
    '#Problem-Solving',
    '#Time Management',
  ];

  // 1.3 ภาษา (Languages)
  const languagesList = [
    { name: 'Thai', level: 'Native' },
    { name: 'English', level: 'Basic Working Proficiency' },
  ];

  // 1.4 งานอดิเรกและความสนใจ (Hobbies & Interests)
  const hobbiesList = [
    { label: 'Technology', icon: '💻' },
    { label: 'Fitness', icon: '🏋️‍♂️' },
    { label: 'Gaming', icon: '🎮' },
    { label: 'Reading', icon: '📚' },
    { label: 'Traveling', icon: '✈️' },
    { label: 'Anime', icon: '🍿' },
  ];

  // 2. รายการผลงาน (Projects) พร้อมเพิ่มรูป Cover Image
  const projects = [
    {
      title: 'Rally Application — Real-Time Pose Analysis',
      subtitle: 'Mobile Application for Remote Device Control (2024 - 2025)',
      coverImage: '/rally-thumbnail.png',
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
      title: 'RouteAlert — Real-Time Ambulance Detection',
      subtitle: 'Real-Time Route & Transit Notification System',
      coverImage: '/routealert-thumbnail.png',
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
      coverImage: '/moto-thumbnail.png',
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
            <a href="#about" className="hover:text-amber-400 transition-colors">About me</a>
            <a href="#education-experience" className="hover:text-amber-400 transition-colors">Resume</a>
            <a href="#skills" className="hover:text-amber-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-amber-400 transition-colors">Projects</a>
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
        <section id="about" className="relative min-h-[80vh] flex items-center justify-center py-8 overflow-hidden scroll-mt-24">
          
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
        <section id="education-experience" className="py-12 border-t border-zinc-800/60 scroll-mt-24">
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
                  
                  <h3 className="text-lg font-bold text-white pt-1">OCS (Online Customer Sevice)</h3>
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
                  
                  <h3 className="text-lg font-bold text-white pt-1">Lead Developer — Rally App Capstone</h3>
                  <p className="text-zinc-300 text-sm font-medium">University Capstone Project</p>
                  <p className="text-zinc-400 text-xs pt-2 leading-relaxed">
                    Designed and developed real-time pose analysis mobile app using Flutter & Google ML Kit API to track human coordinates and control remote devices.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ==================== 3. SKILLS SECTION ==================== */}
        <section id="skills" className="py-12 space-y-10 border-t border-zinc-800/60 scroll-mt-24">
          
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-white flex items-center justify-center gap-2">
              <Code2 className="w-7 h-7 text-purple-400" />
              Technical and Soft Skills
            </h2>
            <p className="text-zinc-400 text-sm md:text-base">
              ทักษะทางเทคนิค เครื่องมือ และ Soft Skills
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Technical Tools & Software */}
            <div className="lg:col-span-7 p-6 rounded-2xl bg-[#18181b]/60 border border-zinc-800 space-y-6">
              <div className="border-b border-zinc-800 pb-3 flex items-center justify-between">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Technical Skills & Tools
                </h3>
                <span className="text-xs text-zinc-500 font-mono">Development & Tools</span>
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

              <div className="flex flex-wrap gap-2.5 pt-1">
                {softSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-2 rounded-full bg-amber-400/5 border border-amber-400/20 text-amber-300 text-xs font-semibold hover:bg-amber-400/10 hover:border-amber-400/40 transition-all cursor-default shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </section>

        {/* ==================== 4. PROJECTS SECTION ==================== */}
        <section id="projects" className="py-12 space-y-10 border-t border-zinc-800/60 scroll-mt-24">
          
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-white flex items-center justify-center gap-2">
              <FolderGit2 className="w-7 h-7 text-purple-400" />
              Projects & Personal Labs
            </h2>
            <p className="text-zinc-400 text-sm md:text-base">
              ผลงานการพัฒนาแอปพลิเคชันและโปรเจกต์ทดลองส่วนตัว (คลิกที่การ์ดเพื่อดูรายละเอียดเพิ่มเติม)
            </p>
          </div>

          {/* PROJECT GALLERY GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <button
                key={idx}
                onClick={() => setActiveModalProject(project)}
                className="group relative h-[320px] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/80 text-left transition-all duration-300 hover:border-amber-400/80 hover:scale-[1.02] shadow-xl flex flex-col justify-end p-6 cursor-pointer"
              >
                {/* Background Image / Cover */}
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover object-top opacity-60 group-hover:opacity-85 group-hover:scale-105 transition-all duration-500"
                  onError={(e) => {
                    // Fallback if image not found
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Dark Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                {/* Category & Status Pill */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
                  <span className="text-[10px] font-bold text-amber-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-amber-400/30 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    {project.category}
                  </span>

                  {project.isCompleted ? (
                    <span className="text-[10px] font-medium text-emerald-400 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-500/30">
                      {project.status}
                    </span>
                  ) : (
                    <span className="text-[10px] font-medium text-amber-400 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-amber-500/30">
                      {project.status}
                    </span>
                  )}
                </div>

                {/* Card Content Overlay */}
                <div className="relative z-10 space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-300 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {project.techStack.slice(0, 3).map((tech, tIdx) => (
                      <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded bg-zinc-950/80 text-zinc-300 border border-zinc-800">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-950/80 text-amber-400 border border-zinc-800 font-bold">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* ==================== LANGUAGES & HOBBIES SECTION (อยู่ใต้ PROJECTS) ==================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6 border-t border-zinc-800/40">
            
            {/* Left: Languages Card */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#18181b]/60 border border-zinc-800 space-y-6">
              <div className="border-b border-zinc-800 pb-3 flex items-center justify-between">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Globe className="w-4 h-4 text-amber-400" />
                  Languages
                </h3>
                <span className="text-xs text-zinc-500 font-mono">Communication</span>
              </div>

              <div className="flex flex-wrap gap-8 pt-1">
                {languagesList.map((lang, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="text-base font-bold text-white block">{lang.name}</span>
                    <span className="text-xs text-zinc-400 block">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Hobbies & Interests Card */}
            <div className="lg:col-span-7 p-6 rounded-2xl bg-[#18181b]/60 border border-zinc-800 space-y-6">
              <div className="border-b border-zinc-800 pb-3 flex items-center justify-between">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Heart className="w-4 h-4 text-purple-400" />
                  Hobbies & Interests
                </h3>
                <span className="text-xs text-zinc-500 font-mono">Personal & Lifestyle</span>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 pt-1 text-center">
                {hobbiesList.map((hobby, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2 group cursor-default">
                    <span className="text-2xl p-3 rounded-2xl bg-zinc-900 border border-zinc-800 group-hover:border-amber-400/50 group-hover:scale-110 transition-all shadow-md">
                      {hobby.icon}
                    </span>
                    <span className="text-xs font-medium text-zinc-300 group-hover:text-amber-300 transition-colors">
                      {hobby.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </section>

        {/* ==================== FOOTER ==================== */}
        <footer className="pt-16 pb-8 border-t border-zinc-800/80 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            
            {/* Brand & Short Intro */}
            <div className="md:col-span-6 space-y-3">
              <div className="text-2xl font-extrabold text-white tracking-wider flex items-center gap-2">
                <span className="text-amber-400">✦</span> JIRAT PANUNTA
              </div>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed max-w-md">
                นิสิตสาขาวิทยาการคอมพิวเตอร์ ปี 4 มหาวิทยาลัยพะเยา พร้อมมุ่งมั่นที่จะเรียนรู้เทคโนโลยีใหม่ๆ และนำทักษะที่ได้ไปต่อยอดในการทำงานจริงร่วมกับทีม
              </p>
            </div>

            {/* NAVIGATION Column */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest font-mono">
                NAVIGATION
              </h4>
              <ul className="space-y-2 text-xs text-zinc-400">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">About me</a>
                </li>
                <li>
                  <a href="#education-experience" className="hover:text-white transition-colors">Resume</a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-white transition-colors">Skills</a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                </li>
              </ul>
            </div>

            {/* CONNECT Column */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest font-mono">
                CONNECT
              </h4>
              <ul className="space-y-2 text-xs text-zinc-400">
                <li>
                  <a 
                    href="https://github.com/jirattong" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    GitHub: jirattong.github.io
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:panuntajirat@gmail.com" 
                    className="hover:text-white transition-colors"
                  >
                    Email: panuntajirat@gmail.com
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:0948760595" 
                    className="hover:text-white transition-colors"
                  >
                    Phone: 094-876-0595
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright & Back to Top Button */}
          <div className="border-t border-zinc-800/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <p>© 2026 Jirat Panunta. All rights reserved.</p>
            <a 
              href="#" 
              className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </footer>

      </main>

      {/* ==================== PROJECT DETAILS POPUP MODAL ==================== */}
      {activeModalProject && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-fadeIn"
          onClick={() => setActiveModalProject(null)}
        >
          <div 
            className="bg-[#18181b] border border-zinc-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/50">
              <div className="flex items-center gap-2">
                <FolderGit2 className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-bold text-white">
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-1 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 max-h-[75vh]">
              
              {/* Category & Status */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-amber-300 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                  {activeModalProject.category}
                </span>
                <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  {activeModalProject.status}
                </span>
              </div>

              {/* Description */}
              <div className="space-y-1">
                <h4 className="text-xs font-mono uppercase text-purple-300 tracking-wider">About Project</h4>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {activeModalProject.description}
                </p>
              </div>

              {/* Highlights - ไม่มีกรอบ ใช้สีฟอนต์เดียวกับ About Project */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase text-purple-300 tracking-wider">Key Highlights</h4>
                <ul className="text-xs text-zinc-300 space-y-2 list-disc list-inside leading-relaxed p-1">
                  {activeModalProject.highlights.map((item: string, hIdx: number) => (
                    <li key={hIdx}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase text-purple-300 tracking-wider">Technologies Used</h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.techStack.map((tech: string, tIdx: number) => (
                    <span key={tIdx} className="text-xs px-3 py-1 rounded-lg bg-zinc-900 text-zinc-200 border border-zinc-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Videos Gallery (if any) */}
              {activeModalProject.videos && activeModalProject.videos.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-mono uppercase text-purple-300 tracking-wider">Project Demos</h4>
                  {activeModalProject.videos.map((vid: any, vIdx: number) => (
                    <div key={vIdx} className="space-y-1.5">
                      <p className="text-xs text-amber-400 font-semibold">{vid.title}</p>
                      <div className="rounded-xl overflow-hidden border border-zinc-800 bg-black flex items-center justify-center">
                        <video controls className="w-full max-h-[350px] object-contain">
                          <source src={vid.url} type="video/mp4" />
                          เบราว์เซอร์ของคุณไม่รองรับการเล่นวิดีโอนี้
                        </video>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Action Buttons (GitHub / Demo) */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-zinc-800">
                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    Source Code
                  </a>
                )}

                {activeModalProject.demoUrl && (
                  <a
                    href={activeModalProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-zinc-950 text-xs font-bold transition-all shadow-lg shadow-amber-400/20 active:scale-95 ml-auto"
                  >
                    <span>ทดลองใช้แอป</span>
                    <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                  </a>
                )}
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}