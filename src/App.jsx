import React from 'react';
import Header from './Header';
import Body from './Body';
import Navigation from './Navigation';

function App() {
    return(<div className="container">
        <center>
            <Header />
            <Body />
        
            <Navigation 
                href="https://twitter.com/georgeolufemii?t=3klXaBwZ9ikOS0yZMHRgwg&s=09"
                text="Follow me on Twitter" />
            <Navigation 
                href="https://instagram.com/georgeoluolufemi?utm_medium=copy_link"
                text="Add me to your Feed on Instagram" />
            <Navigation 
                href="mailto:georgeoluolufemi@gmail.com"
                text="Contact me Via Email" />
            <Navigation 
                href="https://www.facebook.com/george.olufemi.501"
                text="Connect Via Facebook" />
            <Navigation 
                href="https://www.linkedin.com/in/george-olufemi-325655226"
                text="Send me a message on linkedIn" />
        </center>
        </div>
    );
}

export default App;