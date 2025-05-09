import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center w-full h-16 bg-sky-900 text-zinc-200 dark:bg-zinc-200 dark:text-zinc-900">
      <div className="w-full px-4 md:px-8 flex items-center justify-between">
        <span className="font-root">
          &copy;{new Date().getFullYear()} stackroot.dev
        </span>
        <div className="flex items-center justify-between space-x-6">
            <Link href="https://github.com/stackroot" target="_blank" rel="noopener noreferrer">
              <Image
                src="/icons/github-mark-white.svg"
                alt="GitHub"
                width={20}
                height={20}
              />
            </Link>
            <Link href="https://x.com/stackroot" target="_blank" rel="noopener noreferrer">
              <Image
                src="/icons/x.svg"
                alt="X"
                width={18}
                height={18}
              />
            </Link>
        </div>
      </div>
    </footer>
  );
}
