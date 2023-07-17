"use client";

import { createUser } from "@/actions/user-actions";
import { User } from "@/models/user";
import Link from "next/link";

export default function Signup() {
  async function handleSubmit(data: FormData) {
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const password = data.get("password") as string;
    const payload: Partial<User> = { name, email, password };

    const isCreated = await createUser(payload);

    if (isCreated) {
      alert("Usuário criado, faça login!");
    } else {
      alert(
        "Erro ao criar usuário! As credenciais informadas podem estar em uso por outro usuário."
      );
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl text-white">Sign up</h1>
      <form action={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Nome"
          className="p-3 rounded-xl bg-zinc-700 outline-none text-white w-full"
          name="name"
          required
        />
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
            Cadastrar
          </button>
          <Link href="/" className="p-3 text-white rounded-xl bg-zinc-700">
            Voltar
          </Link>
        </div>
      </form>
    </div>
  );
}
