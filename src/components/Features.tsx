import React from 'react';
import { Sprout, CreditCard, Users, Leaf } from 'lucide-react';

const features = [
  {
    icon: Sprout,
    title: 'Sell Fresh Produce',
    description: 'List and sell your fresh, locally grown produce directly to consumers',
  },
  {
    icon: CreditCard,
    title: 'Easy Payment Options',
    description: 'Secure and seamless transactions for both farmers and buyers',
  },
  {
    icon: Users,
    title: 'Support Local Farmers',
    description: 'Connect directly with local farmers and support sustainable agriculture',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Practices',
    description: 'Promote and support environmentally conscious farming methods',
  },
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Why Choose Our Marketplace?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}