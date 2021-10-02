import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
        title: 'What is React?',
        content: 'React is a JavaScript library for building user interfaces'
    },
    {
        title: 'Component Based',
        content: 'Build encapsulated components that manage their own state, then compose them to make complex UIs.'
    },
    {
        title: 'Declarative ?',
        content: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.'
    }
];

const options = [
    {   
        label: 'AntiqueWhite',
        value: 'AntiqueWhite'
    },
    {
        label: 'Aqua',
        value: 'Aqua'
    },
    {
        label: 'Aquamarine',
        value: 'Aquamarine'
    },
    {
        label: 'Blue',
        value: 'Blue'
    },
    {
        label: 'CadetBlue',
        value: 'CadetBlue',
    },
    {
        label: 'DarkRed',
        value: 'Darkred'
    },
    {   label: "DeepPink",
        value: "DeepPink" 
    },
    {
        label: 'Maroon',
        value: 'Maroon'
    },
    {
        label: 'Olive',
        value: 'Olive'
    },
    {
        label: 'Pink',
        value: 'Pink'
    },
    {
        label: 'Yellow',
        value: 'Yellow'
    },
]

export default ()=> {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Header/>
            <Route path="/">
                <Accordion items={items}/>
            </Route>
            <Route path="/list">
                <Search/>
            </Route>
            <Route path="/dropdown">
                <Dropdown 
                   selected={selected} 
                   options={options}
                   onSelectedChange={setSelected}
                   label="Select a color"
                   demo="Here's the Color"
                />
            </Route>
            <Route path="/translate">
                <Translate/>
            </Route>
        </div>
    );
};
