import React from 'react';
import { 
  Briefcase, GraduationCap, Mail, Zap, LayoutGrid, Palette, Users, Globe, 
  ArrowUpRight, Layers, Box, PenTool, Download, Languages, MapPin, 
  Building, FileText, Image, MessageSquare, Sparkles, Video, LayoutTemplate, Send
} from 'lucide-react';

// 數據結構 (Data Structure)
const cvData = {
  name: "Yoona Chen",
  title: "產品設計師 Product Designer",
  tagline: "專注於為 Web3、DeFi 和未來科技設計有意義的介面。",
  location: "Taipei, Taiwan (Remote)",
  // 頭像連結
  avatar: "https://i.meee.com.tw/qlUOGSu.png", 
  // 連結列表 (Links)
  links: [
    { type: 'studio', url: 'https://off-office.co/', label: '工作室網站', icon: Building, color: 'bg-emerald-500', text: 'text-emerald-50' },
    { type: 'portfolio', url: 'https://y00na.com', label: '個人作品集', icon: Globe, color: 'bg-orange-500', text: 'text-orange-50' },
    { type: 'linkedin', url: 'https://linkedin.com/in/sc221', label: 'LinkedIn', icon: Users, color: 'bg-blue-600', text: 'text-blue-50' },
    { type: 'email', url: 'mailto:syuan.chen.221@gmail.com', label: 'Email', icon: Mail, color: 'bg-purple-600', text: 'text-purple-50' },
    { type: 'telegram', url: 'https://t.me/yoona_eth', label: 'Telegram', icon: Send, color: 'bg-sky-500', text: 'text-sky-50' }, 
  ],
  // 技能圖示 (Stack)
  stack: [
    { name: "Figma", category: "Design", color: "text-purple-600", bg: "bg-purple-50", icon: Palette },
    { name: "Framer", category: "No-Code", color: "text-blue-600", bg: "bg-blue-50", icon: LayoutTemplate },
    { name: "Notion", category: "Docs", color: "text-slate-600", bg: "bg-slate-100", icon: FileText },
    { name: "Midjourney", category: "AI Art", color: "text-pink-600", bg: "bg-pink-50", icon: Image },
    { name: "ChatGPT", category: "AI Assist", color: "text-green-600", bg: "bg-green-50", icon: MessageSquare },
    { name: "Adobe CC", category: "Creative", color: "text-red-600", bg: "bg-red-50", icon: PenTool },
    { name: "Gemini", category: "AI Model", color: "text-sky-600", bg: "bg-sky-50", icon: Sparkles },
    { name: "Higgsfield", category: "AI Video", color: "text-violet-600", bg: "bg-violet-50", icon: Video },
  ],
  experience: [
    {
      title: "共同創辦人 Co-Founder",
      company: "Off-office",
      time: "2023.11 – 至今",
      tags: ["遠端", "Web3", "創辦人"],
      description: "與 Web3 和科技創辦人合作，從零到一打造品牌與產品（從識別設計到正式發布）。",
    },
    {
      title: "UI / UX 設計師",
      company: "幣安 Binance",
      time: "2021.07 – 2023.11",
      tags: ["遠端", "DeFi", "NFT"],
      description: "主導 Binance NFT 和 Binance Square 的端到端設計，涵蓋從概念發想到產品上線。",
    },
    {
      title: "UI/UX 設計師",
      company: "Machi Originals",
      time: "2020.07 – 2021.07",
      tags: ["台北", "社交應用", "App"],
      description: "與黃立成 (Jeffrey Huang) 合作，設計並推出從 0 到 1 的社交產品與相關行銷素材。",
    },
  ],
  services: [
    { title: "品牌識別", desc: "Branding & Logo", icon: Box, color: "text-indigo-600", bg: "bg-indigo-50" },
    { title: "網頁設計", desc: "Framer & RWD", icon: LayoutGrid, color: "text-teal-600", bg: "bg-teal-50" },
    { title: "UI/UX 設計", desc: "複雜系統介面", icon: Layers, color: "text-rose-600", bg: "bg-rose-50" },
  ],
  education: [
    {
      school: "中國科技大學",
      degree: "數位多媒體設計學系",
      year: "2014 – 2017",
      icon: GraduationCap
    }
  ],
  languages: [
    { name: "中文", level: "Native", icon: Languages },
    { name: "英文", level: "Basic", icon: Languages }
  ]
};

