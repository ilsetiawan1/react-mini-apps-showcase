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
      created: 'Coming Soon...',
      description: 'A simple calculator app built with React',
    },
    {
      id: 3,
      name: '...',
      slug: 'calculator-app',
      created: 'Coming Soon...',
      description: 'A simple ... built with React',
    },
    {
      id: 4,
      name: '...',
      slug: 'calculator-app',
      created: 'Coming Soon...',
      description: 'A simple ... built with React',
    },
  ];


  return (
    <section className="pb-5">
      <h1 className="text-4xl font-extrabold mb-8 md:text-center">
        Mini Apps <br className="hidden md:block"></br> <span className="text-lg font-medium text-slate-500">by React</span>
      </h1>

      <div className="grid gap-6 sm:grid-cols-2">
        {miniApps.map((item) => (
          <Link key={item.id} to={`/${item.slug}`} className="group">
            <div
              className="
                rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-5 h-full
                transition-transform duration-300 ease-out
                group-hover:scale-[1.03]
                
              "
            >
              {/* Badge */}
              <span className="inline-block mb-3 text-xs px-3 py-1 rounded-full bg-teal-500/20 text-teal-300">Mini App</span>

              {/* Title */}
              <h2 className="text-xl font-bold text-white mb-2">{item.name}</h2>

              {/* Description */}
              <p className="text-sm text-slate-400 mb-6">{item.description}</p>

              {/* Footer */}
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>{item.created}</span>

                {/* View App */}
                <span
                  className="
                    px-3 py-1 rounded-full border border-slate-700
                    transition-all duration-200
                    group-hover:border-slate-600 group-hover:bg-teal-500/20 group-hover:text-teal-300
                    hover:bg-white hover:text-black
                  "
                >
                  View App
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AppCard;
