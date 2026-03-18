import TopAppBar from '../components/TopAppBar';
import BottomNav from '../components/BottomNav';

export default function Profile() {
  return (
    <div className="min-h-screen pb-32">
      <TopAppBar title="MemoryLink" />
      
      <main className="pt-24 px-6 max-w-2xl mx-auto">
        <section className="flex flex-col items-center mb-12">
          <div className="relative mb-6">
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-[0px_20px_40px_rgba(27,28,26,0.06)] ring-4 ring-surface-container-lowest">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxtMp8aCzDRehjPZwfS2aaluemciR0M3GpeyjDqiowlw9QapvL9RmF7xtqrDpOafTDYu7vzAQck5DwlSuyTXeCmqkutOvQ4m7CaPpz-382E9rTKWiYcP1kXuzuiiW9IdhJgDYQmZehAzWU44JSw3xY9Fzs0ar6D8OCyeGBv6maLV4zRZXQqdMEqoe8_h3865FLVr5ebh1j8CcingvTZ8FoKP2e7Dd_l_6HJPCDh7e5AJPDJVn5WAI9KuvuayibGLgRx710nYd5ylE" alt="Alex Johnson" className="w-full h-full object-cover" />
            </div>
            <button className="absolute bottom-0 right-0 bg-primary text-on-primary p-2 rounded-full shadow-lg flex items-center justify-center border-4 border-surface">
              <span className="material-symbols-outlined text-sm">edit</span>
            </button>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight mb-1">Alex Johnson</h1>
          <p className="text-on-surface-variant font-medium text-sm">Premium Member since 2023</p>
        </section>

        <section className="grid grid-cols-2 gap-4 mb-12">
          <div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between">
            <span className="material-symbols-outlined text-primary mb-4">memory</span>
            <div>
              <div className="text-2xl font-bold">12</div>
              <div className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold">Memories</div>
            </div>
          </div>
          <div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between">
            <span className="material-symbols-outlined text-tertiary mb-4">cloud_done</span>
            <div>
              <div className="text-2xl font-bold">4.2GB</div>
              <div className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold">Storage</div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-xl font-bold tracking-tight">Your Created Digital Memories</h2>
            <button className="text-primary text-sm font-semibold">View all</button>
          </div>
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 -mx-6 px-6">
            <div className="flex-shrink-0 w-44">
              <div className="aspect-[3/4] rounded-xl overflow-hidden mb-3 relative group">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAVOF9Yn7kUkDBzxkmWjNXGzqFyrA8tskg0YjW8VnxHaj1m0mJ1GSKEDnX1nSRwZes2XOBPfAD4jYjYpzdcX1-KvdOVz8BLSP-6BukGPIHHxYTRgaE8K1Vyz9GG2v7gE-Rqima5qeTI5bpgbWeQ82TMX8nPrm4VdFREOoTchn8PFjRBJpJ-CNoy1QA51RIiLRlqTmPmoLVjWZcNEIw0IftKJEx2D5Eb_4ty3NMM2Cjag5x8fx1p-NvWFQx7yspodJySES3auvgFcU" alt="Grandma Rose" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="font-bold text-sm">Grandma Rose</p>
                  <p className="text-[10px] opacity-80 uppercase font-medium">Digital Legacy</p>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 w-44">
              <div className="aspect-[3/4] rounded-xl overflow-hidden mb-3 relative group">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA64Tb4OtFJ_p2PyRFXjQr_FYZFRq1c9lr8mJ479ZvQ9yT6MAkFFIDGVY4q6t978yb6NAuXsCT4-nSLDw6ZmbgcnMJ3odeNCiUXmwncr9SV0lRsC3hW9NGWk6mqEIb-sb1DE7zfVIh92-Ue0ZW_ZnWPx3SobXQxGPoAR1TLUP5buwlg7bYkaEiGAnSLjNAKJcj6ppoqhC7t7ldh0pVYToJF2fANwxuAW6qqPXEoLYEO3ztYM8fYLveKKbrMey6ixEuBQyU5HrP7OKU" alt="Father Liam" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="font-bold text-sm">Father Liam</p>
                  <p className="text-[10px] opacity-80 uppercase font-medium">Voice Active</p>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 w-44">
              <div className="aspect-[3/4] rounded-xl overflow-hidden mb-3 relative bg-surface-container-high border-2 border-dashed border-outline-variant flex flex-col items-center justify-center gap-2">
                <span className="material-symbols-outlined text-primary text-3xl">add_circle</span>
                <p className="text-xs font-semibold text-primary">New Memory</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold tracking-tight mb-6">Settings</h2>
          <div className="bg-surface-container-low rounded-xl overflow-hidden">
            <div className="flex items-center justify-between p-5 hover:bg-surface-container-high transition-colors cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface">
                  <span className="material-symbols-outlined">database</span>
                </div>
                <span className="font-medium text-on-surface">Data Management</span>
              </div>
              <span className="material-symbols-outlined text-outline-variant group-hover:translate-x-1 transition-transform">chevron_right</span>
            </div>
            
            <div className="flex items-center justify-between p-5 hover:bg-surface-container-high transition-colors cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface">
                  <span className="material-symbols-outlined">shield_person</span>
                </div>
                <span className="font-medium text-on-surface">Privacy Settings</span>
              </div>
              <span className="material-symbols-outlined text-outline-variant group-hover:translate-x-1 transition-transform">chevron_right</span>
            </div>
            
            <div className="flex items-center justify-between p-5 hover:bg-surface-container-high transition-colors cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface">
                  <span className="material-symbols-outlined">record_voice_over</span>
                </div>
                <span className="font-medium text-on-surface">Voice Cloning Data</span>
              </div>
              <span className="material-symbols-outlined text-outline-variant group-hover:translate-x-1 transition-transform">chevron_right</span>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <button className="w-full h-16 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold shadow-lg hover:opacity-90 active:scale-[0.96] transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">logout</span>
            Logout
          </button>
          <p className="text-center text-on-surface-variant text-xs font-medium py-4">MemoryLink v2.4.0 — Made with care</p>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
