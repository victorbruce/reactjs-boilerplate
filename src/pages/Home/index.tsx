import { motion } from "framer-motion";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <motion.h1
        className="text-blue-400 mb-4 text-4xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        ⚛️ React Boilerplate
      </motion.h1>
      <motion.p
        className="mt-2 text-gray-600"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
      >
        Status: 🟢 In progress.
      </motion.p>
      <Link
        to="/about"
        className="mt-12 px-4 py-3 bg-blue-400 border-2 rounded-md"
      >
        Learn more
      </Link>
    </div>
  );
};

export default HomePage;
