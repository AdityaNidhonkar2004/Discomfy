import { Button } from "@/components/ui/button"
import { SignUpButton } from "@clerk/nextjs"
import {  CheckIcon } from "lucide-react"
import Link from "next/link"
import { subscriptionTiersInOrder } from "@/data/subscriptionTiers"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { formatCompactNumber } from "@/lib/formatters"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { BrandLogo } from "@/components/BrandLogo"
import { HeroBackground } from "./_components/HeroBackground"
import { OurClients } from "./_components/OurClients"
import { WhatWeDo } from "./_components/WhatWeDo"
import GlobalDiscounts from "./_components/GlobalDiscounts"
import OneSolution from "./_components/OneSolution"

export default function HomePage() {
  return (
    <>
     <section className='w-[130vh] md:w-screen min-h-screen'>
      <HeroBackground/>
    </section>
    <section className='w-[130vh] md:w-screen md:overflow-hidden'>
      <OurClients/>
    </section> 
    <section className="w-[130vh] md:w-auto mt-10 bg-blue-300 p-10 md:p-10  md:mx-10  rounded-3xl">
      <WhatWeDo/>
    </section>
    <section className="w-[130vh] md:w-auto mt-10 bg-[#CDC094] p-10 md:mx-10 rounded-3xl ">
      <GlobalDiscounts/>
    </section>
    <section className="w-[130vh] md:w-auto mt-10 bg-[#F6FAFD] p-10 " id="features">
        <OneSolution/>
    </section>
      <section id="pricing" className=" px-8 py-16 bg-accent/10 w-[127vh] md:w-auto">
        <h2 className="text-5xl text-center text-balance font-bold mb-10">
          Pricing software which pays for itself 20x over
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:max-w-screen-xl md:mx-auto">
          {subscriptionTiersInOrder.map(tier => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </div>
      </section>
      <footer className="container pt-16 pb-8 flex flex-col sm:flex-row gap-8 sm:gap-4 justify-between items-start">
        <Link href="/">
          <BrandLogo />
        </Link>
        <div className="flex md:flex-col sm:flex-row gap-8">
          <div className="md:flex gap-8">
            <FooterLinkGroup
              title="Tutorial"
              links={[
                { label: "How to use?", href: "/Demo" },
                { label: "What is it?", href: "/Demo/#steps" },
              ]}
            />
            <FooterLinkGroup
              title="Features"
              links={[{ label: "Festival Discounts", href: "/#features" },
                { label: "No-code Facility", href: "/#features" },
                { label: "Advance analytics", href: "/#features" },
                { label: "Parity Pricing", href: "/#features" },
              ]}
            />
            <FooterLinkGroup
              title="Tools"
              links={[
                { label: "Dashboard", href: "#" },
                { label: "Counting visits of cutomers", href: "#" },
                { label: "Customize the banner", href: "#" },
              ]}
            />
          </div>
        </div>
      </footer>
    </>
  )
}

function PricingCard({
  name,
  priceInCents,
  maxNumberOfVisits,
  maxNumberOfProducts,
  canRemoveBranding,
  canAccessAnalytics,
  canCustomizeBanner,
}: (typeof subscriptionTiersInOrder)[number]) {
  const isMostPopular = name === "Standard"

  return (
    <Card
      className={cn(
        "relative shadow-none rounded-3xl overflow-hidden",
        isMostPopular ? "border-accent border-2" : "border-none"
      )}
    >
      {isMostPopular && (
        <div className="bg-accent text-accent-foreground absolute py-1 px-10 -right-8 top-24 rotate-45 origin-top-right">
          Most popular
        </div>
      )}
      <CardHeader>
        <div className="text-accent font-semibold mb-8">{name}</div>
        <CardTitle className="text-xl font-bold">
          ${priceInCents / 100} /mo
        </CardTitle>
        <CardDescription>
          {formatCompactNumber(maxNumberOfVisits)} pricing page visits/mo
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpButton>
          <Button
            className="text-lg w-full rounded-lg"
            variant={isMostPopular ? "accent" : "default"}
          >
            Get Started
          </Button>
        </SignUpButton>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 items-start">
        <Feature className="font-bold">
          {maxNumberOfProducts}{" "}
          {maxNumberOfProducts === 1 ? "product" : "products"}
        </Feature>
        <Feature>Discomfy discounts</Feature>
        {canAccessAnalytics && <Feature>Advanced analytics(Coming Soon!!)</Feature>}
        {canRemoveBranding && <Feature>Remove Easy Discomfy branding </Feature>}
        {canCustomizeBanner && <Feature>Banner customization</Feature>}
      </CardFooter>
    </Card>
  )
}

function Feature({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <CheckIcon className="size-4 stroke-accent bg-accent/25 rounded-full p-0.5" />
      <span>{children}</span>
    </div>
  )
}

function FooterLinkGroup({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div className="flex flex-col gap-4 mb-5">
      <h3 className="font-semibold">{title}</h3>
      <ul className="flex flex-col gap-2 text-sm">
        {links.map(link => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
