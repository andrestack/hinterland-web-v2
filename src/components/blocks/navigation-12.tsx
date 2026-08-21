"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";

import { ThemeSelector } from "@/providers/Theme/ThemeSelector";

const links: Array<{ label: string; href: string }> = [
  { label: "Home", href: "/" },
  { label: "About", href: "/preview-about" },
  { label: "Blog", href: "/preview-blog" },
  { label: "Contact", href: "#contact" },
];

const menuStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
};

const menuItem: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function Navigation12() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1400px]">
        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex h-16 items-center justify-between gap-3 rounded-full border border-border bg-card/80 pl-5 pr-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.12)] backdrop-blur-xl"
          aria-label="Primary"
        >
          <a
            href="/"
            className={`flex items-center gap-2.5 rounded-full text-foreground ${focusRing}`}
          >
            <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-primary">
              <span className="absolute h-3 w-3 rounded-full border-[1.5px] border-primary-foreground" />
              <span className="absolute right-1 top-1 h-1 w-1 rounded-full bg-primary-foreground" />
            </span>
            <span className="text-[15px] font-semibold tracking-tight">
              Hinterland Web
            </span>
          </a>

          <div className="hidden items-center md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${focusRing} ${
                  isActive(link.href)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav12-active"
                    className="absolute inset-0 rounded-full bg-muted"
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <div className="hidden md:block">
              <ThemeSelector />
            </div>
            <a
              href="#contact"
              className={`hidden items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors duration-200 hover:opacity-90 md:inline-flex ${focusRing}`}
            >
              Let&apos;s talk
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="nav12-mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className={`flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-colors duration-200 hover:bg-muted md:hidden ${focusRing}`}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </motion.nav>

        <AnimatePresence>
          {open && (
            <motion.div
              id="nav12-mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden md:hidden"
            >
              <motion.nav
                initial="hidden"
                animate="visible"
                variants={menuStagger}
                className="mt-3 rounded-3xl border border-border bg-card/90 p-2 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.12)] backdrop-blur-xl"
                aria-label="Mobile"
              >
                {links.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    variants={menuItem}
                    onClick={() => setOpen(false)}
                    className={`flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-left text-[15px] font-medium transition-colors duration-200 ${focusRing} ${
                      isActive(link.href)
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground hover:bg-muted/50"
                    }`}
                  >
                    {link.label}
                    {isActive(link.href) && (
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    )}
                  </motion.a>
                ))}
                <motion.div
                  variants={menuItem}
                  className="mt-2 flex items-center justify-between border-t border-border px-4 pb-2 pt-3"
                >
                  <span className="text-xs text-muted-foreground">Theme</span>
                  <ThemeSelector />
                </motion.div>
                <motion.div variants={menuItem} className="grid gap-2 px-2 pb-2">
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className={`inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors duration-200 hover:opacity-90 ${focusRing}`}
                  >
                    Let&apos;s talk
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Navigation12;
