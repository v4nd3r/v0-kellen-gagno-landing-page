import Image from "next/image"
import { Ruler, Bed, Bath, ShowerHead } from "lucide-react"

type AboutProps = {
  urlImage: string
  altUrlImage: string
  titulo: string
  descricao: string
  descricao2: string
  infoArea: string
  infoQuarto: string
  infoSuite: string
  infoBanheiro: string
}

export function PropertyAbout({ urlImage, altUrlImage, titulo, descricao, descricao2, infoArea, infoQuarto, infoSuite, infoBanheiro }: AboutProps) {

  return (
    <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-4xl text-black font-semibold mb-6">
                        {titulo}
                    </h2>
                    <div className="w-20 h-1 bg-[var(--color-gold)] mb-8" />
                    <p className="font-[family-name:var(--font-body)] text-gray-600 leading-relaxed mb-6">
                        {descricao}
                    </p>
                    {descricao2 != null && (
                        <p className="font-[family-name:var(--font-body)] text-gray-600 leading-relaxed mb-6">
                            {descricao2}
                        </p>
                    )}

                    <div className="w-20 h-1 bg-[var(--color-gold)] mb-8" />

                    <div className="grid w-full grid-cols-2 md:grid-cols-4 items-center gap-6 mt-8 px-5">
                        {infoArea != null && (
                            <div className="flex flex-row gap-[10px]">
                                <Ruler className="w-6 h-6 text-[var(--color-gold)] mb-2 inline" />
                                <div>
                                    <p><b>Área</b></p>
                                    <p className="font-[family-name:var(--font-body)] text-gray-600">
                                        {infoArea}
                                    </p>
                                </div>
                            </div>
                        )}
                        {infoQuarto != null && (
                            <div className="flex flex-row gap-[10px]">
                                <Bed className="w-6 h-6 text-[var(--color-gold)] mb-2 inline" />
                                <div>
                                    <b>Quartos</b>
                                    <p className="font-[family-name:var(--font-body)] text-gray-600">
                                        {infoQuarto}
                                    </p>
                                </div>
                            </div>
                        )}
                        {infoSuite != null && (
                            <div className="flex flex-row gap-[10px]">
                                <Bath className="w-6 h-6 text-[var(--color-gold)] mb-2 inline" />
                                <div>
                                    <b>Suítes</b>
                                    <p className="font-[family-name:var(--font-body)] text-gray-600">
                                        {infoSuite}
                                    </p>
                                </div>
                            </div>
                        )}
                        {infoBanheiro != null && (
                            <div className="flex flex-row gap-[10px]">
                                <ShowerHead className="w-6 h-6 text-[var(--color-gold)] mb-2 inline" />
                                <div>
                                    <b>Banheiros</b>
                                    <p className="font-[family-name:var(--font-body)] text-gray-600">
                                        {infoBanheiro}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
                    <Image
                        src={urlImage}
                        alt={altUrlImage}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}