// 小元件: 柔和的背景光暈 (Soft Background Orbs)
const SoftOrb = ({ color, position, size }) => (
  <div 
    className={`absolute rounded-full mix-blend-multiply filter blur-[80px] opacity-30 animate-pulse pointer-events-none`}
    style={{ 
      background: color, 
      ...position, 
      width: size, 
      height: size,
      zIndex: 0 
    }}
  />
);

// 小元件: 輕量化卡片 - 強化 Hover 效果 (Lift and Shadow)
const LightCard = ({ children, className = "" }) => (
  <div className={`relative bg-white/70 backdrop-blur-xl border border-slate-200/60 rounded-2xl shadow-sm 
  hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 ${className}`}>
    {children}
  </div>
);

// 小元件: 社交連結按鈕 (Social Button) - 採用玻璃效果 (Glassy Button)
const SocialButton = ({ link }) => (
    <a 
      href={link.url} 
      target="_blank" 
      rel="noopener noreferrer"
      // 玻璃效果 + Lift on hover
      className={`group flex items-center justify-between p-3 rounded-xl shadow-md transition-all duration-300 
      bg-white/60 backdrop-blur-md border border-white/80 
      hover:bg-white hover:border-slate-200 hover:shadow-lg hover:-translate-y-0.5 w-full`}
    >
      <div className="flex items-center gap-3 overflow-hidden">
        {/* 內層 Icon 保持顏色一致 */}
        <div className={`p-2 rounded-lg shadow-sm shrink-0 ${link.color} ${link.text}`}>
          <link.icon size={16} />
        </div>
        <span className={`font-bold text-sm text-slate-700 group-hover:text-slate-900 transition-colors truncate`}>
          {link.label}
        </span>
      </div>
      <ArrowUpRight size={14} className="text-slate-400 group-hover:text-slate-600 transition-colors shrink-0" />
    </a>
);

