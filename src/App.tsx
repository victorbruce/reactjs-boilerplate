import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <motion.h1
        className="text-blue-400 mb-4"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        ⚛️ React Boilerplate
      </motion.h1>
      <motion.p initial={{ y: 20 }} animate={{ y: 0 }}>
        Status: 🟢 In progress.
      </motion.p>
    </>
  );
}

export default App;
