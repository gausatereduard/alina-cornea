"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { sendForm } from "@/lib/actions";

export function ContactForm() {
	const [form, setForm] = useState({
		name: "",
		phone: "",
		age: ""
	});
	const [status, setStatus] = useState<null | boolean>(null);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		sendForm(form)
			.then((res) => {
				console.log(res.data);
				setStatus(res.success);
			});

		setForm({
			name: "",
			phone: "",
			age: ""
		});
	};

	return (
		<form className={"border-2 border-dotted border-primary px-4 py-6 rounded-2xl space-y-4"}
					onSubmit={handleSubmit}>
			{/*<div className={"mb-4"}>
				<h3 className={"text-balance font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase text-center"}>
					Dezghioc Manifest
				</h3>
			</div>*/}
			<div className={"flex flex-col gap-y-4"}>
				<div className={"flex flex-col gap-y-1"}>
					<label className={"text-sm"}>Nume</label>
					<input className={"h-10 px-4 py-2 border border-gray-200 rounded-md"} name={"name"}
								 placeholder={"Introduceți numele dvs."} required value={form.name} onChange={handleInputChange} />
				</div>
				<div className={"flex flex-col gap-y-1"}>
					<label className={"text-sm"}>Telefon cu prefix și +</label>
					<input className={"h-10 px-4 py-2 border border-gray-200 rounded-md"} placeholder={"+37379944955"} required
								 name={"phone"} value={form.phone} onChange={handleInputChange} type={"tel"} />
				</div>
				<div className={"flex flex-col gap-y-1"}>
					<label className={"text-sm"}>
						Câți ani ai?
					</label>
					<input className={"h-10 px-4 py-2 border border-gray-200 rounded-md"} name={"age"} value={form.age}
								 onChange={handleInputChange} type={"number"} max={99} min={14} />
				</div>
			</div>
			<div className={"flex flex-col gap-2"}>
				<button type={"submit"} disabled={typeof status === "boolean"}
								className={"h-16 md:text-xl w-full lg:w-72 py-4 bg-secondary disabled:pointer-events-none disabled:opacity-50 rounded-full uppercase font-bold hover:bg-primary hover:text-white cursor-pointer transition-colors duration-300 ease-in-out"}>
					{status === null && (
						<span>
							Înregistrează-te
						</span>
					)}
					{status && (
						<span>
							Try later
						</span>
					)}
					{status === false && (
						<span>
							Înregistrarea este completă
						</span>
					)}
				</button>
				<Link href={"https://t.me/scoalagoldyes"}
							className={"text-center flex items-center justify-center md:text-xl w-full lg:w-72 py-4 bg-[#24A1DE] rounded-full uppercase font-bold text-white cursor-pointer"}>
					Telegram
				</Link>
			</div>
		</form>
	);
}