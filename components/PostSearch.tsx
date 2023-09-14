'use client';

import { getPostsBySearch } from "@/services/getPosts";
import { Dispatch, FormEventHandler, SetStateAction, useState } from "react";

type Props = {
    onSearch: (value: SetStateAction<any[]>) => void;
}

const PostSearch = ({ onSearch }: Props) => {
    const [search, setSearch] = useState<string>('');
    const handleSubmit: FormEventHandler<HTMLFormElement> | undefined = async (evt) => {
            evt.preventDefault();
            const posts = await getPostsBySearch(search);
            onSearch(posts);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="search" 
                placeholder="search" 
                value={search} 
                onChange={evt => setSearch(evt.target.value)}>
            </input>
            <button type="submit">Search</button>
        </form>
    )
}

export default PostSearch;
