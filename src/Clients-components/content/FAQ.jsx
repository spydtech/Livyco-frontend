import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question:
      "Rerum eos laboriosam maiores iste placeat. Magnam minima sunt reprehenderit dolores sequi. Beatae est velit vero?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac elit vel arcu malesuada tincidunt.",
  },
  {
    question:
      "Rerum eos laboriosam maiores iste placeat. Magnam minima sunt reprehenderit dolores sequi. Beatae est velit vero?",
    answer: "Suspendisse potenti. Nullam ut quam in lorem posuere consequat.",
  },
  {
    question:
      "Rerum eos laboriosam maiores iste placeat. Magnam minima sunt reprehenderit dolores sequi. Beatae est velit vero?",
    answer:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
  },
  {
    question:
      "Rerum eos laboriosam maiores iste placeat. Magnam minima sunt reprehenderit dolores sequi. Beatae est velit vero?",
    answer:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-10  p-6 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">FAQ's</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-2">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left text-blue-700 font-medium py-3"
            >
              {faq.question}
              {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
            </button>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-gray-700 overflow-hidden"
              >
                <p className="py-2">{faq.answer}</p>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
