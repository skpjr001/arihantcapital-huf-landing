import { highlights } from "@/lib/site";


export default function GreenStrip() {
    return (
        <div className="relative z-10 hidden lg:block bg-[linear-gradient(360deg,rgba(3,81,20,0.06)_0%,rgba(3,81,20,0.1)_100%)]">
            <ul className="container-page grid grid-cols-2 lg:h-16 lg:grid-cols-4">
                {highlights.map((item, i) => (
                    <li
                        key={item}
                        className={`relative flex items-center justify-center py-4 text-center text-xl font-semibold text-leaf lg:py-0 lg:text-xl ${["lg:justify-start", "lg:justify-center", "lg:justify-center", "lg:justify-end"][i]
                            } ${i % 2 === 1 ? "max-lg:border-l max-lg:border-forest/15" : ""} ${i >= 2 ? "max-lg:border-t max-lg:border-forest/15" : ""
                            } ${i > 0
                                ? "lg:before:absolute lg:before:inset-y-3 lg:before:left-0 lg:before:w-px lg:before:bg-[linear-gradient(to_bottom,transparent,rgb(67_67_67/0.3),transparent)] lg:before:content-['']"
                                : ""
                            }`}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}
