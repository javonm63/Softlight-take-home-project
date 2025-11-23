import Navbar from '../components/navbar';
import { supportFormHooks } from '../hooks/supportHooks';
import '../styles/support.css';

function Support() {
    const formHooks = supportFormHooks()
    const name = formHooks.name
    const setName = formHooks.setName
    const email = formHooks.email
    const setEmail = formHooks.setEmail
    const message = formHooks.message
    const setMessage = formHooks.setMessage
    const sAlert = formHooks.sAlert
    const setSAlert = formHooks.setSAlert

  const handleSubmit = async (e) => {
    // e.preventDefault(); 

    const response = await fetch("https://formspree.io/f/xgvqrvdv", {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json"},
      body: JSON.stringify({name, email, message})
    });

    if (response.ok) {
      setSAlert("Your message has been sent!");
      setTimeout(() => {
        setSAlert("Send a quick message about your problem/concern direct to the app's developer.")
      }, 3000)
      setEmail('')
      setName('')
      setMessage('')
    } else {
      setSAlert("Oops! Something went wrong.");
      setTimeout(() => {
        setSAlert("Send a quick message about your problem/concern direct to the app's developer.")
      }, 3000)
    }
  };

    return (
        <form className="support-page-container" onSubmit={handleSubmit}>
            <Navbar />
            <img className='docs-page-back-btn' src='/back-icon.png' alt='image of the go back arrow icon' onClick={() => window.location.href = '/'}></img>
            <fieldset className='support-form-container'>
                <div className='avatar-container'></div>
                <section className='inputs-container'>
                    <h1 className='support-form-title'>GET SUPPORT</h1>
                    <p className='support-form-info'>{sAlert}</p>
                    <input className='support-input' name='name' type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' required></input>
                    <input className='support-input' name='email' type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required></input>
                    <textarea className='support-message' name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message'></textarea>
                    <button className='support-form-submit-btn' type='submit'>contact us</button>
                </section>
            </fieldset>
        </form>
    )
}

export default Support;