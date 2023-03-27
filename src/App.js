import React, {useState} from "react";

export const App = () => {
    const [messageText, setMessageText] = useState('')
    const [messages, setMessages] = useState([])

    const addMessage = (newMessage) => {
        setMessages([...messages, `- ${newMessage}`]);
        setMessageText('')
    }

    return (
        <div className={'App'}>
            <h2>Чат</h2>
            {messages.length ? messages.map(el => <div className={'item'}>{el}</div>) : 'Упс'}
            <br/>
            <form action="">
                <input type="text" value={messageText} onChange={(e) => setMessageText(e.target.value)}/>
                <button type={'submit'} onClick={(e) => {
                    e.preventDefault();
                    addMessage(messageText)
                }}>Отправить</button>
            </form>
        </div>
    );
}
