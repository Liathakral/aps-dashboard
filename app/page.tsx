"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Apple } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaMeta } from "react-icons/fa6";
export default function AuthPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [mode, setMode] = useState<"signup" | "login">("signup");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {}
<div className="absolute inset-0 bg-[#020817] bg-[linear-gradient(115deg,rgba(0,180,171,0.1)_0%,transparent_40%),linear-gradient(305deg,#f15a24_0%,transparent_50%)]" />      <div className="relative z-10 w-full max-w-6xl px-6 py-12 flex flex-col lg:flex-row items-center justify-between gap-16">
        {}
        <div className="hidden lg:block flex-1 text-white space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-(--primary) flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white" />
            </div>
            <span className="text-xl font-semibold">aps</span>
          </div>
          <h1 className="text-4xl font-semibold leading-tight max-w-md">
            Expert level Cybersecurity <br />
            in <span className="text-(--primary)">hours</span> not weeks.
          </h1>
        </div>
        {}
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
            {}
            <div className="text-center space-y-1">
              <h2 className="text-2xl font-semibold text-gray-900">
                {mode === "signup" ? "Sign up" : "Log in"}
              </h2>
              <p className="text-sm text-gray-500">
                {mode === "signup"
                  ? "Already have an account?"
                  : "Don't have an account?"}{" "}
                <span
                  onClick={() =>
                    setMode(mode === "signup" ? "login" : "signup")
                  }
                  className="text-(--primary) cursor-pointer hover:underline"
                >
                  {mode === "signup" ? "Log in" : "Sign up"}
                </span>
              </p>
            </div>
            {}
            <form className="space-y-4 text-gray-500" onSubmit={handleSubmit}>
              {mode === "signup" && (
                <>
                  <Input placeholder="First name*" />
                  <Input placeholder="Last name*" />
                </>
              )}
              <Input placeholder="Email address*" type="email" />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password*"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-(--primary) focus:ring-2 focus:ring-(--primary)/20 outline-none text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <button
                type="submit"
                className="w-full cursor-pointer bg-(--primary) text-white py-3 rounded-full font-medium hover:opacity-90 transition"
              >
                {mode === "signup" ? "Create account" : "Log in"}
              </button>
            </form>
            {}
            <div className="flex gap-3 pt-2">
              <SocialButton provider="apple" />
              <SocialButton provider="google" />
              <SocialButton provider="meta" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Input({ placeholder, type = "text" }: { placeholder: string; type?: string }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-(--primary) focus:ring-2 focus:ring-(--primary)/20 outline-none text-sm"
    />
  );
}
function SocialButton({ provider }: { provider: "apple" | "google" | "meta" }) {
  const config = {
    apple: {
      icon: <Apple size={18} />,
      bg: "bg-black",
      text: "text-white",
    },
    google: {
      icon: <FcGoogle size={18} />,
      bg: "bg-white border border-gray-200",
      text: "text-gray-700",
    },
    meta: {
      icon: <FaMeta size={18} />,
      bg: "bg-[#1877F2]",
      text: "text-white",
    },
  };
  const current = config[provider];
  return (
    <button
      type="button"
      className={`flex items-center justify-center gap-2 flex-1 py-2 rounded-full text-sm font-medium transition hover:opacity-90 ${current.bg} ${current.text}`}
    >
      {current.icon}
    </button>
  );
}