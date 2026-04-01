import { Login } from "@/components/ui/login";
import Link from "next/link";
export default function PaginaLogin(){
    return(
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <Login />
            </main>
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">
              <a href="/cadastrar">Cadastrar</a>
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">
              <Link href="/">Voltar para Home</Link>
            </button>
        </div>
    )
}