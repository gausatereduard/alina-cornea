import {Container} from "@/components/ui/container";
import Image from "next/image";

export function UsefulForSection() {
    return (
        <section className={"py-16 overflow-x-hidden"}>
            <Container>
                <div className={"mb-16"}>
                    <h3 className={"mb-8 text-center uppercase text-3xl"}>
                        Va fi util pentru<br/>
                        tine dacă
                    </h3>
                    <Container>
                        <ul className={"space-y-2"}>
                            <li className={"flex items-center gap-x-4"}>
                                <div className={"w-10 shrink-0"}>
                                    <h3 className={"text-center text-3xl uppercase"}>
                                        01
                                    </h3>
                                </div>
                                <p>
                                    Ești expert, antreprenor sau creator și vrei să îți monetizezi expertiza online.
                                </p>
                            </li>
                            <li className={"flex items-center gap-x-4"}>
                                <div className={"w-10 shrink-0"}>
                                    <h3 className={"text-center text-3xl uppercase"}>
                                        02
                                    </h3>
                                </div>
                                <p>
                                    Vrei să lansezi propriul produs educațional online (curs, consultare, coaching,
                                    training
                                    masterclass etc.)
                                </p>
                            </li>
                            <li className={"flex items-center gap-x-4"}>
                                <div className={"w-10 shrink-0"}>
                                    <h3 className={"text-center text-3xl uppercase"}>
                                        03
                                    </h3>
                                </div>
                                <p>
                                    Ești în căutarea unor strategii actuale în 2025 pentru a-ți crește veniturile.
                                </p>
                            </li>
                            <li className={"flex items-center gap-x-4"}>
                                <div className={"w-10 shrink-0"}>
                                    <h3 className={"text-center text-3xl uppercase"}>
                                        04
                                    </h3>
                                </div>
                                <p>
                                    Ai nevoie de metode concrete pentru a atrage potențiali clienți și a crea oferte
                                    care
                                    vând
                                    cu efort minim din partea ta.
                                </p>
                            </li>
                            <li className={"flex items-center gap-x-4"}>
                                <div className={"w-10 shrink-0"}>
                                    <h3 className={"text-center text-3xl uppercase"}>
                                        05
                                    </h3>
                                </div>
                                <p>
                                    Vrei să afli cum poți genera și tu bani din produse educaționale, chiar dacă nu ai
                                    mai
                                    făcut
                                    asta niciodată și ai zero experiență.
                                </p>
                            </li>
                        </ul>
                    </Container>
                </div>
                <div className={"mb-10"}>
                    <Container>
                        <div className={"bg-gray-100 px-2 py-4 rounded-4xl"}>
                            <article>
                                <h4 className={"text-center text-2xl uppercase"}>
                                    Dezghiocul<br/>
                                    lansării de
                                </h4>
                                <h2 className={"my-4 text-center text-7xl uppercase"}>
                                    300K
                                </h2>
                                <button className={"w-full h-[70px] bg-[#ebff00] rounded-4xl"}>
                                    Primește materialul GRATUIT
                                </button>
                            </article>
                        </div>
                    </Container>
                </div>
                <div>
                    <Container>
                        <div>
                            <div className={"mb-7 space-y-3"}>
                                <p className={"text-center uppercase"}>
                                    De la cine înveți?
                                </p>
                                <h2 className={"text-center text-5xl uppercase"}>
                                    ALINA ANDRIUȚĂ
                                </h2>
                            </div>
                            <ul className={"space-y-3 list-inside list-disc"}>
                                <li>
                                    <span>142 K+</span>{" "}
                                    followeri
                                </li>
                                <li>
                                    <span>500 000 €</span>{" "}
                                    din vânzări de produse educaționale
                                </li>
                                <li>
                                    <span>500 case-uri</span>{" "}
                                    de consultanță Sistem de Vânzări
                                </li>
                                <li>
                                    <span>Expert</span>{" "}
                                    nr1 în monetizarea expertizei
                                </li>
                            </ul>
                            <div className={"relative h-80 mt-6 flex items-center justify-center"}>
                                <Image className={"absolute top-0 -left-10 object-contain h-full"}
                                       src={"/assets/person.png"}
                                       alt={"person"} width={216} height={320}/>
                                <Image className={"absolute -top-14 -right-6 w-auto"}
                                       src={"/assets/confetti-useful.png"}
                                       alt={"confetti useful"} width={259} height={162}/>
                                <Image className={"absolute -bottom-14 -right-20 w-auto"}
                                       src={"/assets/confetti-useful.png"}
                                       alt={"confetti useful"} width={259} height={162}/>
                                <Image className={"absolute -top-4 -right-6 w-auto h-80"}
                                       src={"/assets/instagram-mockup.png"}
                                       alt={"instagram mockup"} width={203} height={311}/>
                            </div>
                        </div>
                    </Container>
                </div>
            </Container>
        </section>
    )
}