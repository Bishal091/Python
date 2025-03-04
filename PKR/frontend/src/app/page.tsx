import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8">Welcome to Poker Game Platform</h1>
      <div className="space-y-4">
        <Link 
          href="/auth/login"
          className="block w-64 px-6 py-3 text-center bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          Login
        </Link>
        <Link 
          href="/auth/register"
          className="block w-64 px-6 py-3 text-center bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors"
        >
          Register
        </Link>
      </div>
    </div>
  )
} 