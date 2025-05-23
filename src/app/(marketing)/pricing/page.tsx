import { Header } from '@/components/layout/Header'
import { Check } from 'lucide-react'
import Link from 'next/link'
import { formatPrice } from '@/lib/utils'

const tiers = [
  {
    name: 'Starter',
    id: 'tier-starter',
    href: '/signup?plan=starter',
    price: { monthly: 15 },
    description: 'Perfect for small teams and individuals just getting started.',
    features: [
      'Up to 5 team members',
      'Basic analytics',
      '24-hour support response time',
      '1GB storage',
      'Basic integrations',
    ],
    featured: false,
  },
  {
    name: 'Pro',
    id: 'tier-pro',
    href: '/signup?plan=pro',
    price: { monthly: 49 },
    description: 'Everything you need for growing teams and businesses.',
    features: [
      'Up to 20 team members',
      'Advanced analytics',
      '4-hour support response time',
      '10GB storage',
      'Advanced integrations',
      'Custom reporting',
      'Team collaboration tools',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '/signup?plan=enterprise',
    price: { monthly: 99 },
    description: 'For large organizations with advanced needs.',
    features: [
      'Unlimited team members',
      'Enterprise analytics',
      '1-hour support response time',
      'Unlimited storage',
      'Custom integrations',
      'Advanced security features',
      'Dedicated account manager',
      'SLA guarantee',
    ],
    featured: false,
  },
]

export default function PricingPage() {
  return (
    <div className="bg-white">
      <Header />
      
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the right plan for&nbsp;you
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Choose the perfect plan for your needs. All plans include a 14-day free trial.
        </p>
        
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 ${
                tier.featured ? 'ring-2 ring-indigo-600' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    className={`text-lg font-semibold leading-8 ${
                      tier.featured ? 'text-indigo-600' : 'text-gray-900'
                    }`}
                  >
                    {tier.name}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {formatPrice(tier.price.monthly)}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={tier.href}
                className={`mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.featured
                    ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600'
                    : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100 focus-visible:outline-indigo-600'
                }`}
              >
                Get started today
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 