"use server";

export async function sendForm(userData: { name: string; age: string; phone: string }) {
	const message = `Name: ${userData.name}\nPhone: ${userData.phone}\nAge: ${userData.age}`;

	const res = await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			chat_id: process.env.CHAT_ID,
			text: message
		})
	});

	const resData = await res.json();

	if (res.ok) {
		return { success: true, data: resData };
	}

	if (!res.ok) {
		return { success: false, data: resData };
	}

	// .then(response => response.json())
	// .then(data => {
	// 	console.log("Message sent:", data);
	// 	return { success: true, data: data };
	// })
	// .catch(error => {
	// 	console.error("Error sending message:", error);
	// 	return { success: false, data: error };
	// });

	return { success: false, data: null };
}