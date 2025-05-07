import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  stars: number;
  delay?: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, role, content, stars, delay = 0 }) => {
  return (
    <motion.div 
      className="bg-gray-900 border border-gray-800 rounded-xl p-6 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${i < stars ? 'text-warning-400 fill-warning-400' : 'text-gray-600'}`}
          />
        ))}
      </div>
      <p className="text-gray-300 flex-grow mb-4">{content}</p>
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    </motion.div>
  );
};

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      name: "Alex Smith",
      role: "Gaming Community Owner",
      content: "DizZu has completely transformed how our members interact. The tracking features help us reward our most active members, and the welcome system makes everyone feel at home.",
      stars: 5
    },
    {
      name: "Jamie Chen",
      role: "Art Server Moderator",
      content: "The EmbedBuilder is a game-changer for our art prompts and announcements. We also love the auto-react feature for our showcase channels!",
      stars: 5
    },
    {
      name: "Taylor Williams",
      role: "Study Group Admin",
      content: "The logging features help us keep track of important discussions, and the utility commands make organizing study sessions so much easier.",
      stars: 4
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-950 relative">
      <div className="absolute inset-0 bg-hero-pattern opacity-5 z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            What Our Users <span className="gradient-text">Say</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join hundreds of server owners who've improved their communities with DizZu.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              stars={testimonial.stars}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;