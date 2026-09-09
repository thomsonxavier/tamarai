"use client";

import { ArrowRight2, Facebook, Instagram, Youtube } from "iconsax-react";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { FormEvent } from "react";
import { useState } from "react";
import { landingImages } from "@/lib/landing-assets";

const iconProps = {
  size: 22,
  variant: "Bold" as const,
  color: "currentColor",
};

const usefulLinks = [
  "Dry Fruits",
  "California Almonds",
  "Prunes",
  "Cashews / Kaju",
  "Pistachio",
  "Walnuts / Akhrot",
  "Dried Cranberry",
  "Figs / Anjeer",
  "Panchmeva",
  "Hunza Tea",
] as const;

const accountLinks = [
  { href: "/contact", label: "Login" },
  { href: "/contact", label: "Register" },
  { href: "/contact", label: "Terms of Service" },
  { href: "/contact", label: "Refund policy" },
  { href: "/stores", label: "Our Stores" },
  { href: "/contact", label: "Contact us" },
] as const;

const learnLinks = [
  { href: "/contact", label: "FAQs" },
  { href: "/contact", label: "Privacy Policy" },
  { href: "/contact", label: "Terms & Conditions" },
  { href: "/contact", label: "Shipping & Returns Policy" },
] as const;

const certifications = [
  { src: landingImages.certFreeDelivery, alt: "Free delivery" },
  { src: landingImages.certSecure, alt: "Secure SSL encryption" },
  { src: landingImages.certMakeInIndia, alt: "Make in India" },
  { src: landingImages.certSwachh, alt: "Swachh Bharat" },
  { src: landingImages.certFssai, alt: "FSSAI" },
  { src: landingImages.certPlanet, alt: "Save the planet" },
] as const;

