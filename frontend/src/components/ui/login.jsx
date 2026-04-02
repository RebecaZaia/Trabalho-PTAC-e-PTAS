import Link from "next/link"

export function LoginForm() {
  return (
    <form className="flex flex-col gap-4">

      <div>
        <label className="text-sm text-gray-700">
          Identificação de usuário
        </label>
        <input
          type="text"
          placeholder="E-mail ou CPF"
          className="w-full p-2 rounded-md border bg-white border-green-700"
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm text-gray-700">Senha</label>
        <input
          type="password"
          placeholder="Insira sua senha"
          className="w-full p-2 rounded-md border bg-white border-green-700"
        />
        <a href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
          Esqueceu sua senha?
        </a>
      </div>

      <button className="bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
        Acessar
      </button>

      <button
        type="button"
        className="bg-white border py-2 rounded-md border-green-700 text-green-900"
      >
        Entrar com o Google
      </button>

      <p className="text-sm text-center">
        Ainda não possui uma conta?{" "}
        <a href="/cadastrar" className="text-green-700 font-semibold">
          Cadastre-se
        </a>
      </p>

      <p className="text-sm text-center text-green-700">
        <Link href="/" className="text-green-700 font-semibold">
          Continuar como visitante
        </Link>
      </p>
    </form>
  )
}