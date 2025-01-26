const experiences = [
  {
    title: "Technical Lead & co-ordinator",
    company: "Open source club, PWIOI",
    period: "2024 - Present",
    description: [
      "Led a team of 5 developers in building enterprise-level applications for club",
      "Implemented microservices architecture reducing system downtime by 40% increased traffic by 30% on website",
      "Mentored members and conducted code reviews",
    ],
  },
  {
    title: "Open Source Developer",
    company: "GSSoc24`, SWOC25` and HacktoberFest24`",
    period: "Oct 2024 - Nov 2024",
    description: [
      "Developed and maintained multiple client websites using React and Node.js",
      "Improved application performance by 60% through code optimization",
      "Collaborated with UX team to implement responsive designs",
    ],
  },
  {
    title: "General Secratary of Technical Council in PWIOI",
    company: "Technical Council, PWIOI",
    period: "Sep 2023 - May 2024",
    description: [
      "Built and maintained Technical Council communities of Data science club and Web-development club",
      "Organized and managed events, workshops, and hackathons",
      "Built in-house products for communities for effective communication & management",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 relative">
          Experience
        </h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl animate-fadeIn"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    <div className="flex items-center mt-2">
                      <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1.581.814l-4.419-2.946-4.419 2.946A1 1 0 014 16V4zm2-1a1 1 0 00-1 1v10.586l3.419-2.279a1 1 0 011.162 0l3.419 2.279V4a1 1 0 00-1-1H6z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-600">{exp.company}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {exp.period}
                  </span>
                </div>
              </div>
              
              <ul className="mt-6 space-y-3">
                {exp.description.map((item, idx) => (
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