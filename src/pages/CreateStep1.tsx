import { Link } from 'react-router-dom';
import TopAppBar from '../components/TopAppBar';
import BottomNav from '../components/BottomNav';

export default function CreateStep1() {
  return (
    <div className="min-h-screen pb-24">
      <TopAppBar title="Create Digital Memory" showBack={true} />
      
      <main className="pt-24 px-6 max-w-xl mx-auto space-y-8">
        <div className="space-y-3">
          <div className="flex justify-between items-end">
            <span className="text-xs font-bold font-headline uppercase tracking-widest text-primary">Step 01 / 04</span>
            <span className="text-sm font-medium text-on-surface-variant">Image Analysis</span>
          </div>
          <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
            <div className="h-full bg-primary w-1/4 rounded-full"></div>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-3xl font-headline font-extrabold tracking-tight text-on-surface">Upload a clear front-facing photo</h2>
          <p className="text-on-surface-variant leading-relaxed">Our AI will use this to generate a faithful digital version of your loved one.</p>
        </div>

        <div className="relative group cursor-pointer">
          <div className="custom-dashed aspect-square flex flex-col items-center justify-center p-8 bg-surface-container-low transition-all duration-300 group-hover:bg-surface-container-high">
            <div className="w-20 h-20 rounded-full bg-primary-container flex items-center justify-center mb-6 text-primary shadow-sm">
              <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'wght' 300" }}>add_a_photo</span>
            </div>
            <p className="text-lg font-semibold text-primary mb-1">Select from library</p>
            <p className="text-sm text-on-surface-variant text-center px-4">JPEG, PNG or HEIC up to 10MB</p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="col-span-7 relative rounded-xl overflow-hidden aspect-[4/5] shadow-xl">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmBfO5gGTJaY1WxoRUCfUMwO356xkHOqB8mJ12ccq4l6Wvjn37YOw1GN9qrCyY_4M4ZLgl3-i54lZUG1kFoghdcV_AtRmMJ5-FVZxvX-EhnPAYkxlBYBKnveOA0gylLXn8T5wjTOHVikv6GYKZNqUCFho30hkCdrfI1GvjdX8wp6YtIsV__fqRt5tWKA1U0qCFPkygTLOXzxqVGHLKFJRVR5COJDA0iVtyzfkSmjEDPiGEJl6PbfebhYhggizU1QwbVfJpoOv5FQU" alt="Sample processing photo" className="w-full h-full object-cover grayscale opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent"></div>
            <div className="absolute top-1/2 left-0 w-full ai-scan-line"></div>
          </div>
          
          <div className="col-span-5 flex flex-col gap-4">
            <div className="p-4 bg-tertiary-container rounded-lg rounded-bl-sm">
              <p className="text-xs font-medium text-on-tertiary-container font-headline">AI Suggestion</p>
              <p className="text-sm text-on-tertiary-container leading-snug mt-1 italic">"Ensuring neutral lighting helps maintain details."</p>
            </div>
            
            <div className="relative rounded-xl overflow-hidden aspect-square shadow-lg border-2 border-primary-container">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvTFot3ojVFofIScOw_F2CLuYNzzj-4WY2C04YymKfI18G5JwsXdcLaEz_W8ZjW8GU3XOXX8LENM5Um7Z7mMawLT72uejCv6qv8-_hW2CtqTjMZOfFcInkA5nttvkYqI92fKezzYLtrsIyHD-WZh9mZ3XYzY1FgQFY6sUKgNwStc7McAMDgAD5MuDtRyt6Y9PSPl4_OPbfBxMd56myHoU6LtHeYtsdqzyCnxcxVcg0P7din6y2yiWaMbgSk2PuK6jLIYczx95TZps" alt="Processed portrait" className="w-full h-full object-cover" />
              <div className="absolute top-2 right-2 bg-primary px-2 py-0.5 rounded-full text-[10px] font-bold text-on-primary uppercase tracking-tighter">Preview</div>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <Link to="/create/step2" className="flex items-center justify-center w-full bg-gradient-to-br from-primary to-[#ffcfa1] text-on-primary h-16 rounded-full font-headline font-bold text-lg shadow-[0px_20px_40px_rgba(125,86,45,0.2)] hover:scale-[1.02] active:scale-[0.96] transition-all duration-200">
            Continue to Step 2
          </Link>
          <p className="text-center mt-4 text-xs text-on-surface-variant">By continuing, you agree to our processing of biometric data.</p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
