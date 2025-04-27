import {Container} from "@/components/ui/container";
import Image from "next/image";

export function WhySpecialSection() {
    return (
        <section className={"pt-16 pb-10"}>
            <div>
                <Container>
                    <div>
                        <h2 className={"leading-normal text-center uppercase text-2xl"}>
                            De ce este specială<br/>
                            această sesiune?
                        </h2>
                        <div className={"py-8"}>
                            <Container>
                                <div className={"space-y-8"}>
                                    <article className={"flex items-center gap-4 group"}>
                                        <div className={"relative w-24 h-24 shrink-0 group-even:order-last bg-gray-200 rounded-2xl"}>
                                            <div className={"absolute -top-3 group-odd:-right-3 group-even:-left-3 w-10 h-10 rounded-full bg-gray-400 border-4 border-white"}/>
                                            {/* TODO: IMG */}
                                        </div>
                                        <p className={"text-sm group-even:pl-4 group-odd:pr-4 group-even:order-first group-even:text-right"}>
                                            Afli informații pe care nu le găsești nicăieri – direct din experiența mea.
                                        </p>
                                    </article>
                                    <article className={"flex items-center gap-4 group"}>
                                        <div className={"relative w-24 h-24 shrink-0 group-even:order-last bg-gray-200 rounded-2xl"}>
                                            <div className={"absolute -top-3 group-odd:-right-3 group-even:-left-3 w-10 h-10 rounded-full bg-gray-400 border-4 border-white"}/>
                                            {/* TODO: IMG */}
                                        </div>
                                        <p className={"text-sm group-even:pl-4 group-odd:pr-4 group-even:order-first group-even:text-right"}>
                                            Înveți ce canale și metode de promovare funcționează acum și care nu.
                                        </p>
                                    </article>
                                    <article className={"flex items-center gap-4 group"}>
                                        <div className={"relative w-24 h-24 shrink-0 group-even:order-last bg-gray-200 rounded-2xl"}>
                                            <div className={"absolute -top-3 group-odd:-right-3 group-even:-left-3 w-10 h-10 rounded-full bg-gray-400 border-4 border-white"}/>
                                            {/* TODO: IMG */}
                                        </div>
                                        <p className={"text-sm group-even:pl-4 group-odd:pr-4 group-even:order-first group-even:text-right"}>
                                            Obții strategii clare pentru a-ți atinge misiunea și veniturile dorite.
                                        </p>
                                    </article>
                                    <article className={"flex items-center gap-4 group"}>
                                        <div className={"relative w-24 h-24 shrink-0 group-even:order-last bg-gray-200 rounded-2xl"}>
                                            <div className={"absolute -top-3 group-odd:-right-3 group-even:-left-3 w-10 h-10 rounded-full bg-gray-400 border-4 border-white"}/>
                                            {/* TODO: IMG */}
                                        </div>
                                        <p className={"text-sm group-even:pl-4 group-odd:pr-4 group-even:order-first group-even:text-right"}>
                                            Descoperi cum să eviți greșelile care te pot costa scump în lansarea
                                            propriului tău produs educațional
                                        </p>
                                    </article>
                                </div>
                            </Container>
                        </div>
                    </div>
                </Container>
            </div>
            <div className={"py-6"}>
                <Container>
                    <div>
                        <div className={"flex items-center gap-4"}>
                            <div className={"shrink-0 w-8"}>
                                <Image className={"h-[85px]"} src={"/assets/wing-left.png"} alt={"wing left"} width={32} height={85}/>
                            </div>
                            <p className={"text-center text-sm uppercase"}>
                                Toate secretele pe care le vei afla sunt bazate pe exemple concrete și lecții învățate
                                direct din practică
                            </p>
                            <div className={"shrink-0 w-8"}>
                                <Image className={"h-[85px]"} src={"/assets/wing-right.png"} alt={"wing right"} width={32} height={85}/>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}