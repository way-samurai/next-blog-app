import { getAllPosts, getPostsBySearch } from "@/services/getPosts";
import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";

type UsePosts = {
    posts: any[];
    loading: boolean;
    getAllPosts: () => Promise<void>;
    getPostsBySearch: (value: string) => Promise<void>;
}

export const usePosts = createWithEqualityFn<UsePosts>()((setState) => ({
    posts: [],
    loading: false,
    getAllPosts: async () => {
        setState((state) => ({...state, loading: true }));
        const posts = await getAllPosts();
        setState((state) => ({...state, posts, loading: false }));
    },
    getPostsBySearch: async (value) => {
        setState((state) => ({...state, loading: true }));
        const posts = await getPostsBySearch(value);
        setState((state) => ({...state, posts, loading: false }));
    }
}), shallow);