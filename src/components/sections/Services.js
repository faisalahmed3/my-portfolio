import React from 'react'
import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="min-h-screen py-24 border-t border-gray-800"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left column */}
        <div>
          <p className="text-sm tracking-widest text-emerald-400">
            SERVICES
          </p>
          <h2 className="mt-4 text-3xl lg:text-4xl font-light leading-snug">
            What I do
          </h2>
        </div>

        {/* Right column */}
        <div className="lg:col-span-2 space-y-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="border-b border-gray-800 pb-8"
            >
              <div className="flex items-start gap-6">
                <span className="text-emerald-400 text-sm mt-1">
                  {service.id}
                </span>

                <div>
                  <h3 className="text-xl font-medium">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-gray-400 max-w-xl">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
