'use client'

import { Header } from '@/components/layout/Header'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    name: 'Analytics',
    description: 'Get detailed insights into your business performance with our advanced analytics dashboard.',
  },
  {
    name: 'Automation',
    description: 'Automate repetitive tasks and streamline your workflow with our powerful automation tools.',
  },
  {
    name: 'Collaboration',
    description: 'Work seamlessly with your team using our real-time collaboration features.',
  },
  {
    name: 'Security',
    description: 'Enterprise-grade security to keep your data safe and compliant with industry standards.',
  },
]

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      
      <main>
        {/* Hero section with 3D Spline and animation */}
        <div className="relative isolate pt-14 flex flex-col items-center justify-center">
          <div className="w-full max-w-3xl mx-auto aspect-[16/9] mb-8 rounded-2xl overflow-hidden shadow-xl">
            {/* @ts-expect-error */}
            <spline-viewer url="https://prod.spline.design/UWoeqiir20o49Dah/scene.splinecode"></spline-viewer>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mx-auto max-w-2xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transform Your Business with Our SaaS Platform
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Streamline your operations, boost productivity, and drive growth with our comprehensive suite of tools designed for modern businesses.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/signup"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
              <Link href="/demo" className="text-sm font-semibold leading-6 text-gray-900">
                Watch demo <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Feature section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Everything you need</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Powerful features for your business
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our platform provides all the tools you need to manage and grow your business effectively.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <CheckCircle2 className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <Link href="/features" className="text-sm font-semibold leading-6 text-indigo-600">
                        Learn more <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </main>
    </div>
  )
}
