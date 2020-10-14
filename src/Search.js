import React, { useState,useEffect } from 'react';
import axios from 'axios';
const WIKI_URL = "https://en.wikipedia.org/w/api.php";

const Search = () => {

    const [term, setTerm] = useState('a');
    const [results, setResult] = useState([]);
    useEffect(() => {
        console.log("term is ", term);
        const search = async () => {
            const  data  = await axios.get(WIKI_URL, {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                },
            }
            );
            // console.log(data);
            setResult(data.data.query.search);
            console.log(data);
            //console.log(data.data.query.search);
        };

        setTimeout(() => {
            if (term) {
                search();
            }
        }, 1000);
        
    }, [term]);

    
    const CallWikiAPI = results.map((result) => {
        console.log(result);
        return (
            <div className="item" key={result.title}>
                <div className="content">
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`}> { result.title }</a>
                     <div>   
                       <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
                        </div>
                    </div>
                </div>
        );
    });
    

    /*const CallWikiAPI = () => {

        //console.log(results);
        return <div>show results</div>;
    }*/


    return (
        <div>
            <form className="ui form">
                <label>Enter Input</label>
                <input className="input"
                    type="text"
                    value={term}
                    onChange={e=>setTerm(e.target.value)}
                />
            </form>
            <div className="ui celled list">
                {CallWikiAPI}
            </div>

            </div>
    );
}

export default Search;