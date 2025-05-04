import Link from "next/link";
import { Container } from "@/components/ui/container";
import Image from "next/image";
import { ContactForm } from "@/components/shared/forms/contact-form";
import * as React from "react";

export default function Home() {
	return (
		<>
			<section className={"pt-8 pb-8 bg-black text-white/75"}>
				<Container>
					<div className={"mb-6"}>
						<div className={"text-center"}>
							<h1 className={"mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-primary uppercase"}>
								GoldYes
							</h1>
						</div>
						<div className={"text-center"}>
							<h4 className={"text-lg sm:text-xl md:text-2xl uppercase font-bold text-balance"}>
								Profesia de lux care îți aduce{" "}
								<span className={"text-primary"}>
									venituri reale și respect!
							</span>
							</h4>
						</div>
					</div>
					<div className={"flex items-center justify-center py-4"}>
						<div className={"relative z-10 shrink-0 w-[138px] h-20"}>
							{/*<Image className={"absolute top-1/2 -translate-y-1/2 w-auto object-contain -rotate-12 h-16"}
										 src={"/assets/rings.webp"} alt={"gift hero"} width={138} height={112} />
							<Image className={"absolute right-4 top-1/2 -translate-y-1/2 w-auto object-contain rotate-12 h-24"}
										 src={"/assets/rings.webp"} alt={"gift hero"} width={138} height={112} />*/}

							<Image className={"w-auto object-contain h-24"}
										 src={"/assets/rings.webp"} alt={"gift hero"} width={138} height={112} />
						</div>
						<div className={"space-y-2"}>
							<p className={"text-lg font-bold !leading-[1.2] text-balance"}>
								Locuri limitate –<br />
								aplică acum!
							</p>
						</div>
					</div>
					<div>
						<div className={"relative flex items-center justify-center"}>
							<Image className={"relative w-auto h-[337px]"} src={"/assets/hero-1.jpeg"}
										 alt={"person hero"} width={215} height={337} />
							{/*<Image className={"absolute top-0 left-0 w-auto h-[215px] pointer-events-none"}
										 src={"/assets/confetti-hero.png"}
										 alt={"confetti hero"} width={311} height={215} />*/}
						</div>
						<Link href={"#contactForm"}
									className={"h-16 flex items-center justify-center md:text-xl w-full lg:max-w-96 lg:mx-auto py-4 bg-secondary rounded-full uppercase font-bold hover:bg-primary hover:text-white cursor-pointer transition-colors duration-300 ease-in-out"}>
							Aplică acum
						</Link>
					</div>
				</Container>
			</section>

			<section>
				{/* Ce vei afla în video? */}
				<section>
					<section className={"pt-10"}>
						<Container>
							<div>
								<h2 className={"text-balance font-bold text-center uppercase text-4xl md:text-5xl lg:text-6xl"}>
									De ce să confecționezi bijuterii?
								</h2>
							</div>
						</Container>
					</section>
					<section className={"pt-6"}>
						<Container>
							<div className={"relative flex items-center justify-center"}>
								<Image className={"h-72 object-cover"} src={"/assets/preview-1.jpeg"} alt={"Preview"} width={364}
											 height={256} />
								{/*<Image className={"absolute top-0 left-0 w-full object-contain h-full"}
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
											 alt={"confetti video"} width={364} height={256}/>*/}
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
														 alt={"list disc mark"} width={32} height={32} />
										</div>
										<p>
											Pentru că este una dintre cele mai căutate și bine plătite profesii de lux.
										</p>
									</li>
									<li className={"flex items-start space-x-4"}>
										<div className={"pt-2 shrink-0"}>
											<Image className={"w-8 h-8"}
														 src={"/assets/list-disc-mark.png"}
														 alt={"list disc mark"} width={32} height={32} />
										</div>
										<p>
											Pentru că bijutierii profesioniști sunt extrem de apreciați și rari pe piața din Moldova și nu
											numai.
										</p>
									</li>
									<li className={"flex items-start space-x-4"}>
										<div className={"pt-2 shrink-0"}>
											<Image className={"w-8 h-8"}
														 src={"/assets/list-disc-mark.png"}
														 alt={"list disc mark"} width={32} height={32} />
										</div>
										<p>
											Pentru că poți transforma fiecare creație într-o sursă serioasă de venit, lucrând independent sau
											colaborând cu branduri de top.
										</p>
									</li>
									<li className={"flex items-start space-x-4"}>
										<div className={"pt-2 shrink-0"}>
											<Image className={"w-8 h-8"}
														 src={"/assets/list-disc-mark.png"}
														 alt={"list disc mark"} width={32} height={32} />
										</div>
										<p>
											Pentru că poți deveni propriul tău șef, având libertatea să îți construiești atelierul și brandul
											personal.
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
											 alt={"heart"} width={80} height={80} />
								<div className={"space-y-4 pt-3"}>
									<h3 className={"text-center text-3xl uppercase text-primary"}>
										De ce GoldYes?
									</h3>
									<p className={"text-balance text-center"}>
										Pentru că profesioniștii adevărați în bijuterie sunt puțini și extrem de căutați.
									</p>
								</div>
							</div>
						</div>
					</Container>
				</section>
			</section>

			<section className={"bg-primary-tint overflow-x-clip overflow-y-visible py-8"}>
				{/* Va fi util pentru tine dacă */}
				<section>
					<section className={"text-center"}>
						<Container>
							<div className={"pb-6 pt-10"}>
								<h3 className={"text-balance uppercase text-3xl md:text-4xl lg:text-5xl font-bold"}>
									Ce înveți la GoldYes:
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
												Confecționarea bijuteriilor din aur și argint de la zero, cu tehnici profesionale.
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
												Realizarea lanțurilor, inelelor, brățărilor și a lacătelor de bijuterii.
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
												Utilizarea echipamentelor moderne și a tehnologiilor actuale din domeniu.
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
												Tehnici de fotografiere și promovare a bijuteriilor pentru vânzări online și offline.
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
												Cum să-ți lansezi propriul brand de bijuterii.
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
										Devino bijutier profesionist în
									</h3>
								</div>
								<div className={"text-center pt-2 pb-6"}>
									<h2 className={"text-7xl lg:text-9xl font-bold text-white"}>
										3 luni
									</h2>
								</div>
							</div>
							<div className={"pb-4"}>
								<Link href={"#contactForm"}
											className={"flex items-center justify-center h-16 md:text-xl w-full py-4 bg-white rounded-full uppercase font-bold hover:bg-secondary cursor-pointer transition-colors duration-300 ease-in-out"}>
									Investește în viitorul tău
								</Link>
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
									Bijutieri profesioniști
								</h3>
							</div>
						</Container>
					</section>
					<section className={"pt-4 pb-4 px-6 sm:px-0"}>
						<Container>
							<ul className={"list-inside flex flex-col gap-y-3 list-disc md:text-lg lg:text-xl"}>
								<li>
									Lecții practice, aplicabile imediat.
								</li>
								<li>
									Experiență reală de atelier.
								</li>
								<li>
									Sprijin în lansarea carierei tale în bijuterie.
								</li>
							</ul>
						</Container>
					</section>
					<section className={"pt-8"}>
						<div className={"relative flex items-center justify-center"}>
							<div className={"absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#FFDEB3] to-transparent"} />
							<div className={"absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#FFDEB3] to-transparent"} />
							<Image className={"h-full object-cover object-top w-full"}
										 src={"/assets/person-2.jpg"} quality={100}
										 alt={"person"} width={216} height={320} />
							{/*<Image className={"absolute -top-20 -right-4 w-auto"}
											 src={"/assets/confetti-useful.png"}
											 alt={"confetti useful"} width={259} height={162} />
								<Image className={"absolute -bottom-12 -right-20 w-auto"}
											 src={"/assets/confetti-useful.png"}
											 alt={"confetti useful"} width={259} height={162} />
								<Image className={"absolute -top-4 -right-4 w-52 h-auto"}
											 src={"/assets/instagram-mockup.png"}
											 alt={"instagram mockup"} width={203} height={311} />*/}
						</div>
					</section>
				</section>
			</section>

			{/* De ce este specială această sesiune? */}
			<section>
				<section className={"pt-16 pb-8"}>
					<Container>
						<div>
							<h3
								className={"text-balance font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase text-center"}>
								Acest curs este pentru tine dacă
							</h3>
						</div>
					</Container>
				</section>
				<section className={"py-8 px-4 sm:px-0"}>
					<Container>
						<div className={"flex flex-col lg:flex-row gap-y-4"}>
							<div className={"w-full flex items-center flex-row lg:flex-col gap-y-2 gap-x-6 group"}>
								<div
									className={"shrink-0 relative w-24 h-24 flex items-center justify-center bg-primary-tint rounded-xl group-even:order-last sm:group-even:order-none"}>
									<div
										className={"absolute w-10 h-10 -top-3 group-odd:-right-3 group-even:-left-3 rounded-full flex items-center justify-center bg-primary border-4 border-white"}>
										<span className={"leading-none text-white font-semibold -top-0.5 relative"}>3</span>
									</div>
									<h3 className={"text-5xl"}>
										🏆
									</h3>
									{/*<Image className={"w-24 h-24 rounded-xl"} src={"/assets/step-3.jpg"} alt={"step 4"}
												 width={100} height={100} />*/}
								</div>
								<div
									className={"group-odd:pr-2 lg:group-odd:pr-0 lg:!px-2.5 group-even:pl-2 lg:group-even:pl-0 group-even:order-first lg:group-even:order-none"}>
									<p
										className={"text-sm sm:text-base md:text-lg group-even:text-right lg:group-even:text-center lg:text-center"}>
										Vrei o meserie de lux, respectată și bine plătită.
									</p>
								</div>
							</div>

							<div className={"w-full flex items-center flex-row lg:flex-col gap-y-2 gap-x-6 group"}>
								<div
									className={"shrink-0 relative w-24 h-24 flex items-center justify-center bg-primary-tint rounded-xl group-even:order-last sm:group-even:order-none"}>
									<div
										className={"absolute w-10 h-10 -top-3 group-odd:-right-3 group-even:-left-3 rounded-full flex items-center justify-center bg-primary border-4 border-white"}>
										<span className={"leading-none text-white font-semibold -top-0.5 relative"}>3</span>
									</div>
									<h3 className={"text-5xl"}>
										🔎
									</h3>
									{/*<Image className={"w-24 h-24 rounded-xl"} src={"/assets/step-3.jpg"} alt={"step 4"}
												 width={100} height={100} />*/}
								</div>
								<div
									className={"group-odd:pr-2 lg:group-odd:pr-0 lg:!px-2.5 group-even:pl-2 lg:group-even:pl-0 group-even:order-first lg:group-even:order-none"}>
									<p
										className={"text-sm sm:text-base md:text-lg group-even:text-right lg:group-even:text-center lg:text-center"}>
										Cauți o profesie cu cerere reală și stabilitate financiară.
									</p>
								</div>
							</div>

							<div className={"w-full flex items-center flex-row lg:flex-col gap-y-2 gap-x-6 group"}>
								<div
									className={"shrink-0 relative w-24 h-24 flex items-center justify-center bg-primary-tint rounded-xl group-even:order-last sm:group-even:order-none"}>
									<div
										className={"absolute w-10 h-10 -top-3 group-odd:-right-3 group-even:-left-3 rounded-full flex items-center justify-center bg-primary border-4 border-white"}>
										<span className={"leading-none text-white font-semibold -top-0.5 relative"}>3</span>
									</div>
									<h3 className={"text-5xl"}>
										💶
									</h3>
									{/*<Image className={"w-24 h-24 rounded-xl"} src={"/assets/step-3.jpg"} alt={"step 4"}
												 width={100} height={100} />*/}
								</div>
								<div
									className={"group-odd:pr-2 lg:group-odd:pr-0 lg:!px-2.5 group-even:pl-2 lg:group-even:pl-0 group-even:order-first lg:group-even:order-none"}>
									<p
										className={"text-sm sm:text-base md:text-lg group-even:text-right lg:group-even:text-center lg:text-center"}>
										Îți dorești independență și libertatea de a-ți crea propriul drum.
									</p>
								</div>
							</div>

							<div className={"w-full flex items-center flex-row lg:flex-col gap-y-2 gap-x-6 group"}>
								<div
									className={"shrink-0 relative w-24 h-24 flex items-center justify-center bg-primary-tint rounded-xl group-even:order-last sm:group-even:order-none"}>
									<div
										className={"absolute w-10 h-10 -top-3 group-odd:-right-3 group-even:-left-3 rounded-full flex items-center justify-center bg-primary border-4 border-white"}>
										<span className={"leading-none text-white font-semibold -top-0.5 relative"}>4</span>
									</div>
									<h3 className={"text-5xl"}>
										💪
									</h3>
									{/*<Image className={"w-24 h-24 rounded-xl"} src={"/assets/step-4.jpg"} alt={"step 4"}
												 width={100} height={100} />*/}
								</div>
								<div
									className={"group-odd:pr-2 lg:group-odd:pr-0 lg:!px-2.5 group-even:pl-2 lg:group-even:pl-0 group-even:order-first lg:group-even:order-none"}>
									<p
										className={"text-sm sm:text-base md:text-lg group-even:text-right lg:group-even:text-center lg:text-center"}>
										Ești hotărât să înveți și să aplici abilități practice cu adevărat valoroase.
									</p>
								</div>
							</div>
						</div>
					</Container>
				</section>
				<section className={"pb-8 pt-8"}>
					<Container>
						<div className={"flex items-center justify-center gap-2"}>
							<div className={"shrink-0 w-8 lg:w-10"}>
								<Image className={"h-[85px] lg:h-24 object-contain"} src={"/assets/wing-left.png"} alt={"wing left"}
											 width={32} height={85} />
							</div>
							<div>
								<p
									className={"text-sm sm:text-base md:text-lg lg:text-3xl text-center text-balance font-medium uppercase"}>
									Completează ancheta de mai jos și lasă-ne numărul tău de telefon pentru a primi toate detaliile despre
									preț și înscriere!
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

			<section className={"py-6"} id={"contactForm"}>
				<div className={"bg-primary-tint mb-4 py-4"}>
					<h3 className={"text-center text-3xl uppercase text-[#af1f10] font-semibold"}>
						AflĂ prețul 👇
					</h3>
				</div>
				<Container>
					<ContactForm />
				</Container>
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
									className={"text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold text-balance uppercase"}>
									E timpul să investești în viitorul tău!
								</h5>
							</div>
							<div className={"pt-6 pb-20"}>
								<Link href={"#contactForm"}
											className={"flex items-center justify-center h-16 w-auto lg:w-72 px-20 py-4 bg-white rounded-full uppercase text-2xl font-bold hover:bg-secondary cursor-pointer transition-colors duration-300 ease-in-out"}>
									Aici
								</Link>
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
									GoldYes Jewelry School
								</p>
								<p>
									str. Melestiu 26/7, Chișinău<br />
									Republica Moldova
								</p>
							</div>
							{/* CONTENT */}
							<div className={"flex flex-col gap-y-4 leading-5"}>
								<Link href={"/"}>
									+373 69 202 200
								</Link>
							</div>
							{/* CONTENT */}
							<div className={"flex flex-col gap-y-4 leading-5"}>
								<p>
									{new Date().getFullYear()} © ALL RIGHTS RESERVED
								</p>
							</div>
						</div>
					</Container>
				</section>
			</footer>
		</>
	);
}
