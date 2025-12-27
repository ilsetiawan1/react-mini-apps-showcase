import React from 'react'

const AppCard = () => {

  const miniApps = [
    {
      id: 1,
      name: 'To-do list App',
      created: '08-12-2025',
      description: 'Aplikasi To-do list sederhana yang dibuat menggunakan react',
    },
    {
      id: 2,
      name: 'Calculator App',
      created: '15-12-2025',
      description: 'Aplikasi Calculaotr sederhana yang dibuat menggunakan react',
    },
  ];

  return (
    <section className="px-4">
      <h1 className="text-4xl font-extrabold">
        Mini Apps <span className="text-lg font-medium">by react</span>
      </h1>
      {/* Card list */}
      <div className="flex flex-col gap-4">
        {miniApps.map((item, index) => (
          <ul key={index.id} className="">
            <li className="bg-linear-to-br from-teal-500 to-slate-800 text-white p-4 rounded-xl">
              <h1 className="text-lg font-bold">
                Name: <span className="font-normal">{item.name}</span>
              </h1>
              <p className="text-sm font-bold">
                Created: <span className="font-normal">{item.created}</span>
              </p>
              <p className="text-xs font-semibold ">Description: {item.description}</p>
            </li>
          </ul>
        ))}
      </div>
    </section>
  );
}

export default AppCard