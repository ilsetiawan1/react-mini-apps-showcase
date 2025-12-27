import React from 'react'
import { Link } from 'react-router-dom';

const AppCard = () => {

  const miniApps = [
    {
      id: 1,
      name: 'To-do list App',
      slug: 'todo-app',
      created: '08-12-2025',
      description: 'Aplikasi To-do list sederhana yang dibuat menggunakan react',
    },
    {
      id: 2,
      name: 'Calculator App',
      slug: 'calculator-app',
      created: '15-12-2025',
      description: 'Aplikasi Calculaotr sederhana yang dibuat menggunakan react',
    },
  ];

  return (
    <section className="">
      <h1 className="text-4xl font-extrabold">
        Mini Apps <span className="text-lg font-medium">by react</span>
      </h1>
      {/* Card list */}
      <div className="flex flex-col gap-4 py-4">
        {miniApps.map((item, index) => (
          <Link to={`/${item.slug}`} key={index.id} className="">
            <li className="bg-linear-to-br from-teal-500 to-slate-800 text-white p-4 rounded-xl">
              <h1 className="text-lg font-bold">
                Name: <span className="font-normal">{item.name}</span>
              </h1>
              <p className="text-xs font-bold">
                Created: <span className="font-normal">{item.created}</span>
              </p>
              <p className="text-xs font-semibold ">Description: span{item.description}</p>
            </li>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default AppCard