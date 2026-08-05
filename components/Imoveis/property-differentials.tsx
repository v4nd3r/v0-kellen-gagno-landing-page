"use client"

import React from "react"

type Differential = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  text: string
}

type DifferentialsProps = {
  diferenciais: Differential[]
}

export function PropertyDifferentials({ diferenciais }: DifferentialsProps) {

  return (
    <section id="diferenciais" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-4xl text-black font-semibold mb-4">
              Diferenciais do Empreendimento
            </h2>
            <div className="w-20 h-1 bg-[#c49b63] mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diferenciais.map((item, index) => (
              <div 
                key={index}
                className="group flex items-start gap-4 bg-white p-5 rounded-lg border border-gray-100 hover:border-[#c49b63] hover:shadow-lg hover:shadow-[#c49b63]/10 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-[#c49b63] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:border-2 group-hover:border-[#c49b63] transition-all duration-300">
                  <item.icon className="w-5 h-5 text-white group-hover:text-[#c49b63] transition-all duration-300" />
                </div>
                <p className="font-[family-name:var(--font-body)] text-gray-700 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}
