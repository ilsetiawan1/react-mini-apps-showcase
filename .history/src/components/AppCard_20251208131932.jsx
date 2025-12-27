import React from 'react'

const AppCard = () => {

  const miniApps = [
    {
      name: 'To-do list App',
      created: '08-12-2025',
      description: 'Aplikasi To-do list sederhana yang dibuat menggunakan react',
    },
    {
      name: 'Calculator App',
      created: '15-12-2025',
      description: 'Aplikasi Calculaotr sederhana yang dibuat menggunakan react',
    },
  ];

  return (
    <section className='px-4'>
      <h1 className='text-4xl font-extrabold'>
        Mini Apps <span className='text-lg font-medium'>by react</span>
      </h1>
      {/* Card list */}
      <div>
        
      </div>
    </section>
  );
}

export default AppCard