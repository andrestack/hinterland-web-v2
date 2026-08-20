"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronUp, ChevronDown } from "lucide-react";

import { ThemeSelector } from "@/providers/Theme/ThemeSelector";

export function Navigation5() {
  const [isExpanded, setIsExpanded] = useState(false);
  const navContainerRef = useRef<HTMLDivElement>(null);

  const navItems: Array<{
    title: string;
    image: string;
    href: string;
    tags?: string[];
  }> = [
    { title: "Home", image: "/svg/placeholder.svg", href: "/" },
    { title: "About", image: "/svg/placeholder.svg", href: "/preview-about" },
    { title: "Blog", image: "/svg/placeholder.svg", href: "/preview-blog" },
    {
      title: "Contact",
      image: "/svg/placeholder.svg",
      href: "#contact",
    },
  ];

  const socialLinks: Array<{ name: string; href: string }> = [];

  return (
    <>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsExpanded(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-md z-50 cursor-pointer"
          />
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="fixed bottom-6 left-0 right-0 z-50 px-6 pointer-events-none"
      >
        <div className="max-w-2xl mx-auto pointer-events-auto">
          <div
            ref={navContainerRef}
            className="rounded-2xl bg-card border border-border shadow-xl overflow-hidden"
          >
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="p-4 space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center"
                    >
                      <svg
                        className="w-6 h-6 text-primary-foreground"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8z" />
                      </svg>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                      className="flex items-center justify-between"
                    >
                      <div className="text-2xl font-medium text-foreground leading-tight">
                        Hinterland Web
                      </div>
                      <a
                        href="#"
                        className="px-4 py-2 rounded-sm bg-primary text-primary-foreground text-xs font-medium hover:opacity-90 transition-colors no-underline"
                      >
                        Let&apos;s talk
                      </a>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="-mx-4"
                    >
                      {navItems.map((item, index) => (
                        <motion.a
                          key={item.title}
                          href={item.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.25 + index * 0.05,
                          }}
                          className={`flex items-center justify-between px-4 py-3 border-t hover:bg-muted transition-colors no-underline group cursor-pointer ${
                            index === navItems.length - 1
                              ? "border-border border-b"
                              : "border-border"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-16 h-12 bg-muted rounded-lg overflow-hidden shrink-0 group-hover:w-[84px] transition-all duration-200">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <span className="text-base font-light text-foreground group-hover:text-muted-foreground transition-colors">
                              {item.title}
                            </span>
                          </div>

                          {item.tags && (
                            <div className="flex items-center gap-2">
                              {item.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-xs text-muted-foreground"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </motion.a>
                      ))}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      className="flex items-center justify-between border-t border-border pt-3"
                    >
                      <span className="text-xs text-muted-foreground">Theme</span>
                      <ThemeSelector />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                      className="space-y-1 pt-2"
                    >
                      {socialLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.href}
                          className="block text-xs text-muted-foreground hover:text-foreground transition-colors no-underline"
                        >
                          {link.name}
                        </a>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-between px-6 py-4 cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-2 text-foreground">
                {isExpanded ? (
                  <>
                    <ChevronDown className="w-5 h-5" />
                    <span className="text-sm font-medium">Close Menu</span>
                  </>
                ) : (
                  <>
                    <ChevronUp className="w-5 h-5" />
                    <span className="text-sm font-medium">Open Menu</span>
                  </>
                )}
              </div>

              <div className="text-sm font-medium text-muted-foreground">
                Home
              </div>
            </button>
          </div>
        </div>
      </motion.nav>
    </>
  );
}

export default Navigation5;
