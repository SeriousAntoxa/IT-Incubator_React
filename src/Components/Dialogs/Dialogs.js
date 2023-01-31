import React from "react"
import s from "./Dialogs.module.css"
import Message from "./Message/Message"
import Dialog from "./Dialog/Dialog"
import { Navigate } from "react-router-dom"
import MessageFormReact from "./MessageForm/MessageForm"

const Dialogs = (props) => {
    if (!props.auth) return <Navigate to="/login" replace />

    const dialogsData = props.dialogsPage.dialogs.map((d) => {
        return (
            <li className={s.dialog}>
                <Dialog id={d.id} name={d.name} />
            </li>
        )
    })

    const messageData = props.dialogsPage.messages.map((m) => {
        return <Message state={m} />
    })

    const onSubmit = (formData) => {
        props.sendMessage(formData.newMessage)
    }

    return (
        <div>
            <h1>Dialogs</h1>
            <div className={s.block}>
                <ul className={s.dialogs}>{dialogsData}</ul>
                <div className={s.messages}>
                    <div className={s.messages_chat}>{messageData}</div>
                    <MessageFormReact onSubmit={onSubmit} />
                </div>
            </div>
        </div>
    )
}

export default Dialogs
