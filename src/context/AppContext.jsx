import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

// context creation
export function AppContextProvider({children}) {

    const[loading, setLoading] = useState(false)
    const[posts, setPosts] = useState([])
    const[page, setPage] = useState(1);
    const[totalPages, setTotalPages] =useState(null);
    const navigate = useNavigate()
    
// data filling

 async function fetchBlogData(page =1, tag=null, category ) {
    setLoading(true);
 let url = `${baseUrl}?page=${page}`;
 if(tag){
 url += `&tag=${tag}`;
 }
 if(category){
    url += `&category=${category}`
 }
 try {
    const result = await fetch(url);
    const output = await result.json();
    if(!output.posts || output.posts.length===0)
    throw new Error("something went wrong")
    console.log(output);
    setPage(output.page);
    setPosts(output.posts);
    setTotalPages(output.totalPages);

    
 } catch (error) {
    console.log("Error in fetching Blogs", error);
    setPage(1);
    setPosts([]);
    setTotalPages(null)
    
 }
 setLoading(false);

 }

 function pageChangeHandel(page) {
   navigate( {search: `?page=${page}` })
    setPage(page);
    

 }



    const value = {
      posts,
      setPosts,
      page,
      setPage,
      loading,
      setLoading,
      totalPages,
      setTotalPages,
      fetchBlogData,
      pageChangeHandel
    }

    //context providing process

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}