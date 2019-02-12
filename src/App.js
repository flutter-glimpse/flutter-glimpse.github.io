import React, { useState, useEffect } from 'react';
import '../node_modules/milligram/dist/milligram.min.css';
import './App.css';
import { SocialIcon } from 'react-social-icons';

function App() {
    const linkBase = 'https://flutter-glimpse.tomasdostal.com/';

    const [repo, setRepo] = useState('');
    const [branch, setBranch] = useState('');
    const [path, setPath] = useState('');
    const [target, setTarget] = useState('');
    const [displayGlimpse, setDisplayGlimpse] = useState(false);

    const isValidRepo = repo.split('/').filter(Boolean).length === 2;

    const glimpseGif = (target) ? buildLink() : '';
    const glimpsePng = buildLink(true);

    function buildLink(ignoreTarget = false) {
        if (!isValidRepo) return;

        let link = linkBase;

        link += `?r=${encodeURIComponent(repo)}${branch && encodeURIComponent(`#${branch}`)}${path && encodeURIComponent(`:${path}`)}`;

        if (target && !ignoreTarget) {
            link += `&t=${encodeURIComponent(target)}`
        }

        return link;
    }

    function onInputChange(value, stateCallback) {
        setDisplayGlimpse(false);
        stateCallback(value);
    }

    function prefillExample() {
        setDisplayGlimpse(false);
        setRepo('tomino2112/flutter_driver_test');
        setBranch('');
        setPath('');
        setTarget('test_driver/app_showcase');
        setDisplayGlimpse(true);
    }

    return (
        <div className="container App">
            <div className="header">
                <h1>Flutter Glimpse</h1>
                <h3>Display glimpse of your Flutter application. Updated on every push.</h3>
                <p><span className="quote">A picture is worth a thousand words!</span> You don't have to update screenshot and video of your app on every push to show people what you made. Add a link to the Flutter Glimpse and don't worry about the rest.</p>
            </div>

            <section>
                <h4>1. Provide info about your Flutter app <button type="button" className="button button-outline button-example" onClick={prefillExample}>Example</button></h4>


                <div className="row">
                    <div className="column column-50">
                        <label>Repository <span className="required">*</span> <small> Github username/repository of your Flutter app.</small></label>
                        <input type="text" value={repo} placeholder="username/repository" onChange={e => onInputChange(e.target.value, setRepo)} />
                    </div>
                </div>
                <div className="row">
                    <div className="column column-50">
                        <label>Branch <small>Repository branch to checkout. Defaults to <strong>master</strong></small></label>
                        <input type="text" value={branch} placeholder="master" onChange={e => onInputChange(e.target.value, setBranch)} />
                    </div>
                </div>
                <div className="row">
                    <div className="column column-50">
                        <label>Path <small>Path to Flutter app within the repository. Defaults to <strong>/</strong></small></label>
                        <input type="text" value={path} placeholder="path/to/flutter/app" onChange={e => onInputChange(e.target.value, setPath)} />
                    </div>
                </div>
                <div className="row">
                    <div className="column column-50">
                        <label>Integration test target <small>Path to the integration test to execute (if any)</small></label>
                        <input type="text" value={target} placeholder="test_driver/target" onChange={e => onInputChange(e.target.value, setTarget)} />
                    </div>
                </div>
            </section>

            <section>
                <h4>2. Paste image link to your README.md</h4>
                <ReadmeImageTags
                    glimpseGif={glimpseGif}
                    glimpsePng={glimpsePng}>
                </ReadmeImageTags>
            </section>

            <section>
                <GlimpseViewer
                    displayGlimpse={displayGlimpse}
                    glimpseGif={glimpseGif}
                    glimpsePng={glimpsePng}>
                </GlimpseViewer>
                <button type="button" onClick={e => setDisplayGlimpse(!displayGlimpse)} disabled={!isValidRepo}>{(displayGlimpse) ? 'Hide' : 'Show'} Glimpse</button>
            </section>

            <FAQ></FAQ>

            <footer>
                This project is maintained by <a href="https://tomasdostal.com" target="_blank">Tomas Dostal</a>
                <SocialIcon url="https://twitter.com/tomino2112" />
                <SocialIcon url="https://www.linkedin.com/in/dostaltomas/" />
                <SocialIcon url="https://www.github.com/tomino2112" />
            </footer>
        </div>
    );
}

function ReadmeImageTags(attr) {
    const gifImageTag = attr.glimpseGif
        && <div>Video glimpse:<p>{'<img src='+attr.glimpseGif+' width="320" />'}</p></div>;

    const pngImageTag = attr.glimpsePng
        && <div>Screenshot glimpse:<p>{'<img src='+attr.glimpsePng+' width="320" />'}</p></div>;

    const markup = (gifImageTag || pngImageTag)
        ? [gifImageTag, pngImageTag]
        : 'You have to fill in at least repository';

    return <pre className="links">
        <code>{markup}</code>
    </pre>;
}

