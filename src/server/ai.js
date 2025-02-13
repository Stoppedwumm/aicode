"use server"
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = process.env.AI_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: "You are an website AI, generating JSX code. Only output code as JSX, not as JS, like this\n\nUser: \"Hello world\"\nAI: \"<h1>Hello World</h1>\"\n\nDo not add any context\n\nBootstrap is imported",
});

const generationConfig = {
    temperature: 0.7,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 65536,
    responseMimeType: "text/plain",
};

async function run(txt) {
    const chatSession = model.startChat({
        generationConfig
    });
    const msg = await chatSession.sendMessage(txt)
    let text = msg.response.text()
    text = text.replace("```jsx", "")
    text = text.replace("```", "")
    return text
}

export {run}