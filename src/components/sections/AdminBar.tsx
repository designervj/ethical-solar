"use client";

import React, { useState } from "react";
import { 
  LayoutDashboard, 
  MessageSquare, 
  Edit3, 
  Eye,
  EyeOff
} from "lucide-react";

export default function AdminBar() {
  // State Management
  const [editMode, setEditMode] = useState(false);
  const [showComments, setShowComments] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const commentCount = 12; // Read-only count

  // Collapsed Floating Button (when isVisible is false)
  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed top-3 right-3 z-[10000] flex items-center gap-2 px-4 h-8 bg-text border border-white/20 text-white/80 rounded-full transition-all duration-200 hover:scale-105 hover:border-accent hover:text-white font-semibold text-[11px] shadow-lg shadow-black/40"
        title="Show Admin Bar"
      >
        <Eye className="w-3.5 h-3.5 text-accent" />
        <span>Show Admin Bar</span>
      </button>
    );
  }

  return (
    <div className="w-full bg-text text-white text-[13px] font-sans border-b border-white/10 relative z-[9999] select-none">
      <div className="w-full px-4 h-11 flex items-center justify-between">
        
        {/* Left Section (Dashboard Link) */}
        <div className="flex items-center">
          <a 
            href="#admin-dashboard" 
            className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors duration-200 font-bold uppercase tracking-wider text-[11px]"
            onClick={(e) => {
              e.preventDefault();
              alert("Redirecting to Admin Dashboard...");
            }}
          >
            <LayoutDashboard className="w-3.5 h-3.5 transition-colors duration-200" />
            <span>ADMIN DASHBOARD</span>
          </a>
        </div>

        {/* Right Section (Interactive Controls) */}
        <div className="flex items-center gap-3">
          {/* Comments Toggle Button */}
          <button 
            onClick={() => setShowComments(!showComments)}
            className={`h-7 px-3 rounded-full flex items-center gap-2 transition-all border text-[11px] font-semibold ${
              showComments 
                ? "bg-accent/10 border-accent text-accent hover:bg-accent/20" 
                : "bg-white/5 border-white/20 text-white/80 hover:bg-white/10 hover:text-white"
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{showComments ? "Hide Comments" : `Show Comments (${commentCount})`}</span>
          </button>

          {/* Edit Mode Button */}
          <button 
            onClick={() => setEditMode(!editMode)}
            className={`h-7 px-3 rounded-full flex items-center gap-1.5 transition-all text-[11px] font-semibold border ${
              editMode 
                ? "bg-accent border-accent text-white hover:bg-accent/90 shadow-[0_0_12px_rgba(255,112,32,0.4)]" 
                : "bg-white/5 border-white/20 text-white/80 hover:bg-white/10 hover:text-white"
            }`}
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Edit Mode {editMode ? "ON" : "OFF"}</span>
          </button>

          {/* Vertical Divider */}
          <span className="text-white/20 select-none">|</span>

          {/* Hide Button */}
          <button 
            onClick={() => setIsVisible(false)}
            className="h-7 w-7 rounded-full flex items-center justify-center bg-transparent text-white/80 hover:bg-white/15 hover:text-white transition-all"
            title="Hide Admin Bar"
          >
            <EyeOff className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Inline Edit Banner (under the bar, when editMode is true) */}
      {editMode && (
        <div className="w-full bg-accent text-white text-center py-2 text-[12px] font-medium animate-pulse border-t border-white/10">
          ✨ Inline editing is active. Hover over any text block on the page and click to update.
        </div>
      )}
    </div>
  );
}

