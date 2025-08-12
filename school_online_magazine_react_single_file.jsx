import React from "react";
// SchoolMagazine.jsx
// Single-file React component for a beautiful, responsive online school magazine.
// Tailwind CSS classes are used for styling (no external CSS import needed here).
// This component is a starting template — replace placeholder text/images with real content.

export default function SchoolMagazine() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-sky-50 text-slate-900">
      {/* Header / Hero */}
      <header className="max-w-6xl mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-rose-400 flex items-center justify-center text-white font-bold text-lg shadow-lg">SM</div>
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Sunrise School Magazine</h1>
              <p className="text-sm text-slate-600">Issue 1 — Summer 2025 • Celebrating student voices, art & stories</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-4 items-center">
            <a className="px-3 py-2 rounded-md hover:bg-slate-100">Home</a>
            <a className="px-3 py-2 rounded-md hover:bg-slate-100">Features</a>
            <a className="px-3 py-2 rounded-md hover:bg-slate-100">Gallery</a>
            <a className="px-3 py-2 rounded-md hover:bg-slate-100">Submit</a>
            <a className="px-3 py-2 rounded-md bg-indigo-600 text-white">Subscribe</a>
          </nav>
        </div>

        {/* Hero card */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white rounded-2xl p-6 shadow-lg">
            <img src="https://via.placeholder.com/900x360?text=Cover+Photo" alt="Cover" className="w-full rounded-xl shadow-md mb-4 object-cover h-48 w-full" />
            <h2 className="text-2xl font-bold">Feature: "A Day at Our School"</h2>
            <p className="mt-2 text-slate-600">A photo-essay by Grade 8 students showing the bright, busy life on campus. Read about classroom projects, the garden club, and a surprise guest assembly.</p>
            <div className="mt-4 flex gap-3">
              <button className="px-4 py-2 rounded-lg bg-rose-500 text-white font-semibold">Read Feature</button>
              <button className="px-4 py-2 rounded-lg border border-slate-200">Download PDF</button>
            </div>
          </div>

          <aside className="bg-white rounded-2xl p-4 shadow-lg">
            <h3 className="font-bold">This Issue</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>• Cover story: A Day at Our School (Grade 8)</li>
              <li>• Short stories & poems (Grades 1–6)</li>
              <li>• Interviews: Teachers' Corner</li>
              <li>• Sports roundup & achievements</li>
              <li>• Art gallery & comics</li>
            </ul>
            <div className="mt-4">
              <h4 className="text-sm font-semibold">Quick Links</h4>
              <div className="mt-2 flex flex-col gap-2">
                <a className="text-sm underline">Submit your work</a>
                <a className="text-sm underline">Editorial team</a>
                <a className="text-sm underline">Past issues</a>
              </div>
            </div>
          </aside>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left column: Features */}
        <section className="md:col-span-2 space-y-6">
          <article className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold">Feature: Garden Club Project</h3>
            <p className="text-slate-600 mt-2">By Mia (Grade 7). Our school garden helped the cafeteria serve fresh salads. We learned about plants, teamwork, and how to measure soil pH. <a className="underline">Read more →</a></p>
          </article>

          <article className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold">Student Voices — Short Stories</h3>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold">The Invisible Kite (Grade 5)</h4>
                <p className="text-slate-600 text-sm">A magical story about a kite that can fly at night and find lost things. Written by Ethan. <a className="underline">Read →</a></p>
              </div>
              <div>
                <h4 className="font-semibold">A Rainy Day Adventure (Grade 6)</h4>
                <p className="text-slate-600 text-sm">Lina shares a rainy-day mystery that turned into an unexpected friendship. <a className="underline">Read →</a></p>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold">Teacher Interview: Ms. Novak</h3>
            <p className="text-slate-600 mt-2">Q&A with our English teacher about reading habits, her favorite childhood books, and tips for budding writers. <a className="underline">Read the full interview →</a></p>
          </article>
        </section>

        {/* Right column: Sidebar */}
        <aside className="space-y-6">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h4 className="font-semibold">Editorial Team</h4>
            <p className="text-sm text-slate-600 mt-2">Editor-in-Chief: Mr. Petrov<br/>Student Editors: Ana (9th), Marko (8th)</p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h4 className="font-semibold">Submit Your Work</h4>
            <p className="text-sm text-slate-600 mt-2">Deadline for next issue: <strong>September 15, 2025</strong>. Send stories, poems, drawings to <em>magazine@sunrise.edu</em> or drop physical work in the blue box by reception.</p>
            <div className="mt-3 flex gap-2">
              <button className="px-3 py-2 rounded-lg border">Submission Guidelines</button>
              <button className="px-3 py-2 rounded-lg bg-indigo-600 text-white">Submit Now</button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h4 className="font-semibold">Poll</h4>
            <p className="text-sm text-slate-600 mt-2">Which section is your favorite?</p>
            <form className="mt-3 flex flex-col gap-2 text-sm">
              <label><input type="radio" name="poll" /> Stories</label>
              <label><input type="radio" name="poll" /> Art</label>
              <label><input type="radio" name="poll" /> Interviews</label>
              <button className="mt-2 px-3 py-2 rounded-lg bg-rose-500 text-white">Vote</button>
            </form>
          </div>
        </aside>
      </main>

      {/* Gallery strip */}
      <section className="max-w-6xl mx-auto p-6">
        <h3 className="text-xl font-bold mb-4">Art & Photo Gallery</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="bg-white rounded-xl p-2 shadow-sm">
              <img alt={`gallery-${i}`} src={`https://via.placeholder.com/400x300?text=Art+${i+1}`} className="rounded-md object-cover w-full h-40" />
              <p className="text-xs mt-2 text-slate-600">Title by Grade {Math.ceil(Math.random() * 8)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / About */}
      <footer className="max-w-6xl mx-auto p-6 mt-6">
        <div className="bg-white rounded-2xl p-6 shadow-inner">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold">About the Magazine</h4>
              <p className="text-sm text-slate-600 mt-2">Our school magazine shares student writing, art, and news. It's run by students with guidance from teachers — everyone is welcome to contribute.</p>
            </div>

            <div>
              <h4 className="font-bold">Contact</h4>
              <p className="text-sm text-slate-600 mt-2">Email: <em>magazine@sunrise.edu</em><br/>Address: Sunrise School, Main St. 12</p>
            </div>

            <div>
              <h4 className="font-bold">Quick Tips for Teachers</h4>
              <ul className="text-sm text-slate-600 mt-2 space-y-1">
                <li>• Use class time for submissions.</li>
                <li>• Run a peer-editing session.</li>
                <li>• Encourage younger students to draw for pages.</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-slate-500">© {new Date().getFullYear()} Sunrise School Magazine — Created with love by students & teachers</div>
        </div>
      </footer>
    </div>
  );
}
