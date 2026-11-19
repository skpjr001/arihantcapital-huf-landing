import AlgoLeadForm from "./algo/AlgoLeadForm";

const stats = [
    { value: "33+", label: "Years in financial markets" },
    { value: "10k+", label: "Total Clients" },
];

export default function AlgoBanner() {
    return (
        <section className="relative">
            <div className="container-page grid gap-7 pb-9 pt-6 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-16 lg:pb-[333px] lg:pt-[50px]">
                <div className="text-center lg:max-w-[572px] lg:text-left">
                    <h1
                        className="mx-auto text-[48px] lg:text-[64px] font-medium leading-17 tracking-[-0.01em] text-[#000000]"
                    >
                        Master the art <br className="hidden lg:inline" />
                        of <br className="lg:hidden" />
                        Algo Trading
                    </h1>
                    <p className="mx-auto mt-2 text-xl leading-7 text-black lg:mx-0 lg:mt-4 lg:text-2xl lg:leading-8 lg:text-[#000000]/60">
                        Unlock the secrets of the stock market with Masterclass by ArihantCapital — your destination for
                        mastering Algorithm.
                    </p>

                    <dl className="hidden gap-14 pt-14 lg:flex">
                        {stats.map((s) => (
                            <div key={s.label} className="flex flex-col-reverse">
                                <dt className="text-base font-semibold text-[#0A0A0A]">{s.label}</dt>
                                <dd className="text-[52px] font-medium text-[#219653]">{s.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>

                <AlgoLeadForm />
            </div>
        </section>
    )
}