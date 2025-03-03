"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { ChevronRight, Music, Play, Users, Calendar, MapPin, Mic, Star, X } from "lucide-react"

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-[#2E1A47] text-white">
    <header className="sticky top-0 z-10 border-b border-[#ffffff1a] bg-[#2E1A47]/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <img 
            src="https://static.wixstatic.com/media/55e321_7dcb429f1dce497dbe475f9b37668670~mv2.jpg/v1/fill/w_341,h_341,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/FINAL%20OPEN%20FILE%20FOR%20LOGO%20-%20SEP%201%202024_edited.jpg" 
            alt="Logo" 
            className="h-6 w-6" 
          />
          <span style={{ color: "yellow" }}>MOTOJOJO</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="#" className="text-sm font-medium text-zinc-200 hover:text-white">
            Discover Artists
          </Link>
          <Link href="#" className="text-sm font-medium text-zinc-200 hover:text-white">
            Upcoming Shows
          </Link>
          <Link href="#" className="text-sm font-medium text-zinc-200 hover:text-white">
            Venues
          </Link>
          <Link href="#" className="text-sm font-medium text-zinc-200 hover:text-white">
            For Artists
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <Button variant="outline" size="icon" className="rounded-full border-[#ffffff1a]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
        
        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="#" className="text-sm font-medium text-zinc-200 hover:text-white">
            Log in
          </Link>
          <Button className="rounded-full bg-[#E91E63] hover:bg-[#E91E63]/90">Sign up free</Button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#2E1A47]/95 backdrop-blur-sm p-4 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link href="#" className="text-sm font-medium text-zinc-200 hover:text-white">
              Discover Artists
            </Link>
            <Link href="#" className="text-sm font-medium text-zinc-200 hover:text-white">
              Upcoming Shows
            </Link>
            <Link href="#" className="text-sm font-medium text-zinc-200 hover:text-white">
              Venues
            </Link>
            <Link href="#" className="text-sm font-medium text-zinc-200 hover:text-white">
              For Artists
            </Link>
            <Link href="#" className="text-sm font-medium text-zinc-200 hover:text-white">
              Log in
            </Link>
            <Button className="rounded-full bg-[#E91E63] hover:bg-[#E91E63]/90 w-full">Sign up free</Button>
          </nav>
        </div>
      )}
    </header>
      <main className="flex-1">
  <section className="relative overflow-hidden py-24 md:py-32 bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/blurry-abstract-night-music-festival-background-with-people-bright-night-bokeh-night-music-community-event-with-people_87555-16380.jpg')" }}>
    {/* Overlay for better text readability */}
    <div className="absolute inset-0 bg-black/50"></div>
    
    <div className="container px-4 md:px-6 relative z-10">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Where Artists <span className="text-[#E91E63]">Shine</span> on Stage
            </h1>
            <p className="max-w-[600px] text-zinc-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Connect with live performers, discover upcoming shows, and experience the magic of live
              performances.
            </p>
            <p className="max-w-[600px] text-zinc-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Keep 100% ownership of your music and stay in control of your career. Unlimited releases starting at $22.99/year.
            </p>
          </div>
          <div className="flex flex-col gap-4 min-[400px]:flex-row">
            <Button size="lg" className="rounded-full bg-[#E91E63] hover:bg-[#E91E63]/90 text-white">
              SIGN UP NOW
            </Button>
          </div>
          <p className="text-zinc-200 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
            Unlimited Distribution Starting at <span className="font-bold">$22.99/year</span>
          </p>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-xl md:aspect-square shadow-lg">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/H0IRIr4ipfI?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="YouTube Video"
            className="rounded-xl"
          ></iframe>
          <div className="absolute inset-0 bg-gradient-to-t from-[#2E1A47]/60 to-transparent"></div>
        </div>
      </div>
    </div>
  </section>

        <section className="bg-[#2E1A47] py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Trending Artists This Week
                </h2>
                <p className="max-w-[700px] text-yellow-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the most popular performers lighting up stages around the world.
                </p>
              </div>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="group relative overflow-hidden rounded-lg">
<Image
    src="https://chordsandco.music.blog/wp-content/uploads/2020/03/indie-artists-1.jpg?w=1200"
    width={300}
    height={400}
    alt={`Featured artist ${i}`}
    className="aspect-[3/4] w-full object-cover transition-transform duration-300 group-hover:scale-105"
