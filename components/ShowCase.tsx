"use client"

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge";

export default function ShowCase() {
  return (
    <section id="showcases" className="min-h-[50vh] max-w-7xl mx-auto px-4 md:px-8 py-16 bg-neutral-50 rounded-xl shadow-lg scroll-mt-24 text-white bg-gradient-to-b from-sky-800 to-sky-300 mb-24">
      <h2 className="text-2xl md:text-4xl font-root mb-6">Showcases</h2>
      <div className="max-w-3xl flex flex-col">
        <span>Real-world frontend builds ,  live soon.</span>
        <span>Wallet Connect · Token Minting · Staking UI</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-6">
        {[
          { title: 'Wallet Connect', comingSoon: false, url: '/wallet' },
          { title: 'ERC20 Token Mint UI', comingSoon: true, url: '/mint' },
          { title: 'Staking Interface', comingSoon: true, url: '/staking' },
        ].map((item) => (
          <Card
            key={item.title}
            className="bg-white font-root rounded-2xl transition-transform duration-300 hover:-translate-y-2 shadow-xl"
          >
            <CardHeader>
              <CardTitle>
                {item.title}
              </CardTitle>
              <CardAction className="flex justify-between items-center">
                <CardDescription>
                  {item.comingSoon ? <Badge variant="secondary">Coming Soon</Badge> : <Badge variant="default">Available Now</Badge>}
                </CardDescription>
              </CardAction>
            </CardHeader>
            <CardContent >
              {item.comingSoon
                ? 'This feature is coming soon.'
                : 'This feature is available now.'}
             
            </CardContent>
            <CardFooter className="flex justify-end">
              {item.comingSoon ? (
                <Button
                  disabled
                >
                  Coming Soon
                </Button>
              ) : (
                <Button
                  onClick={() => window.location.href = item.url}
                >
                  Explore Now
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
