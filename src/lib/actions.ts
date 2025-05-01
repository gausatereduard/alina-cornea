"use server";

export async function sendForm(userData: { name: string; telegram: string; phone: string }) {
	const message = `Name: ${userData.name}\nPhone: ${userData.phone}\nTelegram: ${userData.telegram}`;

	fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			chat_id: process.env.CHAT_ID,
			text: message
		})
	})
		.then(response => response.json())
		.then(data => {
			console.log("Message sent:", data);
			return { success: true, data: data };
		})
		.catch(error => {
			console.error("Error sending message:", error);
			return { success: false, data: error };
		});

	return { success: false };
}