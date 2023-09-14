'use client';

import { useState } from "react";

const PostSearch = () => {
    const [search, setSearch] = useState<string>('');
    
    return (
        <form>
            <input type="search" placeholder="search" value={search} onChange={evt => setSearch(evt.target.value)}>
        </form>
    )
}
