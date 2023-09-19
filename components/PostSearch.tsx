'use client';
import useSWR from "swr";
// import { usePosts } from "@/store";
import { FormEventHandler, SetStateAction, useState } from "react";
import { getPostsBySearch } from "@/services/getPosts";

const PostSearch = () => {
    const {mutate} = useSWR('posts');
    const [search, setSearch] = useState<string>('');
    // const getPostsBySearch = usePosts(state => state.getPostsBySearch);

    const handleSubmit: FormEventHandler<HTMLFormElement> | undefined = async (evt) => {
        evt.preventDefault();
        const posts = await getPostsBySearch(search);
        mutate(posts);
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
