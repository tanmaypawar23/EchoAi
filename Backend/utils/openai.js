import "dotenv/config";

const getGeminiAPIResponse = async (message) => {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [{ text: message }],
        },
      ],
    }),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    // ALWAYS log this while debugging — shows the real response from Gemini
    console.log("Gemini raw response:", JSON.stringify(data, null, 2));

    // Check if Gemini sent an error instead of a reply
    if (data.error) {
      console.log("Gemini API error:", data.error.message);
      return null;
    }

    // Safely read the reply (won't crash if something is missing)
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!reply) {
      console.log("No reply text found in Gemini response");
      return null;
    }

    return reply;
  } catch (err) {
    console.log("Fetch failed:", err);
    return null;
  }
};

export default getGeminiAPIResponse;
