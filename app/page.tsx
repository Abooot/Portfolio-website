"use client";

import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import image1 from "../public/1.png";
import image2 from "../public/2.jpg";
import image3 from "../public/3.png";
import pp from "../public/pp.jpg";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-all duration-300">
      <div className="mx-auto max-w-xl px-4 py-20">
        <header className="flex items-center justify-between mb-12 ">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-20 h-20 rounded-full overflow-hidden "
          >
            <Image
              src={pp}
              alt="Profile"
              className="cursor-pointer transition-all duration-300 hover:scale-110"
            />
          </motion.div>
          <ThemeToggle />
        </header>

        <main className="space-y-20">
          <section className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-1"
            >
              <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
                Abdullah alameen
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Web development & Blockchain
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-3"
            >
              <h2 className="text-lg font-semibold">
                Building Scalable Solutions for Tomorrow
              </h2>
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
                a passionate web developer and software engineer with a keen eye for creating seamless, user-centric digital experiences. With a strong foundation in both front-end and back-end technologies, I thrive on solving complex problems and bringing innovative ideas to life.
              </p>
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
                Whether building responsive websites, crafting scalable applications, or optimizing performance, I’m committed to delivering high-quality solutions that make an impact. Let’s build something amazing together!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3"
            >
              <Button className="rounded-full bg-gradient-to-r from-rose-600 to-indigo-600 text-white transition-transform hover:scale-105">
                Get in touch
              </Button>

              <Link
                href="https://github.com/Abooot"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/abdullah-alameen/"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </Link>
            </motion.div>
          </section>

          {/* Experience Section */}
          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500  bg-clip-text text-transparent inline-block">
              Experience
            </h2>

            <div className="space-y-8">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Jan, 2024 - December 2024
                    </p>
                    <p className="font-medium">System Engineer</p>
                    <p className="text-blue-600 dark:text-blue-400">
                      Company X
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  As a Junior Developer at DMI Information and Technology, I’m involved in building and maintaining dynamic web applications that solve real-world problems for clients. My role focuses on developing both front-end and back-end components, utilizing technologies such as JavaScript, React, Node.js, and various databases. I collaborate closely with cross-functional teams to ensure seamless integration, enhance user experience, and optimize performance. This experience has further sharpened my skills in web development, problem-solving, and delivering high-quality solutions within fast-paced environments.


                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600 dark:text-gray-400 ">
                      July, 2023 - December, 2023
                    </p>
                    <p className="font-medium">System Engineer</p>
                    <p className="text-blue-600 dark:text-blue-400">
                      IT CAREER SWITCH UK
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  During my Fullstack Engineering internship at IT Career Switch, I had the opportunity to apply and expand my technical skills in a real-world setting. Working on both front-end and back-end projects, I collaborated with a team to develop dynamic web applications using technologies such as JavaScript, React, Node.js, and MongoDB. This experience deepened my understanding of software development workflows, version control with Git, and agile practices, while further refining my ability to deliver robust, user-focused solutions.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      january, 2023 - march, 2023
                    </p>
                    <p className="font-medium">System Engineer</p>
                    <p className="text-blue-600 dark:text-blue-400">
                      Le Wagon FullStack engineering Bootcamp
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  During my time at Le Wagon’s Fullstack Engineering Bootcamp, I immersed myself in an intensive, project-based learning environment that honed my skills in both front-end and back-end development. I gained hands-on experience with technologies like Ruby on Rails, JavaScript, HTML, CSS, and PostgreSQL, while building real-world applications. The bootcamp strengthened my problem-solving abilities, teamwork, and project management skills, preparing me to tackle complex challenges in software development with confidence and creativity.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Projects Section */}
          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-semibold  bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              Personal Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <a href="https://zentry.abdullahalameen.net" target="_blank" rel="noopener noreferrer">
                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 hover:scale-105 duration-300 transition-transform cursor-pointer">
                  <CardContent className="p-4">
                    <Image
                        src={image1}
                        alt="Zentry"
                        className="rounded-lg mb-4"
                    />
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Zentry</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          React.js, GSAP, Tailwind CSS
                        </p>
                      </div>
                      <Button variant="ghost" size="icon">
                        →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </a>

              <a href="https://hoobank.abdullahalameen.net" target="_blank" rel="noopener noreferrer">
                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 hover:scale-105 duration-300 transition-transform cursor-pointer">
                  <CardContent className="p-4">
                    <Image
                        src={image2}
                        alt="Project 2"
                        className="rounded-lg mb-4"
                    />
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">HooBank</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          React.js, Tailwind CSS
                        </p>
                      </div>
                      <Button variant="ghost" size="icon">
                        →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </a>

              <a href="https://hilink.abdullahalameen.net" target="_blank" rel="noopener noreferrer">
                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 hover:scale-105 duration-300 transition-transform cursor-pointer">
                  <CardContent className="p-4">
                    <Image
                        src={image3}
                        alt="Project 3"
                        className="rounded-lg mb-4"
                    />
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Project 3</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          React.js, Tailwind CSS
                        </p>
                      </div>
                      <Button variant="ghost" size="icon">
                        →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>

            <p className="text-gray-500">© 2025 Abdullah Alameen</p>
          </motion.section>
        </main>
      </div>
    </div>
  );
}
