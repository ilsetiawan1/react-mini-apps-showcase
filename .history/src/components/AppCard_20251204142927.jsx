import React from 'react';

export const AppCard = ({ app }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-blue-500 h-full cursor-pointer">
      <div className="flex items-center mb-3">
        <span className="text-4xl mr-3">{app.icon}</span>
        <h3 className="text-xl font-semibold">{app.name}</h3>
      </div>
      <p className="text-gray-600 mb-4 text-sm">{app.description}</p>

      <div className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-700 w-fit">{app.status}</div>
    </div>
  );
};
