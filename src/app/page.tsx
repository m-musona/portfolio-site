'use client';

import React from "react";
import DotGrid from "@/components/DotGrid";
import Marquee from "react-fast-marquee";
import CardSwap, { Card } from "@/components/CardSwap";
import MagicBento from "@/components/MagicBento";
import ChromaGrid from "@/components/ChromaGrid";

const skillsRow1 = ["Django", "Python", "C#", "Java", "React", "TypeScript", "SQL", 
  "NextJS", "Vite", "PHP", "Laravel"];
const skillsRow2 = ["AWS", "Docker", "Git", "C++", "REST APIs", "TailwindCSS", 
  "OpenGL", "OpenCV", "C", "Flutter", "Dart"];
const skillsRow3 = ["NumPy", "Pandas", "Kaggle", "Machine Learning", "CI/CD", 
  "Natural Language Processing", "Tendorflow", "Scikit-Learn", "Pytorch"];

const items = [
  {
    image: "projects/InvoiceGenerator.jpg",
    title: "Invoice Generator",
    subtitle: "Asp.Net",
    handle: "C#",
    borderColor: "#9d0bf1",
    gradient: "linear-gradient(145deg, #6f1dd3, #000)",
    url: "https://www.codester.com/items/56459/asp-net-invoice-generator"
  },
  {
    image: "projects/ResumeRanker.jpg",
    title: "AI Resume Ranker",
    subtitle: "Django",
    handle: "Python",
    borderColor: "#9d0bf1",
    gradient: "linear-gradient(180deg, #6f1dd3, #000)",
    url: "https://www.codester.com/items/56460/ai-resume-ranker-in-django"
  },
  {
    image: "projects/ImageClassificationAPI.png",
    title: "Image Classification API",
    subtitle: "FastApi, Resnet(Machine Learning)",
    handle: "Python",
    borderColor: "#9d0bf1",
    gradient: "linear-gradient(180deg, #6f1dd3, #000)",
    url: "https://github.com/m-musona/image-classification-api"
  },
  {
    image: "projects/PropertyTaxSystem.png",
    title: "Property Tax System",
    subtitle: "FastApi, Django, Next js, Google Gemini, Scikit Learn",
    handle: "Python, NextJS",
    borderColor: "#9d0bf1",
    gradient: "linear-gradient(180deg, #6f1dd3, #000)",
    url: "https://github.com/studio-digicode/property-tax-system-frontend"
  },
  {
    image: "projects/CustomerGazeTracker.PNG",
    title: "Customer Gaze Tracking System",
    subtitle: "Dlib, OpenCV",
    handle: "Python",
    borderColor: "#9d0bf1",
    gradient: "linear-gradient(180deg, #6f1dd3, #000)",
    url: "https://github.com/m-musona/customer-gaze-tracking"
  },
  {
    image: "projects/Sentify.jpg",
    title: "Sentiment Analysis Analyser",
    subtitle: "NextJS, Python, NLP",
    handle: "Python",
    borderColor: "#9d0bf1",
    gradient: "linear-gradient(180deg, #6f1dd3, #000)",
    url: "https://www.codester.com/items/55009/sentify-social-media-posts-sentiment-analyser"
  },
  {
    image: "projects/BasicPortfolioSite.PNG",
    title: "Basic Portfolio Site",
    subtitle: "Html, Css, JS",
    handle: "JS",
    borderColor: "#9d0bf1",
    gradient: "linear-gradient(180deg, #6f1dd3, #000)",
    url: "https://github.com/m-musona/portfolio-site"
  },
];


interface MarqueeRowProps {
  items: string[];
  reverse?: boolean;
  speed?: number;
  spacing?: "sm" | "md" | "lg";
  variant?: "default" | "minimal" | "gradient";
}

