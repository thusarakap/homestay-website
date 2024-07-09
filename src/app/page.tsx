"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Navbar } from "@/components/component/navbar"; 

import { JSX, SVGProps } from "react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      
      <Navbar />

      {/* <header className="absolute top-3 left-10 right-5 z-10 px-4 lg:px-6 h-14 flex items-center text-gray-200 bg-transparent">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <MountainIcon className="h-8 w-8" />
          <span className="sr-only">Kandy Homestay</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-2xl font-semibold hover:text-gray-400 transition-colors duration-300"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-2xl font-semibold hover:text-gray-400 transition-colors duration-300"
            prefetch={false}
          >
            Rooms
          </Link>
          <Link
            href="#"
            className="text-2xl font-semibold hover:text-gray-400 transition-colors duration-300"
            prefetch={false}
          >
            Amenities
          </Link>
          <Link
            href="#"
            className="text-2xl font-semibold hover:text-gray-400 transition-colors duration-300"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header> */}

      <main className="flex-1">
        <section className="relative w-full h-[80vh] bg-[url('/banner.webp')] bg-cover bg-center">
          <div className="absolute inset-0" />
          <div className="container h-full flex flex-col justify-center items-center text-center text-neutral-100">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Next to Nature
            </h1>
            <p className="max-w-[600px] mt-4 text-lg md:text-xl">
              Experience the tranquility of Kandy&apos;s lush hills at our cozy
              homestay, where nature and comfort converge.
            </p>
            <Link
              href="#"
              className="inline-flex mt-8 h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Book Now
            </Link>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  About Next to Nature
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Next to Nature is a family-owned and operated guesthouse
                  located in the heart of Kandy, Sri Lanka. Our home has been
                  welcoming travelers for over 6 years, offering a comfortable
                  and authentic experience.
                </p>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Owned and managed by Nilan and Chamari, we take pride in
                  providing personalized service and ensuring our guests feel at
                  home during their stay. Our goal is to share the beauty and
                  culture of Kandy with every visitor.
                </p>
              </div>
              <Image
                src="/chamari.webp"
                width="550"
                height="310"
                alt="Sunil and Amali"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section id="rooms" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Rooms
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Next to Nature offers a variety of room types to suit your
                  needs, from cozy single rooms to spacious family suites. Each
                  room is thoughtfully designed with your comfort in mind.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/room1.webp"
                width="550"
                height="310"
                alt="Single Room"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-xl font-bold">Single Room</h3>
                <p className="text-muted-foreground">
                  Our cozy single rooms are perfect for solo travelers. Each
                  room features a comfortable bed, en-suite bathroom, and
                  stunning views of the surrounding hills.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/room2.webp"
                width="550"
                height="310"
                alt="Family Suite"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-xl font-bold">Family Suite</h3>
                <p className="text-muted-foreground">
                  Our spacious family suites are perfect for groups or families.
                  Each suite features a private living area, two bedrooms, and
                  an en-suite bathroom, providing ample space and privacy.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="amenities"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Amenities
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Kandy Homestay, we strive to provide our guests with a
                  comfortable and enjoyable stay. Our amenities are designed to
                  make your experience truly memorable.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <WifiIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Free WiFi</h3>
                <p className="text-muted-foreground">
                  Stay connected with our high-speed wireless internet available
                  throughout the property.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <AlarmClockIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Complimentary Breakfast</h3>
                <p className="text-muted-foreground">
                  Start your day with a delicious Sri Lankan breakfast prepared
                  fresh by our in-house chef.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <ParkingMeterIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Free Parking</h3>
                <p className="text-muted-foreground">
                  Enjoy complimentary on-site parking for your convenience.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <FlowerIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Lush Garden</h3>
                <p className="text-muted-foreground">
                  Relax and unwind in our beautifully landscaped garden
                  overlooking the Kandy hills.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <WashingMachineIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Laundry Service</h3>
                <p className="text-muted-foreground">
                  Take advantage of our convenient laundry service to keep your
                  clothes fresh during your stay.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <TicketIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Tour Assistance</h3>
                <p className="text-muted-foreground">
                  Let our knowledgeable staff help you plan your perfect
                  itinerary and arrange local tours and activities.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What Our Guests Say
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our satisfied guests who have experienced the warmth
                  and hospitality of Next to Nature.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="border w-11 h-11">
                    <AvatarImage src="/avatar1.webp" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="grid">
                    <div className="font-semibold">Juan Manuel</div>
                    <div className="text-sm text-muted-foreground">
                      Barcelona, Spain
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <div className="flex items-center gap-px">
                    <StarIcon className="w-2.5 h-2.5 fill-primary" />
                    <StarIcon className="w-2.5 h-2.5 fill-primary" />
                    <StarIcon className="w-2.5 h-2.5 fill-primary" />
                    <StarIcon className="w-2.5 h-2.5 fill-primary" />
                    <StarIcon className="w-2.5 h-2.5 fill-primary" />
                  </div>
                </div>
                <div>
                  &quot;Chamari is an excellent host! She and her husband are
                  super nice, they love to meet new people. Our stay was short
                  but I definitely wish to come back, especially to be able to
                  continue chatting with them, they will certainly be one of my
                  best memories of Sri Lanka! I wish you all the best 🌸❤️&quot;
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="border w-11 h-11">
                    <AvatarImage src="/avatar2.webp" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="grid">
                    <div className="font-semibold">Scarlett</div>
                    <div className="text-sm text-muted-foreground">
                      London, UK
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <div className="flex items-center gap-px">
                    <StarIcon className="w-2.5 h-2.5 fill-primary" />
                    <StarIcon className="w-2.5 h-2.5 fill-primary" />
                    <StarIcon className="w-2.5 h-2.5 fill-primary" />
                    <StarIcon className="w-2.5 h-2.5 fill-primary" />
                    <StarIcon className="w-2.5 h-2.5 fill-primary" />
                  </div>
                </div>
                <div>
                  &quot;Chamari and Nalin are some of the nicest and welcoming
                  people that I’ve ever met. The place is stunningly beautiful
                  and the room is perfect, even more so because of the price.
                  It’s even more spacious than the pictures and has everything
                  that you need for a good nights rest. I 100% recommend this
                  place and I truly felt at home. Thank you for the amazing
                  stay.&quot;
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Contact Us
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions about availability, pricing, or planning your
                  stay? Fill out the form below and we will be in touch shortly.
                </p>
              </div>
            </div>
            <div className="mx-auto w-full max-w-2xl">
              <form className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="How can we assist you?"
                  />
                </div>
                <div className="flex justify-center m-3">
                  <Button type="submit" className="w-44">
                    Send
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Next to Nature. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function AlarmClockIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2 2" />
      <path d="M5 3 2 6" />
      <path d="m22 6-3-3" />
      <path d="M6.38 18.7 4 21" />
      <path d="M17.64 18.67 20 21" />
    </svg>
  );
}

function FlowerIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5" />
      <path d="M12 7.5V9" />
      <path d="M7.5 12H9" />
      <path d="M16.5 12H15" />
      <path d="M12 16.5V15" />
      <path d="m8 8 1.88 1.88" />
      <path d="M14.12 9.88 16 8" />
      <path d="m8 16 1.88-1.88" />
      <path d="M14.12 14.12 16 16" />
    </svg>
  );
}

function MountainIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function ParkingMeterIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 9a3 3 0 1 1 6 0" />
      <path d="M12 12v3" />
      <path d="M11 15h2" />
      <path d="M19 9a7 7 0 1 0-13.6 2.3C6.4 14.4 8 19 8 19h8s1.6-4.6 2.6-7.7c.3-.8.4-1.5.4-2.3" />
      <path d="M12 19v3" />
    </svg>
  );
}

function TicketIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 17v2" />
      <path d="M13 11v2" />
    </svg>
  );
}

function WashingMachineIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h3" />
      <path d="M17 6h.01" />
      <rect width="18" height="20" x="3" y="2" rx="2" />
      <circle cx="12" cy="13" r="5" />
      <path d="M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5" />
    </svg>
  );
}

function WifiIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20h.01" />
      <path d="M2 8.82a15 15 0 0 1 20 0" />
      <path d="M5 12.859a10 10 0 0 1 14 0" />
      <path d="M8.5 16.429a5 5 0 0 1 7 0" />
    </svg>
  );
}

function StarIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
