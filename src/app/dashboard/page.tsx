"use client";

import { credentials } from "@/actions/user-actions";
import { useEffect, useState } from "react";

export default function Dashbaord() {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const getCredentials = async () => {
      const data = await credentials();
      setUserId(data.userId);
      setUserName(data.userName);
    };
    getCredentials();
  }, []);

  async function handleLogout() {}

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <h1 className="text-2xl text-white">Dashboard</h1>
        <span className="text-md text-white">
          Welcome <strong>{userName}</strong>
        </span>
      </div>

      <button
        onClick={handleLogout}
        className="p-3 text-white rounded-xl bg-zinc-700"
      >
        Sair
      </button>
    </div>
  );
}
