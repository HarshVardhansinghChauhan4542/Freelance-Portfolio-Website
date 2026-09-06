"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";

export default function Footer() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <footer className="border-t border-border/50 py-12 md:py-16">
      <div className="mx-auto max-w-container px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#home"
            className="font-display text-lg tracking-wider text-foreground hover:text-primary transition-colors"
          >
            HARSHVARDHAN
          </a>

          {/* Links */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setContactModalOpen(true)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Email
            </button>
            <a
              href="https://github.com/HarshVardhansinghChauhan4542"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/harsh-vardhan4542/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
          </div>

          {/* Credit */}
          <p className="text-xs text-muted-foreground">
            Designed &amp; built by Harshvardhan Singh Chauhan
          </p>
        </div>
      </div>
      <ContactModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
      />
    </footer>
  );
}
