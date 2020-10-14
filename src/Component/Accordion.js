import React, { useState } from 'react';

const contents=[
    {
        title: "What's your name?",
        answer: "My name is Reez.",
        index:'0'
    },

    {
        title: "Where do you live?",
        answer: "I live in Kangra.",
        index:'1'
    },
    {
        title: "Tell me more about you.",
        answer:"I'm an asshole.",
        index:'2'

    },
    {
        title: "show me your pic. ",
        answer: <img style={{ "width":"250px"}} src="https://media.npr.org/assets/img/2017/09/12/macaca_nigra_self-portrait-3e0070aa19a7fe36e802253048411a38f14a79f8-s800-c85.jpg" />,
        index:'3'
    }
];

const Accordion = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {

        if (index === activeIndex)
        {
            setActiveIndex(null);
        }
        
        else setActiveIndex(index);
    };
    const indexClicked = () => {

        if (activeIndex){
            return (<p>Title clicked {activeIndex}</p>);
        }
    }
    const shouldShowThis = (content) =>
    {
        if (content.index === activeIndex)
        {
            return (content.answer);
        }
    }

    const renderit = contents.map((content) => {
        const active = content.index === activeIndex ? 'active' : '';
        return <React.Fragment key={content.title}>
            <div
                className={"title " + active}
                onClick={()=>onTitleClick(content.index)} >
                <i className="dropdown icon"></i>
                {content.title}
            </div>
            <div className={"content " + active}>
                <p>{content.answer}</p>
            </div>
        </React.Fragment>
           });
    return (
        <div className="ui styled accordion" >
            {renderit}
        </div >
    );
};
export default Accordion;