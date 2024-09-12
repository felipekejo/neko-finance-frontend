import { BodyHome } from '@/components/BodyHome'
import { Sidebar } from '@/components/Sidebar'

export default function Home() {
  return (
    <main className="flex h-screen w-full">
      <Sidebar />
      <BodyHome />
    </main>
  )
}
