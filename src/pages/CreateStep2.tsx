import { Link } from 'react-router-dom';
import TopAppBar from '../components/TopAppBar';
import BottomNav from '../components/BottomNav';

export default function CreateStep2() {
  return (
    <div className="min-h-screen pb-32">
      <TopAppBar title="MemoryLink" showBack={true} />
      
      <main className="pt-24 px-6 max-w-xl mx-auto min-h-screen">
        <div className="mb-12">
          <span className="font-headline font-bold text-sm tracking-[0.2em] text-primary mb-2 block uppercase">STEP 02 / 04</span>
          <div className="h-1 w-full bg-surface-container-high rounded-full overflow-hidden">
            <div className="h-full bg-primary w-2/4 rounded-full"></div>
          </div>
        </div>

        <div className="mb-10 text-left">
          <h1 className="font-headline font-extrabold text-4xl text-on-surface tracking-tight mb-3">Clone their voice</h1>
          <p className="text-on-surface-variant leading-relaxed font-medium">Record 10-30 seconds of speech for the best results. Our AI will capture the essence of their tone.</p>
        </div>

        <div className="bg-surface-container-low rounded-xl p-8 mb-8 relative overflow-hidden flex flex-col items-center">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none"></div>
          
          <div className="flex items-end justify-center gap-1.5 h-32 mb-10 w-full max-w-sm px-4">
            <div className="waveform-bar w-1.5 h-8 bg-primary/20 rounded-full"></div>
            <div className="waveform-bar w-1.5 h-16 bg-primary/30 rounded-full"></div>
            <div className="waveform-bar w-1.5 h-12 bg-primary/40 rounded-full"></div>
            <div className="waveform-bar w-1.5 h-24 bg-primary/60 rounded-full"></div>
            <div className="waveform-bar w-1.5 h-20 bg-primary/80 rounded-full"></div>
            <div className="waveform-bar w-1.5 h-28 bg-primary rounded-full"></div>
            <div className="waveform-bar w-1.5 h-16 bg-primary/80 rounded-full"></div>
            <div className="waveform-bar w-1.5 h-24 bg-primary/60 rounded-full"></div>
            <div className="waveform-bar w-1.5 h-10 bg-primary/40 rounded-full"></div>
            <div className="waveform-bar w-1.5 h-14 bg-primary/30 rounded-full"></div>
            <div className="waveform-bar w-1.5 h-6 bg-primary/20 rounded-full"></div>
          </div>

          <div className="mb-8">
            <span className="font-headline font-bold text-2xl text-on-surface tabular-nums">0:00</span>
          </div>

          <div className="flex flex-col gap-6 w-full items-center relative z-10">
            <button className="group relative w-24 h-24 flex items-center justify-center bg-gradient-to-br from-primary to-primary-container rounded-full shadow-[0px_20px_40px_rgba(125,86,45,0.2)] hover:scale-105 active:scale-95 transition-all duration-300">
              <span className="material-symbols-outlined text-on-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>mic</span>
              <div className="absolute -inset-2 border-2 border-primary-container/20 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
            </button>
            <span className="font-headline font-bold text-on-surface">Record Voice</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 mb-2">
            <div className="h-px flex-1 bg-outline-variant/30"></div>
            <span className="text-xs font-bold text-outline uppercase tracking-widest">or</span>
            <div className="h-px flex-1 bg-outline-variant/30"></div>
          </div>
          <button className="flex items-center justify-center gap-3 w-full py-5 bg-surface-container-highest rounded-lg text-on-surface font-semibold hover:bg-surface-container-high transition-colors active:scale-[0.98] duration-150">
            <span className="material-symbols-outlined">upload</span>
            Upload Audio
          </button>
        </div>

        <div className="mt-12 bg-surface-container-lowest p-6 rounded-lg shadow-[0px_20px_40px_rgba(27,28,26,0.04)]">
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 flex-shrink-0 bg-tertiary-container flex items-center justify-center rounded-full text-tertiary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
            </div>
            <div>
              <h4 className="font-headline font-bold text-on-surface mb-1">Pro Tip</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">Ensure a quiet environment and hold the microphone about 6 inches away for crystal-clear cloning.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-end">
          <Link to="/" className="px-8 py-4 bg-on-surface text-surface rounded-full font-bold shadow-xl hover:opacity-90 active:scale-95 transition-all flex items-center gap-2">
            Continue
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
