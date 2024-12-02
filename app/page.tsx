import SecretSantaForm from '../components/SecretSantaForm'
import SnowfallBackground from '../components/SnowfallBackground'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-900 to-red-900 flex flex-col items-center justify-center p-4">
      <SnowfallBackground />
      <div className="z-10 w-full max-w-md">
        <h1 className="text-4xl font-bold text-center text-white mb-8 drop-shadow-lg">
          Secret Santa Randomizer
        </h1>
        <SecretSantaForm />
      </div>
    </main>
  )
}

