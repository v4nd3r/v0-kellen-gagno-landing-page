"use client"

import React from "react"
import { useState } from "react"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const message = `Olá! Meu nome é ${formData.name}.
${formData.type ? `Tem interesse em: ${formData.type}` : ""}

${formData.message}`

    const whatsappUrl = `https://wa.me/5527992743485?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contato" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-4">
            Entre em Contato
          </h2>
          <div className="w-20 h-1 bg-[#c49b63] mx-auto mb-8" />
          <p className="font-[family-name:var(--font-body)] text-gray-600 text-lg">
            Preencha o formulário abaixo e vamos encontrar o imóvel ideal para você.     
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 text-left">
            <h3 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-black mb-6">
              Preencha o Formulário
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block font-[family-name:var(--font-body)] text-sm font-medium text-black mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white font-[family-name:var(--font-body)] text-black focus:outline-none focus:ring-2 focus:ring-[#c49b63] focus:border-transparent transition-all"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="type" className="block font-[family-name:var(--font-body)] text-sm font-medium text-black mb-2">
                  Tipo de Interesse
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white font-[family-name:var(--font-body)] text-black focus:outline-none focus:ring-2 focus:ring-[#c49b63] focus:border-transparent transition-all"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="Apartamento">Apartamento</option>
                  <option value="Casa">Casa</option>
                  <option value="Terreno">Terreno</option>
                  <option value="Cobertura">Cobertura</option>
                  <option value="Imóvel Comercial">Imóvel Comercial</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block font-[family-name:var(--font-body)] text-sm font-medium text-black mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white font-[family-name:var(--font-body)] text-black focus:outline-none focus:ring-2 focus:ring-[#c49b63] focus:border-transparent transition-all resize-none"
                  placeholder="Conte-me sobre seu interesse ou duvida..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#c49b63] text-white px-8 py-4 rounded-lg font-[family-name:var(--font-body)] font-semibold hover:bg-[#b38a52] transition-colors text-lg"
              >
                Enviar pelo WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
