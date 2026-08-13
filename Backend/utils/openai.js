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

    // console.log(JSON.stringify(data, null, 2));

    return data.candidates[0].content.parts[0].text; // Gemini's reply
  } catch (err) {
    console.log(err);
  }
};

export default getGeminiAPIResponse;
