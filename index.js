const  openaiApi = require("openai");
require('dotenv').config();

const openai = new openaiApi({
    apiKey: process.env['API_KEY'], // This is the default and can be omitted
  });


async function main() {

    const prompt = `tech stack required to become a full stack engineer`
    const completion = await openai.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt: prompt,
        max_tokens: 7,
        temperature: 0,
    });
    const result = completion.choices;
    console.log("Prompt results:", result);
}

main();






