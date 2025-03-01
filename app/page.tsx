import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Clock,
  Facebook,
  Github,
  Instagram,
  Layers,
  Linkedin,
  MessageSquare,
  MousePointerClick,
  PanelTop,
  Play,
  Settings,
  Sparkles,
  Twitter,
  Zap,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-gray-800 bg-gray-900/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-secondary opacity-75 blur"></div>
              <div className="relative">
                <Layers className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>
            <span className="text-xl font-bold">Motojojo</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors hidden sm:inline-block">
              Log in
            </Link>
            <Button className="relative overflow-hidden group">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative">Get Started</span>
              <ArrowRight className="ml-2 h-4 w-4 relative" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden bg-gray-900">
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              {/* Left Side: Text Content */}
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    <span className="gradient-text">Streamline Your Workflow,</span> Amplify Your Productivity
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    The all-in-one platform that helps teams collaborate, automate, and deliver results faster than ever before.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="relative overflow-hidden group">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="relative">Start Free Trial</span>
                    <ArrowRight className="ml-2 h-4 w-4 relative" />
                  </Button>
                  <Button variant="outline" size="lg" className="group">
                    <Play className="mr-2 h-4 w-4 text-primary group-hover:text-primary/70 transition-colors" />
                    Watch Demo
                  </Button>
                </div>
              </div>

              {/* Right Side: Video Embed */}
              <div className="relative">
                <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                  <div className="relative bg-gray-800 rounded-[1rem]">
                    <div className="h-[1.4rem] bg-gray-700 rounded-t-[0.9rem]" />
                    <div className="aspect-[16/9] rounded-b-[0.9rem] overflow-hidden">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/H0IRIr4ipfI?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title="YouTube Video"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="w-full py-12 border-y border-gray-800 bg-gray-800/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <p className="text-sm text-gray-400">TRUSTED BY INNOVATIVE COMPANIES</p>
              <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
                {["Brand", "Company", "StartUp", "Enterprise", "Tech"].map((brand) => (
                  <div key={brand} className="flex items-center justify-center">
                    <div className="text-2xl font-bold text-gray-400">{brand}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden bg-gray-900">
          <div className="absolute inset-0 bg-grid-gray-800/[0.02] -z-10"></div>
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything You Need in <span className="gradient-text">One Place</span>
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  StreamLine offers powerful tools to help your team work smarter, not harder.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  icon: Zap,
                  title: "Automation",
                  description: "Automate repetitive tasks and workflows to save time and reduce errors.",
                  delay: "0s",
                },
                {
                  icon: MessageSquare,
                  title: "Collaboration",
                  description: "Work together seamlessly with real-time editing and commenting.",
                  delay: "0.1s",
                },
                {
                  icon: Settings,
                  title: "Customization",
                  description: "Tailor the platform to your specific needs with custom workflows.",
                  delay: "0.2s",
                },
                {
                  icon: Clock,
                  title: "Time Tracking",
                  description: "Monitor project progress and team productivity with detailed analytics.",
                  delay: "0.3s",
                },
                {
                  icon: PanelTop,
                  title: "Intuitive Dashboard",
                  description: "Get a bird's eye view of all your projects and tasks in one place.",
                  delay: "0.4s",
                },
                {
                  icon: MousePointerClick,
                  title: "One-Click Actions",
                  description: "Perform complex operations with just a single click.",
                  delay: "0.5s",
                },
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  className="group flex flex-col items-center space-y-4 rounded-xl border border-gray-800 p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50 hover:-translate-y-1"
                  style={{ animationDelay: feature.delay }}
                >
                  <div className="rounded-full bg-gradient-to-br from-primary to-secondary p-3 shadow-md group-hover:shadow-lg transition-all">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-center text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Simple Process, <span className="gradient-text">Powerful Results</span>
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get up and running with StreamLine in just a few simple steps.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-5xl py-12">
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary via-secondary to-primary"></div>

                {[
                  {
                    step: "01",
                    title: "Sign Up",
                    description: "Create your account and set up your team in minutes.",
                    align: "right",
                  },
                  {
                    step: "02",
                    title: "Import Your Data",
                    description: "Easily import your existing projects and tasks.",
                    align: "left",
                  },
                  {
                    step: "03",
                    title: "Customize Your Workflow",
                    description: "Set up automations and customize your workspace to fit your needs.",
                    align: "right",
                  },
                  {
                    step: "04",
                    title: "Invite Your Team",
                    description: "Collaborate with your team members in real-time.",
                    align: "left",
                  },
                  {
                    step: "05",
                    title: "Start Working Smarter",
                    description: "Enjoy increased productivity and streamlined workflows.",
                    align: "right",
                  },
                ].map((item, index) => (
                  <div key={item.step} className="relative mb-12 flex items-center">
                    {/* Timeline node */}
                    <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg">
                        <span className="text-sm font-bold text-primary-foreground">{item.step}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`w-1/2 ${item.align === "left" ? "pr-12 text-right" : "pl-12 ml-auto"}`}>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Feature Showcase */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden bg-gray-900">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center rounded-full border border-gray-800 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-4">
                    <Sparkles className="mr-1 h-3 w-3" />
                    Powerful Dashboard
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Everything at Your <span className="gradient-text">Fingertips</span>
                  </h2>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    Our intuitive dashboard gives you a complete overview of your projects, tasks, and team performance.
                  </p>
                </div>
                <ul className="space-y-4">
                  {[
                    "Real-time project status updates",
                    "Customizable widgets and layouts",
                    "Comprehensive analytics and reporting",
                    "Team workload visualization",
                    "Integrated calendar and timeline views",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Button className="relative overflow-hidden group">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="relative">Explore Dashboard</span>
                    <ArrowRight className="ml-2 h-4 w-4 relative" />
                  </Button>
                </div>
              </div>
              <div className="relative mt-8 lg:mt-0">
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-75 blur-sm animate-pulse-slow"></div>
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=550&width=750&text=Dashboard"
                    width={750}
                    height={550}
                    alt="Dashboard Preview"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Trusted by <span className="gradient-text">Teams Worldwide</span>
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See what our customers have to say about StreamLine.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:gap-12">
              {[
                {
                  quote:
                    "StreamLine has transformed how our team works. We've cut our project delivery time by 40% and improved client satisfaction significantly.",
                  author: "Sarah Johnson",
                  role: "Product Manager, TechCorp",
                  image: "/placeholder.svg?height=80&width=80",
                },
                {
                  quote:
                    "The automation features alone have saved us countless hours. Our team can now focus on strategic work instead of repetitive tasks.",
                  author: "Michael Chen",
                  role: "CTO, GrowthLabs",
                  image: "/placeholder.svg?height=80&width=80",
                },
                {
                  quote:
                    "The customization options are incredible. We've been able to create workflows that perfectly match our unique business processes.",
                  author: "Emily Rodriguez",
                  role: "Operations Director, CreativeHub",
                  image: "/placeholder.svg?height=80&width=80",
                },
                {
                  quote:
                    "The collaboration features have been a game-changer for our remote team. We're more connected and productive than ever before.",
                  author: "David Kim",
                  role: "Team Lead, GlobalTech",
                  image: "/placeholder.svg?height=80&width=80",
                },
              ].map((testimonial, index) => (
                <div
                  key={testimonial.author}
                  className="group flex flex-col justify-between rounded-xl border border-gray-800 p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50 hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-bl-full -z-10"></div>
                  <div className="space-y-4">
                    <div className="relative">
                      <div className="absolute -top-2 -left-2 text-4xl text-primary opacity-30">"</div>
                      <div className="absolute -bottom-8 -right-2 text-4xl text-primary opacity-30">"</div>
                      <p className="relative text-gray-300 z-10">{testimonial.quote}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 pt-6">
                    <div className="relative">
                      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary to-secondary opacity-75 blur-sm group-hover:opacity-100 transition-opacity"></div>
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        width={50}
                        height={50}
                        alt={testimonial.author}
                        className="relative rounded-full border-2 border-background"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{testimonial.author}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden bg-gray-900">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Simple, <span className="gradient-text">Transparent Pricing</span>
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that's right for your team. All plans include a 14-day free trial.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              {/* Pricing Cards */}
              {/* Starter Plan */}
              <div className="flex flex-col rounded-xl border border-gray-800 bg-gray-900 p-6 shadow-sm relative overflow-hidden transition-all hover:shadow-md hover:border-primary/50 hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 to-primary/40"></div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Starter</h3>
                  <p className="text-gray-300">Perfect for small teams just getting started.</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">$29</span>
                  <span className="ml-1 text-gray-300">/month</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Up to 5 team members</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Basic automation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>5GB storage</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Email support</span>
                  </li>
                </ul>
                <Button className="mt-8 relative overflow-hidden group">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="relative">Get Started</span>
                </Button>
              </div>

              {/* Pro Plan */}
              <div className="flex flex-col rounded-xl border border-gray-800 bg-gray-900 p-6 shadow-md relative overflow-hidden transition-all hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 scale-105">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-gradient-to-r from-primary to-secondary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Most Popular
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <p className="text-gray-300">Ideal for growing teams with advanced needs.</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">$79</span>
                  <span className="ml-1 text-gray-300">/month</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Up to 20 team members</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Advanced automation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>20GB storage</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Custom integrations</span>
                  </li>
                </ul>
                <Button className="mt-8 relative overflow-hidden group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                  <span className="relative">Get Started</span>
                </Button>
              </div>

              {/* Enterprise Plan */}
              <div className="flex flex-col rounded-xl border border-gray-800 bg-gray-900 p-6 shadow-sm relative overflow-hidden transition-all hover:shadow-md hover:border-primary/50 hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary/40 to-secondary/40"></div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <p className="text-gray-300">For large organizations with complex requirements.</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">$199</span>
                  <span className="ml-1 text-gray-300">/month</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Unlimited team members</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Enterprise-grade automation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Unlimited storage</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>24/7 dedicated support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Custom development</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>SLA guarantees</span>
                  </li>
                </ul>
                <Button className="mt-8 relative overflow-hidden group">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-secondary to-secondary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="relative">Contact Sales</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">FAQ</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Frequently Asked <span className="gradient-text">Questions</span>
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about StreamLine.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-3xl py-12">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "How does the 14-day free trial work?",
                    answer:
                      "Our 14-day free trial gives you full access to all features of your selected plan. No credit card is required to start, and you can cancel anytime. At the end of the trial, you can choose to subscribe or your account will automatically downgrade to our limited free tier.",
                  },
                  {
                    question: "Can I change plans later?",
                    answer:
                      "Yes, you can upgrade, downgrade, or change your plan at any time. When upgrading, you'll get immediate access to the new features. When downgrading, the changes will take effect at the start of your next billing cycle.",
                  },
                  {
                    question: "Is there a limit to how many projects I can create?",
                    answer:
                      "No, all plans allow for unlimited projects. The main differences between plans are the number of team members, storage space, and access to advanced features.",
                  },
                  {
                    question: "How secure is my data?",
                    answer:
                      "We take security seriously. All data is encrypted both in transit and at rest. We use industry-standard security practices, regular security audits, and maintain SOC 2 compliance. Your data is backed up daily, and we offer optional two-factor authentication for all accounts.",
                  },
                  {
                    question: "Do you offer discounts for nonprofits or educational institutions?",
                    answer:
                      "Yes, we offer special pricing for qualified nonprofits, educational institutions, and open-source projects. Please contact our sales team for more information.",
                  },
                  {
                    question: "Can I integrate StreamLine with other tools?",
                    answer:
                      "StreamLine offers integrations with popular tools like Slack, Google Workspace, Microsoft 365, Jira, GitHub, and many more. The Pro and Enterprise plans also support custom API integrations.",
                  },
                ].map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-800">
                    <AccordionTrigger className="text-left font-medium">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-300">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden bg-gray-900">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/30 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative">
            <div className="mx-auto max-w-3xl rounded-xl border border-gray-800 shadow-lg bg-gray-900/80 backdrop-blur-sm p-8 md:p-12">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Ready to <span className="gradient-text">Transform Your Workflow?</span>
                  </h2>
                  <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed">
                    Join thousands of teams already using StreamLine to boost productivity and streamline operations.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="min-w-[200px] relative overflow-hidden group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                  >
                    <span className="relative">Start Your Free Trial</span>
                    <ArrowRight className="ml-2 h-4 w-4 relative" />
                  </Button>
                  <Button variant="outline" size="lg" className="min-w-[200px] group">
                    <Play className="mr-2 h-4 w-4 text-primary group-hover:text-primary/70 transition-colors" />
                    <span>Schedule a Demo</span>
                  </Button>
                </div>
                <p className="text-sm text-gray-300">No credit card required. 14-day free trial.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-gray-800 bg-gray-900/95 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-800/[0.02] -z-10"></div>
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-5">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-secondary opacity-75 blur"></div>
                  <div className="relative">
                    <Layers className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <span className="text-xl font-bold">StreamLine</span>
              </div>
              <p className="text-sm text-gray-300">Streamline your workflow, amplify your productivity.</p>
              <div className="flex gap-4 mt-4">
                {[
                  { icon: Twitter, label: "Twitter" },
                  { icon: Facebook, label: "Facebook" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Github, label: "GitHub" },
                ].map((social) => (
                  <Link
                    key={social.label}
                    href="#"
                    className="text-gray-300 hover:text-primary transition-colors relative group"
                  >
                    <span className="absolute -inset-2 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <social.icon className="h-5 w-5 relative" />
                    <span className="sr-only">{social.label}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-base font-medium">Product</h3>
              {["Features", "Pricing", "Integrations", "Changelog", "Roadmap", "Examples"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-base font-medium">Resources</h3>
              {["Documentation", "Guides", "API Reference", "Blog", "Community", "Support"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-base font-medium">Company</h3>
              {["About", "Careers", "Press", "Partners", "Contact", "Legal"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2 col-span-2 md:col-span-4 lg:col-span-1">
              <h3 className="text-base font-medium">Subscribe to our newsletter</h3>
              <p className="text-sm text-gray-300">Get the latest updates and news delivered to your inbox.</p>
              <form className="flex gap-2 mt-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-gray-800 bg-gray-900 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button
                  type="submit"
                  size="sm"
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-300">
              © {new Date().getFullYear()} StreamLine. All rights reserved.
            </p>
            <div className="flex gap-4">
              {["Terms of Service", "Privacy Policy", "Cookie Policy", "Accessibility"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-xs text-gray-300 hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button className="h-12 w-12 rounded-full p-0 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg">
          <MessageSquare className="h-5 w-5" />
          <span className="sr-only">Chat with us</span>
        </Button>
      </div>
    </div>
  )
}