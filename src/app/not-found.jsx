'use client'
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white px-4">
      <div className="text-center max-w-md">
        {/* Animated 404 */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-8xl font-extrabold tracking-widest"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-xl text-gray-300"
        >
          Oops! Page not found
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-2 text-sm text-gray-400"
        >
          The page you are looking for doesn’t exist or has been moved.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 flex gap-3 justify-center"
        >
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-xl hover:bg-gray-200 transition"
          >
            <Home size={18} /> Home
          </button>

          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 px-4 py-2 border border-white rounded-xl hover:bg-white hover:text-black transition"
          >
            <ArrowLeft size={18} /> Go Back
          </button>
        </motion.div>

        {/* Floating dots */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-white rounded-full opacity-30 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-4 h-4 bg-purple-400 rounded-full opacity-40 animate-ping" />
      </div>
    </div>
  );
}
