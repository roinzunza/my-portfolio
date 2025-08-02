import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { resumeData } from "../data/resumeData";

export default function ResumePage() {
    const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
    const refs = useRef<(HTMLDivElement | null)[]>([]);

    // Reveal on scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, idx) => {
                    if (entry.isIntersecting) {
                        setVisibleIndexes((prev) => [...new Set([...prev, idx])]);
                    }
                });
            },
            { threshold: 0.2 }
        );

        refs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <main className="relative min-h-screen px-6 py-12 font-mono text-gray-900 dark:text-white bg-transparent z-10">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <img
                    src="/ro.jpg"
                    alt="Background"
                    className="w-full h-full object-cover opacity-30 blur-lg scale-110"
                />
                <div className="absolute inset-0 bg-white/30 dark:bg-black/40 backdrop-blur-sm" />
            </div>

            <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Git Commit Resume
            </h1>

            <div className="max-w-3xl mx-auto space-y-10">
                {resumeData.map((item, index) => (
                    <div
                        key={item.id}
                        ref={(el) => {
                            refs.current[index] = el;
                        }}
                        className={`bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/20 text-gray-800 dark:text-gray-100 rounded-lg p-4 shadow-lg relative overflow-hidden transform transition-all duration-700 ease-out ${visibleIndexes.includes(index)
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                            }`}
                    >
                        <pre className="whitespace-pre-wrap text-sm">
                            {`commit ${item.id} ${item.tag ? `(${item.tag})` : ""}
Author: Rosendo Inzunza <rosendoinzunza@gmail.com.com>
Date:   ${item.duration}
${index === 0 ? "HEAD -> main" : ""}

    ${item.role} @ ${item.company}
    - ${item.description}

`}
                        </pre>

                        {/* Timeline dot and line */}
                        <div className="absolute left-0 top-0 h-full w-1 bg-green-700/30" />
                        <div className="absolute left-[-0.4rem] top-6 w-3 h-3 bg-green-500 rounded-full shadow-md" />
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <Link
                    to="/"
                    className="inline-block px-4 py-2 bg-white/30 dark:bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm hover:bg-white/50 dark:hover:bg-white/20 transition"
                >
                    ← Back to Home
                </Link>
            </div>
        </main>
    );
}
