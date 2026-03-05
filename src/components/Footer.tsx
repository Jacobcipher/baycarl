"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto text-center">
        {/* Quote */}
        <p className="text-accent/70 italic text-sm mb-6">
          &ldquo;Be the change you wish to see&rdquo;
        </p>

        {/* Brand */}
        <p className="text-text-secondary text-sm">
          &copy; {currentYear}{" "}
          <span className="text-accent font-medium">Baycarl</span> LLC. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
