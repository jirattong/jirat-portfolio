import React from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Code2, 
  GraduationCap, 
  FolderGit2, 
  ExternalLink,
  Phone,
  MapPin,
  Briefcase,
  Sparkles
} from 'lucide-react';

export default function Home() {
  // 1. หมวดหมู่ทักษะความสามารถ (Skills)
  const skillCategories = [
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
      skills: ['Git & GitHub', 'VS Code', 'Firebase', 'Vercel', 'ROS TurtleSim'],
    },
  ];

  // 2. รายการผลงาน (Projects)
  const projects = [
    {
      title: 'Rally Application - Real-Time Pose Analysis',
      subtitle: 'Mobile Application for Remote Device Control (2024 - 2025)',
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
      githubUrl: 'https://github.com/jirattong',
      demoUrl: '',
    },
    {
      title: 'RouteAlert',
      subtitle: 'Real-Time Route & Transit Notification System',
      status: 'กำลังพัฒนา (In Progress)',
      isCompleted: false,
      description: 'แอปพลิเคชันแจ้งเตือนเส้นทางและการเดินทางแบบเรียลไทม์ ปัจจุบันกำลังอยู่ในช่วงออกแบบสถาปัตยกรรมระบบและพัฒนา UI/UX',
      highlights: [
        'ออกแบบ UI/UX บน Figma ให้ใช้งานง่ายและเข้าถึงสะดวก',
        'พัฒนาระบบด้วย Next.js, TypeScript และ Tailwind CSS',
      ],
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Figma'],
      githubUrl: 'https://github.com/jirattong',
      demoUrl: '',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0e0e10] text-zinc-100 relative overflow-hidden font-sans scroll-smooth">
      
      {/* Background Decorative Purple Glows (Twitch Vibe) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-2/3 right-1/4 w-[450px] h-[450px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* ==================== NAVBAR / HEADER ==================== */}
      <header className="sticky top-0 z-50 bg-[#0e0e10]/80 backdrop-blur-md border-b border-zinc-800/80 transition-all">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <a href="#" className="flex items-center gap-2 text-lg font-bold tracking-tight text-white hover:text-purple-400 transition-colors">
            <span className="p-1.5 rounded-lg bg-purple-600/20 text-purple-400 border border-purple-500/30">
              <Sparkles className="w-4 h-4" />
            </span>
            <span>Jirat.dev</span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#education-experience" className="hover:text-purple-400 transition-colors">ประวัติ & ประสบการณ์</a>
            <a href="#skills" className="hover:text-purple-400 transition-colors">ทักษะ</a>
            <a href="#projects" className="hover:text-purple-400 transition-colors">ผลงาน</a>
          </nav>

          {/* Resume Quick Button */}
          <a
            href="/Resume_JiratP.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold transition-all shadow-md shadow-purple-600/20 active:scale-95"
          >
            <Download className="w-3.5 h-3.5" />
            Resume PDF
          </a>

        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8 relative">

        {/* ==================== 1. HERO SECTION ==================== */}
        <section className="min-h-[75vh] flex flex-col justify-center items-center text-center space-y-8 py-12">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#18181b] border border-purple-500/20 text-xs md:text-sm text-zinc-300 shadow-inner">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            พร้อมรับโอกาสฝึกงาน (Computer Science Intern)
          </div>

          {/* Headlines */}
          <div className="space-y-3">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              สวัสดีครับ, ผม <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400">Jirat Panunta</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 font-medium">
              Computer Science Student & Mobile / Software Developer Intern
            </p>
          </div>

          {/* Short Bio (Resume Summary) */}
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            นิสิตสาขาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยพะเยา (GPA 3.68) มีความสนใจในการพัฒนาแอปพลิเคชันมือถือและซอฟต์แวร์ มุ่งมั่นที่จะเรียนรู้และต่อยอดทักษะจริงในสภาพแวดล้อมการทำงานร่วมกับทีม
          </p>

          {/* Contact Details Quick Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs md:text-sm text-zinc-400 pt-2">
            <a href="mailto:panuntajirat@gmail.com" className="flex items-center gap-1.5 hover:text-purple-400 transition-colors">
              <Mail className="w-4 h-4 text-purple-400" />
              panuntajirat@gmail.com
            </a>
            <span className="text-zinc-700 hidden sm:inline">•</span>
            <a href="tel:0948760595" className="flex items-center gap-1.5 hover:text-purple-400 transition-colors">
              <Phone className="w-4 h-4 text-purple-400" />
              094-876-0595
            </a>
            <span className="text-zinc-700 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-purple-400" />
              Phayao, Thailand
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium transition-all duration-200 shadow-lg shadow-purple-600/25 active:scale-95"
            >
              ดูผลงานของฉัน
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/Resume_JiratP.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#18181b] hover:bg-zinc-800 border border-zinc-800 hover:border-purple-500/40 text-zinc-200 font-medium transition-all duration-200 active:scale-95"
            >
              <Download className="w-4 h-4" />
              เปิด Resume (PDF)
            </a>
          </div>

        </section>

        {/* ==================== 2. EDUCATION & EXPERIENCE TIMELINE ==================== */}
        <section id="education-experience" className="py-16 border-t border-zinc-800/60">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            
            {/* Left Column: Education */}
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
                  <GraduationCap className="w-8 h-8 text-purple-400" />
                  Education
                </h2>
                <div className="w-12 h-1 bg-purple-500 rounded-full" />
              </div>

              {/* Vertical Timeline Container */}
              <div className="relative border-l-2 border-purple-500/30 pl-6 space-y-10 ml-2">
                
                {/* Timeline Item 1: University */}
                <div className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-purple-500 border-4 border-[#0e0e10] group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                  
                  <span className="text-xs font-semibold text-purple-400 tracking-wider">2023 – PRESENT</span>
                  <h3 className="text-lg font-bold text-white pt-1">Bachelor of Science (Computer Science)</h3>
                  <p className="text-zinc-300 text-sm font-medium">University of Phayao</p>
                  <p className="text-zinc-400 text-xs pt-1">School of Information and Communication Technology</p>
                  <div className="pt-2">
                    <span className="inline-block px-2.5 py-0.5 rounded bg-purple-500/10 text-purple-300 text-xs font-semibold border border-purple-500/20">
                      GPA: 3.68
                    </span>
                  </div>
                </div>

                {/* Timeline Item 2: High School */}
                <div className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-purple-500/60 border-4 border-[#0e0e10] group-hover:scale-125 transition-transform" />
                  
                  <span className="text-xs font-semibold text-purple-400/80 tracking-wider">2020 – 2022</span>
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
                <div className="w-12 h-1 bg-purple-500 rounded-full" />
              </div>

              {/* Vertical Timeline Container */}
              <div className="relative border-l-2 border-purple-500/30 pl-6 space-y-10 ml-2">
                
                {/* Timeline Item 1: Makro */}
                <div className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-purple-500 border-4 border-[#0e0e10] group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                  
                  <span className="text-xs font-semibold text-purple-400 tracking-wider">MAR 2025 – MAY 2025</span>
                  <h3 className="text-lg font-bold text-white pt-1">OCS (Outsourced Customer Sales)</h3>
                  <p className="text-purple-300 text-sm font-medium">Makro (Part-time)</p>
                  <ul className="text-zinc-400 text-xs pt-2 space-y-1.5 leading-relaxed list-disc list-inside">
                    <li>Picked and packed dynamic customer orders efficiently via Makro PRO app.</li>
                    <li>Verified order accuracy and proactively coordinated with delivery team or customers.</li>
                    <li>Managed invoices, tax receipts, and inventory transfer documentation accurately.</li>
                  </ul>
                </div>

                {/* Timeline Item 2: Rally Project */}
                <div className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-purple-500/60 border-4 border-[#0e0e10] group-hover:scale-125 transition-transform" />
                  
                  <span className="text-xs font-semibold text-purple-400/80 tracking-wider">2024 – 2025</span>
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

        {/* ==================== 3. SKILLS SECTION ==================== */}
        <section id="skills" className="py-16 space-y-10 border-t border-zinc-800/60">
          
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-white flex items-center justify-center gap-2">
              <Code2 className="w-7 h-7 text-purple-400" />
              Tech Stack & Skills
            </h2>
            <p className="text-zinc-400 text-sm md:text-base">
              ทักษะทางเทคนิคและเครื่องมือที่เชี่ยวชาญ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#18181b]/50 border border-zinc-800 space-y-3"
              >
                <h4 className="text-sm font-semibold text-zinc-300 border-b border-zinc-800 pb-2">
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2 pt-1">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-lg bg-zinc-900 text-xs text-zinc-200 border border-zinc-800 hover:border-purple-500/60 hover:text-purple-300 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* ==================== 4. PROJECTS SECTION ==================== */}
        <section id="projects" className="py-16 space-y-10 border-t border-zinc-800/60">
          
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-white flex items-center justify-center gap-2">
              <FolderGit2 className="w-7 h-7 text-purple-400" />
              ผลงานที่โดดเด่น (Projects)
            </h2>
            <p className="text-zinc-400 text-sm md:text-base">
              โปรเจกต์ที่พัฒนาและมีส่วนร่วมในการออกแบบ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#18181b]/80 border border-zinc-800 flex flex-col justify-between space-y-6 hover:border-purple-500/50 hover:bg-[#18181b] transition-all duration-300 group"
              >
                <div className="space-y-3">
                  {/* Status Tag */}
                  <div className="flex items-center justify-between">
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
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-purple-400/80 pt-0.5">{project.subtitle}</p>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights List */}
                  <ul className="text-xs text-zinc-400 space-y-1.5 pt-2 list-disc list-inside">
                    {project.highlights.map((item, hIdx) => (
                      <li key={hIdx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4 pt-2">
                  {/* Tech Tags */}
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

                  {/* Project Links */}
                  <div className="flex items-center gap-4 pt-2 border-t border-zinc-800 text-sm">
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
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-purple-400 hover:text-purple-300 transition-colors ml-auto font-medium"
                      >
                        Live Demo
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* ==================== FOOTER ==================== */}
        <footer className="pt-16 pb-8 border-t border-zinc-800 text-center text-zinc-500 text-xs md:text-sm space-y-2">
          <p>© 2026 Jirat Panunta. Built with Next.js, Tailwind CSS & Vercel.</p>
          <p className="text-zinc-600 text-xs">University of Phayao • Computer Science Student</p>
        </footer>

      </main>

    </div>
  );
}