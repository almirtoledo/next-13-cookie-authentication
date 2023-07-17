"use client";

import { login } from "@/actions/user-actions";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Signin() {
  const router = useRouter();

  async function handleSubmit(data: FormData) {
    const email = data.get("email") as string;
    const password = data.get("password") as string;

    const isLogin = await login(email, password);

    if (!isLogin) {
      alert("Credenciais inválidas!");
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl text-white">Sign in</h1>
      <form action={handleSubmit} className="space-y-3">
        <input
          type="email"
          placeholder="E-mail"
          className="p-3 rounded-xl bg-zinc-700 outline-none text-white w-full"
          name="email"
          required
        />
        <input
          type="password"
          placeholder="Senha"
          className="p-3 rounded-xl bg-zinc-700 outline-none text-white w-full"
          name="password"
          required
        />
        <div className="flex gap-6">
          <button className="p-3 text-white rounded-xl bg-green-700">
            Entrar
          </button>
          <Link href="/" className="p-3 text-white rounded-xl bg-zinc-700">
            Voltar
          </Link>
        </div>
      </form>
    </div>
  );
}