/>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2E1A47] to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bold text-lg">Artist Name</h3>
                    <p className="text-sm text-zinc-200">Genre • 10K followers</p>
                  </div>
                  <Button
                    size="icon"
                    className="absolute right-3 top-3 h-8 w-8 rounded-full bg-[#2E1A47]/50 opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <Star className="h-4 w-4" />
                    <span className="sr-only">Follow</span>
                  </Button>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Button
                variant="outline"
                className="rounded-full border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10"
              >
                View All Artists <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Upcoming Shows</h2>
                <p className="max-w-[700px] text-yellow-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't miss these incredible live performances happening soon.
                </p>
              </div>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-lg border border-[#ffffff1a] bg-[#2E1A47] transition-colors hover:bg-[#2E1A47]/90"
                >
                  <div className="aspect-video w-full overflow-hidden">
                  <Image
    src="https://static.wixstatic.com/media/9d2de7_4648b35fd1b14cf8a111129e549607d9~mv2.png/v1/fill/w_6000,h_3141,al_c/9d2de7_4648b35fd1b14cf8a111129e549607d9~mv2.png"
    width={500}
    height={300}
    alt={`Upcoming show ${i}`}
    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
/>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-sm text-zinc-200">
                      <Calendar className="h-4 w-4" />
                      <span>Fri, Mar 15 • 8:00 PM</span>
                    </div>
                    <h3 className="mt-2 font-bold text-lg">Artist Showcase Night</h3>
                    <div className="mt-2 flex items-center gap-2 text-sm text-zinc-200">
                      <MapPin className="h-4 w-4" />
                      <span>The Grand Theater, New York</span>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="font-bold">$25 - $75</span>
                      <Button size="sm" className="rounded-full bg-[#E91E63] hover:bg-[#E91E63]/90">
                        Get Tickets
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Button
                variant="outline"
                className="rounded-full border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10"
              >
                View All Shows <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        <section className="bg-[#2E1A47] py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">For Artists</h2>
                  <p className="max-w-[600px] text-zinc-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Showcase your talent, connect with fans, and book more gigs with Motojojo.
                  </p>
                </div>
                <ul className="grid gap-4">
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E91E63]/10 text-[#E91E63]">
                      <Users className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">Grow Your Audience</h3>
                      <p className="text-sm text-zinc-200">
                        Connect with fans and build a dedicated following that supports your art.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E91E63]/10 text-[#E91E63]">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">Book More Shows</h3>
                      <p className="text-sm text-zinc-200">
                        Get discovered by venues and event organizers looking for talent like yours.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E91E63]/10 text-[#E91E63]">
                      <Mic className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">Showcase Your Talent</h3>
                      <p className="text-sm text-zinc-200">
                        Upload videos of your performances and highlight your unique style.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="rounded-full bg-[#E91E63] hover:bg-[#E91E63]/90">Join as an Artist</Button>
                  <Button variant="outline" className="rounded-full border-[#E91E63] text-[#E91E63] hover:bg-[#E91E63]/10">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl">
              <iframe
  width="100%"
  height="100%"
  src="https://www.youtube.com/embed/meJD4AJAk_I?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0"
  frameBorder="0"
  allow="autoplay; encrypted-media"
  allowFullScreen
  title="YouTube Video"
></iframe>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#2E1A47] py-12 md:py-16 lg:py-20">
  <div className="container px-4 md:px-6">
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
      {/* Image on the left side */}
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <Image
          src="https://www.tunecore.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F119568%2F1707331578-adela.png%3Ffit%3Dmax%26fm%3Dwebp%26h%3D600%26q%3D75%26w%3D800&w=828&q=75" // Replace with your image URL
          alt="Artist performing on stage"
          width={600}
          height={600}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content on the right side */}
      <div className="flex flex-col justify-center space-y-4">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Motojojo</h2>
          <p className="max-w-[600px] text-zinc-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Showcase your talent, connect with fans, and book more gigs with Motojojo.
          </p>
        </div>
        <ul className="grid gap-4">
          <li className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E91E63]/10 text-[#E91E63]">
              <Users className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-medium">Grow Your Audience</h3>
              <p className="text-sm text-zinc-200">
                Connect with fans and build a dedicated following that supports your art.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E91E63]/10 text-[#E91E63]">
              <Calendar className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-medium">Book More Shows</h3>
              <p className="text-sm text-zinc-200">
                Get discovered by venues and event organizers looking for talent like yours.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E91E63]/10 text-[#E91E63]">
              <Mic className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-medium">Showcase Your Talent</h3>
              <p className="text-sm text-zinc-200">
                Upload videos of your performances and highlight your unique style.
              </p>
            </div>
          </li>
        </ul>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Button className="rounded-full bg-[#E91E63] hover:bg-[#E91E63]/90">Join as an Artist</Button>
          <Button variant="outline" className="rounded-full border-[#E91E63] text-[#E91E63] hover:bg-[#E91E63]/10">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  </div>
</section>
        
        <section className="py-12 md:py-16 lg:py-20 bg-[#2E1A47]">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
        <p className="max-w-[700px] text-yellow-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Find answers to common questions about Motojojo and how it works.
        </p>
      </div>
    </div>
    <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          question: "How do I discover new artists?",
          answer: "You can browse through our 'Discover Artists' section to find new and trending performers."
        },
        {
          question: "Can I book tickets through Motojojo?",
          answer: "Yes, you can book tickets for upcoming shows directly through our platform."
        },
        {
          question: "How do artists join Motojojo?",
          answer: "Artists can sign up on our 'For Artists' page to showcase their talent and connect with fans."
        },
        {
          question: "Is Motojojo free to use?",
          answer: "Yes, Motojojo is free for fans to use. Artists may have different subscription plans."
        },
        {
          question: "How can I contact support?",
          answer: "You can reach out to our support team through the 'Contact' page or email us at support@motojojo.com."
        },
        {
          question: "What genres of music are available?",
          answer: "Motojojo features a wide range of genres, from rock and pop to jazz and classical."
        }
      ].map((faq, index) => (
        <div key={index} className="p-6 rounded-lg border border-[#ffffff1a] bg-[#2E1A47] hover:bg-[#2E1A47]/90 transition-colors">
          <h3 className="font-bold text-lg">{faq.question}</h3>
          <p className="mt-2 text-sm text-zinc-200">{faq.answer}</p>
        </div>
      ))}
    </div>
  </div>
