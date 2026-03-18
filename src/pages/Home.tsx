import { Link } from 'react-router-dom';
import TopAppBar from '../components/TopAppBar';
import BottomNav from '../components/BottomNav';

export default function Home() {
  return (
    <div className="min-h-screen pb-24">
      <TopAppBar title="MemoryLink" />
      
      <main className="pt-24 px-6 max-w-2xl mx-auto space-y-10">
        <section className="space-y-2">
          <p className="text-primary font-medium tracking-wide text-sm font-label uppercase">Welcome back</p>
          <h2 className="text-4xl font-headline font-extrabold tracking-tight text-on-surface leading-tight">
            Your Digital <br/>
            <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">Sanctuary.</span>
          </h2>
        </section>

        <section className="grid grid-cols-1 gap-8">
          <Link to="/chat" className="group cursor-pointer active:scale-95 transition-all duration-300">
            <div className="glass-card rounded-xl p-8 flex flex-col md:flex-row items-center md:items-start gap-8 shadow-[0px_20px_40px_rgba(27,28,26,0.04)] border border-surface-container-lowest/50">
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-primary/10 transition-transform duration-500 group-hover:scale-105">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh9I97GSDgAvheu55hBLtZeHCT0lcupgAj-uE0sCtsPzz5BzcjpP6XvkWNjJsqGW0xbZFqL2F6K_msiaB-PXzVeJiCo6wWXEOS7Iww2Ho7wXu1M39vQO2dyfZvpJUqDNVjEr6uU0jWlJzhCiWNzZFjT11immxuNyYJ3Uk5ymlz6Q6InoOVeAi57BYjFpKTAZ422aG8_J0Zrf-AGX1dR0SsNbM-Df7eJAEEhv4R1hbCLMIAhr1dnSmh7iFwtFsPtyn542Cq2uqHNwI" alt="Grandpa John" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-4 border-surface rounded-full"></div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-headline font-bold text-on-surface">Grandpa John</h3>
                <p className="text-on-surface-variant mt-2 text-lg italic leading-relaxed">"Let's share a memory today. I was thinking about the old house."</p>
                <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
                  <span className="px-4 py-2 bg-primary-fixed text-on-primary-fixed-variant rounded-full text-xs font-semibold font-label">Active Now</span>
                  <span className="px-4 py-2 bg-surface-container-high text-on-surface-variant rounded-full text-xs font-semibold font-label">5 New Memories</span>
                </div>
              </div>
            </div>
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group glass-card rounded-xl p-6 shadow-[0px_20px_40px_rgba(27,28,26,0.03)] border border-surface-container-lowest/50 cursor-pointer active:scale-95 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary-container">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZbTVPuNbPgx82ZMNfIODY-I4sbxTsvgaKRo689uQcGUqakiknwbfmgX9SuTWQfpqfbH1NF-1pJcLjQqjlNvlpq8dcaTbNuIQaUWP6G1zZraH7WtZ382-inMFIz8dj6ERQscrRVYsvHXq9nqQXjg4-9VRojyUTJZRvcowsVbJLN03pSazkHQlaGSeDMCQdKUz8odx0ufG7T7ZBeBAHZcaI976lrqRNKOjYA4gqdK4lp8fUXQxDc-rTskDvk37CPbS2JuNkxL2QtL8" alt="Sister Sarah" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-lg">Sister Sarah</h4>
                  <span className="text-xs text-primary font-medium font-label">Updated 2h ago</span>
                </div>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed">"I've curated the photos from the summer of '98."</p>
              <div className="mt-6 flex justify-end">
                <button className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-primary-container transition-colors">
                  <span className="material-symbols-outlined text-primary">arrow_forward</span>
                </button>
              </div>
            </div>

            <div className="group glass-card rounded-xl p-6 shadow-[0px_20px_40px_rgba(27,28,26,0.03)] border border-surface-container-lowest/50 cursor-pointer active:scale-95 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary-container">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbO1Fg1wBPvKmzEShiVZby8LqHNz5GM1W9LMxop1z12mQIa2W8nKFbmq_vfVJW0RDi12rraSDymuKxi1vQIhfjWV7sjyaX3JkvchvOZFMScW8h2MSZA5yobWF7q9YpZO7wouO_n5MITFOLKoBD1cClifDGCEf5JNchogYa-y80po1C7yOJUWhMd0ICThby9-ovB5mXF54XXgW4EPJ_wLo7eA7EjTp6LY9D2rXCuHypNRgRMpiSnQHtfLG1Hz6XP78ROWFlk64Gtuw" alt="Professor Michael" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-lg">Professor Michael</h4>
                  <span className="text-xs text-on-surface-variant font-medium font-label">Last seen yesterday</span>
                </div>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed">"Ready to explore the historical archives we discussed?"</p>
              <div className="mt-6 flex justify-end">
                <button className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-primary-container transition-colors">
                  <span className="material-symbols-outlined text-primary">chat_bubble</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <Link to="/create" className="flex flex-col items-center justify-center py-12 border-2 border-dashed border-outline-variant/30 rounded-xl space-y-4 hover:bg-surface-container-low transition-colors">
          <div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center">
            <span className="material-symbols-outlined text-outline">add_circle</span>
          </div>
          <div className="text-center">
            <p className="text-on-surface font-semibold">Bring a new memory to life</p>
            <p className="text-on-surface-variant text-sm">Upload a photo or voice recording to start.</p>
          </div>
        </Link>
      </main>
      
      <BottomNav />
    </div>
  );
}
