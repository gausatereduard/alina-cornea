import Link from "next/link";
import { Container } from "@/components/ui/container";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<section className={"pt-8 pb-8 bg-gradient-to-br from-blue-200 to-pink-200"}>
				<Container>
					<div className={"mb-6"}>
						<div className={"text-center"}>
							<h1 className={"mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-primary uppercase"}>
								Dezghioc™ Manifest
							</h1>
						</div>
						<div className={"text-center"}>
							<h4 className={"text-lg sm:text-xl md:text-2xl uppercase font-bold"}>
								Procesul din spatele unei<br/>
								lansări care a generat peste<br/>
								<span className={"text-primary"}>
									300.000 de euro în doar 3 luni.
							</span>
							</h4>
						</div>
					</div>
					<div className={"flex items-center py-4"}>
						<div className={"relative shrink-0 w-[138px] h-[112px]"}>
							<Image className={"absolute -top-3 left-0 w-auto object-cover h-[112px]"} src={"/assets/gift-hero.png"}
										 alt={"gift hero"} width={138} height={112}/>
							<Image className={"relative -left-5 w-auto h-[112px]"} src={"/assets/book-hero.png"}
										 alt={"book hero"} width={102} height={112}/>
						</div>
						<div className={"space-y-2"}>
							<p className={"text-lg font-bold !leading-[1.2]"}>
								Cadou garantat<br/>
								după înscriere!
							</p>
							<p className={"text-sm !leading-[1.2]"}>
								<span className={"text-base font-bold text-primary"}>Ghid gratuit:</span>{" "}
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
						<button
							className={"h-20 md:text-xl w-full lg:w-72 py-4 bg-secondary rounded-full uppercase font-bold hover:bg-primary hover:text-white cursor-pointer transition-colors duration-300 ease-in-out"}>
							Primește acces imediat
						</button>
					</div>
				</Container>
			</section>

			<section>
				{/* Ce vei afla în video? */}
				<section>
					<section className={"pt-10"}>
						<Container>
							<div className={"px-10 sm:px-0"}>
								<h2 className={"font-bold text-center uppercase text-4xl md:text-5xl lg:text-6xl"}>
									Ce vei afla
									în video?
								</h2>
							</div>
						</Container>
					</section>
					<section>
						<Container>
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
						</Container>
					</section>
					<section className={"py-6"}>
						<Container>
							<div className={"px-4 lg:px-0"}>
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
							</div>
						</Container>
					</section>
				</section>

				{/*  Și cel mai important */}
				<section className={"py-6 px-4 sm:px-0"}>
					<Container>
						<div className={"pt-10"}>
							<div className={"relative border-2 border-dotted border-primary rounded-xl px-10 pt-8 pb-6"}>
								<div className={"h-10 absolute -top-5 left-1/2 -translate-x-1/2 bg-white w-40"}></div>
								<Image className={"absolute -top-12 left-1/2 -translate-x-1/2 w-20 h-20"}
											 src={"/assets/heart.png"}
											 alt={"heart"} width={80} height={80}/>
								<div className={"space-y-4 pt-3"}>
									<h3 className={"text-center text-3xl uppercase text-primary"}>
										Și cel mai important
									</h3>
									<p className={"text-center"}>
										Cum să aplici și TU această metodă pentru a lansa produsul tău educațional,
										indiferent
										de experiența pe care o ai.
									</p>
								</div>
							</div>
						</div>
					</Container>
				</section>
			</section>

			<section className={"bg-primary-tint overflow-x-clip overflow-y-visible pt-8"}>
				{/* Va fi util pentru tine dacă */}
				<section>
					<section className={"text-center"}>
						<Container>
							<div className={"pb-6 pt-10 px-6"}>
								<h3 className={"uppercase text-3xl md:text-4xl lg:text-5xl font-bold"}>
									Va fi util pentru tine dacă
								</h3>
							</div>
						</Container>
					</section>
					<section className={"pt-4 pb-8"}>
						<Container>
							<div className={"px-4 sm:px-0"}>
								<ul className={"flex flex-col gap-y-2"}>
									<li className={"flex items-center gap-x-4 px-4 py-4 bg-white rounded-2xl"}>
										<div className={"w-8 text-center shrink-0"}>
											<p className={"text-2xl font-bold text-primary"}>
												01
											</p>
										</div>
										<div>
											<p className={"text-base sm:text-lg md:text-xl"}>
												Ești expert, antreprenor sau creator și vrei să îți monetizezi expertiza online.
											</p>
										</div>
									</li>
									<li className={"flex items-center gap-x-4 px-4 py-4 bg-white rounded-2xl"}>
										<div className={"w-8 text-center shrink-0"}>
											<p className={"text-2xl font-bold text-primary"}>
												02
											</p>
										</div>
										<div>
											<p className={"text-base sm:text-lg md:text-xl"}>
												Vrei să lansezi propriul produs educațional online (curs, consultare, coaching, training masterclass etc.)
											</p>
										</div>
									</li>
									<li className={"flex items-center gap-x-4 px-4 py-4 bg-white rounded-2xl"}>
										<div className={"w-8 text-center shrink-0"}>
											<p className={"text-2xl font-bold text-primary"}>
												03
											</p>
										</div>
										<div>
											<p className={"text-base sm:text-lg md:text-xl"}>
												Ești în căutarea unor strategii actuale în 2025 pentru a-ți crește veniturile.
											</p>
										</div>
									</li>
									<li className={"flex items-center gap-x-4 px-4 py-4 bg-white rounded-2xl"}>
										<div className={"w-8 text-center shrink-0"}>
											<p className={"text-2xl font-bold text-primary"}>
												04
											</p>
										</div>
										<div>
											<p className={"text-base sm:text-lg md:text-xl"}>
												Ai nevoie de metode concrete pentru a atrage potențiali clienți și a crea oferte care vând cu efort minim din partea ta.
											</p>
										</div>
									</li>
									<li className={"flex items-center gap-x-4 px-4 py-4 bg-white rounded-2xl"}>
										<div className={"w-8 text-center shrink-0"}>
											<p className={"text-2xl font-bold text-primary"}>
												05
											</p>
										</div>
										<div>
											<p className={"text-base sm:text-lg md:text-xl"}>
												Vrei să afli cum poți genera și tu bani din produse educaționale, chiar dacă nu ai mai făcut asta niciodată și ai zero experiență.
											</p>
										</div>
									</li>
								</ul>
							</div>
						</Container>
					</section>
				</section>

				{/* Dezghiocul lansării de */}
				<section className={"py-6 px-4 sm:px-0"}>
					<Container>
						<div className={"bg-primary px-4 rounded-3xl"}>
							<div>
								<div className={"text-center pt-4 px-6"}>
									<h3 className={"text-2xl md:text-3xl lg:text-4xl font-medium text-white uppercase"}>
										Dezghiocul lansării de
									</h3>
								</div>
								<div className={"text-center pt-2 pb-6"}>
									<h2 className={"text-7xl lg:text-9xl font-bold text-white"}>
										300K
									</h2>
								</div>
							</div>
							<div className={"pb-4"}>
								<button
									className={"h-16 md:text-xl w-full lg:w-72 py-4 bg-[#ebff00] text-[#2d3034] rounded-full uppercase font-bold hover:bg-white cursor-pointer transition-colors duration-300 ease-in-out"}>
									Primește materialul GRATUIT
								</button>
							</div>
						</div>
					</Container>
				</section>

				{/*  De la cine înveți? */}
				<section>
					<section className={"text-center"}>
						<Container>
							<div className={"pt-6 pb-2"}>
								<p className={"uppercase text-base sm:text-lg md:text-xl lg:text-2xl"}>
									De la cine înveți?
								</p>
							</div>
							<div className={"pb-4 pt-2"}>
								<h3 className={"uppercase text-5xl md:text-6xl lg:text-7xl"}>
									ALINA<br />
									ANDRIUȚĂ
								</h3>
							</div>
						</Container>
					</section>
					<section className={"pt-4 pb-4 px-6 sm:px-0"}>
						<Container>
							<ul className={"list-inside flex flex-col gap-y-3 list-disc md:text-lg lg:text-xl"}>
								<li>
							<span className={"font-bold text-primary-light"}>
								142 K+
							</span>{" "}
									followeri
								</li>

								<li>
							<span className={"font-bold text-primary-light"}>
								500 000 €
							</span>{" "}
									din vânzări de produse educaționale
								</li>

								<li>
							<span className={"font-bold text-primary-light"}>
								500 case-uri
							</span>{" "}
									de consultanță Sistem de Vânzări
								</li>

								<li>
							<span className={"font-bold text-primary-light"}>
								Expert
							</span>{" "}
									nr1 în monetizarea expertizei
								</li>
							</ul>
						</Container>
					</section>
					<section className={"pt-16"}>
						<Container>
							<div className={"relative h-80 flex items-center justify-center"}>
								<Image className={"absolute bottom-0 -left-10 object-contain h-auto"}
											 src={"/assets/person.png"}
											 alt={"person"} width={216} height={320} />
								<Image className={"absolute -top-20 -right-4 w-auto"}
											 src={"/assets/confetti-useful.png"}
											 alt={"confetti useful"} width={259} height={162} />
								<Image className={"absolute -bottom-12 -right-20 w-auto"}
											 src={"/assets/confetti-useful.png"}
											 alt={"confetti useful"} width={259} height={162} />
								<Image className={"absolute -top-4 -right-4 w-52 h-auto"}
											 src={"/assets/instagram-mockup.png"}
											 alt={"instagram mockup"} width={203} height={311} />
							</div>
						</Container>
					</section>
				</section>
			</section>

			{/* De ce este specială această sesiune? */}
			<section>
				<section className={"pt-16 pb-8"}>
					<Container>
						<div>
							<h3 className={"font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase text-center"}>
								De ce este specială această sesiune?
							</h3>
						</div>
					</Container>
				</section>
				<section className={"py-8 px-4 sm:px-0"}>
					<Container>
						<div className={"flex flex-col gap-y-4"}>
							<div className={"flex items-center gap-x-6 group"}>
								<div className={"shrink-0 relative w-24 h-24 group-even:order-last"}>
									<div
										className={"absolute w-10 h-10 -top-3 group-odd:-right-3 group-even:-left-3 rounded-full flex items-center justify-center bg-primary border-4 border-white"}>
										<span className={"leading-none text-white font-semibold -top-0.5 relative"}>1</span>
									</div>
									<Image className={"w-24 h-24 rounded-xl"} src={"/assets/step-1.jpg"} alt={"step 1"}
												 width={100} height={100} />
								</div>
								<div className={"group-odd:pr-2 group-even:pl-2 group-even:order-first"}>
									<p className={"text-sm sm:text-base md:text-lg group-even:text-right"}>
										Afli informații pe care nu le găsești nicăieri – direct din experiența mea.
									</p>
								</div>
							</div>

							<div className={"flex items-center gap-x-6 group"}>
								<div className={"shrink-0 relative w-24 h-24 group-even:order-last"}>
									<div
										className={"absolute w-10 h-10 -top-3 group-odd:-right-3 group-even:-left-3 rounded-full flex items-center justify-center bg-primary border-4 border-white"}>
										<span className={"leading-none text-white font-semibold -top-0.5 relative"}>2</span>
									</div>
									<Image className={"w-24 h-24 rounded-xl"} src={"/assets/step-2.jpg"} alt={"step 2"}
												 width={100} height={100} />
								</div>
								<div className={"group-odd:pr-2 group-even:pl-2 group-even:order-first"}>
									<p className={"text-sm sm:text-base md:text-lg group-even:text-right"}>
										Înveți ce canale și metode de promovare funcționează acum și care nu.
									</p>
								</div>
							</div>

							<div className={"flex items-center gap-x-6 group"}>
								<div className={"shrink-0 relative w-24 h-24 group-even:order-last"}>
									<div
										className={"absolute w-10 h-10 -top-3 group-odd:-right-3 group-even:-left-3 rounded-full flex items-center justify-center bg-primary border-4 border-white"}>
										<span className={"leading-none text-white font-semibold -top-0.5 relative"}>3</span>
									</div>
									<Image className={"w-24 h-24 rounded-xl"} src={"/assets/step-3.jpg"} alt={"step 3"}
												 width={100} height={100} />
								</div>
								<div className={"group-odd:pr-2 group-even:pl-2 group-even:order-first"}>
									<p className={"text-sm sm:text-base md:text-lg group-even:text-right"}>
										Obții strategii clare pentru a-ți atinge misiunea și veniturile dorite.
									</p>
								</div>
							</div>

							<div className={"flex items-center gap-x-6 group"}>
								<div className={"shrink-0 relative w-24 h-24 group-even:order-last"}>
									<div
										className={"absolute w-10 h-10 -top-3 group-odd:-right-3 group-even:-left-3 rounded-full flex items-center justify-center bg-primary border-4 border-white"}>
										<span className={"leading-none text-white font-semibold -top-0.5 relative"}>4</span>
									</div>
									<Image className={"w-24 h-24 rounded-xl"} src={"/assets/step-4.jpg"} alt={"step 4"}
												 width={100} height={100} />
								</div>
								<div className={"group-odd:pr-2 group-even:pl-2 group-even:order-first"}>
									<p className={"text-sm sm:text-base md:text-lg group-even:text-right"}>
										Descoperi cum să eviți greșelile care te pot costa scump în lansarea propriului tău produs
										educațional
									</p>
								</div>
							</div>
						</div>
					</Container>
				</section>
				<section className={"pb-16 pt-8"}>
					<Container>
						<div className={"flex items-center justify-center gap-4"}>
							<div className={"shrink-0 w-8 lg:w-10"}>
								<Image className={"h-[85px] lg:h-24 object-contain"} src={"/assets/wing-left.png"} alt={"wing left"}
											 width={32} height={85} />
							</div>
							<div>
								<p className={"text-sm sm:text-base md:text-lg lg:text-3xl text-center font-medium uppercase"}>
									Toate secretele pe care le vei afla sunt bazate pe exemple<br className={"hidden lg:block"} />{" "}
									concrete și lecții învățate direct din practică
								</p>
							</div>
							<div className={"shrink-0 w-8 lg:w-10"}>
								<Image className={"h-[85px] lg:h-24 object-contain"} src={"/assets/wing-right.png"} alt={"wing right"}
											 width={32} height={85} />
							</div>
						</div>
					</Container>
				</section>
			</section>

			{/* FOOTER */}
			<footer>
				<section className={"relative bg-primary"}>
					<Image className={"absolute top-0 left-1/2 -translate-x-1/2"} src={"/assets/arrow-2.svg"} alt={"arrow"}
								 width={80} height={22} />
					{/* CONTAINER */}
					<Container>
						{/* CONTENT */}
						<div className={"flex flex-col justify-center text-center"}>
							<div className={"pt-20 pb-6"}>
								<h5
									className={"text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-none uppercase"}>
									Vezi video cu un simplu click pe buton
								</h5>
							</div>
							<div className={"pt-6 pb-20"}>
								<button
									className={"h-16 w-auto lg:w-72 px-20 py-4 bg-[#ebff00] text-[#2d3034] rounded-full uppercase text-2xl font-bold hover:bg-white cursor-pointer transition-colors duration-300 ease-in-out"}>
									Aici
								</button>
							</div>
						</div>
					</Container>
				</section>
				<section className={"bg-black text-white/60"}>
					{/* CONTAINER */}
					<Container>
						<div
							className={"pt-10 pb-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-[11px] sm:text-[13px] leading-none font-medium"}>
							{/* CONTENT */}
							<div className={"flex flex-col gap-y-4 leading-5"}>
								<p>
									INNKO LLC
								</p>
								<p>
									Employer Identification Number: 85-0568972<br />
									1910 THOMES AVE CHEYENNE, WY 82001
								</p>
							</div>
							{/* CONTENT */}
							<div className={"flex flex-col gap-y-4 leading-5"}>
								<Link href={"/"}>
									info@manifestare.md
								</Link>

								<Link href={"/"}>
									+40 31 229 7765
								</Link>
							</div>
							{/* CONTENT */}
							<div className={"flex flex-col gap-y-4 leading-5"}>
								<Link href={"/"}>
									Termeni și Condiții Comerciale (FullFillment Policy)
								</Link>
								<p>
									2024 © ALL RIGHTS RESERVED
								</p>
							</div>
						</div>
					</Container>
				</section>
			</footer>
		</>
	);
}
