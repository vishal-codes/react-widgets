import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
    { 
        label:'Afrikaans',
        value:'af'
    },
    {
        label:'Albanian',
        value:'sq'
    },
    {
        label: 'Arabic',
        value: 'ar',
    },
    {
        label: 'Amharic',
        value: 'am',
    },
    {
        label: 'Armenian',
        value: 'hy',
    },
    {
        label: 'Bengali',
	    value: 'bn'
    },
    {
	    label: 'Bulgarian',
        value: 'bg'
    },
    {
        label: 'Dutch',
       	value: 'nl'
    },
    {
        label: 'English',
        value: 'en'
    },
    {
        label: 'French',
        value: 'fr'
    },
    {
        label: 'Frisian',
        value: 'fy'
    },
    {
        label: 'Galician',
        value: 'gl'
    },
    {
        label: 'German',
        value: 'de'
    },
    {
        label: 'Gujarati',
        value: 'gu'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Italian',
        value: 'it'
    },
    {
        label: 'Japanese',
        value: 'ja'
    },
    {
        label: "Korean",
        value: "ko",
    },
    {
        label: 'Malayalam',
        value: 'ml'
    },
    {
        label: 'Punjabi',
        value: 'pa'
    },
    {
        label: 'Tamil',
        value: 'ta'
    },
    {
        label: 'Telugu',
        value: 'te'
    },
    {
        label: 'Urdu',
        value: 'ur'
    },
    {
        label: 'Uyghur',
        value: 'ug'
    },
    {
        label: 'Uzbek',
        value: 'uz'
    },
    {
        label: 'Vietnamese',
        value: 'vi'
    },
    {
        label: 'Welsh',
        value: 'cy'
    },
    {
        label: 'Xhosa',
        value: 'xh'
    },
    {
        label: 'Yiddish',
        value: 'yi'
    },
    {
        label: 'Yoruba',
        value: 'yo'
    },
    {
        label: 'Zulu',
        value: 'zu'
    },
]


const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <h4>
            <label>Enter text</label>
          </h4>
          <input value={text} onChange={(e) => setText(e.target.value)} />
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
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
