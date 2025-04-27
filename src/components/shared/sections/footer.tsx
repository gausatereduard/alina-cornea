import Link from "next/link";
import {Container} from "@/components/ui/container";

export function Footer() {
    return (
        <footer>
            <section className={"bg-gray-200 pt-16 pb-12"}>
                <Container>
                    <h3 className={"text-2xl mb-5 text-center"}>
                        Vezi video cu un simplu<br/>
                        click pe buton
                    </h3>
                    <div className={"flex items-center justify-center"}>
                        <button className={"w-52 h-[70px] bg-[#ebff00] rounded-full"}>
                            AICI
                        </button>
                    </div>
                </Container>
            </section>
            <section className={"bg-gray-400 py-6"}>
                <Container>
                    <p>
                        INNKO LLC
                    </p>
                    <p>
                        Employer Identification Number: 85-0568972
                        1910 THOMES AVE CHEYENNE, WY 82001
                    </p>
                    <Link href={"/"}>
                        Termeni și Condiții Comerciale (FullFillment Policy)
                    </Link>
                    <Link href={"/"}>
                        info@manifestare.md
                    </Link>
                    <Link href={"/"}>
                        +40 31 229 7765
                    </Link>
                    <p>
                        2024 © ALL RIGHTS RESERVED
                    </p>
                </Container>
            </section>
        </footer>
    )
}