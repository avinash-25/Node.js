import { GoogleGenAI } from "@google/genai";
import { GEMINI_API_KEY } from "./index.js";

const ai = new GoogleGenAI(GEMINI_API_KEY);

export default ai;