import Link from "next/link";

export default function PaginaCadastrar(){
    return(
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                    Cadastrar
                </h1>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                    <a href="/login">Voltar para o Login</a>
                </button>
                <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">
                    <Link href="/">Voltar para Home</Link>
                </button>
            </main>
        </div>
    )
}