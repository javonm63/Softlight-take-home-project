import Navbar from '../components/navbar';
import '../styles/docs.css';

function Docs() {
    return (
        <div className='docs-page-container'>
            <Navbar />
            <img className='docs-page-back-btn' src='/back-icon.png' alt='image of the go back arrow icon' onClick={() => window.location.href = '/'}></img>
            <section className='docs-section1-cont'>
                <h1 className='docs-section1-title'>FigML Converter</h1>
                <p className='docs-section1-info'>FigML is a easy to use direct figma to HTML/CSS converter that takes any figma file and convert into an exact HTML replica. All you need are two things one: your personal Figma access token, and two: your Figma file key.</p>
            </section>
            <article className='docs-section2-cont'>
                <section className='docs-section2-left-cont'>
                    <h2 className='docs-sections-titles'>FEATURES</h2>
                    <ol className='features-list-cont'>
                        <li className='features'>Figma to HTML/CSS conversion</li>
                        <li className='features'>User friendly UI/UX</li>
                        <li className='features'>Converted Doc preview</li>
                        <li className='features'>HTML file download</li>
                        <li className='features'>Tech support</li>
                    </ol>
                </section>
                <section className='docs-section2-right-cont'>
                    <h2 className='docs-sections-titles'>HOW IT WORKS</h2>
                    <textarea className='docs-section2-info' readOnly>FigML works by taking your Figma personal access token and file key then sends a request to its backend server which sends a request to Figma rest API after request validation. The response returned from the Figma rest API is then used to create and HTML document with inline styles matching your figma file picture perfectly, after the figma has been converted, the html file is then stored in the backend for approximately 10-15 mins. Once the html file get stored a success message appears on screen and the 'preview' and 'download' buttons also appear on screen for the same 10-15 mins duration, within this time frame users can view and/or download the converted html file as many times as they want following rate limits. For any help/assistance there's a convient support page that lets users fill out a form with their concerns/questions which is instantly sent to the applications developer after submission.</textarea>
                </section>
            </article>
            <section className='docs-section3-cont'>
                <h2 className='docs-sections-titles'>TECHNICAL DETAILS</h2>
                <textarea className='docs-section2-info' readOnly>{`The converter processes Figma nodes recursively and transforms them into clean, structured HTML elements. Frames and groups are represented as '<div>' containers, while text layers are output as '<p>' elements for clarity and readability. During conversion, the system automatically generates CSS that captures each element's visual properties—including positioning, fonts, colors, etc—ensuring the output closely matches the original design. To accurately reflect Figma's canvas, the layout uses absolute positioning or margins, preserving the exact spatial structure of the design.`}</textarea>
                <label for='limitation-list' className='limitation-label'>LIMITATIONS:</label>
                <ol id="limitation-list" className='docs-section3-list-cont'>
                    <li className='limitations'>Only supports basic Figma layers (Frame, Group, Text)</li>
                    <li className='limitations'>Does not convert images, vector graphics, or advanced components</li>
                    <li className='limitations'>Nested layouts may require additional CSS adjustments</li>
                </ol>
            </section>
            <article className='docs-section4-cont'>
                <section className='docs-section4-left-cont'>
                    <h2 className='docs-sections-titles'>SETUP</h2>
                    <p className='docs-section4-info'>The first thing you need for the conversion to work is an actual figma file created and saved to your Figma workspace.</p>
                    <p className='docs-section4-info'>{`Next you need the Figma file's key usually it's the first path after the /design path in your file's url ie: https://www.figma.com/design/<file_key>`}</p>
                    <p className='docs-section4-info'>Lastly you need an Figma personal access token, you can generate your own token from your figma dashboard by: Menu-Settings-Secrity-Generate access token. When generating your access token the scopes you want to select are: file_content:read, file_metadata:read, library_content:read and team_library_content:read.</p>
                </section>
                <section className='docs-section4-right-cont'>
                    <h2 className='docs-sections-titles'>USAGE</h2>
                    <p className='docs-section4-info2'>To convert your figma file to an HTML document is a simple process, just enter your Figma file key and access token in their correct field then click enter. All done!(if there are any errors during the conversion they will appear on screen as alerts, same goes for successful conversions) </p>
                </section>
            </article>
            <section className='docs-section5-cont'>
                <p className='docs-footer'>Figma REST API documentation: <a className='docs-footer' href='https://developers.figma.com/docs/rest-api/'>figma.com/docs</a></p>
            </section>
        </div>
    )
}

export default Docs;