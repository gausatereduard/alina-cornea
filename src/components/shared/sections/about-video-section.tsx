import {Container} from "@/components/ui/container";
import Image from "next/image";

export function AboutVideoSection() {
    return (
        <section className={"py-16"}>
            <Container>
                <div className={"mb-16 pb-8"}>
                    <h2 className={"leading-normal text-center uppercase text-4xl"}>
                        Ce vei afla<br className={"lg:hidden"}/>
                        în video?
                    </h2>
                    <div className={"relative h-72 flex items-center justify-center"}>
                        <Image className={"absolute top-0 left-0 w-full object-contain h-full"}
                               src={"/assets/money-video.png"}
                               alt={"cloud video"} width={364} height={256}/>
                        <Image
                            className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-44 opacity-50"}
                            src={"/assets/cloud-video-2.png"}
                            alt={"cloud video 2"} width={364} height={256}/>
                        <Image className={"absolute top-0 left-1/2 -translate-x-1/2 w-auto object-contain h-full"}
                               src={"/assets/rocket-video.png"}
                               alt={"rocket video"} width={364} height={256}/>
                        <Image
                            className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-44 opacity-50"}
                            src={"/assets/cloud-video.png"}
                            alt={"cloud video"} width={364} height={256}/>
                        <Image className={"absolute top-0 left-0 w-auto object-contain h-full"}
                               src={"/assets/confetti-video.png"}
                               alt={"confetti video"} width={364} height={256}/>
                    </div>
                    <Container>
                        <Container>
                            <ul className={"space-y-4"}>
                                <li className={"flex items-start space-x-4"}>
                                    <div className={"pt-2 shrink-0"}>
                                        <Image className={"w-8 h-8"}
                                               src={"/assets/list-disc-mark.png"}
                                               alt={"list disc mark"} width={32} height={32}/>
                                    </div>
                                    <p>
                                        Cum un produs educațional nou, dintr-o nișă nouă, a atins vânzări record în doar
                                        3
                                        luni
                                    </p>
                                </li>
                                <li className={"flex items-start space-x-4"}>
                                    <div className={"pt-2 shrink-0"}>
                                        <Image className={"w-8 h-8"}
                                               src={"/assets/list-disc-mark.png"}
                                               alt={"list disc mark"} width={32} height={32}/>
                                    </div>
                                    <p>
                                        Care au fost etapele cheie în strategia de vânzări
                                    </p>
                                </li>
                                <li className={"flex items-start space-x-4"}>
                                    <div className={"pt-2 shrink-0"}>
                                        <Image className={"w-8 h-8"}
                                               src={"/assets/list-disc-mark.png"}
                                               alt={"list disc mark"} width={32} height={32}/>
                                    </div>
                                    <p>
                                        Cât am investit în reclame, pe ce canale și care a fost rentabilitatea acestora
                                    </p>
                                </li>
                                <li className={"flex items-start space-x-4"}>
                                    <div className={"pt-2 shrink-0"}>
                                        <Image className={"w-8 h-8"}
                                               src={"/assets/list-disc-mark.png"}
                                               alt={"list disc mark"} width={32} height={32}/>
                                    </div>
                                    <p>
                                        Ce strategii de promovare sunt eficiente și care nu mai dau rezultate
                                    </p>
                                </li>
                                <li className={"flex items-start space-x-4"}>
                                    <div className={"pt-2 shrink-0"}>
                                        <Image className={"w-8 h-8"}
                                               src={"/assets/list-disc-mark.png"}
                                               alt={"list disc mark"} width={32} height={32}/>
                                    </div>
                                    <p>
                                        Care au fost greșelile majore care ne-au stopat din atingerea a 500.000 euro
                                        încasări
                                    </p>
                                </li>
                                <li className={"flex items-start space-x-4"}>
                                    <div className={"pt-2 shrink-0"}>
                                        <Image className={"w-8 h-8"}
                                               src={"/assets/list-disc-mark.png"}
                                               alt={"list disc mark"} width={32} height={32}/>
                                    </div>
                                    <p>
                                        Cum am comunicat cu audiența pentru a-i determina să dorească să cumpere
                                        produsul
                                        înainte de
                                        a fi anunțat (strategie de warm-up)
                                    </p>
                                </li>
                                <li className={"flex items-start space-x-4"}>
                                    <div className={"pt-2 shrink-0"}>
                                        <Image className={"w-8 h-8"}
                                               src={"/assets/list-disc-mark.png"}
                                               alt={"list disc mark"} width={32} height={32}/>
                                    </div>
                                    <p>
                                        Despre cifre, date, statistici, tabele - tot ce e ascuns de obicei:)
                                    </p>
                                </li>
                            </ul>
                        </Container>
                    </Container>
                </div>
                <Container>
                    <div>
                        <article className={"relative border-2 border-dotted rounded-xl p-10"}>
                            <div className={"h-10 absolute -top-5 left-1/2 -translate-x-1/2 bg-white w-40"}></div>
                            <Image className={"absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20"}
                                   src={"/assets/heart.png"}
                                   alt={"heart"} width={80} height={80}/>
                            <div className={"space-y-4"}>
                                <h3 className={"text-center text-3xl uppercase"}>
                                    Și cel mai important
                                </h3>
                                <p className={"text-center"}>
                                    Cum să aplici și TU această metodă pentru a lansa produsul tău educațional,
                                    indiferent
                                    de experiența pe care o ai.
                                </p>
                            </div>
                        </article>
                    </div>
                </Container>
            </Container>
        </section>
    )
}