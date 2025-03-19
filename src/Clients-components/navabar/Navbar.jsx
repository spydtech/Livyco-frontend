import { useState } from "react";
import { Bell } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#0827b2] px-6 py-3 flex items-center justify-between w-full">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="border-8 border-yellow-400 p-2 rounded-md">
          <span className="text-yellow-400 text-2xl font-bold ">L</span>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-16 text-white">
        <a href="#" className="hover:underline">
          Home
        </a>
        <a href="#" className="hover:underline">
          Listing
        </a>
        <a href="#" className="hover:underline">
          Tenants
        </a>
        <a href="#" className="hover:underline">
          Dashboard
        </a>
        <a href="#" className="hover:underline">
          Chat
        </a>
        <a href="#" className="hover:underline">
          Contact Us
        </a>
      </div>

      {/* Notification and Profile */}
      <div className="flex items-center space-x-4">
        {/* Notification Bell */}
        <div className="relative">
          <Bell className="text-white cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-red-500 h-2 w-2 rounded-full"></span>
        </div>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center space-x-4 bg-white p-2 rounded-lg"
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/1b73/04b2/85d08c0f8b29f8fc61ad6621680532e7?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HebmvBulLISDoE3gGh9m9L-a502IQkuOMM~vuRDvBE1HWCCvqEgroDPwtVlpwtpmNcsLkB0O6X-JjlASIeghaTNMzTC8Jl9by32L4CXOW4bvcQxkIfY33S5bUWM~loWxkGGV6K1iOVRLD3qndqFZtJ-UQ7JWfCw5yrqsg1u8uMgG-2mSxMmHE55RIRLIgisbWtVYhfPnCIaBh8IN~JLuZmHKm3zJpPiikhG~cvbxvMQTuLnm2WdLfEHkiYT9TZ75gafMMYWP4IF9slrX0tyvfgtJZtUEfTaXrqL-xzqXE7Tys1PpKCwZAKQOlES0PpQ742g~P-ltUbloN5s-5ltvyQ__"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <div className="text-right">
              <p className="text-blue-900 font-semibold">Jagadeesh</p>
              <p className="text-gray-500 text-sm">Krazy Deluxe Hostels</p>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}
