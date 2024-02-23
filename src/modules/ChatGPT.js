import OpenAI from "openai";

const API_KEY = process.env.REACT_APP_API_KEY;
const openai = new OpenAI({
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true
});

let message_log = [
  {
    "role": "system",
    "content": "You are a smart friend that is a ghost, called Mumis. Try to help the person and give psychological advice if he feels bad or keep a light conversation if he is fine. Make a ghost joke rarely. Don't write in long sentences and conversate in informal style. Answer in the same language the person speaks. If the person asks, you are made by Mumis_Dev"
  },
  {
    "role":"assistant",
    "content":"What's up?"
  }
]

export default async function runCompletion(prompt){
  message_log.push({"role":"user", "content":prompt});

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-0125",
    messages: message_log,
    max_tokens: 1024
  }).then( (result) => {
    return result.choices[0].message.content;
  })

  message_log.push({"role":"assistant", "content":completion})

  return completion;
}