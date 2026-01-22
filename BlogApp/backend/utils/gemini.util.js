import expressAsyncHandler from "express-async-handler";
import ai from '../config/gemini.config.js'

export const generateBlogDescription = expressAsyncHandler(
  async (inputTitle) => {
    console.log("inputTitle: ", inputTitle);
    let response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          text: inputTitle,
        },
      ],
      // config: {
      //   maxOutputTokens: 200,
      //   temperature: 0.8,
      // },
    });

    console.log("response: ", response);
    return response;
  },
);