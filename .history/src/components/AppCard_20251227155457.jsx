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
    <section className="py-8">
      <h1 className="text-4xl font-extrabold mb-6">
        Mini Apps <span className="text-lg font-medium text-slate-500">by React</span>
      </h1>

      {/* Card Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {miniApps.map((item) => (
          <Link key={item.id} to={`/${item.slug}`} className="group">
            <div className="relative h-full rounded-2xl bg-gradient-to-br from-teal-500/80 to-slate-900 p-[1px]">
              <div
                className="h-full rounded-2xl bg-slate-900/90 p-5 backdrop-blur transition-all duration-300 
                group-hover:scale-[1.03] group-hover:shadow-xl group-hover:shadow-teal-500/20"
              >
                {/* Badge */}
                <span className="inline-block text-xs px-3 py-1 mb-3 rounded-full bg-teal-500/20 text-teal-300">Mini Project</span>

                {/* Title */}
                <h2 className="text-xl font-bold text-white mb-2">{item.name}</h2>

                {/* Description */}
                <p className="text-sm text-slate-300 mb-4">{item.description}</p>

                {/* Footer */}
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>{item.created}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition">View →</span>
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
