import React from 'react';

type SquadMemberProps = {
    id: string;
    name: string;
    image: string;
};

const SquadMember: React.FC<SquadMemberProps> = ({ id, name, image }) => {
    return (
        <div className="card shadow--md margin--md">
            <div className="card__image">
                <img src={image} alt={`${name}'s picture`} />
            </div>
            <div className="card__body">
                <h4>{name}</h4>
            </div>
            <div className="card__footer">
                <a href={`/docs/squad/${id}`} className="button button--block button--secondary">More</a>
            </div>
        </div>
    );
};

export default SquadMember;