export function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) {
      return;
    }
    setSent(true);
  }

  return (
    <footer className="relative overflow-x-hidden bg-white text-[#333]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-full overflow-hidden"
        aria-hidden
      >
        <div className="absolute top-10 left-1/2 size-[2100px] -translate-x-1/2 rounded-full border-2 border-[#E4E4E4]" />
        <div className="absolute top-44 left-1/2 size-[1920px] -translate-x-1/2 rounded-full border-2 border-[#E4E4E4]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 pt-8 sm:px-6 md:px-8 lg:pt-10">
        <div className="rounded-[41px] bg-[#f5f0ea] p-4 max-md:rounded-[28px] max-md:p-3">
          <div className="relative overflow-hidden rounded-[28px] bg-[#F6E38A] max-md:rounded-[20px] md:min-h-[419px]">
            <Image
              src={landingImages.discountTop}
              alt=""
              width={1244}
              height={166}
              className="pointer-events-none absolute -top-2 left-[28%] w-[55%] max-w-none"
              aria-hidden
            />
            <Image
              src={landingImages.discountBottom}
              alt=""
              width={803}
              height={98}
              className="pointer-events-none absolute -bottom-2 left-[18%] w-[36%] max-w-none scale-y-100"
              aria-hidden
            />

            <div className="relative z-10 grid items-center gap-8 px-6 py-8 sm:px-10 md:grid-cols-[1fr_minmax(240px,567px)] md:gap-6 md:px-12 md:py-12 lg:px-16">
              <div className="min-w-0 max-w-[635px]">
                <p className="font-sans text-[16px] font-medium text-[#3d3d3d] md:text-[18px]">
                  Just Sign Up &amp; Register it now to become member.
                </p>
                <h2 className="mt-3 font-sans text-[28px] leading-[1.2] font-semibold text-[#262626] sm:text-[36px] md:text-[44px] lg:text-[50px] lg:leading-[61px]">
                  Get 20% discount on your first purchase
                </h2>
                {sent ? (
                  <p className="mt-8 text-sm font-medium text-[#262626]">
                    You&apos;re on the list. Watch your inbox for the code.
                  </p>
                ) : (
                  <form
                    onSubmit={onSubmit}
                    className="mt-8 flex max-w-[560px] flex-col gap-3 sm:flex-row sm:items-center sm:gap-3"
                  >
                    <label htmlFor="register-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="register-email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="h-14 w-full rounded-full bg-white px-6 text-[16px] font-light text-[#3f3939] outline-none placeholder:text-[#3f3939]/70 sm:max-w-[345px]"
                    />
                    <button
                      type="submit"
                      className="relative flex h-14 w-full items-center justify-center rounded-full bg-black pr-14 pl-6 text-[16px] font-black text-white sm:w-[203px] sm:shrink-0"
                    >
                      Register now
                      <span className="absolute top-1/2 right-1.5 flex size-[46px] -translate-y-1/2 items-center justify-center rounded-full bg-white text-black">
                        <ArrowRight2
                          size={16}
                          variant="Linear"
                          color="currentColor"
                          className="-rotate-45"
                        />
                      </span>
                    </button>
                  </form>
                )}
              </div>

              <div className="relative mx-auto aspect-[567/267] w-full max-w-[567px] overflow-hidden rounded-tl-xl rounded-tr-[53px] rounded-br-xl rounded-bl-[102px]">
                <Image
                  src={landingImages.signupNuts}
                  alt="Assortment of nuts and dried fruits"
                  fill
                  sizes="(max-width: 768px) 90vw, 567px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-12 w-full container px-5 pt-6 pb-10 md:mt-16 md:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-4 lg:items-stretch lg:gap-x-10">
          <div className="flex flex-col">
            <Image
              src={landingImages.logoLight}
              alt="Thamarai Brand"
              width={138}
              height={72}
              className="h-[72px] w-auto"
            />
            <div className="mt-16 flex items-center gap-6 text-black lg:mt-24">
              <Link href="https://facebook.com" aria-label="Facebook">
                <Facebook {...iconProps} />
              </Link>
              <Link href="https://x.com" aria-label="X">
                <X className="size-[22px]" strokeWidth={2.2} />
              </Link>
              <Link href="https://instagram.com" aria-label="Instagram">
                <Instagram {...iconProps} />
              </Link>
              <Link href="https://youtube.com" aria-label="YouTube">
                <Youtube {...iconProps} />
              </Link>
            </div>
            <p className="mt-10 hidden text-[14px] text-[#333] lg:mt-auto lg:block lg:pt-16">
              Copyright © 2025 Tamarai All Rights Reserved.
            </p>
          </div>

          <div>
            <p className="font-sans text-[20px] font-semibold tracking-[1.17px] text-[#333]">
              Useful Links
            </p>
            <ul className="mt-4 space-y-3.5">
              {usefulLinks.map((label) => (
                <li key={label}>
                  <Link
                    href="/#arrivals"
                    className="text-[17px] text-[#333] hover:opacity-70"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="grid gap-10 sm:grid-cols-2 sm:gap-8">
              <div>
                <p className="font-sans text-[20px] font-semibold tracking-[1.17px] text-[#333]">
                  My Account
                </p>
                <ul className="mt-4 space-y-3.5">
                  {accountLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[17px] text-[#333] hover:opacity-70"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-sans text-[20px] font-semibold tracking-[1.17px] text-[#333]">
                  Learn More
                </p>
                <ul className="mt-4 space-y-3.5">
                  {learnLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[17px] text-[#333] hover:opacity-70"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-[23px] gap-y-3">
              {certifications.map((cert) => (
                <Image
                  key={cert.alt}
                  src={cert.src}
                  alt={cert.alt}
                  width={72}
                  height={72}
                  className="size-24 object-contain"
                />
              ))}
            </div>
            <Image
              src={landingImages.paymentIcons}
              alt="Accepted payment methods"
              width={386}
              height={76}
              className="mt-6 h-auto w-full max-w-[386px] object-contain object-left"
            />
          </div>
        </div>

        <p className="mt-10 text-[14px] text-[#333] lg:hidden">
          Copyright © 2025 Tamarai All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
