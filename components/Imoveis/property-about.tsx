import Image from "next/image"

type AboutProps = {
  urlImage: string
  altUrlImage: string
  titulo: string
  descricao: string
  descricao2: string
}

export function PropertyAbout({ urlImage, altUrlImage, titulo, descricao, descricao2 }: AboutProps) {

  return (
    <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-4xl text-black font-semibold mb-6">
                        {titulo}
                    </h2>
                    <div className="w-20 h-1 bg-[#c49b63] mb-8" />
                    <p className="font-[family-name:var(--font-body)] text-gray-600 leading-relaxed mb-6">
                        {descricao}
                    </p>
                    {descricao2 != null && (
                        <p className="font-[family-name:var(--font-body)] text-gray-600 leading-relaxed mb-6">
                            {descricao2}
                        </p>
                    )}
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
