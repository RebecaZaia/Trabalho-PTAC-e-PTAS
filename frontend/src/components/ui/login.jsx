import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export function LoginForm() {
  return (
    <div>
    <Card className="w-full max-w-sm bg-bl">
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Identificação de usuário</Label>
              <Input
                id="email"
                type="text"
                placeholder="E-mail ou CPF"
                className="w-full p-2 rounded-md border bg-white border-green-700"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Senha</Label>
              </div>
              <Input 
                id="password" 
                type="password" 
                placeholder="Insira sua senha"
                className="w-full p-2 rounded-md border bg-white border-green-700" 
                required 
              />
              <a href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                  Esqueceu sua senha?
              </a>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className=" w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
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
      </CardFooter>
    </Card>

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
    </div>
  )
}