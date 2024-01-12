import { createContext } from "react";

const DataContext = createContext({
    quesList: 
    [
        { name: "ques1", desc: "i am ques 1", sol: "i am ques1's sol" },
        { name: "ques2", desc: "i am ques 2", sol: "i am ques2's sol" }, 
    ]
});

export default DataContext;