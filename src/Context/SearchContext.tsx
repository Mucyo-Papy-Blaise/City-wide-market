import {createContext, useState,ReactNode} from 'react'
import { CardDetails,ServiceDetails,DesignCards,Choose } from '../Data/Data'

interface SearchContextProps {
    searchQuery: string,
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>,
    globalContent: string[];
    setGlobalContent: React.Dispatch<React.SetStateAction<string[]>>
    allData: {
        services: typeof ServiceDetails,
        homeCards: typeof CardDetails,
        cards: typeof DesignCards,
        questions: typeof Choose,
    }
}

export const SearchContext = createContext<SearchContextProps>({
    searchQuery: '',
    setSearchQuery: () => { },
    globalContent: [],
    setGlobalContent: () => { },
    allData: {
        services: [],
        homeCards: [],
        cards: [],
        questions: []
    }
})

export const SearchProvider = ({children}: {children: ReactNode}) =>{
    const [searchQuery,setSearchQuery]=  useState('');
    const [globalContent, setGlobalContent] = useState<string []>([])
    const allData  = {
        services: ServiceDetails,
        homeCards: CardDetails,
        cards: DesignCards,
        questions: Choose
    }

    return(
        <SearchContext.Provider value={{ searchQuery, setSearchQuery, globalContent, setGlobalContent,allData }}>
        {children}
      </SearchContext.Provider>
    )
}