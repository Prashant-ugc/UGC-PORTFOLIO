import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, Send, ShieldCheck, Sparkles } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledPackageName?: string;
  prefilledNiche?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  prefilledPackageName,
  prefilledNiche,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    brandUrl: '',
    monthlySpend: '$5k - $20k/mo',
    packageName: prefilledPackageName || 'TikTok Shop & Meta Scaling Pack ($899)',
    selectedDate: '2026-10-27',
    selectedTime: '02:00 PM EST (11:00 AM PST)',
    projectGoals: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledPackageName) {
      setFormData((prev) => ({ ...prev, packageName: prefilledPackageName }));
    }
  }, [prefilledPackageName]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your work email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.brandUrl.trim()) {
      newErrors.brandUrl = 'Please enter your store website or TikTok handle';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API dispatch to booking engine
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="fixed inset-0 -z-10" onClick={onClose}></div>

      <div className="relative w-full max-w-2xl bg-[#0B0D14] border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-auto p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close booking modal"
        >
          <X className="w-4 h-4" />
        </button>

        {isSubmitted ? (
          /* Confirmation View */
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-white font-heading mb-2">
              Strategy Call Confirmed!
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
              Thanks <span className="text-white font-semibold">{formData.fullName}</span>!
              Your 15-minute AI UGC Creative Audit has been reserved for:
            </p>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 max-w-md mx-auto text-left text-xs font-mono space-y-2 mb-8">
              <div className="flex justify-between">
                <span className="text-slate-400">Date:</span>
                <span className="text-white font-bold">{formData.selectedDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Time:</span>
                <span className="text-blue-400 font-bold">{formData.selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Package Interest:</span>
                <span className="text-white font-bold truncate max-w-[200px]">{formData.packageName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Calendar Invite:</span>
                <span className="text-emerald-400 font-bold">Sent to {formData.email}</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-slate-400 mb-6">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>We prepare 3 complimentary custom viral hook angles before the call.</span>
            </div>

            <button
              onClick={onClose}
              className="py-3 px-8 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wide uppercase transition-all cursor-pointer"
            >
              Return to Portfolio
            </button>
          </div>
        ) : (
          /* Form View */
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 font-semibold mb-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>Schedule 15-Min Creative Strategy Call</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-heading">
                Let's Build Winning AI UGC Ads for Your Brand.
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Tell me about your product. I'll review your current ads and come to the call
                with 3 custom viral hook angles ready for you to test.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Liam Vance"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    className={`w-full bg-slate-950 border rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none ${
                      errors.fullName ? 'border-rose-500' : 'border-slate-800 focus:border-blue-500'
                    }`}
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-rose-400 mt-0.5 block">{errors.fullName}</span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    placeholder="liam@luminaskin.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    className={`w-full bg-slate-950 border rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none ${
                      errors.email ? 'border-rose-500' : 'border-slate-800 focus:border-blue-500'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-rose-400 mt-0.5 block">{errors.email}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Store URL */}
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 mb-1">
                    Store URL / TikTok Handle *
                  </label>
                  <input
                    type="text"
                    placeholder="https://yourstore.com"
                    value={formData.brandUrl}
                    onChange={(e) => {
                      setFormData({ ...formData, brandUrl: e.target.value });
                      if (errors.brandUrl) setErrors({ ...errors, brandUrl: '' });
                    }}
                    className={`w-full bg-slate-950 border rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none ${
                      errors.brandUrl ? 'border-rose-500' : 'border-slate-800 focus:border-blue-500'
                    }`}
                  />
                  {errors.brandUrl && (
                    <span className="text-[11px] text-rose-400 mt-0.5 block">{errors.brandUrl}</span>
                  )}
                </div>

                {/* Monthly Paid Ad Spend */}
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 mb-1">
                    Current Monthly Paid Ad Spend
                  </label>
                  <select
                    value={formData.monthlySpend}
                    onChange={(e) => setFormData({ ...formData, monthlySpend: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
                  >
                    <option value="<$5k/mo">&lt; $5,000 / month</option>
                    <option value="$5k - $20k/mo">$5,000 - $20,000 / month</option>
                    <option value="$20k - $50k/mo">$20,000 - $50,000 / month</option>
                    <option value="$50k+/mo">$50,000+ / month (High Scale)</option>
                  </select>
                </div>
              </div>

              {/* Time Slot Picker */}
              <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800">
                <span className="block text-xs font-mono font-medium text-slate-300 mb-2">
                  Select Convenient Strategy Call Slot (US Eastern / Pacific)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { date: 'Tue, Oct 27', time: '02:00 PM EST' },
                    { date: 'Wed, Oct 28', time: '11:30 AM EST' },
                    { date: 'Thu, Oct 29', time: '04:00 PM EST' },
                  ].map((slot, i) => {
                    const isSelected = formData.selectedTime.includes(slot.time);
                    return (
                      <button
                        type="button"
                        key={i}
                        onClick={() =>
                          setFormData({
                            ...formData,
                            selectedDate: slot.date,
                            selectedTime: `${slot.time} (US Timezone)`,
                          })
                        }
                        className={`p-2 rounded-xl text-xs text-center border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-blue-600/30 border-blue-500 text-white font-bold'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <div className="font-semibold">{slot.date}</div>
                        <div className="text-[11px] text-slate-400">{slot.time}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 mb-1">
                  Target Product or Current Creative Struggles (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Scaling on TikTok Shop, need 5 fresh hook variations for our acne serum before next week..."
                  value={formData.projectGoals}
                  onChange={(e) => setFormData({ ...formData, projectGoals: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold text-xs tracking-wide uppercase transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Reserving Call...' : 'Confirm Call & Get 3 Free Hook Angles'}</span>
              </button>

              <div className="text-[11px] text-slate-500 text-center font-mono">
                No high-pressure sales. 15-minute audit with actionable creative insights.
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
