import React from "react";

const Hero = () => {
  return (
    <div className="max-h-[calc(100dvh-4rem)] bg-gradient-to-b from-background via-background to-background/90 text-foreground relative overflow-hidden">
      <main className="flex flex-col items-center justify-center min-h-screen relative z-10 px-4">
        <p className="text-xl mb-4 text-center text-muted-foreground">
          IT'S NEW AND IMPROVED!
        </p>
        <h1 className="text-6xl font-bold mb-4 text-center max-w-4xl">
          <span className="bg-gradient-to-r from-pink-500 via-yellow-500 to-cyan-500 text-transparent bg-clip-text">
            Stop struggling with talent.
          </span>
        </h1>
        <p className="text-2xl mb-8 text-center max-w-2xl">
          a motivated and dedicated software developer with a passion for
          creating innovative solutions to complex problems.
        </p>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src="/profile.jpeg"
              alt="Author"
              className="w-12 h-12 rounded-full"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
          </div>
          <p className="text-lg flex items-center">
            Open to work
            <span className="ml-2 inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          </p>
        </div>
      </main>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 230"
          className="w-full h-auto text-muted/30"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,149.3C672,149,768,171,864,165.3C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
