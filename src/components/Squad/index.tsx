import React from 'react';
import SquadMember from '../SquadMember';

type Member = {
    id: string;
    name: string;
    image: string;
};

type SquadProps = {
    members: Member[];
};

const members: Member[] = [
    {
        id: 'aria',
        name: 'Aria Patel',
        image: '/img/aria-patel.jpeg',
    },
    {
        id: 'lucas',
        name: 'Lucas Müller',
        image: '/img/lucas-muller.jpeg',
    },
    {
        id: 'sofia',
        name: 'Sofia Rodriguez',
        image: '/img/sofia-rodriguez.jpeg',
    },
    {
        id: 'galal',
        name: 'Galal Essam',
        image: '/img/galal-essam.jpeg',
    },
    {
        id: 'mei',
        name: 'Mei Wong',
        image: '/img/mei-wong.jpeg',
    },
];

const Squad: React.FC<SquadProps> = () => {
    return (
        <div className="container">
            <div className="row">
                {members.map((member) => (
                    <div className="col col--4" key={member.name}>
                        <SquadMember {...member} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Squad;
