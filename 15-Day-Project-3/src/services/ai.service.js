const { GoogleGenAI } = require("@google/genai");


const ai = new GoogleGenAI({});



 async function genratecaption(base64ImageFile){
    const contents = [
  {
    inlineData: {
      mimeType: "image/jpeg",
      data: base64ImageFile,
    },
  },
  { text: "Caption this image." },
];

const response = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  contents: contents,
});
console.log(response.text);
}

module.exports = genratecaption;