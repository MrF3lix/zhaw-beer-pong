import Image from 'next/image'
import { useState } from 'react'
import { FacebookIcon, FacebookShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share'
import { useSessionStorage } from 'react-use'
import Logo from '../assets/images/logo.png'
import Flyer from '../assets/images/flyer-no-border.png'

const Home = () => {
    const [hasSubmitted, setHasSubmitted] = useSessionStorage('submitted', false)

    const [groupName, setGroupName] = useSessionStorage('groupName', "")
    const [groupSize, setGroupSize] = useState()
    const [groupLeader, setGroupLeader] = useState()

    const onSubmit = async e => {
        e.preventDefault();
        const response = await fetch(
            '/api/submit',
            {
                method: 'POST',
                headers: new Headers({ 'content-type': 'application/json' }),
                body: JSON.stringify({ groupName, groupSize, groupLeader })
            }
        )
        if (response.ok) {
            setHasSubmitted(true)
        }
    }

    const title = "Beer Pong Turnier"
    const description = "Am 3.12 ab 19.00 in der Türmlibar. Jetzt anmelden, mitmachen und gewinnen! 10.- pro Team inklusive Bier."
    const url = "https://www.zhaw-beer-pong.ch/"

    return (
        <main>
            <div className="container">

                <div className="left">
                    <div className="inner">
                        <Image id="flyer" src={Flyer} alt="Beer Pong Turnier Flyer" layout="intrinsic" width={595} height={842}/>
                    </div>
                </div>
                <div className="right">
                    {/* <Image id="logo" src={Logo} alt="Beer Pong Turnier" /> */}
                    <div className="inner inner-registration">
                        <h2>Anmeldung</h2>
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
                                <p>Jetzt teilen!</p>
                                <div className="share__container">
                                    <FacebookShareButton url={url} quote={`${title} | ${description}`}>
                                        <FacebookIcon size={64} borderRadius={32} />
                                    </FacebookShareButton>
                                    <WhatsappShareButton url={url} title={`${title} | ${description}`}>
                                        <WhatsappIcon size={64} borderRadius={32} />
                                    </WhatsappShareButton>
                                    <TelegramShareButton url={url} title={title}>
                                        <TelegramIcon size={64} borderRadius={32} />
                                    </TelegramShareButton>
                                    <TwitterShareButton url={url} title={title}>
                                        <TwitterIcon size={64} borderRadius={32} />
                                    </TwitterShareButton>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home