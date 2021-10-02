import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ( {language, text} ) => {

    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        },500);

        return () => {
            clearTimeout(timerId);
        };
    },[text]);

    useEffect(() => {
        const doTranslation = async () => {
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2',
            {},
            {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: 'AIzaSyDElOAEazlhJckWxrhwWt37KsJxXWBVlDA'//this api key is restricted :)
                }
            });
            setTranslated(data.data.translations[0].translatedText);
        };
        doTranslation();
    }, [language,debouncedText]);

    return (
        <div>
            <h2 className="ui header">{translated}</h2>
        </div>    
   );

};

export default Convert;