// 新增 CTA 聯繫區塊
const ContactCTA = ({ links }) => {
    // 篩選出 CTA 區塊需要的聯繫方式
    const contactLinks = links.filter(link => 
        ['email', 'linkedin', 'telegram', 'studio'].includes(link.type)
    );

    return (
        <div className="py-12 md:py-16 bg-white/70 backdrop-blur-xl border-t border-slate-200/60 mt-10">
            <div className="max-w-5xl mx-auto px-6 md:px-10">
                <LightCard className="p-8 md:p-12 shadow-2xl shadow-indigo-100/50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                        
                        {/* 左側：行動呼籲大標題 */}
                        <div>
                            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-2">
                                Contact
                            </p>
                            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                                讓我們一起開始創作吧！
                            </h2>
                            <p className="mt-4 text-slate-600 text-base">
                                無論是從零開始的 Web3 產品，或是現有介面的優化，我很樂意聽聽您的想法。
                            </p>
                        </div>

                        {/* 右側：聯繫資訊列表 */}
                        <div className="grid grid-cols-1 gap-4">
                            {contactLinks.map((link, idx) => (
                                <a 
                                    key={idx}
                                    href={link.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    // CTA 專用按鈕樣式，更突出
                                    className={`group flex items-center justify-between p-4 rounded-xl shadow-md transition-all duration-300 font-bold 
                                    bg-slate-800/10 backdrop-blur-sm border border-slate-300/80 
                                    hover:bg-slate-800/20 hover:text-slate-900 hover:shadow-xl hover:-translate-y-1 text-slate-800`}
                                >
                                    <div className="flex items-center gap-4 overflow-hidden">
                                        <div className={`p-2 rounded-lg shadow-sm shrink-0 ${link.color} ${link.text}`}>
                                            <link.icon size={20} />
                                        </div>
                                        <div className="text-base truncate">
                                            {link.label}
                                            <p className="text-xs font-normal text-slate-500 truncate">{link.url.replace(/(https?:\/\/(www\.)?)/, '')}</p>
                                        </div>
                                    </div>
                                    <ArrowUpRight size={16} className="text-slate-400 group-hover:text-indigo-600 transition-colors shrink-0" />
                                </a>
                            ))}
                        </div>
                    </div>
                </LightCard>
            </div>
        </div>
    );
};

const App = () => {
  return (
    // 增加 smooth scrolling
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden relative" style={{ scrollBehavior: 'smooth' }}>
      
      {/* 背景裝飾 (Light Mode Background Elements) */}
      <SoftOrb color="#e0e7ff" position={{ top: '-10%', right: '-10%' }} size="600px" />
      <SoftOrb color="#fae8ff" position={{ bottom: '10%', left: '-20%' }} size="500px" />
      <SoftOrb color="#ffedd5" position={{ top: '40%', right: '-20%' }} size="400px" />

      {/* 主要容器：擴大寬度以支援 RWD (Main Container) */}
      <div className="max-w-5xl mx-auto min-h-screen relative z-10 pb-12 md:pb-20 bg-white/40 backdrop-blur-sm border-x border-white/50 shadow-2xl">
        
        {/* Header Section - RWD: Flex on desktop */}
        <header className="relative p-6 md:p-10 md:pb-6 border-b border-slate-200/50 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="flex flex-col md:flex-row items-start gap-5">
             <div className="relative shrink-0">
                {/* 頭像 */}
                <img 
                  src={cvData.avatar} 
                  alt={cvData.name}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-3xl object-cover shadow-lg shadow-indigo-200/50 rotate-3 hover:rotate-0 transition-transform duration-300"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-[3px] border-white rounded-full shadow-sm" title="Open to work"></div>
             </div>
             
             <div className="mt-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
                        {cvData.name}
                    </h1>
                    <div className="px-3 py-1 rounded-full bg-white border border-slate-200 text-[10px] font-bold tracking-wide text-slate-500 shadow-sm uppercase cursor-default">
                        Open to work
                    </div>
                </div>
                <p className="text-lg md:text-xl text-indigo-600 font-bold mb-2">
                    {cvData.title}
                </p>
                <p className="text-slate-600 leading-relaxed font-medium max-w-lg">
                    {cvData.tagline}
                </p>
                <div className="flex items-center text-slate-400 text-sm mt-3 font-medium">
                    <MapPin size={14} className="mr-1" />
                    {cvData.location}
                </div>
             </div>
          </div>

          {/* 下載按鈕 - 玻璃效果 + Lift on hover */}
          <a 
            href="/Yoona_Chen_CV.pdf" 
            download
            className="absolute top-6 right-6 md:static flex items-center gap-2 px-5 py-2.5 rounded-full shadow-md transition-all duration-300 font-bold text-sm group
            bg-slate-800/10 backdrop-blur-sm border border-slate-300/80 
            hover:bg-slate-800/20 hover:text-slate-900 hover:shadow-lg hover:-translate-y-0.5 text-slate-800"
          >
            <Download size={16} className="group-hover:animate-bounce" />
            <span>下載 CV</span>
          </a>
        </header>

        {/* RWD Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-6 md:p-10 pt-6">
            
            {/* 左側欄位 (Sidebar) - 佔 4 欄 */}
            <div className="md:col-span-4 space-y-8 order-2 md:order-1">
                
                {/* Links */}
                <div className="grid grid-cols-1 gap-3">
                    {/* 這裡只保留非 Email, Studio, LinkedIn, Telegram 的連結，保持 Sidebar 簡潔 */}
                    {cvData.links.filter(link => !['email', 'linkedin', 'telegram', 'studio'].includes(link.type)).map((link, idx) => (
                    <SocialButton key={idx} link={link} />
                    ))}
                </div>

                {/* Skills - 小型化調整 (Compact Grid) */}
                <div>
                    <div className="flex items-center justify-between mb-3 pl-1">
                        <h2 className="text-base font-bold text-slate-800 flex items-center gap-2">
                        <Zap size={16} className="text-amber-500" />
                        專業技能
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2.5">
                        {cvData.stack.map((tech, idx) => (
                        // LightCard 已經有 Lift on hover 效果
                        <LightCard key={idx} className={`p-2.5 flex items-center gap-2.5 group hover:border-indigo-200`}>
                            <div className={`p-1.5 rounded-lg ${tech.bg} ${tech.color} shrink-0`}>
                                {/* 使用客製化 icon */}
                                <tech.icon size={14} />
                            </div>
                            <div className="min-w-0">
                                <p className="font-bold text-slate-700 text-xs group-hover:text-indigo-600 transition-colors truncate">{tech.name}</p>
                                <p className="text-[10px] text-slate-400 truncate">{tech.category}</p>
                            </div>
                        </LightCard>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div>
                    <h2 className="text-base font-bold text-slate-800 mb-3 pl-1 flex items-center gap-2">
                        <GraduationCap size={16} className="text-emerald-500" />
                        教育背景
                    </h2>
                    <div className="space-y-3">
                        {cvData.education.map((edu, idx) => (
                            // LightCard 已經有 Lift on hover 效果
                            <LightCard key={idx} className="p-4">
                                <div className="flex items-start">
                                    <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg mr-3 shrink-0">
                                        <edu.icon size={16} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-sm">{edu.school}</h3>
                                        <p className="text-xs text-slate-600 mt-0.5">{edu.degree}</p>
                                        <p className="text-[10px] text-slate-400 mt-1 font-mono bg-slate-50 inline-block px-1.5 rounded">{edu.year}</p>
                                    </div>
                                </div>
                            </LightCard>
                        ))}
                    </div>
                </div>

                {/* Languages */}
                <div>
                    <h2 className="text-base font-bold text-slate-800 mb-3 pl-1 flex items-center gap-2">
                        <Globe size={16} className="text-sky-500" />
                        語言能力
                    </h2>
                    <div className="grid grid-cols-2 gap-2">
                        {cvData.languages.map((lang, idx) => (
                             // LightCard 已經有 Lift on hover 效果
                             <LightCard key={idx} className="p-2.5 flex items-center justify-center flex-col text-center">
                                <span className="font-bold text-slate-800 text-sm mb-0.5">{lang.name}</span>
                                <span className="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">{lang.level}</span>
                             </LightCard>
                        ))}
                    </div>
                </div>
            </div>

            {/* 右側主要內容 (Main Content) - 佔 8 欄 */}
            <div className="md:col-span-8 space-y-8 order-1 md:order-2">
                
                {/* Experience Timeline */}
                <div>
                    <h2 className="text-xl font-bold text-slate-800 mb-6 pl-1 flex items-center gap-2">
                        <Briefcase size={20} className="text-indigo-500" />
                        工作經歷
                    </h2>
                    {/* 容器內距 */}
                    <div className="space-y-6 relative pl-4 md:pl-2">
                        {/* 線條 */}
                        <div className="absolute left-[19px] md:left-[9px] top-3 bottom-6 w-[2px] bg-slate-200/80"></div>

                        {cvData.experience.map((exp, idx) => (
                        // 寬敞的左側內距 (pl-12)
                        <div key={idx} className="relative pl-12 md:pl-12 group">
                            {/* Timeline Dot */}
                            <div className="absolute left-[14px] md:left-[4px] top-2 w-3 h-3 rounded-full bg-white border-[3px] border-indigo-500 shadow-sm group-hover:scale-125 group-hover:border-indigo-600 transition-all duration-300 z-10"></div>
                            
                            {/* 經歷卡片 - 增加 Lift on hover 效果 */}
                            <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 hover:border-indigo-100">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-2">
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900">{exp.company}</h3>
                                        <p className="text-sm font-bold text-indigo-600">{exp.title}</p>
                                    </div>
                                    <span className="text-xs font-mono text-slate-500 bg-slate-50 px-2 py-1 rounded self-start md:self-center whitespace-nowrap border border-slate-100">{exp.time}</span>
                                </div>
                                <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-4">
                                    {exp.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className="px-2.5 py-1 text-[11px] font-semibold text-slate-500 bg-slate-50 border border-slate-100 rounded-md">
                                        {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>

                {/* Services Section */}
                <div>
                    <h2 className="text-xl font-bold text-slate-800 mb-4 pl-1 flex items-center gap-2">
                        <Box size={20} className="text-rose-500" />
                        服務項目
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {cvData.services.map((service, idx) => (
                        // 服務卡片 - 增加 Lift on hover 效果 
                        <div key={idx} className="flex flex-col items-start p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group cursor-default h-full hover:border-rose-100">
                            <div className={`p-3 rounded-xl ${service.bg} ${service.color} mb-3 group-hover:scale-110 transition-transform`}>
                                <service.icon size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800 mb-1">{service.title}</h3>
                                <p className="text-xs text-slate-500 font-medium leading-relaxed">{service.desc}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
        
        {/* Contact CTA Section - 替換原本的 Footer */}
        <ContactCTA links={cvData.links} />

        {/* 頁尾版權資訊 (Bottom Copyright) */}
        <div className="text-center py-6 border-t border-slate-200/50 mx-6 md:mx-10">
            <p className="text-slate-400 text-xs font-medium">
                © 2025 Yoona Chen. Designed with emphasis on clarity and responsiveness.
            </p>
        </div>

        {/* Floating Action Button (Mobile Only) - RWD 隱藏 */}
        <div className="md:hidden fixed bottom-6 right-6 z-40">
           <a href="mailto:syuan.chen.221@gmail.com" className="flex items-center justify-center w-14 h-14 bg-slate-900 text-white rounded-full shadow-xl hover:scale-110 hover:bg-indigo-600 transition-all duration-300 ring-4 ring-white/30">
             <Mail size={24} />
           </a>
        </div>

      </div>
    </div>
  );
};

export default App;
