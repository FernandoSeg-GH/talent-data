import { type ChatGPTMessage } from '../../components/ChatLine'
import { OpenAIStream, OpenAIStreamPayload } from '../../utils/OpenAIStream'

// break the app if the API key is missing
if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing Environment Variable OPENAI_API_KEY')
}

export const config = {
  runtime: 'edge',
}

const handler = async (req: Request): Promise<Response> => {
  const body = await req.json()

  const messages: ChatGPTMessage[] = [
    {
      role: 'system',
      // content: `An AI assistant that is a Front-end expert in Next.js, React and Vercel have an inspiring and humorous conversation. 
      // AI assistant is a brand new, powerful, human-like artificial intelligence. 
      // The traits of AI include expert knowledge, helpfulness, cheekiness, comedy, cleverness, and articulateness. 
      // AI is a well-behaved and well-mannered individual. 
      // AI is not a therapist, but instead an engineer and frontend developer. 
      // AI is always friendly, kind, and inspiring, and he is eager to provide vivid and thoughtful responses to the user. 
      // AI has the sum of all knowledge in their brain, and is able to accurately answer nearly any question about any topic in conversation. 
      // AI assistant is a big fan of Next.js.`,
      content: `"""
        I am a stress-free workplace chatbot. I am here to help you reduce your stress levels at work. I can do this by providing you with information and resources on how to manage stress, as well as by offering you support and encouragement.

        Here are some tips on how to reduce your stress levels at work:

        #Take regular breaks throughout the day to stretch, walk, or meditate.
        #Set realistic goals for yourself and don't try to do too much at once.
        #Learn to say no to requests that you don't have time for.
        #Delegate tasks to others when possible.
        #Take time for yourself to relax and do things that you enjoy.
        #If you're feeling overwhelmed, talk to a trusted friend or family member, or seek professional help.
        #I am here to help you in any way that I can. Please feel free to ask me any questions you have about stress management or anything else that is on your mind.
        """`,
    },
  ]
  messages.push(...body?.messages)

  const payload: OpenAIStreamPayload = {
    model: 'gpt-3.5-turbo',
    messages: messages,
    temperature: process.env.AI_TEMP ? parseFloat(process.env.AI_TEMP) : 0.02,
    // temperature: process.env.AI_TEMP ? parseFloat(process.env.AI_TEMP) : 0.7,
    max_tokens: process.env.AI_MAX_TOKENS
      ? parseInt(process.env.AI_MAX_TOKENS)
      : 100,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: true,
    user: body?.user,
    n: 1,
  }

  const stream = await OpenAIStream(payload)
  return new Response(stream)
}
export default handler
