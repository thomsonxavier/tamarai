"use client";

import Image from "next/image";
import type { FormEvent } from "react";
import { useState } from "react";
import { FadeIn } from "@/components/(user)/landing/Motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { landingImages } from "@/lib/landing-assets";
import { cn } from "@/lib/utils";

const fieldClass =
  "h-[50px] rounded-none border-[#CDE0E7] bg-white px-4 text-[16px] tracking-[-0.02em] text-[#2B4862] placeholder:text-[#93B6C3] focus-visible:border-[#93B6C3] focus-visible:ring-[#CDE0E7]";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section className="overflow-x-clip bg-[#FDFAF4] pt-14 text-black md:pt-[80px]">
      <FadeIn>
        <h1 className="text-center font-sans text-[32px] leading-none font-bold tracking-[-1.2px] md:text-[40px]">
          Contact us
        </h1>
      </FadeIn>

      <div className="relative mt-10 md:mt-[60px]">
        <div className="pointer-events-none absolute top-0 left-0 hidden h-full w-[55.4%] max-w-[1063px] rounded-tr-[20px] bg-[#1F1F1F] lg:block" />

        <div className="relative mx-auto grid w-full max-w-[1440px] lg:grid-cols-[minmax(0,1fr)_minmax(0,597px)] lg:items-stretch">
          <div className="bg-[#1F1F1F] px-5 py-12 text-white md:px-10 md:py-16 lg:bg-transparent lg:py-[80px] lg:pr-8 lg:pl-[clamp(2rem,10.3vw,6.25rem)]">
            <FadeIn>
              <h2 className="font-sans text-[24px] font-bold tracking-[-0.03em]">
                Head office
              </h2>
              <div className="mt-5 flex items-center gap-4">
                <span className="relative size-[45px] shrink-0 overflow-clip">
                  <Image
                    src={landingImages.iconContact}
                    alt=""
                    width={45}
                    height={45}
                    className="size-[45px] object-contain mix-blend-screen"
                  />
                </span>
                <p className="text-[18px] leading-8 tracking-[-0.01em]">
                  <span className="font-bold">Phone</span>
                  <span className="font-normal"> : +61 3 8552 0600</span>
                </p>
              </div>

              <h2 className="mt-[52px] font-sans text-[24px] font-bold tracking-[-0.03em]">
                Enquiries
              </h2>
              <div className="mt-3 space-y-1 text-[18px] leading-8 tracking-[-0.01em]">
                <p>
                  <span className="font-bold">General enquiries</span>
                  <span className="font-normal"> : sales@thamarai.com</span>
                </p>
                <p>
                  <span className="font-bold">Media enquiries </span>
                  <span className="font-normal">: selvam@thamarai.com</span>
                </p>
              </div>

              <h2 className="mt-[52px] font-sans text-[24px] font-bold tracking-[-0.03em]">
                Main Branch
              </h2>
              <div className="mt-5 flex items-start gap-4">
                <span className="relative mt-0.5 size-[47px] shrink-0 overflow-clip">
                  <Image
                    src={landingImages.iconPin}
                    alt=""
                    width={47}
                    height={47}
                    className="size-[47px] object-contain mix-blend-screen"
                  />
                </span>
                <p className="max-w-[415px] text-[18px] leading-8 font-bold tracking-[-0.01em]">
                  2/1, sundakkamuthur Rd, Kurinji Garden, Selvapuram South,
                  Coimbatore, Tamil Nadu 641008
                </p>
              </div>

              <div className="mt-10 w-full max-w-[401px] border border-[#7C8BA2] px-3 py-5">
                <p className="text-[20px] leading-[30px] font-bold tracking-[-0.03em] text-white">
                  recruitment@thamarai.com
                  <br />
                  sales@thamarai.com
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn
            delay={0.08}
            className="relative z-10 px-5 pb-12 md:px-10 lg:-ml-[80px] lg:px-0 lg:pt-[58px] lg:pb-0"
          >
            <div className="bg-white px-6 py-10 sm:px-[35px] sm:pt-[61px] sm:pb-[30px] lg:min-h-[585px]">
              {sent ? (
                <p className="text-[18px] text-[#2B4862]">
                  Thank you. We will be in touch shortly.
                </p>
              ) : (
                <form onSubmit={onSubmit} className="flex flex-col gap-[25px]">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="flex flex-col gap-2">
                      <span className="text-[18px] tracking-[-0.36px] text-[#2B4862]">
                        Name
                      </span>
                      <Input
                        id="name"
                        name="name"
                        required
                        autoComplete="name"
                        placeholder="Full Name"
                        className={fieldClass}
                      />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-[18px] tracking-[-0.36px] text-[#2B4862]">
                        Email
                      </span>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="Email address"
                        className={fieldClass}
                      />
                    </label>
                  </div>
                  <label className="flex flex-col gap-2">
                    <span className="text-[18px] tracking-[-0.36px] text-[#2B4862]">
                      Phone
                    </span>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+91"
                      className={cn(fieldClass, "w-full")}
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-[18px] tracking-[-0.36px] text-[#2B4862]">
                      Message
                    </span>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Anything else you wanna communicate"
                      className="min-h-[124px] w-full border border-[#CDE0E7] bg-white px-4 py-3 text-[16px] tracking-[-0.02em] text-[#2B4862] placeholder:text-[#93B6C3] outline-none focus-visible:border-[#93B6C3] focus-visible:ring-2 focus-visible:ring-[#CDE0E7]"
                    />
                  </label>
                  <Button
                    type="submit"
                    className="mt-2 h-[50px] w-[160px] rounded-none bg-[#C28100] text-[18px] font-medium tracking-[-0.36px] text-white hover:bg-[#A86E00] hover:text-white"
                  >
                    Submit
                  </Button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
