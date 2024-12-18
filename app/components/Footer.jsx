import React from "react";
import { Linkedin, Zap, MessageSquare } from "lucide-react"; // Icons for LinkedIn and Discord

const Footer = () => {
  return (
    <footer className="bg-black flex flex-col p-12 items-center justicfy-center rounded-3xl text-white py-6">
      <div className="container mx-auto flex flex-col gap-4 justify-between items-center px-4">
        {/* Footer Title */}

        {/* Social Links */}
        <div className="flex items-center gap-6">
          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300 ease-in-out"
          >
            <Linkedin size={24} />
            <span>LinkedIn</span>
          </a>

          {/* Discord Link */}
          <a
            href="https://discord.gg/your-invite-link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-300 ease-in-out"
          >
            <MessageSquare size={24} />
            <span>Discord</span>
          </a>
        </div>

        <div className="text-lg flex items-center gap-2 font-semibold mb-4 md:mb-0">
          © 2024{" "}
          <div className="flex items-center">
            <Zap className="w-6 h-6 text-green-500" />
            <h1 className="font-bold text-2xl bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
              Arc<span className="text-2xl  text-white/70 opacity-80">.ai</span>
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
