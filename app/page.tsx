import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 flex flex-col items-center justify-center p-6 font-sans">
      <main className="w-full max-w-5xl flex flex-col items-center text-center">
        {/* Logo Section */}
        <div className="mb-16">
          <div className="relative w-48 h-48 mx-auto mb-8">
            {/* Outer glow layers */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-[3rem] blur-3xl opacity-40 animate-pulse"></div>
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-400/30 via-indigo-500/30 to-purple-600/30 rounded-[3rem] blur-2xl"></div>
            
            {/* Rotating border effect */}
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 p-[3px] shadow-2xl animate-[spin_8s_linear_infinite]">
              <div className="w-full h-full bg-transparent rounded-[3rem]"></div>
            </div>
            
            {/* Main border */}
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 p-[3px] shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-900 to-black rounded-[3rem]"></div>
            </div>
            
            {/* Inner decorative elements */}
            <div className="absolute inset-8 rounded-[2rem] bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-600/10 blur-sm"></div>
            
            {/* Icon container */}
            <div className="relative w-full h-full flex items-center justify-center rounded-[3rem] overflow-hidden p-8">
              {/* Animated background gradients */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-black"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_50%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.15),transparent_50%)]"></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <Image
                src="/ybs-logo.png"
                alt="YBS Way App Icon"
                width={115}
                height={115}
                className="relative z-10 object-contain filter drop-shadow-[0_0_40px_rgba(99,102,241,0.6)] drop-shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                priority
              />
            </div>
            
            {/* Corner accents */}
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-blue-400 to-transparent rounded-full blur-sm"></div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-bl from-indigo-400 to-transparent rounded-full blur-sm"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-tr from-purple-400 to-transparent rounded-full blur-sm"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-tl from-pink-400 to-transparent rounded-full blur-sm"></div>
          </div>
          
          <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 mb-4 tracking-tight drop-shadow-sm animate-[pulse_3s_ease-in-out_infinite]">
            YBS Way
          </h1>
          <p className="text-2xl text-slate-700 dark:text-slate-300 font-semibold mb-2">
            Real-time Bus Tracking
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            Track your bus, plan your journey, stay updated
          </p>
        </div>

        {/* App Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 w-full">
          {[
            {
              icon: "map",
              title: "Live Tracking",
              desc: "Real-time bus location updates",
              gradient: "from-blue-500 to-cyan-500",
            },
            {
              icon: "bell",
              title: "Smart Alerts",
              desc: "Get notified about your routes",
              gradient: "from-indigo-500 to-purple-500",
            },
            {
              icon: "route",
              title: "Route Planning",
              desc: "Find the best routes instantly",
              gradient: "from-purple-500 to-pink-500",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-14 h-14 mx-auto mb-5 flex items-center justify-center bg-gradient-to-br ${feature.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                >
                  {feature.icon === "map" && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  )}
                  {feature.icon === "bell" && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  )}
                  {feature.icon === "route" && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  )}
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Download Section */}
        <div className="bg-gradient-to-br from-white/90 to-blue-50/90 dark:from-slate-800/90 dark:to-slate-900/90 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-slate-200/50 dark:border-slate-700/50 w-full max-w-lg">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Download Now
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Get the YBS Way app and start tracking your bus in real-time.
            </p>
          </div>
          
          <a
            href="/ybs-way.apk"
            download="ybs-way.apk"
            className="group relative inline-flex items-center justify-center gap-3 w-full h-16 px-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            <span className="relative z-10 flex items-center gap-3">
              <svg
                className="w-7 h-7 group-hover:animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download APK
            </span>
          </a>
          
          <div className="mt-6 flex items-center justify-center gap-6 text-sm text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              21 MB
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Android 7.0+
            </span>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-slate-500 dark:text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} YBS Way. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