function GlimpseViewer(attr) {
    const gifImageTag = attr.glimpseGif
        && <div className="column"><h5>Video Glimpse</h5><img src={attr.glimpseGif} className="glimpse" /></div>;

    const pngImageTag = attr.glimpsePng
        && <div className="column"><h5>Screenshot Glimpse</h5><img src={attr.glimpsePng} className="glimpse" /></div>;

    const markup = (gifImageTag || pngImageTag) && [gifImageTag, pngImageTag];
    return <div>
        { (attr.displayGlimpse) ? <div className="row">{markup}</div> : '' }
    </div>;
}

function FAQ() {
    const contactLink = 'https://twitter.com/intent/tweet?screen_name=Tomino2112';

    return <div className="faq">
        <h3>FAQ</h3>

        <h4>Troubleshooting</h4>
        <ul>
            <li>I am seeing a loading bar instead of the glimpse - Glimpse can take between couple of minutes and up to an hour to generate, if you see loading bar it means everything is going well.</li>
            <li>I am seeing "broken image" icon in place - Something must have gone terribly wrong, <a href={contactLink}>contact me!</a></li>
            <li>I am not seeing anything in place of glimpse - If you are not seeing anything it means there was an issue processing your request. To debug this, send the image request using tool such as <a href="https://www.getpostman.com/" target="_blank">Postman</a> so you can inspect the headers. Error code is included in the "X-Script-Error".</li>
        </ul>

        <table>
            <thead>
            <tr>
                <th>Error Code</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>4000</td>
                <td>Missing "repo" or "r" query param</td>
            </tr>
            <tr>
                <td>4001</td>
                <td>No repository detected within the "repo" or "r" query param. Repository must be in first place and in format: username/repository</td>
            </tr>
            <tr>
                <td>4002</td>
                <td>Project at repository/path location does not seem to be Flutter app</td>
            </tr>
            <tr>
                <td>4003</td>
                <td>Github error - <a href={contactLink}>contact me!</a></td>
            </tr>
            <tr>
                <td>500X</td>
                <td>Internal error - you don't need to contact me, I have been notified by the system</td>
            </tr>
            </tbody>
        </table>

        <ul>
            <li>I have shared the glimpse link to Slack or somewhere else and it doesn't refresh after push - Many systems out there are caching images on their own servers. I have implemented standard cache control which Github follows well, but it is not guaranteed that others will.</li>
        </ul>

        <h4>Why?</h4>
        <ul>
            <li>Flutter Glimpse should make life easier for developers. Not having to keep updated screenshot/video assets within repository.</li>
            <li>Personal frustration of having to clone and build each and every application just to see how it looks like.</li>
            <li>Raise awareness/interest in integration tests. If you do write integration tests, you can have a video glimpse in your repo showcasing UI interactions and full journeys through the app.</li>
        </ul>

        <h4>How?</h4>
        <p>First time someone views your app on Github, flutter-glimpse servers will be asked to provide the glimpse. Your app will be added to the queue and processed as soon as possible. During this process your app will be cloned, built locally and glimpse will be created. This process can take <strong>between couple of minutes up to an hour</strong> depending on number of jobs in the queue.</p>
        <p>Glimpse is generated per combination of: <strong>repository, branch, commit, path, and target</strong>. If any of these values change it will be re-generated.</p>

        <h4>Why would I not use CI instead?</h4>
        <p>Of course you can, but you will have to setup the glimpse export and upload to Github by your self. Apart from that 99% of apps out there don't have/need CI. This project is mainly aimed at small POC apps that people publish for others to dig into.</p>

        <h4>Isn't it quite difficult for you to process and store all the requests?</h4>
        <p>You don't have to worry about that! Don't worry I am using the latest and best in cloud technology and most heavy lifting is on them.</p>

        <h4>Do you support private repositories?</h4>
        <p>Not at the moment, but if there is interest I can make it work. </p>

        <h4>Is it free?</h4>
        <p>YES. The basic usage of generating screenshot and video glimpse for public github repositories will be always free. I do have ideas for more sophisticated features which I would charge for.</p>

        <h4>Can I automate the glimpse generating so people don't have to wait?</h4>
        <p>Yes! You can add above links (minus the "img" tag) to your <a href="http://lmgtfy.com/?q=github+setup+wbhook" target="_blank">repository webhooks</a> and have the glimpse generated right away after every push. Using webhooks is strongly encouraged and I might "lock" the system in the future to accept re-generation of glimpses only through webhooks.</p>
    </div>;
}

export default App;
