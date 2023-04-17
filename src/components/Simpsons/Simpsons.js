import React from 'react';
import Simpson from "../Simpson/Simpson";

const Simpsons = () => {
    const simpsons = [
        {
            id:1,
            name:"Homer",
            image :'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png',
            info: <p>Homer Jay Simpson, (born 1950 in 1989; 1984 in 2023), is a man from Springfield.
                He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson. Homer is
                overweight (said to be 313.05641230253 pounds in one episode[43] or 240 pounds elsewhere),
                lazy, and often ignorant to the world around him. Although he has many flaws, he has shown
                to have great caring, love and even bravery to those he cares about and sometimes, even others
                he doesn't.</p>
        },
        {
            id:2,
            name:"Marge",
            image: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png',
            info: <p>Marjorie Jacqueline "Marge" Simpson (née Bouvier)[11], (born 1953 in 1989; 1987 in 2023), is
                the homemaker and matriarch of the Simpson family. She is also one of the five main characters in
                The Simpsons TV series. She and her husband Homer have three children: Bart, Lisa, and Maggie. Marge
                is the moralistic force in her family and often provides a grounding voice in the midst of her family's
                antics by trying to maintain order in the Simpson household. Aside from her duties at home, Marge has
                flirted briefly with a number of careers ranging from a police officer to an anti-violence activist.</p>
        },
        {
            id:3,
            name: "Bart",
            image: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png',
            info: <p>Bartholomew JoJo "Bart" Simpson, (born 1979 in 1989; 2013 in 2023), is the mischievous, rebellious,
                misunderstood, disruptive and "potentially dangerous" oldest child of the Simpson family in The Simpsons.
                He is the only son of Homer and Marge Simpson, and the older brother of Lisa and Maggie. He also has been
                nicknamed "Cosmo", after discovering a comet in "Bart's Comet". Bart has also been on the cover on numerous
                comics, such as "Critical Hit", "Simpsons Treasure Trove #11", and "Winter Wingding". Bart also has a 100-issue
                comic series entitled the Simpson Comics Presents Bart Simpson. Bart is loosely based on Matt Groening and his
                older brother, Mark Groening.</p>
        }
    ]
    return (
        <div>
            {simpsons.map(simpson=> <Simpson key={simpson.id} simpson={simpson}/>)}
        </div>
    );
};

export default Simpsons;