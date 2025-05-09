import Image from "next/image";
export default function Icons() {
    return (
        <div className="grid grid-cols-4 md:grid-cols-12 gap-4 mt-8 pt-6">
            <div className="flex items-center">
                <Image
                    src="/icons/logo-next.svg"
                    alt="Next.js logo"
                    width={24}
                    height={24}
                    className="inline-block mx-2"
                    priority
                />
            </div>
            <div className="flex items-center">
                <Image
                    src="/icons/logo-javascript.svg"
                    alt="JavaScript logo"
                    width={24}
                    height={24}
                    className="inline-block mx-2"
                />
            </div>
            <div className="flex items-center">
                <Image
                    src="/icons/logo-typescript.svg"
                    alt="TypeScript logo"
                    width={24}
                    height={24}
                    className="inline-block mx-2"
                />
            </div>
            <div className="flex items-center">
                <Image
                    src="/icons/logo-tailwindcss.svg"
                    alt="Tailwind CSS logo"
                    width={24}
                    height={24}
                    className="inline-block mx-2"
                />
            </div>
            <div className="flex items-center">
                <Image
                    src="/icons/logo-react.svg"
                    alt="React logo"
                    width={24}
                    height={24}
                    className="inline-block mx-2"
                />
            </div>
            <div className="flex items-center">
                <Image
                    src="/icons/logo-wagmi.svg"
                    alt="Wagmi logo"
                    width={24}
                    height={24}
                    className="inline-block mx-2"
                />
            </div>
            <div className="flex items-center">
                <Image
                    src="/icons/logo-ethers.svg"
                    alt="Ethers.js logo"
                    width={24}
                    height={24}
                    className="inline-block mx-2"
                />
            </div>
            <div className="flex items-center">
                <Image
                    src="/icons/logo-solidity.svg"
                    alt="Solidity logo"
                    width={24}
                    height={24}
                    className="inline-block mx-2"
                />
            </div>
            <div className="flex items-center">
                <Image
                    src="/icons/logo-graphql.svg"
                    alt="GraphQL logo"
                    width={24}
                    height={24}
                    className="inline-block mx-2"
                />
            </div>
            <div className="flex items-center">
                <Image
                    src="/icons/logo-vercel.svg"
                    alt="Vercel logo"
                    width={24}
                    height={24}
                    className="inline-block mx-2"
                />
            </div>
            <div className="flex items-center">
                <Image
                    src="/icons/logo-github.svg"
                    alt="GitHub logo"
                    width={24}
                    height={24}
                    className="inline-block mx-2"
                />
            </div>
            <div className="flex items-center">
                <Image
                    src="/icons/logo-figma.svg"
                    alt="Figma logo"
                    width={24}
                    height={24}
                    className="inline-block mx-2"
                />
            </div>
        </div>

    );
}   