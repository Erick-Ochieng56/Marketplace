import React from 'react';
import { UserPlus, ListPlus, HandshakeIcon } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Sign Up',
    description: 'Create your account as a farmer or buyer',
  },
  {
    icon: ListPlus,
    title: 'List/Find Products',
    description: 'Post your produce or browse available items',
  },
  {
    icon: HandshakeIcon,
    title: 'Buy or Sell with Ease',
    description: 'Complete secure transactions and arrange delivery',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <step.icon className="w-8 h-8 text-green-600" />
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}