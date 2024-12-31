export default function Portfolio() {
  // Static Data for Projects
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A modern website built with Next.js and Tailwind CSS.",
      image: "/images/project1.jpg",
      link: "https://example.com/project-one",
    },
    {
      id: 2,
      title: "Project Two",
      description: "A dynamic e-commerce app powered by React and MongoDB.",
      image: "/images/project2.jpg",
      link: "https://example.com/project-two",
    },
    {
      id: 3,
      title: "Project Three",
      description:
        "A portfolio website showcasing design and development skills.",
      image: "/images/project3.jpg",
      link: "https://example.com/project-three",
    },
  ];

  // Static Data for Academics
  const academics = [
    {
      id: 1,
      institution: "XYZ University",
      degree: "Bachelor of Science in Computer Science",
      year: "2020 - 2024",
      description: "Focused on full-stack development and machine learning.",
    },
    {
      id: 2,
      institution: "ABC High School",
      degree: "High School Diploma",
      year: "2016 - 2020",
      description:
        "Graduated with honors, excelling in mathematics and computer science.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 shadow-lg z-50">
        <div className="container mx-auto px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-indigo-500">My Portfolio</h1>
          <ul className="flex space-x-8 text-gray-300">
            <li>
              <a
                href="#about"
                className="hover:text-indigo-400 transition duration-300"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-indigo-400 transition duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#academics"
                className="hover:text-indigo-400 transition duration-300"
              >
                Academics
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Header Section */}
      <header className="text-center py-16 mt-16">
        <h1 className="text-5xl font-extrabold text-indigo-500">
          My Portfolio
        </h1>
        <p className="text-gray-300 mt-4 text-lg">
          A journey through my skills, projects, and achievements.
        </p>
      </header>

      {/* About Me Section */}
      <section
        id="about"
        className="relative bg-gray-800 py-16 px-8 rounded-lg shadow-lg mb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold text-indigo-400 mb-4">
              About Me
            </h2>
            <p className="text-gray-300">
              I'm a passionate developer with expertise in modern web
              technologies. I specialize in building responsive, user-friendly
              applications that blend aesthetics and functionality.
            </p>
            <p className="text-gray-300 mt-4">
              My portfolio reflects my dedication to learning and pushing the
              boundaries of design and development.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/tito.JPG" // Replace with your image path
              alt="My Profile"
              className="rounded-full w-48 h-48 object-cover border-4 border-indigo-500 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-16">
        <h2 className="text-4xl font-bold text-indigo-400 mb-8 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-300 mt-2">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-indigo-500 hover:text-indigo-300 font-medium"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Academics Section */}
      <section id="academics">
        <h2 className="text-4xl font-bold text-indigo-400 mb-8 text-center">
          My Academics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {academics.map((academic) => (
            <div
              key={academic.id}
              className="bg-gray-700 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-100">
                {academic.degree}
              </h3>
              <p className="text-indigo-400 font-medium mt-1">
                {academic.institution}
              </p>
              <p className="text-gray-400 mt-1">{academic.year}</p>
              <p className="text-gray-300 mt-4">{academic.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
