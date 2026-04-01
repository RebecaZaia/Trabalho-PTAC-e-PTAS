/*import Link from "next/link";

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
}*/

export default function CadastroPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

      {/* Logo */}
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Instituto Federal
        </h1>
        <p className="text-gray-600">Mato Grosso do Sul</p>
      </div>

      {/* Card */}
      <div className="bg-green-100 p-8 rounded-2xl shadow-md w-[350px]">
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          Cadastrar
        </h2>

        <form className="flex flex-col gap-4">

          <input placeholder="Nome completo" className="p-2 rounded-md border" />
          <input placeholder="CPF" className="p-2 rounded-md border" />
          <input placeholder="E-mail" className="p-2 rounded-md border" />
          <input type="password" placeholder="Senha" className="p-2 rounded-md border" />
          <input type="password" placeholder="Confirme sua senha" className="p-2 rounded-md border" />

          <button className="bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
            Acessar
          </button>

          <p className="text-sm text-center">
            Já possui uma conta?{" "}
            <a href="/login" className="text-green-700 font-semibold">
              Login
            </a>
          </p>

          <p className="text-sm text-center text-green-700">
            Entrar como visitante
          </p>

        </form>
      </div>
    </div>
  );
}