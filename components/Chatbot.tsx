
"use client";

import { useState } from "react";

type Message = {
  sender: "bot" | "user";
  text: string;
};

const quickQuestions = [
  {
    icon: "🔧",
    title: "Services",
    question: "What laptop services do you provide?",
  },
  {
    icon: "📅",
    title: "Book Service",
    question: "How can I book a laptop service?",
  },
  {
    icon: "💻",
    title: "Brands",
    question: "Which laptop brands do you repair?",
  },
  {
    icon: "📍",
    title: "Locations",
    question: "Where are you located?",
  },
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFlying, setIsFlying] = useState(false);
  const [isLaptopOpen, setIsLaptopOpen] = useState(false);

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: `Hi! 👋

Welcome to iFLOW SYSTEMS.

I'm your AI laptop service assistant. 💻✨

Tell me what's happening with your laptop and I'll help you.`,
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);

  /* =========================================================
     OPEN AI LAPTOP
  ========================================================= */

  function openAssistant() {
    if (isFlying || isOpen) return;

    setIsFlying(true);

    setTimeout(() => {
      setIsOpen(true);
    }, 1150);

    setTimeout(() => {
      setIsLaptopOpen(true);
      setIsFlying(false);
    }, 1650);
  }

  /* =========================================================
     CLOSE AI LAPTOP
  ========================================================= */

  function closeAssistant() {
    setIsLaptopOpen(false);

    setTimeout(() => {
      setIsOpen(false);
    }, 550);
  }

  /* =========================================================
     BOOK SERVICE
  ========================================================= */

  function goToBooking() {
    window.location.href = "/book-service";
  }

  /* =========================================================
     SEND MESSAGE TO REAL AI
  ========================================================= */

  async function sendMessage(text: string) {
    const trimmed = text.trim();

    if (!trimmed || isTyping) return;

    const userMessage: Message = {
      sender: "user",
      text: trimmed,
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "AI request failed");
      }

      const botMessage: Message = {
        sender: "bot",
        text:
          data.reply ||
          "Sorry, I couldn't generate a response right now.",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chatbot error:", error);

      const errorMessage: Message = {
        sender: "bot",
        text: `Sorry! 😕 I'm having trouble connecting to the AI right now.

Please try again in a moment.

📞 iFLOW SYSTEMS
+91 78240 00011`,
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  }

  /* =========================================================
     FORM SUBMIT
  ========================================================= */

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    sendMessage(input);
  }

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <>
      {/* =====================================================
          AI ACTIVATION BUTTON
      ====================================================== */}

      {!isOpen && !isFlying && (
        <div className="fixed bottom-6 right-6 z-[999]">
          <button
            type="button"
            onClick={openAssistant}
            aria-label="Open iFLOW AI Assistant"
            className="group relative"
          >
            {/* Glow */}

            <span className="absolute -inset-4 rounded-full bg-green-400/20 blur-2xl transition duration-500 group-hover:bg-green-400/40" />

            {/* Button */}

            <div className="relative flex h-[82px] w-[82px] items-center justify-center overflow-hidden rounded-full border-4 border-white bg-gradient-to-br from-white via-green-50 to-green-200 shadow-[0_20px_60px_rgba(16,100,60,0.30)] transition duration-500 group-hover:-translate-y-2 group-hover:scale-110">
              {/* Mini Laptop */}

              <div className="relative h-10 w-14">
                {/* Screen */}

                <div className="absolute left-1 top-0 h-8 w-12 rounded-[5px] border-[2px] border-[#17352a] bg-gradient-to-br from-white to-green-100 shadow-md">
                  <div className="absolute left-1.5 top-1.5 h-3 w-7 rounded bg-gradient-to-r from-green-400 to-emerald-600 opacity-70" />

                  <div className="absolute bottom-1.5 left-1.5 h-1 w-8 rounded-full bg-gray-300" />
                </div>

                {/* Base */}

                <div className="absolute -bottom-0.5 left-0 h-2 w-14 rounded-b-lg rounded-t-sm bg-gradient-to-r from-gray-500 via-gray-200 to-gray-500 shadow-md" />
              </div>

              {/* Online */}

              <span className="absolute right-1 top-1 h-4 w-4 rounded-full border-2 border-white bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.8)]" />
            </div>

            {/* Hover Text */}

            <div className="absolute -top-12 right-0 whitespace-nowrap rounded-full border border-green-100 bg-white px-4 py-2 text-xs font-bold text-[#17352a] shadow-lg opacity-0 transition duration-300 group-hover:-translate-y-1 group-hover:opacity-100">
              Ask iFLOW AI ✨
            </div>
          </button>
        </div>
      )}

      {/* =====================================================
          FLYING LAPTOP
      ====================================================== */}

      {isFlying && (
        <div className="pointer-events-none fixed inset-0 z-[1000] flex items-center justify-center overflow-hidden">
          {/* Light */}

          <div className="absolute h-[500px] w-[500px] rounded-full bg-green-300/20 blur-[120px]" />

          <div className="flying-laptop relative">
            <div className="relative h-[230px] w-[350px]">
              {/* Screen */}

              <div className="absolute left-[25px] top-0 h-[200px] w-[300px] rounded-[20px] border-[9px] border-[#25332d] bg-[#101915] shadow-[0_50px_120px_rgba(0,0,0,0.45)]">
                {/* Screen */}

                <div className="absolute inset-3 overflow-hidden rounded-[9px] bg-gradient-to-br from-white via-green-50 to-green-100">
                  <div className="flex h-full flex-col items-center justify-center">
                    <div className="mb-3 text-5xl">✨</div>

                    <p className="text-xl font-extrabold text-[#17352a]">
                      iFLOW AI
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Intelligent Laptop Service Assistant
                    </p>
                  </div>
                </div>

                {/* Camera */}

                <div className="absolute left-1/2 top-1 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-gray-400" />
              </div>

              {/* Base */}

              <div className="absolute bottom-0 left-0 h-[38px] w-[350px] rounded-b-[25px] rounded-t-lg bg-gradient-to-b from-gray-200 via-gray-300 to-gray-500 shadow-[0_35px_80px_rgba(0,0,0,0.40)]">
                <div className="absolute left-1/2 top-2 h-2 w-20 -translate-x-1/2 rounded-full bg-gray-400/60" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          PREMIUM LAPTOP CHATBOT
      ====================================================== */}

      {isOpen && (
        <div
          className={`fixed bottom-4 right-4 z-[999] ${
            isLaptopOpen
              ? "laptop-settled"
              : "laptop-landing"
          }`}
        >
          {/* Laptop */}

          <div className="relative w-[min(760px,calc(100vw-24px))]">
            {/* Ground Shadow */}

            <div className="absolute -bottom-5 left-[8%] h-8 w-[84%] rounded-[50%] bg-black/20 blur-2xl" />

            {/* =================================================
                SCREEN
            ================================================= */}

            <div
              className={`relative mx-auto h-[min(560px,calc(100vh-150px))] w-[min(700px,calc(100vw-24px))] origin-bottom rounded-[28px] border-[10px] border-[#25332d] bg-[#111b17] shadow-[0_35px_100px_rgba(0,0,0,0.38)] transition-transform duration-700 ${
                isLaptopOpen
                  ? "rotateX-0"
                  : "rotateX-90"
              }`}
              style={{
                perspective: "1200px",
              }}
            >
              {/* Camera */}

              <div className="absolute left-1/2 top-1 z-30 h-2 w-2 -translate-x-1/2 rounded-full bg-gray-500 shadow-inner" />

              {/* Screen Bezel */}

              <div className="absolute inset-[9px] overflow-hidden rounded-[17px] bg-white">
                {/* =================================================
                    AI HEADER
                ================================================= */}

                <div className="relative overflow-hidden border-b border-green-100 bg-gradient-to-r from-white via-green-50 to-green-100 px-5 py-4">
                  {/* Light */}

                  <div className="absolute -right-10 -top-20 h-40 w-40 rounded-full bg-green-300/20 blur-2xl" />

                  <div className="absolute -bottom-20 -left-10 h-32 w-32 rounded-full bg-green-200/20 blur-2xl" />

                  <div className="relative flex items-center justify-between">
                    {/* AI */}

                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-green-200 bg-white text-2xl shadow-md">
                        🤖
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h2 className="text-lg font-extrabold text-[#17352a]">
                            iFLOW
                          </h2>

                          <span className="text-lg font-medium text-gray-500">
                            AI
                          </span>
                        </div>

                        <p className="text-[11px] text-gray-500">
                          Intelligent Laptop Service Assistant
                        </p>

                        <div className="mt-1 flex items-center gap-1.5">
                          <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />

                          <span className="text-[9px] font-bold text-green-700">
                            ONLINE • AI POWERED
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Close */}

                    <button
                      type="button"
                      onClick={closeAssistant}
                      aria-label="Close AI Assistant"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-lg font-bold text-gray-500 shadow-sm transition hover:rotate-90 hover:bg-green-50 hover:text-green-700"
                    >
                      ×
                    </button>
                  </div>
                </div>

                {/* =================================================
                    CHAT
                ================================================= */}

                <div className="flex h-[calc(100%-126px)] flex-col">
                  <div className="flex-1 overflow-y-auto bg-gradient-to-b from-white via-green-50/20 to-gray-50 px-4 py-5">
                    <div className="mx-auto max-w-2xl space-y-4">
                      {messages.map((message, index) => {
                        const isBot =
                          message.sender === "bot";

                        return (
                          <div
                            key={index}
                            className={`flex ${
                              isBot
                                ? "justify-start"
                                : "justify-end"
                            }`}
                          >
                            <div
                              className={`max-w-[75%] ${
                                isBot
                                  ? "rounded-2xl rounded-bl-md border border-green-100 bg-white text-[#17352a] shadow-sm"
                                  : "rounded-2xl rounded-br-md bg-gradient-to-r from-[#174d35] to-[#23734a] text-white shadow-md"
                              } px-4 py-3`}
                            >
                              <p className="whitespace-pre-line text-[12px] leading-[1.6]">
                                {message.text}
                              </p>
                            </div>
                          </div>
                        );
                      })}

                      {/* Typing */}

                      {isTyping && (
                        <div className="flex justify-start">
                          <div className="rounded-2xl rounded-bl-md border border-green-100 bg-white px-4 py-3 shadow-sm">
                            <div className="flex gap-1">
                              <span className="h-2 w-2 animate-bounce rounded-full bg-green-500" />

                              <span
                                className="h-2 w-2 animate-bounce rounded-full bg-green-500"
                                style={{
                                  animationDelay:
                                    "120ms",
                                }}
                              />

                              <span
                                className="h-2 w-2 animate-bounce rounded-full bg-green-500"
                                style={{
                                  animationDelay:
                                    "240ms",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* =================================================
                          QUICK QUESTIONS
                      ================================================= */}

                      {messages.length === 1 && (
                        <div className="grid grid-cols-2 gap-2 pt-2">
                          {quickQuestions.map(
                            (item) => (
                              <button
                                key={item.title}
                                type="button"
                                onClick={() =>
                                  sendMessage(
                                    item.question
                                  )
                                }
                                disabled={isTyping}
                                className="group rounded-xl border border-green-100 bg-white p-3 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-green-300 hover:shadow-md disabled:opacity-50"
                              >
                                <div className="flex items-center gap-2">
                                  <span className="text-lg">
                                    {item.icon}
                                  </span>

                                  <span className="text-[10px] font-extrabold text-[#17352a]">
                                    {item.title}
                                  </span>
                                </div>
                              </button>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* =================================================
                      BOOK SERVICE BUTTON
                  ================================================= */}

                  <div className="border-t border-green-100 bg-gradient-to-r from-green-50 via-white to-green-50 px-3 pt-3">
                    <button
                      type="button"
                      onClick={goToBooking}
                      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#174d35] to-[#2e8b57] px-4 py-3 text-xs font-extrabold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      <span className="text-base">
                        📅
                      </span>

                      <span>
                        Book a Laptop Service
                      </span>

                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                  </div>

                  {/* =================================================
                      INPUT
                  ================================================= */}

                  <div className="border-t border-green-100 bg-white p-3">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-[9px] font-semibold text-gray-400">
                        Ask anything about your laptop
                      </span>

                      <span className="text-[9px] font-bold text-green-600">
                        AI Assistant
                      </span>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className="flex items-center gap-2"
                    >
                      <div className="flex h-11 flex-1 items-center rounded-full border border-gray-200 bg-gray-50 px-4 transition focus-within:border-green-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-green-50">
                        <span className="mr-2 text-sm">
                          💬
                        </span>

                        <input
                          value={input}
                          onChange={(e) =>
                            setInput(e.target.value)
                          }
                          placeholder="Ask anything..."
                          disabled={isTyping}
                          className="min-w-0 flex-1 bg-transparent text-xs text-gray-700 outline-none placeholder:text-gray-400"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={
                          isTyping ||
                          !input.trim()
                        }
                        aria-label="Send message"
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#174d35] to-[#2e8b57] text-lg text-white shadow-md transition hover:scale-105 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        ➤
                      </button>
                    </form>

                    <div className="mt-1.5 text-center text-[8px] text-gray-400">
                      iFLOW SYSTEMS • AI Laptop Assistant
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                LAPTOP BASE
            ================================================= */}

            <div className="relative mx-auto h-[45px] w-[106%] -translate-x-[3%] rounded-b-[30px] rounded-t-[8px] border border-gray-400 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-500 shadow-[0_25px_60px_rgba(0,0,0,0.30)]">
              {/* Keyboard */}

              <div className="absolute left-[12%] right-[12%] top-2 h-4 rounded-lg bg-gradient-to-b from-gray-400 to-gray-300 opacity-70" />

              {/* Trackpad */}

              <div className="absolute bottom-1.5 left-1/2 h-3 w-20 -translate-x-1/2 rounded border border-gray-400 bg-gray-300" />
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style jsx>{`
        /* ================================================
           LAPTOP FLIES FROM DISTANCE
        ================================================ */

        @keyframes laptopFly {
          0% {
            opacity: 0;

            transform:
              translate3d(-35vw, -25vh, -1000px)
              rotateX(40deg)
              rotateY(-40deg)
              rotateZ(-15deg)
              scale(0.12);

            filter: blur(10px);
          }

          30% {
            opacity: 0.6;

            transform:
              translate3d(-20vw, -12vh, -650px)
              rotateX(28deg)
              rotateY(-28deg)
              rotateZ(-10deg)
              scale(0.3);

            filter: blur(7px);
          }

          55% {
            opacity: 0.9;

            transform:
              translate3d(-7vw, -5vh, -350px)
              rotateX(16deg)
              rotateY(-16deg)
              rotateZ(-5deg)
              scale(0.55);

            filter: blur(4px);
          }

          78% {
            transform:
              translate3d(7vw, 2vh, -80px)
              rotateX(7deg)
              rotateY(8deg)
              rotateZ(2deg)
              scale(0.85);

            filter: blur(1.5px);
          }

          100% {
            opacity: 1;

            transform:
              translate3d(0, 0, 0)
              rotateX(0)
              rotateY(0)
              rotateZ(0)
              scale(1);

            filter: blur(0);
          }
        }

        /* ================================================
           LANDING
        ================================================ */

        @keyframes laptopLand {
          0% {
            opacity: 0;

            transform:
              translate3d(180px, 100px, -500px)
              rotateY(-30deg)
              rotateX(20deg)
              scale(0.45);

            filter: blur(5px);
          }

          65% {
            opacity: 1;

            transform:
              translate3d(25px, -8px, 0)
              rotateY(5deg)
              rotateX(2deg)
              scale(1.03);

            filter: blur(0);
          }

          85% {
            transform:
              translate3d(-5px, 2px, 0)
              rotateY(-2deg)
              rotateX(0)
              scale(0.99);
          }

          100% {
            transform:
              translate3d(0, 0, 0)
              rotateY(0)
              rotateX(0)
              scale(1);
          }
        }

        /* ================================================
           SCREEN OPENING
        ================================================ */

        .rotateX-90 {
          transform: rotateX(90deg);
        }

        .rotateX-0 {
          transform: rotateX(0deg);
        }

        /* ================================================
           FLYING LAPTOP
        ================================================ */

        .flying-laptop {
          animation:
            laptopFly
            1.15s
            cubic-bezier(0.16, 1, 0.3, 1)
            forwards;

          perspective: 1600px;
        }

        /* ================================================
           LANDING
        ================================================ */

        .laptop-landing {
          animation:
            laptopLand
            0.6s
            cubic-bezier(0.16, 1, 0.3, 1)
            forwards;

          perspective: 1400px;
        }

        /* ================================================
           SETTLE
        ================================================ */

        .laptop-settled {
          animation:
            laptopSettle
            0.5s
            ease-out
            forwards;
        }

        @keyframes laptopSettle {
          0% {
            transform: translateY(8px);
          }

          50% {
            transform: translateY(-4px);
          }

          75% {
            transform: translateY(2px);
          }

          100% {
            transform: translateY(0);
          }
        }

        /* ================================================
           MOBILE
        ================================================ */

        @media (max-width: 640px) {
          .laptop-settled,
          .laptop-landing {
            right: 8px;
            bottom: 8px;
          }
        }

        /* ================================================
           REDUCED MOTION
        ================================================ */

        @media (prefers-reduced-motion: reduce) {
          .flying-laptop,
          .laptop-landing,
          .laptop-settled {
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
}