const MarqueeRow = ({
  items,
  reverse = false,
  speed = 40,
  spacing = "md",
  variant = "default",
}: MarqueeRowProps) => {
  const spacingClasses = {
    sm: "mx-2",
    md: "mx-4",
    lg: "mx-6",
  };

  const variantClasses = {
    default: "px-6 py-2 rounded-full bg-[#0a0a0a] text-white border border-[#6f1dd3] shadow-lg shadow-[#6f1dd3]/20",
    minimal: "px-5 py-1.5 rounded-full bg-transparent text-white border border-white/30",
    gradient: "px-6 py-2 rounded-full bg-gradient-to-r from-[#6f1dd3] to-[#c026d3] text-white font-medium",
  };

  return (
    <div className="relative overflow-hidden my-3">
      <Marquee
        direction={reverse ? "right" : "left"}
        speed={speed}
        gradient={false}
        pauseOnHover={true}
        loop={0}
        className="py-0"
      >
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className={`inline-flex items-center justify-center whitespace-nowrap ${spacingClasses[spacing]} ${variantClasses[variant]} transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#6f1dd3]/30`}
          >
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#141414] text-white font-sans">
      {/* Intro Section */}
      <section className="relative px-6 md:px-16 py-20 bg-[#1b1b1b] overflow-hidden">
        {/* Dot Grid Background */}
        <div className="absolute inset-0 z-0">
          <DotGrid
            dotSize={10}
            gap={15}
            baseColor="#141414"
            activeColor="#6f1dd3"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#9d0bf1] mb-6">
            Welcome To Mutale Musona's Portfolio
          </h1>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <p className="text-lg">
                <span className="font-semibold">Education:</span> Third year student at the
                University of Lusaka (Started July 2023)
              </p>
              <p className="text-lg">
                <span className="font-semibold">Certifications:</span> Kaggle
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg">
                <span className="font-semibold">Phone:</span> +260 966 776586
              </p>
              <p className="text-lg">
                <span className="font-semibold">Email:</span> musonamutale@gmail.com
              </p>
              <div className="flex gap-6">
                <a
                  href="https://zm.linkedin.com/in/mutale-musona-3567a62a9"
                  className="text-[#6f1dd3] hover:text-[#9d0bf1] underline transition"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/m-musona/"
                  className="text-[#6f1dd3] hover:text-[#9d0bf1] underline transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 md:px-16 py-20 h-[520px] bg-[#141414] overflow-hidden">
        <div className="relative h-[400px] flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-[#9d0bf1]">
            My Education & Certifications
          </h1>

          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={true}
            skewAmount={0}
          >
            {/* Education Card */}
            <Card className="bg-linear-to-br from-[#111111] to-[#1b1b1b] text-white p-7 rounded-2xl border border-[#6f1dd3]/60 shadow-lg hover:shadow-purple-500/20 transition-all">
              <h3 className="text-2xl font-bold mb-3 text-[#9d0bf1]">
                🎓 Education
              </h3>

              <p className="text-sm text-gray-300 font-medium">
                University of Lusaka
              </p>

              <p className="text-sm text-gray-400 mt-1">
                Bachelor's Degree in Information Systems And Technology
              </p>

              <div className="mt-3 space-y-1 text-sm text-gray-400">
                <p>📅 Started: July 2023</p>
                <p>📚 Status: Third Year</p>
                <p>💡 Focus: Software Development & Data Science</p>
              </div>
            </Card>

            {/* Kaggle Certification */}
            <Card className="bg-linear-to-br from-[#111111] to-[#1b1b1b] text-white p-7 rounded-2xl border border-[#6f1dd3]/60 shadow-lg hover:shadow-purple-500/20 transition-all">
              <h3 className="text-2xl font-bold mb-3 text-[#9d0bf1]">
                📊 Kaggle Certifications
              </h3>

              <p className="text-sm text-gray-300 font-medium">
                Data Science & Machine Learning
              </p>

              <ul className="mt-3 text-sm text-gray-400 space-y-1">
                <li>• Intro To Machine Learning</li>
                <li>• Intermediate Machine Learning</li>
                <li>• Introduction To Deep Learning</li>
                <li>• Data Cleaning</li>
              </ul>

              <a
                href="https://www.kaggle.com/mutalemusona"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm font-medium text-[#9d0bf1] hover:underline"
              >
                View Certificates →
              </a>
            </Card>

            {/* AWS Certification */}
            {/* <Card className="bg-linear-to-br from-[#111111] to-[#1b1b1b] text-white p-7 rounded-2xl border border-[#6f1dd3]/60 shadow-lg hover:shadow-purple-500/20 transition-all">
              <h3 className="text-2xl font-bold mb-3 text-[#9d0bf1]">
                ☁️ AWS Certification
              </h3>

              <p className="text-sm text-gray-300 font-medium">
                Cloud Computing Fundamentals
              </p>

              <ul className="mt-3 text-sm text-gray-400 space-y-1">
                <li>• EC2, S3, IAM</li>
                <li>• Cloud Architecture Basics</li>
                <li>• Security & Scalability</li>
              </ul>

              <a
                href="https://www.credly.com/your-aws-certificate"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm font-medium text-[#9d0bf1] hover:underline"
              >
                View Certificate →
              </a>
            </Card> */}

            {/* Google Certification */}
            {/* <Card className="bg-linear-to-br from-[#111111] to-[#1b1b1b] text-white p-7 rounded-2xl border border-[#6f1dd3]/60 shadow-lg hover:shadow-purple-500/20 transition-all">
              <h3 className="text-2xl font-bold mb-3 text-[#9d0bf1]">
                🧠 Google Certification
              </h3>

              <p className="text-sm text-gray-300 font-medium">
                Software & Data Technologies
              </p>

              <ul className="mt-3 text-sm text-gray-400 space-y-1">
                <li>• Software Engineering Principles</li>
                <li>• Data Analysis & Visualization</li>
                <li>• Industry best practices</li>
              </ul>

              <a
                href="https://www.coursera.org/account/accomplishments"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm font-medium text-[#9d0bf1] hover:underline"
              >
                View Certificate →
              </a>
            </Card> */}
          </CardSwap>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-0 py-20 bg-[#1b1b1b] space-y-8">
        <h2 className="px-6 md:px-16 text-3xl font-bold text-[#9d0bf1] mb-10">My Skills</h2>
        <MarqueeRow items={skillsRow1} />
        <MarqueeRow items={skillsRow2} reverse />
        <MarqueeRow items={skillsRow3} />
      </section>

      {/* Projects Section */}
      <section className="px-6 md:px-16 py-20 bg-[#141414]">
        <h2 className="text-3xl font-bold text-[#9d0bf1] mb-10">My Projects</h2>
          <ChromaGrid 
            items={items}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
      </section>
    </div>
  );
};

export default Portfolio;
