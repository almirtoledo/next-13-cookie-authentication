"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      setName("");
      setEmail("");
      setPassword("");

      alert("Usuário cadastrado!");
    } catch (error) {
      alert("Erro ao cadastrar usuário!");
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl text-white">Sign up</h1>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          className="p-3 rounded-xl bg-zinc-700 outline-none text-white w-full"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
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
