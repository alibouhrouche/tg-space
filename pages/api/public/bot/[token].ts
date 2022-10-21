// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Opts, Typegram, Update, Telegram, Message,  } from "typegram";

type Data = {
    name: string
}

type Method<T extends keyof Telegram> = {
    method: T
} & Opts<T>

const createReply = (res:NextApiResponse<Method<'sendMessage'>>, chatId:number, messageId:number) => (message:string) =>
  res.status(200).json({
    method: 'sendMessage',
    chat_id: chatId,
    text: message,
    reply_to_message_id: messageId,
    // disable_notification: true,
})

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const {
        query: { token },
        body: update,
    } = req as {
        query: NextApiRequest['query'],
        body: Update.MessageUpdate<Message.TextMessage>
    }
    const { message } = update ?? {}
    const {
        from: { id: userId, first_name } = {},
        message_id: messageId,
        chat: { id: chatId } = {},
      } = message
    const reply = createReply(res,chatId!, messageId)
    reply(`Hello ${first_name} Your ChatID is ${chatId}`)
}
