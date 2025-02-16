import {useRef, useState} from 'react';

const users = [
    { name: 'Sarah', age: 20 },
    { name: 'Alex', age: 30 },
    { name: 'Michael', age: 99 }
];

const UserSearchWithRef: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState('');
    const [user, setUser] = useState<{ name: string, age: number } | undefined>();

    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
        });

        setUser(foundUser);
    };

    return <div>
        <h3>User Search with ref</h3>
        <input ref={inputRef} type="text" value={name} onChange={e => setName(e.target.value)} />
        <button onClick={onClick}>Find User!</button>

        <div>
            <div>Name: {user && user.name}</div>
            <div>Age: {user && user.age}</div>
        </div>
    </div>
}

export default UserSearchWithRef;
