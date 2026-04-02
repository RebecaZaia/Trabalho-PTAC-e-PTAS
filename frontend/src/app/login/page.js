import { LoginForm } from "@/components/ui/login";

export default function PaginaLogin(){
    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="mb-6 text-center">
                <h1 className="text-2xl font-bold text-gray-800">
                    Instituto Federal
                </h1>
                <p className="text-gray-600">Mato Grosso do Sul</p>
            </div>
      
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-10 px-16 bg-green-100 dark:bg-black p-8 rounded-2xl shadow-md w-[350px]">
                <h2 className="text-2xl font-bold text-green-700 mb-6 w-full sm:items-start">
                    Entrar
                </h2>
                <LoginForm />
            </main>
        </div>
    )
}