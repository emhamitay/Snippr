'use client'

import React from 'react';
import { createPortal } from 'react-dom';

type Section = 'terms' | 'privacy';

interface Props {
  section: Section;
  onClose: () => void;
}

const TERMS_ITEMS = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Personal Project',
    body: 'Snippr is a personal project provided as-is. Use it at your own risk. We make no guarantees about uptime, data retention, or feature availability.',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: 'Acceptable Use',
    body: "Don't abuse the service. This includes spamming, attempting to compromise other accounts, scraping, or any activity that strains infrastructure or harms other users.",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 6 5 6 21 6" />
        <path d="M19 6l-1 14H6L5 6" />
        <path d="M10 11v6M14 11v6" />
      </svg>
    ),
    title: 'Content & Accounts',
    body: 'We reserve the right to remove any content or accounts at any time, with or without notice, for any reason including but not limited to violations of these terms.',
  },
];

const PRIVACY_ITEMS = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: 'Data We Store',
    body: 'We store your email address and username to identify your account. This data is used solely for authentication and account management.',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'Password Security',
    body: 'Passwords are never stored in plain text. They are hashed using industry-standard algorithms before being saved to our database.',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: 'No Data Sales',
    body: "We don't sell, rent, or share your personal data with third parties for marketing or commercial purposes. Your data is yours.",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
    title: 'GitHub OAuth',
    body: "GitHub Sign-In is optional. If used, authentication is handled by GitHub and is subject to GitHub's own privacy policy. We only receive your public profile information.",
  },
];

const TermsAndPolicy: React.FC<Props> = ({ section, onClose }) => {
  const [activeTab, setActiveTab] = React.useState<Section>(section);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    setActiveTab(section);
  }, [section]);

  // Close on Escape
  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!isMounted) return null;

  const items = activeTab === 'terms' ? TERMS_ITEMS : PRIVACY_ITEMS;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-md bg-sky-500/15 flex items-center justify-center text-sky-400">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-white">Snippr Legal</span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-200 transition p-1.5 rounded-md hover:bg-slate-800 cursor-pointer"
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-800 bg-slate-950/40">
          {(['terms', 'privacy'] as Section[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2.5 text-xs font-medium transition cursor-pointer ${
                activeTab === tab
                  ? 'text-sky-400 border-b-2 border-sky-500'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              {tab === 'terms' ? 'Terms of Service' : 'Privacy Policy'}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="px-5 py-4 max-h-1/2 overflow-y-auto space-y-3 scrollbar-thin">
          <p className="text-xs text-slate-500 leading-relaxed pb-1">
            {activeTab === 'terms'
              ? 'A short summary of what you agree to by using Snippr.'
              : 'A short summary of how we handle your personal data.'}
          </p>
          {items.map((item, i) => (
            <div key={i} className="flex gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-800">
              <div className="mt-0.5 shrink-0 w-7 h-7 rounded-lg bg-slate-700/60 flex items-center justify-center text-sky-400">
                {item.icon}
              </div>
              <div className="space-y-0.5">
                <p className="text-xs font-semibold text-slate-200">{item.title}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-5 py-3.5 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-600">Last updated March 2026</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-white text-xs font-semibold transition cursor-pointer"
          >
            Got it
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default TermsAndPolicy;
