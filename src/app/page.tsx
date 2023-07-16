import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-white text-base">
        Este projeto tem como finalidade testar a autenticação do usuário usando
        cookies e novas features do Next 13, sem o uso de libs externas de
        autenticação
      </p>

      <div className="flex justify-center gap-6">
        <Link href="/signin" className="p-3 text-white rounded-xl bg-zinc-700">
          Login
        </Link>
        <Link href="/signup" className="p-3 text-white rounded-xl bg-green-700">
          Cadastrar usuário
        </Link>
      </div>
    </div>
  );
}
