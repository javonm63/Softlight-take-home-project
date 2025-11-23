import Navbar from '../components/navbar'
import { converterHooks } from '../hooks/homeHooks'
import '../styles/home.css'

function Home() {
    const sendHooks = converterHooks();
    const title = sendHooks.title;
    const setTitle = sendHooks.setTitle;
    const figmaUrl = sendHooks.figmaUrl;
    const setFigmaUrl = sendHooks.setFigmaUrl;
    const figmaKey = sendHooks.figmaKey;
    const setFigmaKey = sendHooks.setFigmaKey;
    const buttons = sendHooks.buttons;
    const setButtons = sendHooks.setButtons;


    const senfFigma = async (e) => {
        e.preventDefault();
        const APP_URL = import.meta.env.VITE_APP_URL

        if (figmaUrl === '' || figmaKey === '') {
            setTitle("Both figma url and personal access token are required!");
        };
        try {
            const req = await fetch(`${APP_URL}`, {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({figmaUrl, figmaKey}),
                credentials: 'include',
            });

            if (!req.ok) {
                const error = await req.json();
                console.log(error);
                if (error.message) {
                    setTitle(error.message);
                    setTimeout(() => {
                        setTitle("Enter your figma file key and figma access token below then click the 'send figma' button, if all goes well you'll then be able to download/preview the converted html/css.");
                    }, 8000);
                }
            } else {
                const data = await req.json()
                if (data.message) {
                    setTitle(data.message);
                    setTimeout(() => {
                        setTitle("Enter your figma file key and figma access token below then click the 'send figma' button, if all goes well you'll then be able to download/preview the converted html/css.");
                    }, 3000);
                    if (data.message === 'Converted successfully!') {
                        setButtons(true);
                        setTimeout(() => {
                            setButtons(false);
                        }, 10 * 60 * 1000);
                        setFigmaKey('');
                        setFigmaUrl('');
                    }
                }
            }
        } catch (err) {
            console.log(err);
        }
    }
    
    return (
        <div className='home-page-container'>
            <Navbar />
            <article className='home-section1-cont'>
                <h1 className='home-title'>FIGMA TO HTML/CSS <br/>CONVERTER</h1>
                <h2 className='home-subtitle'>Turn your figma files to html/css with just a few steps and a 100% accuracy, all you need is your figma file key and figma REST API personal access token.</h2>
                <section className='home-section1-btn-cont'>
                    <button className='home-section1-btns' type='button' onClick={() => window.location.href = '/docs'}>read docs</button>
                </section>
            </article>
            <form className='home-section2-cont' onSubmit={senfFigma}>
                <h3 className='home-title2'>Convert a Figma</h3>
                <p className='home-info'>{title}</p>
                <input className='home-inputs' type='text' placeholder='Enter figma file key' value={figmaUrl} onChange={(e) => setFigmaUrl(e.target.value)} required></input>
                <input className='home-inputs' type='text' placeholder='Enter personal access key' value={figmaKey} onChange={(e) => setFigmaKey(e.target.value)}required></input>
                <button className='home-section2-submit-btn' type='submit'>send figma</button>
                <section className='home-section2-btns-cont' style={{display: buttons ? 'flex' : 'none'}}>
                    <button className='home-section1-btns' type='button' onClick={() => window.location = 'http://localhost:5001/preview.html'} >preview</button>
                    <button className='home-section1-btns' type='button' onClick={() => window.location = 'http://localhost:5001/api/download/html'}>download</button>
                </section>
            </form>
        </div>
    )
}

export default Home