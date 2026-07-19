import type { Metadata } from "next"
import { ParqueFloraPage } from "@/components/parque-flora-page"

export const metadata: Metadata = {
  title: "Parque Flora em Jardim Camburi | Kellen Gagno",
  description: "Conheça o Parque Flora: apartamentos de 2 e 3 quartos e 3 suítes, com plantas de 64,78 a 227,01 m² em Jardim Camburi, Vitória.",
}

export default function Page() {
  return <ParqueFloraPage />
}
