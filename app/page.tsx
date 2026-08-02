import React from 'react';
import { ArrowRight, Download, Mail, Code2, GraduationCap, User, Terminal } from 'lucide-react';

export default function Home() {
  // หมวดหมู่ทักษะความสามารถ (สามารถปรับแก้/เพิ่มลดได้ง่ายๆ ตรงนี้)
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5 / CSS3'],
    },
    {
      title: 'Mobile & Programming',
      skills: ['Flutter', 'Python', 'JavaScript'],
    },
    {
      title: 'Tools & Workflows',
      skills: ['Git & GitHub', 'VS Code', 'Vercel', 'Selenium'],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-12 relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 right-1/4 w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* ==================== HERO SECTION ==================== */}
      <section className="min-h-[85vh] flex flex-col justify-center items-center text-center max-w-3xl mx-auto space-y-8 z-10 relative">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-sm text-slate-300 shadow-inner">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          พร้อมรับโอกาสฝึกงาน (Open for Internship)
        </div>

        {/* Headlines */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            สวัสดีครับ, ผม <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Jirat</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-medium">
            Software & Web Developer Intern
          </p>
        </div>

        {/* Short Bio */}
        <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          นักศึกษาที่มุ่งมั่นในการเรียนรู้พัฒนาเว็บและซอฟต์แวร์แอปพลิเคชัน พร้อมนำทักษะด้านเทคโนโลยีมาร่วมสร้างสรรค์ผลงานจริงกับทีม
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all duration-200 shadow-lg shadow-blue-500/20 active:scale-95"
          >
            ดูผลงานของฉัน
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-medium transition-all duration-200 active:scale-95"
          >
            <Download className="w-4 h-4" />
            ดาวน์โหลด Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 pt-2">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-200"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 1.63 1.63A1.63 1.63 0 0 0 7.86 6.7z"/>
            </svg>
          </a>
          <a
            href="mailto:your.email@example.com"
            className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-200"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* ==================== ABOUT & SKILLS SECTION ==================== */}
      <section id="about" className="max-w-4xl mx-auto py-16 z-10 relative space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-white flex items-center justify-center gap-2">
            <User className="w-7 h-7 text-blue-400" />
            เกี่ยวกับฉัน & ทักษะ
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            ข้อมูลการศึกษา ทักษะด้านเทคโนโลยี และเครื่องมือที่ฉันใช้งานเป็นประจำ
          </p>
        </div>

        {/* Education & Bio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Education Card */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-4 hover:border-slate-700 transition-all">
            <div className="flex items-center gap-3 text-blue-400 font-semibold text-lg">
              <GraduationCap className="w-6 h-6" />
              <span>ประวัติการศึกษา</span>
            </div>
            <div className="space-y-1">
              <h3 className="text-white font-medium text-lg">ปริญญาตรี สาขาวิชา [สาขาของคุณ]</h3>
              <p className="text-slate-400 text-sm">[ชื่อมหาวิทยาลัยของคุณ]</p>
              <p className="text-slate-500 text-xs pt-1">คาดว่าจะสำเร็จการศึกษาปี 2026 / 2027</p>
            </div>
          </div>

          {/* Goal & Philosophy Card */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-4 hover:border-slate-700 transition-all">
            <div className="flex items-center gap-3 text-emerald-400 font-semibold text-lg">
              <Terminal className="w-6 h-6" />
              <span>เป้าหมายในการฝึกงาน</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              ต้องการพัฒนาทักษะในการเขียนโค้ดและการออกแบบระบบจริงร่วมกับทีมมืออาชีพ ชื่นชอบการแก้ปัญหา และพร้อมที่จะเรียนรู้ Frameworks หรือ Tools ใหม่ๆ เพื่อสร้างสรรค์ผลงานที่มีคุณค่าต่อผู้ใช้งาน
            </p>
          </div>

        </div>

        {/* Tech Stack & Skills Badges */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white flex items-center gap-2">
            <Code2 className="w-5 h-5 text-blue-400" />
            Tech Stack & Skills
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/60 space-y-3"
              >
                <h4 className="text-sm font-medium text-slate-300 border-b border-slate-800/80 pb-2">
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2 pt-1">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-lg bg-slate-800/80 text-xs text-slate-200 border border-slate-700/50 hover:border-blue-500/50 hover:text-blue-300 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

    </main>
  );
}