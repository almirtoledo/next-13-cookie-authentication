"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      setEmail("");
      setPassword("");

      alert("Usuário cadastrado!");
    } catch (error) {
      alert("Credenciais inválidas!");
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl text-white">Sign in</h1>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="E-mail"
          className="p-3 rounded-xl bg-zinc-700 outline-none text-white w-full"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          className="p-3 rounded-xl bg-zinc-700 outline-none text-white w-full"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
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
