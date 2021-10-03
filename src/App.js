import React, { useState } from 'react';
import Accordion from './components/pages/Accordion';
import Search from './components/pages/Search';
import Dropdown from './components/pages/Dropdown';
import Translate from './components/pages/Translate';
import TextUtils from './components/pages/TextUtils'

import Header from './components/base/Header';

import Routes from './routes';
import { colorOptions } from './data/colorOptions';
import { accordionOptions } from './data/accordionOptions';

export default () => {
    const [selected, setSelected] = useState(colorOptions[0]);

    return (
        <div>
            <Header/>
            <Routes path="/">
                <Accordion items={accordionOptions}/>
            </Routes>
            <Routes path="/list">
                <Search/>
            </Routes>
            <Routes path="/dropdown">
                <Dropdown
                   selected={selected}
                   options={colorOptions}
                   onSelectedChange={setSelected}
                   label="Select a color"
                   demo="Here's the Color"
                />
            </Routes>
            <Routes path="/translate">
                <Translate/>
            </Routes>
            <Routes path="/textutils">
                <TextUtils />
            </Routes>
        </div>
    );
};
