'use client';

import { useEffect, useState } from 'react';

const endpoints = ['blogs', 'faqs', 'projects', 'services'];

export default function AdminPage() {
  const [token, setToken] = useState('');
  const [active, setActive] = useState('blogs');
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ title: '', excerpt: '', question: '', answer: '', description: '' });
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

  const loadItems = async () => {
    const res = await fetch(`${apiUrl}/api/${active}`);
    const data = await res.json();
    setItems(data);
  };

  useEffect(() => {
    loadItems();
  }, [active]);

  const login = async () => {
    const res = await fetch(`${apiUrl}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'admin@alphawebstudio.com', password: 'admin123' })
    });
    const data = await res.json();
    if (data.token) setToken(data.token);
  };

  const createItem = async (event) => {
    event.preventDefault();
    await fetch(`${apiUrl}/api/${active}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(form)
    });
    setForm({ title: '', excerpt: '', question: '', answer: '', description: '' });
    loadItems();
  };

  const deleteItem = async (id) => {
    await fetch(`${apiUrl}/api/${active}/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    });
    loadItems();
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="flex flex-wrap gap-3">
          <button onClick={login} className="rounded bg-primary px-4 py-2">Secure Admin Login</button>
          {endpoints.map((item) => (
            <button key={item} onClick={() => setActive(item)} className={`rounded px-4 py-2 ${active === item ? 'bg-violet-600' : 'bg-slate-800'}`}>
              Manage {item}
            </button>
          ))}
        </div>

        <section className="grid gap-6 lg:grid-cols-2">
          <form onSubmit={createItem} className="space-y-3 rounded-xl bg-slate-900 p-5 border border-slate-800">
            <h2 className="font-semibold">Create / Update {active}</h2>
            <input className="w-full bg-slate-800 p-2 rounded" placeholder="Title" value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} />
            <input className="w-full bg-slate-800 p-2 rounded" placeholder="Description / Excerpt" value={form.excerpt} onChange={(event) => setForm({ ...form, excerpt: event.target.value, description: event.target.value })} />
            <input className="w-full bg-slate-800 p-2 rounded" placeholder="Question" value={form.question} onChange={(event) => setForm({ ...form, question: event.target.value })} />
            <textarea className="w-full bg-slate-800 p-2 rounded" placeholder="Answer / Content" value={form.answer} onChange={(event) => setForm({ ...form, answer: event.target.value })} />
            <button className="rounded bg-emerald-500 px-4 py-2">Save</button>
          </form>

          <div className="rounded-xl bg-slate-900 p-5 border border-slate-800">
            <h2 className="font-semibold mb-4">Dashboard Analytics</h2>
            <p>Total {active}: {items.length}</p>
            <div className="mt-4 space-y-2 max-h-80 overflow-y-auto">
              {items.map((item) => (
                <div key={item._id} className="rounded bg-slate-800 p-3 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium">{item.title || item.question}</p>
                    <p className="text-xs text-slate-400">{item.excerpt || item.description || item.answer}</p>
                  </div>
                  <button onClick={() => deleteItem(item._id)} className="text-red-400">Delete</button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
