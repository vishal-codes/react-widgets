import React, { useState } from 'react';
import { debounce } from '../../commons/utils';
import axios from 'axios';

const Search = () => {

    const [results, setResults] = useState([]);

    const search = async (term) => {
        const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
            params: {
                action: 'query',
                list: 'search',
                origin: '*',
                format: 'json',
                srsearch: term
            },
        });
        setResults(data.query.search);
    };

    const onSearchInputChange = debounce(function (event) {
        search(event.target.value)
      }, 1000);

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
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
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
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );

};

export default Search;