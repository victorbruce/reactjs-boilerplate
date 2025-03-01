import { Link } from "react-router";

const AboutPage = () => {
  return (
    <div className="flex flex-col max-w-lg mx-auto gap-4 h-screen justify-center">
      <h1 className="text-3xl font-bold">About This Project</h1>
      <div className="flex flex-col gap-4 text-gray-600">
        <p>
          ReactJs Boilerplate is a personal starter or boilerplate code I
          created to help me boostrap my React frontend project quickly
        </p>
        <p>
          It comes with some best practices such as eslinting, consistent code
          formatting checks before commiting with husky, testing, styling, CI/CD
          pipelines with Github Actions, etc
        </p>
      </div>
      <Link
        to="/"
        className="bg-orange-400 border-2 rounded-md inline-block max-w-[150px] text-center text-black px-4 py-3 mt-4"
      >
        Home
      </Link>
    </div>
  );
};

export default AboutPage;
