'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  services,
  tech,
  projects,
  testimonials,
  pricing,
  defaultFaqs,
  defaultBlogs
} from '../data/mockData';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function AgencyPage({ blogs = defaultBlogs, faqs = defaultFaqs }) {
  return (
    <main className="overflow-x-hidden">
      <section className="relative px-6 pt-24 pb-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/20 via-transparent to-transparent" />
        <div className="absolute inset-0 -z-20 bg-grid-light dark:bg-grid-dark [background-size:36px_36px]" />
        <motion.div initial="hidden" animate="show" variants={fadeUp} className="mx-auto max-w-7xl text-center">
          <p className="inline-flex rounded-full border px-4 py-1 text-sm glass">Premium Web Development Agency</p>
          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-violet-400 to-accent bg-clip-text text-transparent">
            Build Futuristic Digital Products with AlphaWeb Studio
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
            We create scalable web applications, premium user interfaces, and robust backend systems using Next.js, Tailwind CSS, Node.js, and cloud-ready architecture.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a href="#contact" className="rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-glow">Get Started</a>
            <a href="#projects" className="rounded-xl border border-slate-300 dark:border-slate-700 px-6 py-3 font-semibold">View Projects</a>
          </div>
        </motion.div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="section-title">About Us</h2>
        <p className="section-subtitle">At AlphaWeb Studio, our mission is to engineer high-performance web solutions that combine innovation, elegant design, and scalable infrastructure for long-term growth.</p>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="section-title">Services</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <motion.article key={item.title} whileHover={{ y: -6 }} className="glass rounded-2xl p-6">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="tech" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="section-title">Technology Stack</h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {tech.map((item) => <span key={item} className="rounded-full glass px-4 py-2 text-sm">{item}</span>)}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="section-title">Projects / Portfolio</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="overflow-hidden rounded-2xl glass">
              <Image src={project.image} alt={project.title} width={600} height={400} className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {['Fast performance', 'Modern architecture', 'Scalable backend systems', 'Clean UI/UX design'].map((point) => (
            <div key={point} className="rounded-xl glass p-4">{point}</div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="section-title">Testimonials</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="glass rounded-2xl p-6">
              <p>“{item.quote}”</p>
              <p className="mt-4 text-sm text-slate-500">{item.name} · {item.company}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="section-title">Our Process</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {['Idea', 'Design', 'Development', 'Launch'].map((step, index) => (
            <div key={step} className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-primary">Step {index + 1}</p>
              <p className="font-semibold mt-1">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="section-title">Pricing Plans</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {pricing.map((item) => (
            <div key={item.plan} className="glass rounded-2xl p-6">
              <h3 className="text-xl font-semibold">{item.plan}</h3>
              <p className="mt-2 text-3xl font-bold">{item.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {item.features.map((feature) => <li key={feature}>• {feature}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="blog" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="section-title">Blog</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {blogs.map((post) => (
            <article key={post.title} className="glass rounded-2xl p-6">
              <h3 className="font-semibold">{post.title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="section-title">FAQ</h2>
        <div className="mt-8 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="glass rounded-xl p-4">
              <summary className="cursor-pointer font-medium">{faq.question}</summary>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="section-title">Contact</h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <form className="glass rounded-2xl p-6 space-y-4">
            <input className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent p-3" placeholder="Your name" />
            <input type="email" className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent p-3" placeholder="Email" />
            <textarea className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent p-3" rows={4} placeholder="Tell us about your project" />
            <button className="rounded-xl bg-primary px-5 py-3 font-semibold text-white">Send Message</button>
          </form>
          <div className="glass rounded-2xl p-6 space-y-3">
            <p>Email: hello@alphawebstudio.com</p>
            <p>LinkedIn: /company/alphaweb-studio</p>
            <p>X / Twitter: @alphawebstudio</p>
            <p>GitHub: github.com/alphawebstudio</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-8 px-6">
        <div className="mx-auto max-w-7xl flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-sm text-slate-500">
          <p>© {new Date().getFullYear()} AlphaWeb Studio. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#">LinkedIn</a><a href="#">GitHub</a><a href="#">Dribbble</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
