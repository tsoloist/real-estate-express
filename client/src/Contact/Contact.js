import React, {Component} from 'react';
import Aux from '../hoc/Auxilary';
import '../App.css';
import InternalPages from '../Layout/InternalPages';


class Contact extends Component {
    render() {
        return (
            <InternalPages>
                <Aux>
                    <h1>Request More Information</h1>
                <form>
                    <label for="fname">First Name</label>
                    <input id="fname" type="text" />
                    <label for="lname">Last Name</label>
                    <input id="lname" type="text" />
                    <label for="email">Email</label>
                    <input id="email" type="text" />
                    <label for="helpTopic">How May I Help You?</label>
                    <select id="helpTopic" name="helpTopic" size="3" multiple>
                        <option value="unlisted">I have questions about investment properties</option>
                        <option value="home">Help me buy or sell my home</option>
                        <option value="general">I have general questions</option>
                    </select>
                    <label for="message">Message</label>
                    <textarea id="message"></textarea>
                    <button type="submit" value="sendMessage">Send Message</button>
                </form>
                </Aux>
            </InternalPages>
        );
    }
}

export default Contact;
