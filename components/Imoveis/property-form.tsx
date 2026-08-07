"use client"

import { useState } from "react"

const WHATSAPP_NUMBER = "5527992743485"
const EMAIL = "kellen.es@associadolopes-es.com.br"

type FormProps = {
  titulo: string
  descricao: string
  opcoes: string[]
  nomeEmpreedimento: string
}

export function PropertyForm({ titulo, descricao, opcoes, nomeEmpreedimento }: FormProps) {

  const [formData, setFormData] = useState({
      nome: "",
      telefone: "",
      interesse: opcoes[0] || ""
    })

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      const message = `Olá! Me chamo ${formData.nome} e tenho interesse no ${nomeEmpreedimento} (${formData.interesse}). Meu telefone é ${formData.telefone}. Gostaria de mais informações.`
      const whatsappUrl = `https://wa.me/5527992743485?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, "_blank")
    }

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-4xl text-black font-semibold mb-4">
              {titulo}
            </h2>
            <p className="font-[family-name:var(--font-body)] text-gray-600">
              {descricao}
            </p>
            <div className="w-20 h-1 bg-[#c49b63] mx-auto mt-4" />
          </div>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg border border-gray-100">
            <div className="space-y-6">
              <div>
                <label className="block font-[family-name:var(--font-body)] text-sm font-medium text-black mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  required
                  value={formData.nome}
                  onChange={(e) => setFormData({...formData, nome: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 font-[family-name:var(--font-body)] text-black focus:outline-none focus:ring-2 focus:ring-[#c49b63] focus:border-transparent"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block font-[family-name:var(--font-body)] text-sm font-medium text-black mb-2">
                  Telefone / WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  value={formData.telefone}
                  onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 font-[family-name:var(--font-body)] text-black focus:outline-none focus:ring-2 focus:ring-[#c49b63] focus:border-transparent"
                  placeholder="(27) 99999-9999"
                />
              </div>
              <div>
                <label className="block font-[family-name:var(--font-body)] text-sm font-medium text-black mb-2">
                  Interesse
                </label>
                <select
                  value={formData.interesse}
                  onChange={(e) => setFormData({...formData, interesse: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 font-[family-name:var(--font-body)] text-black focus:outline-none focus:ring-2 focus:ring-[#c49b63] focus:border-transparent bg-white"
                >
                  {opcoes.map((opcao, index) => (
                    <option key={index} value={opcao}>{opcao}</option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-[#c49b63] text-white py-4 rounded-lg font-[family-name:var(--font-body)] font-semibold hover:bg-[#b38a52] transition-colors"
              >
                Enviar pelo WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
