import Image from "next/image";
import Counter from "./components/ui/Counter";
import Background from "./components/ui/background";

export const metadata = {

  title: "Causa Tostadores de Café",
  Description: "CAUSA - Microtostadero de Café artesanal de especialidad",
  keywords: ['Cafe', 'Cafe Tostado', 'Cafe de Especialidad', 'Tostadero de Cafe', 'Micro Tostadero de Cafe'],
  openGraph: {
    title: 'Causa Tostadores de Cafe',
    description: 'Cafe de especialidad, cosechado en origen, tostado artesanal directo a tu tasa.',
    type: 'article',
    authors: ['CausaTostadores'],
  },

}


export default function Home() {

  //<Counter />

  
  return (
    <>
      <main className="container m-auto">
     
        <Background />

      </main>

    </>
  )
}


