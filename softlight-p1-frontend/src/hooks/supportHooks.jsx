import { useState } from "react";

export function supportFormHooks() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [sAlert, setSAlert] = useState("Send a quick message about your problem/concern direct to the app's developer.")
    return {
        name, setName,
        email, setEmail,
        message, setMessage,
        sAlert, setSAlert,
    }
}