import { useState } from "react";

type NPC = {
    name: string;
};

//Identity of quests
type Quest = {
    id: number;
    complete: boolean;
    description: string;
    //add more properties as needed
/*     reward: false |50 | 100 | 1000;
*/
    questGiver?: NPC ;  
};

const QuestList = () => {
    const startQuests: Quest[] = [
        {
            id: 1, complete: false, description: 'First quest'
        },
        {
            id: 2, complete: true, description: 'First second'
        },
        {
            id: 3, complete: false, description: 'First thrid'
        },
    ];

    const [quests, setQuests] = useState(startQuests);

    return (
        <>
            <h1>QuestList</h1>
            <ol>
                {quests.map((q: Quest) => {
                    return <li key={q.id}>{q.description} {q.complete}</li>;
                })}
            </>
        </>
    );
};


export default QuestList;