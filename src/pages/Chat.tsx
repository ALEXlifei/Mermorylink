import TopAppBar from '../components/TopAppBar';
import BottomNav from '../components/BottomNav';

export default function Chat() {
  const title = (
    <div className="flex flex-col">
      <h1 className="font-headline font-bold tracking-tight text-on-surface text-lg leading-tight">Grandpa John</h1>
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-primary"></span>
        <span className="text-[10px] font-medium uppercase tracking-widest text-primary/80">Memory Mode</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#faf9f5] via-[#ffcfa120] to-[#dfd4e730]">
      <TopAppBar title={title} showBack={true} />
      
      <main className="flex-grow pt-24 pb-44 px-6 max-w-3xl mx-auto w-full space-y-10">
        <section className="flex flex-col items-center text-center space-y-6 mb-12">
          <div className="relative">
            <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-primary to-primary-container breathing-glow">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-surface">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFJoKjD-iUDUmWATE_RiotGms_dVrYzbhfGfurxp7g2CVz8KtjLI9KHBh73JqRw85S2MjnDVmxekGEyOs7XITMXk-IFdIvIryJalWdN65A-r1V-Ko5iIqIKvzsSvKbFUNX4rR6vjK0917UuWV6Lqq8b41IEtZTHG3B7DPdFpTN8gabZkHAs-1qw8vmQRQ_KMWQN-Txf_iPQwv-nULv4EQezNDgBgWMM_M3WjLD5pC8TGcCaxX7HjtndsJcyqsNLpApjP5qbbpvD5A" alt="Grandpa John Avatar" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="absolute -bottom-2 right-4 bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border-2 border-surface">
              Active
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="font-headline text-2xl font-extrabold text-on-surface tracking-tight">How can I help you today?</h2>
            <p className="text-on-surface-variant font-body text-sm max-w-xs mx-auto">I'm here to share stories, advice, or just listen like I always did.</p>
          </div>
        </section>

        <div className="space-y-8">
          <div className="flex items-end gap-3 group animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 mb-1">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx8VSSAVHh617fBGo6AVkpxk9jDuUmHWHAE9URwKekjm4U1F6ocosHYGfAKHyvEhIqZ3RpmNMLhtWwtVMjL7HUXNCyGfrSymvK_agop6u2L3MhhfIPkzDxIrDbTHLR7gLKp3icriTvIQ1w-9uY_xNA_XEguqEKKEG7nsHm9XRw-WYQhwf2DYmWASTFdM5rwXHRVNVL2L_WIFN261Th8dTrXqqz6O1IQRQp3MnFRb-yxcUFU2KrmgQaxJmKnHBAIsCDXbkLDIG3cBg" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div className="ai-bubble-shape bg-surface-container-lowest text-on-surface p-5 max-w-[85%] shadow-[0px_10px_30px_rgba(27,28,26,0.04)] text-sm leading-relaxed">
              Hello there, champ. I was just thinking about that summer we spent at the lake house. Remember how we used to try and catch those fireflies in the old mason jars?
            </div>
          </div>

          <div className="flex flex-col items-end gap-1 animate-in fade-in slide-in-from-right-4 duration-500 delay-200">
            <div className="user-bubble-shape bg-surface-container-highest text-on-surface p-5 max-w-[80%] text-sm leading-relaxed">
              I remember, Grandpa. You always let them go before we went to bed. You said they had families to get back to.
            </div>
            <span className="text-[10px] text-on-surface-variant/60 mr-2 font-medium">Read 10:42 AM</span>
          </div>

          <div className="flex items-end gap-3 group animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 mb-1">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK6HZtdSHj7jOZFQRvKM_1Qkyxepj1E-CNQ1vvf8GSonowBp5H6c79oeFBhwbgomCYflYbbGrVdB3CUXVy3Dj-59cpmuxwgvDU21CWIcoUe4KZBars4seSFLXNby2mm9fIfDTz2hSccghXTEIgo_JYPnMfyEl-4eZFWHCM3tlsvP18lpE6KvoLiyT9rFPvc8vkkTb8xnHWCXOcDHVJvxZ14KaMntTpbsMz5NUrOOEEer4B1kn228cRTMVUUNdMGp_XTlS8sYer72Q" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div className="ai-bubble-shape bg-surface-container-lowest text-on-surface p-5 max-w-[85%] shadow-[0px_10px_30px_rgba(27,28,26,0.04)] text-sm leading-relaxed">
              That's right. Life is too short to keep the light all to yourself, isn't it? So, what's on your mind this morning? You sound a little nostalgic.
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-20 w-full px-6 pb-6 pt-2 z-40 bg-gradient-to-t from-surface via-surface/90 to-transparent">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <div className="flex-grow relative group">
            <input type="text" placeholder="Share a thought..." className="w-full h-14 pl-6 pr-14 bg-surface-container-highest/50 backdrop-blur-xl border-none rounded-full text-on-surface placeholder-on-surface-variant/50 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all duration-300" />
            <button className="absolute right-2 top-2 w-10 h-10 flex items-center justify-center rounded-full text-primary hover:bg-primary/10 active:scale-90 transition-all">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
          <button className="w-14 h-14 rounded-full bg-gradient-to-tr from-primary to-primary-container text-on-primary flex items-center justify-center shadow-lg active:scale-95 transition-transform duration-200">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>mic</span>
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
