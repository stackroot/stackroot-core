import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center w-full h-16 bg-zinc-900 text-zinc-200 dark:bg-zinc-200 dark:text-zinc-900">
      <div className="flex w-full items-center justify-between px-4">
        <span className="font-space">
          &copy;{new Date().getFullYear()} stackroot.dev
        </span>
        <div className="flex items-center justify-between space-x-2">
            <Link href="https://x.com/stackroot" target="_blank" rel="noopener noreferrer">
              <Image
                src="/x.svg"
                alt="X"
                width={18}
                height={18}
              />
            </Link>
            <Link href="https://github.com/stackroot" target="_blank" rel="noopener noreferrer">
              <Image
                src="/github-mark-white.svg"
                alt="GitHub"
                width={21}
                height={20}
              />
            </Link>
        </div>
      </div>
    </footer>
  );
}
