'use client';

export default function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-gray-600 dark:text-gray-400">
      © {new Date().getFullYear()} Weather App. All rights reserved.
    </footer>
  );
} 