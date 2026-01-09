import React from 'react'

export default function ProfileCard() {
  return (
    <div className="h-full p-6 flex flex-col items-center justify-between">
      <div className="text-center">
        <img
          src="/me.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-2xl grayscale"
        />

        <h2 className="mt-4 text-xl font-semibold">
          MD. Faisal Ahmed
        </h2>

        <p className="text-sm text-gray-400">
          MERN Stack Developer
        </p>

        <p className="mt-2 text-xs text-gray-500">
          Based in Bangladesh
        </p>
      </div>

      <button className="mt-6 w-full bg-emerald-400 text-black py-2 rounded-xl font-medium hover:opacity-90">
        Hire Me
      </button>
    </div>
  );
}

