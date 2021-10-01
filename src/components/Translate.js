import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
    {
        label: 'English',
        value: 'en'
    },
    {
        label: 'French',
        value: 'fr'
    },
    {
        label: 'German',
        value: 'de'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Italian',
        value: 'it'
    },
]

const Translate = () => {

    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <h4><label>Enter text</label></h4>
                    <input
                        value={text}
                        onChange={
                            (e) => setText(e.target.value)
                        }
                    />
                </div>
            </div>
            <Dropdown
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
                label="Select a Language"
                demo=""
            />
            
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language}/>
        </div>
    );
};

export default Translate;