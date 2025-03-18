import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Sravanthi",
    role: "College Lecturer",
    rating: 4,
    image:
      "https://s3-alpha-sig.figma.com/img/f995/8892/10c50769f101f61905721a374a0fa265?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YaUyaXz9~lW8yR4B6PSVqVasZZv4BB-xanK2UA4WMuOhv2uR-xqu1S~POVdU9h9sAeDuJKnTxaBE0k5JkdlQnLgwaUT1Eok0lQJvEig7K~SbYaEZCtDQJOS7L6F8D8VTllm~bvn9jUDNwm3igXdB4z5gXgc9AC8HJwlYj3HG0IikE-wSpttctOwcU2s7~dkbMZ0FFITvpYXAj4-Y4-9-5Z9KLyaceNZhXCISyx2fXGTJ5U2d3BYUQc1CgfPqzYijWJl72kKMWdtxVxqJlBv8FhX7nY1n3lEcE~ja97YXKN-mQuCusM1E8Xh6ZTUaPe971iZpod-wttaI37acx1erfg__",
    feedback:
      "I am unable to move my legs. Great app for finding accessible PG accommodations, with detailed listings and helpful filters for wheelchair users.",
  },
  {
    name: "Rahul",
    role: "Software Engineer",
    rating: 5,
    image:
      "https://s3-alpha-sig.figma.com/img/f995/8892/10c50769f101f61905721a374a0fa265?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YaUyaXz9~lW8yR4B6PSVqVasZZv4BB-xanK2UA4WMuOhv2uR-xqu1S~POVdU9h9sAeDuJKnTxaBE0k5JkdlQnLgwaUT1Eok0lQJvEig7K~SbYaEZCtDQJOS7L6F8D8VTllm~bvn9jUDNwm3igXdB4z5gXgc9AC8HJwlYj3HG0IikE-wSpttctOwcU2s7~dkbMZ0FFITvpYXAj4-Y4-9-5Z9KLyaceNZhXCISyx2fXGTJ5U2d3BYUQc1CgfPqzYijWJl72kKMWdtxVxqJlBv8FhX7nY1n3lEcE~ja97YXKN-mQuCusM1E8Xh6ZTUaPe971iZpod-wttaI37acx1erfg__",
    feedback:
      "This app has made my search for PG accommodations so much easier. Highly recommended!",
  },
  {
    name: "Ananya",
    role: "Doctor",
    rating: 4,
    image:
      "https://s3-alpha-sig.figma.com/img/f995/8892/10c50769f101f61905721a374a0fa265?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YaUyaXz9~lW8yR4B6PSVqVasZZv4BB-xanK2UA4WMuOhv2uR-xqu1S~POVdU9h9sAeDuJKnTxaBE0k5JkdlQnLgwaUT1Eok0lQJvEig7K~SbYaEZCtDQJOS7L6F8D8VTllm~bvn9jUDNwm3igXdB4z5gXgc9AC8HJwlYj3HG0IikE-wSpttctOwcU2s7~dkbMZ0FFITvpYXAj4-Y4-9-5Z9KLyaceNZhXCISyx2fXGTJ5U2d3BYUQc1CgfPqzYijWJl72kKMWdtxVxqJlBv8FhX7nY1n3lEcE~ja97YXKN-mQuCusM1E8Xh6ZTUaPe971iZpod-wttaI37acx1erfg__",
    feedback:
      "Finding a PG that suits my schedule and needs was never this easy. A great experience!",
  },
  {
    name: "Vikram",
    role: "Entrepreneur",
    rating: 5,
    image:
      "https://s3-alpha-sig.figma.com/img/f995/8892/10c50769f101f61905721a374a0fa265?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YaUyaXz9~lW8yR4B6PSVqVasZZv4BB-xanK2UA4WMuOhv2uR-xqu1S~POVdU9h9sAeDuJKnTxaBE0k5JkdlQnLgwaUT1Eok0lQJvEig7K~SbYaEZCtDQJOS7L6F8D8VTllm~bvn9jUDNwm3igXdB4z5gXgc9AC8HJwlYj3HG0IikE-wSpttctOwcU2s7~dkbMZ0FFITvpYXAj4-Y4-9-5Z9KLyaceNZhXCISyx2fXGTJ5U2d3BYUQc1CgfPqzYijWJl72kKMWdtxVxqJlBv8FhX7nY1n3lEcE~ja97YXKN-mQuCusM1E8Xh6ZTUaPe971iZpod-wttaI37acx1erfg__",
    feedback:
      "A lifesaver for people looking for comfortable and accessible accommodations!",
  },
  {
    name: "Pooja",
    role: "Artist",
    rating: 4,
    image:
      "https://s3-alpha-sig.figma.com/img/f995/8892/10c50769f101f61905721a374a0fa265?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YaUyaXz9~lW8yR4B6PSVqVasZZv4BB-xanK2UA4WMuOhv2uR-xqu1S~POVdU9h9sAeDuJKnTxaBE0k5JkdlQnLgwaUT1Eok0lQJvEig7K~SbYaEZCtDQJOS7L6F8D8VTllm~bvn9jUDNwm3igXdB4z5gXgc9AC8HJwlYj3HG0IikE-wSpttctOwcU2s7~dkbMZ0FFITvpYXAj4-Y4-9-5Z9KLyaceNZhXCISyx2fXGTJ5U2d3BYUQc1CgfPqzYijWJl72kKMWdtxVxqJlBv8FhX7nY1n3lEcE~ja97YXKN-mQuCusM1E8Xh6ZTUaPe971iZpod-wttaI37acx1erfg__",
    feedback:
      "Simple and efficient app. Helped me find the perfect PG without much hassle!",
  },
];

export default function ScrollableTestimonials() {
  const scrollRef = useRef(null);
  const isHovered = useRef(false);
  const [scrollDirection, setScrollDirection] = useState(1); // 1 = right, -1 = left

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollSpeed = 5; // Adjust speed for smoother scrolling

    const scroll = () => {
      if (!isHovered.current) {
        scrollContainer.scrollLeft += scrollSpeed * scrollDirection;

        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          setScrollDirection(-1); // Change direction to left
        } else if (scrollContainer.scrollLeft <= 0) {
          setScrollDirection(1); // Change direction to right
        }
      }
      requestAnimationFrame(scroll);
    };

    const animation = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animation);
  }, [scrollDirection]);

  return (
    <div className="relative w-full min-h-screen flex justify-center items-center overflow-hidden">
      <div
        ref={scrollRef}
        className="flex overflow-x-hidden mx-10  pt-20  scroll-smooth space-x-6 p-4 scrollbar-hide"
        onMouseEnter={() => (isHovered.current = true)}
        onMouseLeave={() => (isHovered.current = false)}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="relative min-w-[400px] bg-gray-800 text-white p-6 pt-16 rounded-xl shadow-lg flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full border-4 border-gray-700"
              />
            </div>

            <h3 className="text-lg font-semibold mt-8">{testimonial.name}</h3>
            <p className="text-sm text-gray-400">{testimonial.role}</p>
            <div className="flex mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={
                    i < testimonial.rating ? "text-yellow-400" : "text-gray-500"
                  }
                >
                  ★
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-center">{testimonial.feedback}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
