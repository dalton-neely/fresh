import React, {useEffect, useState} from "react";
import "./entries.css";

export const Entries = props => {
    const {filterBy} = props;

    const initialData = [
        {
            description: "",
            images: {
                "Poster Art": {
                    height: 0,
                    url: "",
                    width: 0,
                },
                programType: "movie",
                releaseYear: 2014,
                title: "Self/less",
            },
            programType: "",
            releaseYear: 0,
            title: "",
        }
    ]

    const [data, setData] = useState(initialData);

    useEffect(() => {
        fetch("http://localhost:3001/data-feed")
            .then(data => data.json())
            .then(json => {
                const returnedData = json.entries;
                const filteredData = returnedData.filter(row => row.releaseYear >= 2010);
                const sortedData = filteredData.sort((a, b) => {
                    if (a.title > b.title) {
                        return 1;
                    } else if (a.title === b.title) {
                        return 0;
                    } else {
                        return -1;
                    }
                });
                const sortedByType = sortedData.filter(row => row.programType === filterBy);
                const first21 = sortedByType.slice(0, 20);
                setData(first21);
            });
    }, [])

    return (
        <div className="ds-tiles-container">
            {data.map((entry, key) => <EntryTile entry={entry} key={key}/>)}
        </div>
    );
}

const EntryTile = props => {
    const {entry} = props;
    console.log(entry.images["Poster Art"].url);

    return (
        <div className="ds-poster-art">
            <img src={entry.images["Poster Art"].url} alt={entry.description} className="ds-poster-art-img"/>
            <div className="ds-poster-title">{entry.title}</div>
        </div>
    );
};