</section>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Join the Motojojo Community
                </h2>
                <p className="max-w-[700px] text-yellow-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
    We bring people together to create intimate spaces where real connection matters in cities around the world. Join our global community for intimate live experiences that spark real connection. Connecting the dots, one city at a time.
</p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-[#ffffff1a] bg-[#2E1A47] px-3 py-2 text-sm placeholder:text-zinc-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E91E63]"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit" className="rounded-md bg-[#E91E63] hover:bg-[#E91E63]/90">
                    Sign Up
                  </Button>
                </form>
                <p className="text-xs text-zinc-200">
                  By signing up, you agree to our{" "}
                  <Link href="#" className="underline underline-offset-2">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="underline underline-offset-2">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
        
      </main>
      <footer className="border-t border-[#ffffff1a] bg-[#2E1A47] py-6 md:py-8">
        <div className="container flex flex-col gap-4 px-4 md:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:justify-between">
            <div className="flex flex-col gap-2">
              <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                <Music className="h-6 w-6 text-[#E91E63]" />
                <span>MOTOJOJO</span>
              </Link>
              <p className="text-sm text-zinc-200">Where artists shine on stage.</p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Platform</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-sm text-zinc-200 hover:text-white">
                      Discover
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-zinc-200 hover:text-white">
                      Shows
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-zinc-200 hover:text-white">
                      Artists
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-zinc-200 hover:text-white">
                      Venues
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-sm text-zinc-200 hover:text-white">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-zinc-200 hover:text-white">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-zinc-200 hover:text-white">
                      Press
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-zinc-200 hover:text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-sm text-zinc-200 hover:text-white">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-zinc-200 hover:text-white">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-zinc-200 hover:text-white">
                      Cookies
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-zinc-200 hover:text-white">
                      Licenses
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-zinc-200">© {new Date().getFullYear()} Motojojo. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-zinc-200 hover:text-[#E91E63]">
                <TwitterIcon className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-zinc-200 hover:text-[#E91E63]">
                <InstagramIcon className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-zinc-200 hover:text-[#E91E63]">
                <YoutubeIcon className="h-4 w-4" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="#" className="text-zinc-200 hover:text-[#E91E63]">
                <TiktokIcon className="h-4 w-4" />
                <span className="sr-only">TikTok</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <Button className="rounded-full bg-[#FFD700] hover:bg-[#FFD700]/90 text-black">Contact Sales</Button>
    </div>
  )
}

function Menu(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function TiktokIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
      <path d="M16 8v8a5 5 0 0 1-5 5v0a5 5 0 0 1-5-5v0" />
      <path d="M22 2 L18 6" />
      <path d="M18 2h4v4" />
      <path d="M16 8c-1.1 0-2.1-.3-3-.8" />
      <path d="M9 15v0" />
    </svg>
  )
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}

