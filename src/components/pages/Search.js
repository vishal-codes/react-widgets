import React, { useState } from 'react';
import { createMarkup, debounce } from '../../commons/utils';
import axios from 'axios';

const Search = () => {

    const [results, setResults] = useState([]);
    const [errorInfo, setErrorInfo] = useState({
        isShow: false,
        message: '',
        code: '',
        moreInfo: '',
    })

    const search = async (term) => {
        // check whether the search sentence exists or not
        if (term) {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                },
            });
            // cek result from fetch api
            if (data.hasOwnProperty("error")) {
                // result is error
                setErrorInfo({
                    isShow: true,
                    message: data.error.info,
                    code: data.error.code,
                    moreInfo: data.error["*"],
                });
                setResults([]);
            } else {
                // result is success
                setResults(data.query.search);
            }
        } else {
            // clear state results
            setResults([]);
        }
    };

    const onSearchInputChange = debounce(function (event) {
        search(event.target.value);
        errorInfo.isShow && handleClearErrorInfo(); // clear state errorInfo 
    }, 1000);

    const handleClearErrorInfo = () => {
        setErrorInfo({
            isShow: false,
            message: '',
            code: '',
            moreInfo: '',
        });
    }

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button" rel="noreferrer" target="_blank" href={`https://en.wikipedia.org?curid=${result.pageid}`}>
                        GO
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={createMarkup(result.snippet)}></span>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>

                    <input
                        onChange={(event) => onSearchInputChange(event)}
                        className="input"
                        placeholder="Search awesome term"
                    />
                </div>
            </div>
            {errorInfo.isShow && (
                <div className="container-error-search">
                    <div className="ui error message">
                        <i className="close icon" onClick={handleClearErrorInfo}></i>
                        <div className="header">
                            There were some errors with your submission
                                </div>
                        <ul className="list">
                            <li>Error Message: {errorInfo.message}</li>
                            <li>Error Code: {errorInfo.code}</li>
                            <li>See More Details:
                                <span dangerouslySetInnerHTML={createMarkup(errorInfo.moreInfo)}></span>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
            <div className="ui celled list">
                {!errorInfo.isShow &&
                    <>
                        <h4 style={{ color: 'white', fontWeight: 'bold' }}>Found: {results.length} {results.length < 1 ? 'result' : 'results'} </h4>
                        {renderedResults}
                    </>
                }
            </div>
        </div>
    );

};

export default Search;