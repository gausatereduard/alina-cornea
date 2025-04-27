import Link from "next/link";

export function ContactForm() {
    return (
        <form>
            <h3>
                Dezghioc Manifest
            </h3>
            <div>
                <label>Nume</label>
                <input/>
            </div>
            <div>
                <label>Phone</label>
                <input/>
            </div>
            <div>
                <label>
                    Scrie aici nickname-ul tău din Telegram
                </label>
                <input/>
            </div>
            <div>
                <input type={"checkbox"}/>
                <label>
                    Am citit și sunt de acord cu{" "}
                    <Link href={"/"}>
                        Condițiile Comerciale și de Confidențialitate.
                    </Link>
                </label>
            </div>
            <button>

            </button>
        </form>
    )
}