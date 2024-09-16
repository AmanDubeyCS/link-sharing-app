import { MainContainer } from "@/components/addLinks/MainContainer"
import { Header } from "@/components/header/Header"

export default function Home() {
  return (
    <main className="bg-neutral-100">
      <div className="mx-auto max-w-[1440px] bg-transparent">
        <Header />
        <MainContainer />
      </div>
    </main>
  )
}
