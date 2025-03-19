import { Link } from "react-router-dom";
import {
  FaGooglePlay,
  FaApple,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

const links = [
  { name: "About Us", href: "#" },
  { name: "Terms And Conditions", href: "#" },
  { name: "Support", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Mobile App", href: "#" },
  { name: "Contact Us", href: "#" },
];

const socialLinks = [
  { icon: FaInstagram, href: "#" },
  { icon: FaTwitter, href: "#" },
  { icon: FaFacebook, href: "#" },
  { icon: FaYoutube, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#333333] text-white py-10 px-6 md:px-16">
      <div className="container grid md:grid-cols-3 gap-12">
        {/* Left Section */}
        <div>
          <div className="flex items-center space-x-2">
            <div className="border-8 border-yellow-400 p-2 rounded-md">
              <span className="text-yellow-400 text-3xl font-bold ">L</span>
            </div>
          </div>
          <p className="text-gray-400 mt-4">
            Et Dolore Aut Ipsum Incidunt Nostrum Aliquid Minima. Ut Voluptatibus
            Sed. Rem Distinctio Aut Et Veritatis Quis. At Provident Temporibus
            At. Debitis Veritatis Error.
          </p>
          <h4 className="mt-6 text-sm font-semibold">Download Our App On</h4>
          <div className="flex space-x-4 mt-3">
            <button className="flex items-center space-x-2 bg-yellow-400 px-4 py-2 rounded-md text-black font-semibold">
              <FaGooglePlay />
              <span>Get it on Google Play</span>
            </button>
            <button className="flex items-center space-x-2 bg-yellow-400 px-4 py-2 rounded-md text-black font-semibold">
              <FaApple />
              <span>Download on the App Store</span>
            </button>
          </div>
        </div>

        {/* Center Section */}
        <div className="">
          <h4 className="text-sm  font-semibold">
            Enter Your Email To Get The Latest News
          </h4>
          <div className="flex mt-3">
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 bg-[#333333] border border-gray-600 rounded-l-md w-full text-white"
            />
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-r-md">
              Submit
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-20 text-gray-400">
            {links.map((link, index) => (
              <Link key={index} href={link.href} className="hover:text-white">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-evenly flex-col items-end">
          <div>
            {" "}
            <button className="bg-blue-600 text-white px-6 py-2 rounded-3xl">
              Refer & Earn
            </button>
          </div>
          <div>
            <h4 className="text-sm font-semibold mt-6">Follow Us On</h4>
            <div className="flex  space-x-3 mt-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white"
                >
                  <social.icon size={20} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
