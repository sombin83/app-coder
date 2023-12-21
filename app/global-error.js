'use client'
 
export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>Ups! Parece que algo no funciona</h2>
        <button onClick={() => reset()}>Recargar sitio</button>
      </body>
    </html>
  )
}