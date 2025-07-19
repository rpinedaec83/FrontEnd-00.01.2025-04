import { useEffect, useState } from "react";

export default function DarkMode() {

    const [dark, setDark] = useState(() => localStorage.getItem('modo') === 'oscuro')

    useEffect(() => {
        localStorage.setItem('modo', dark ? 'oscuro' : 'claro');
    }, [dark])

    return (

        <div style={{ background: dark ? '#222' : "#eee", color: dark ? "#fff" : "#000", padding: '1rem' }}>
            <p>Modo: {dark ? 'Oscuro' : 'Claro'}</p>
            <button onClick={() => setDark(!dark)}>Cambiar</button>
        </div>
    )
}