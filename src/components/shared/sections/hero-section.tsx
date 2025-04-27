import {Container} from "@/components/ui/container";
import Image from "next/image";

export function HeroSection() {
    return (
        <section className={"pt-8 pb-16"}>
            <Container>
                <div className={"mb-6"}>
                    <h1 className={"mb-4 text-center text-3xl uppercase"}>
                        Dezghioc™ Manifest
                    </h1>
                    <h4 className={"text-center uppercase"}>
                        Procesul din spatele unei<br/>
                        lansări care a generat peste<br/>
                        <span>
                            300.000 de euro în doar 3 luni.
                        </span>
                    </h4>
                </div>
                <div className={"flex items-center py-4"}>
                    <div className={"relative shrink-0 w-[138px] h-[112px]"}>
                        <Image className={"absolute -top-3 left-0 w-auto object-cover h-[112px]"} src={"/assets/gift-hero.png"}
                               alt={"gift hero"} width={138} height={112}/>
                        <Image className={"relative -left-5 w-auto h-[112px]"} src={"/assets/book-hero.png"}
                               alt={"book hero"} width={102} height={112}/>
                    </div>
                    <div className={"space-y-2"}>
                        <p className={"text-lg !leading-[1.2]"}>
                            Cadou garantat<br/>
                            după înscriere!
                        </p>
                        <p className={"text-sm !leading-[1.2]"}>
                            <span className={"text-base"}>Ghid gratuit:</span>{" "}
                            Cum să crești vizibilitatea în story-uri?
                        </p>
                    </div>
                </div>
                <div>
                    <div className={"relative flex items-center justify-center"}>
                        <Image className={"absolute top-0 left-0 w-auto h-[215px]"} src={"/assets/confetti-hero.png"}
                               alt={"confetti hero"} width={311} height={215}/>
                        <Image className={"relative w-auto h-[337px]"} src={"/assets/person-hero.png"}
                               alt={"person hero"} width={215} height={337}/>
                    </div>
                    <button className={"w-full h-20 bg-[#ebff00] rounded-full"}>
                        Primește acces imediat
                    </button>
                </div>
            </Container>
        </section>
    )
}