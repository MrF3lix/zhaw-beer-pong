import Image from 'next/image'
import { useState } from 'react'
import { useSessionStorage } from 'react-use'
import Logo from '../assets/images/logo.png'

const API_URL = 'https://sheet.best/api/sheets/a9ab514d-7010-4004-b4eb-fc9c6dc94c0b'

const Home = () => {
    const [hasSubmitted, setHasSubmitted] = useSessionStorage('submitted', false)

    const [groupName, setGroupName] = useState()
    const [groupSize, setGroupSize] = useState()
    const [groupLeader, setGroupLeader] = useState()

    const onSubmit = async e => {
        e.preventDefault();
        const response = await fetch(
            API_URL,
            {
                method: 'POST',
                headers: new Headers({ 'content-type': 'application/json' }),
                body: JSON.stringify({ groupName, groupSize, groupLeader })
            }
        )
        if(response.ok) {
            setHasSubmitted(true)
        }
    }

    return (
        <main>
            <Image src={Logo} alt="Beer Pong Turnier" />
            <div className="inner inner-registration">
                {!hasSubmitted ?
                    <form onSubmit={onSubmit}>

                        <div className="input__container">
                            <label>Gruppen Name</label>
                            <input type="text" id="group.name" onChange={e => setGroupName(e.target.value)} placeholder="ZHAW Buds" required />
                        </div>
                        <div className="input__container">
                            <label>Anzahl Gruppenmitglieder</label>
                            <input type="number" id="group.size" onChange={e => setGroupSize(e.target.value)} min="1" max="3" placeholder="2" required />
                        </div>
                        <div className="input__container">
                            <label>Gruppen Verantwortlicher</label>
                            <input type="text" id="group.leader" onChange={e => setGroupLeader(e.target.value)} placeholder="Jan" required />
                        </div>
                        <hr />
                        <div className="input__container">
                            <button>Anmelden!</button>
                        </div>

                    </form> :
                    <div>
                        <h2>Danke {groupName} für die Anmeldung!</h2>
                    </div>
                }
            </div>
        </main>
    )
}

export default Home