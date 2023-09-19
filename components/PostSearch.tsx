'use client';
import { usePosts } from "@/store";
import { FormEventHandler, SetStateAction, useState } from "react";

const PostSearch = () => {
    const [search, setSearch] = useState<string>('');
    const getPostsBySearch = usePosts(state => state.getPostsBySearch);

    const handleSubmit: FormEventHandler<HTMLFormElement> | undefined = async (evt) => {
        evt.preventDefault();
        await getPostsBySearch(search);
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
