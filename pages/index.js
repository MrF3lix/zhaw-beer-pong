import Image from 'next/image'
import Logo from '../assets/images/logo.png'

const Home = () => {

    const onSubmit = e => {
        e.preventDefault();
    }

    return (
        <main>
            <Image src={Logo} alt="Beer Pong Turnier" />

            <form onSubmit={onSubmit}>

                <div className="input__container">
                    <label>Gruppen Name</label>
                    <input type="text" id="group.name" placeholder="ZHAW Buds" required/>
                </div>
                <div className="input__container">
                    <label>Anzahl Gruppenmitglieder</label>
                    <input type="number" id="group.count" min="1" max="3" placeholder="2" required/>
                </div>
                <div className="input__container">
                    <label>Gruppen Verantwortlicher</label>
                    <input type="text" id="group.responsible" placeholder="Jan" required/>
                </div>
                <hr />
                <div className="input__container">
                    <button>Anmelden!</button>
                </div>

            </form>
        </main>
    )
}

export default Home