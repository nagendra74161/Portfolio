import { motion } from 'framer-motion';

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-bg"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
        className="h-20 w-20 rounded-full border-4 border-accent border-t-transparent"
      />
      <div className="absolute bottom-24 text-center text-sm uppercase tracking-[0.3em] text-slate-400">
        Loading portfolio...
      </div>
    </motion.div>
  );
}

export default LoadingScreen;
