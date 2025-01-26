const education = [
  {
    degree: "Bachelor of Science in Data science and Artificial Intelligence",
    institution: "Indian Institute of Technology, Guwahati",
    period: "2023 - 2027",
    description: [
      "Pursuing a Bachelor's degree in Data Science and Artificial Intelligence",
      "Specialized in Software Engineering & Data science",
      "Relevant coursework: Data science and Artificial Intelligence, Machine Learning and Deep Learning, Data Structures and Algorithms",
    ],
  },
  {
    degree: "4 year residential program in Data science and Computer Science Engineering",
    institution: "PW Institute Of Innovation, Bengaluru",
    period: "2023 - 2027",
    description: [
      "4 year residential program in Data Science and computer science engineering",
      "Specialized in Software Engineering & Data science",
      "Relevant coursework: Data science and Artificial Intelligence, Machine Learning and Deep Learning, Data Structures and Algorithms",
    ],
  },
  {
    degree: "Higher secondary education ( 12th )",
    institution: "Fergusson College, Pune",
    period: "2020 - 2022",
    description: [
        "Science stream with Physics, Chemistry, Mathematics and Computer Science",
        "Relevant coursework: Computer Science, Mathematics, Physics, Chemistry",
        ],
  },

];

export default function Education() {
    return (
      <section id="education" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 relative">
            Education
          </h2>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl animate-fadeIn"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary rounded-lg">

                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                        <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                        <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                      </svg>

                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                      <div className="flex items-center mt-2">
                        <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                           <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                           <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                           </svg>
                        <p className="text-gray-600">{edu.institution}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {edu.period}
                    </span>
                  </div>
                </div>
                
                <ul className="mt-6 space-y-3">
                  {edu.description.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-gray-600">
                      <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}