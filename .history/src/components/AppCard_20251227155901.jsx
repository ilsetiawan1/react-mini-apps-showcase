import React from 'react';
import { Link } from 'react-router-dom';

const AppCard = () => {
  const miniApps = [
    {
      id: 1,
      name: 'To-do List App',
      slug: 'todo-app',
      created: '08 Dec 2025',
      description: 'A simple to-do list app built with React',
    },
    {
      id: 2,
      name: 'Calculator App',
      slug: 'calculator-app',
      created: '15 Dec 2025',
      description: 'A simple calculator app built with React',
    },
  ];

  return (
    <section className="py-10">
      <h1 className="text-4xl font-extrabold mb-8">
        Mini Apps <span className="text-lg font-medium text-slate-500">by React</span>
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {miniApps.map((item) => (
          <Link key={item.id} to={`/${item.slug}`} className="group">
            {/* Outer gradient */}
            <div
              className="
              relative rounded-2xl p-[2px]
              bg-linear-to-br from-teal-500 to-cyan-400
              transition-all duration-500
              group-hover:shadow-2xl group-hover:shadow-teal-500/40
            "
            >
              {/* Card */}
              <div
                className="
                rounded-2xl bg-slate-900/90 backdrop-blur p-5 h-full
                transition-all duration-500 ease-out
                group-hover:-translate-y-2 group-hover:bg-slate-900
              "
              >
                {/* Badge */}
                <span
                  className="
                  inline-block mb-3 text-xs px-3 py-1 rounded-full
                  bg-teal-500/20 text-teal-300
                "
                >
                  Mini App
                </span>

                {/* Title */}
                <h2
                  className="
                  text-xl font-bold text-white mb-2
                  transition-colors duration-300
                  group-hover:text-teal-300
                "
                >
                  {item.name}
                </h2>

                {/* Description */}
                <p className="text-sm text-slate-400 mb-5">{item.description}</p>

                {/* Footer */}
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>{item.created}</span>

                  {/* Hover action */}
                  <span
                    className="
                    flex items-center gap-1 text-teal-400
                    opacity-0 translate-x-2
                    transition-all duration-300
                    group-hover:opacity-100 group-hover:translate-x-0
                  "
                  >
                    View App →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AppCard;
