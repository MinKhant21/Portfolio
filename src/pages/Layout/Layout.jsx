import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Layout() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen">
      {/* Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-[70%] sm:w-[40%] h-[40%] bg-blue-600/10 dark:bg-blue-500/10 blur-[80px] sm:blur-[120px] rounded-full" />
        <div className="absolute top-[20%] -right-[10%] w-[60%] sm:w-[30%] h-[30%] bg-indigo-600/10 dark:bg-indigo-500/10 blur-[80px] sm:blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] left-[20%] w-[80%] sm:w-[50%] h-[50%] bg-purple-600/5 dark:bg-purple-500/5 blur-[80px] sm:blur-[120px] rounded-full" />
      </div>

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-[60]"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main className="pt-16">
        <Outlet />
      </main>

      <footer className="py-12 border-t border-white/5 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Kaung Min Khant. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
