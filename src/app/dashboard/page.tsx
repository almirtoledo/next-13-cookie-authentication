"use client";

export default function Dashbaord() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <h1 className="text-2xl text-white">Dashboard</h1>
        <span className="text-md text-white">
          Welcome <strong>Almir</strong>
        </span>
      </div>

      <button className="p-3 text-white rounded-xl bg-zinc-700">Sair</button>
    </div>
  );
}
