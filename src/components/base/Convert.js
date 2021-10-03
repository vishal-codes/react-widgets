import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ( {language, text} ) => {

    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);
    const [isTranslated, setIsTranslated] = useState(false);

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
            setIsTranslated(true);
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2',
            {},
            {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: 'AIzaSyDElOAEazlhJckWxrhwWt37KsJxXWBVlDA'//this api key is restricted :)
                }
            });
            setIsTranslated(false);
            setTranslated(data.data.translations[0].translatedText);
        };
        if (debouncedText !== "") {
            doTranslation();
          } else {
            setTranslated("");
        }
    }, [language,debouncedText]);

    return (
        <div>
            {isTranslated ? (
                <span>Translating...</span>
            ) : (
                <h2 className="ui header">{translated}</h2>
            )}
        </div>    
   );

};

export default Convert;