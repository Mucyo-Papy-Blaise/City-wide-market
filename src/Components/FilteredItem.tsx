import { useContext} from "react";
import { SearchContext } from "../Context/SearchContext.tsx";
import highlightText from '../Data/highlightedText.tsx'

const FilteredItem = () => {
    const {searchQuery} = useContext(SearchContext)
    const {allData} =  useContext(SearchContext)

    const filteredService = allData.services.filter((service)=>
        service.title.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
        service.subTitle.toLowerCase().includes(searchQuery.trim().toLowerCase())
      )
    
      const filteredHomeCards =  allData.homeCards.filter((card) =>
        card.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
      )
    
      const filteredCards = allData.cards.filter((card)=>
        card.bedRoom.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
        card.title.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
        card.subDescr.toLowerCase().includes(searchQuery.trim().toLowerCase())
      )
    
  return (
    <div>
      {searchQuery && (filteredService.length > 0 || filteredHomeCards.length > 0 || filteredCards.length > 0) && (
           <div className="fixed bg-slate-200 border-teal p-3 max-h-[500px] top-[70px] rounded mb-5 w-[700px] right-10 z-50 overflow-y-auto shadow-xl">
              <h2 className="text-charcoal font-bold mb-2 text-[16px]">Quick Results:</h2>
              {filteredService.length > 0 && (
                <div className="flex flex-col gap-2 text-sm">
                  <h3 className="text-terracotta font-semibold text-lg mb-2">SERVICE</h3>
                  {filteredService.map((service, id) => (
                   <div
                   key={id}
                   className="flex flex-col gap-2 rounded cursor-pointer"
                   >
                    <h1 className="text-black bg-slate-300 w-fit p-2 rounded-2xl font-semibold cursor-pointer"
                    onClick={()=> {
                      const el = document.getElementById(service.title.replace(/\s+/g, '-').toLowerCase());
                      if(el){
                        el.scrollIntoView({ behavior: 'smooth' });
                      }
                     }}
                    >{highlightText(service.title, searchQuery)}</h1>
                    <p className="text-lightGray text-sm">{highlightText(service.subTitle,searchQuery)}</p>
                    <div className="bg-[#bcbcbc] h-[1px] w-full mb-3" />
                   </div>
                  ))}
                </div>
              )}

              {filteredHomeCards.length > 0 && (
                <div className="mt-3">
                <h3 className="text-terracotta font-semibold text-lg mb-2">PROJECTS</h3>
                  {filteredHomeCards.map((card, id) => (
                    <div
                    key={id}
                    className="flex flex-col gap-2 p-2 rounded cursor-pointer"
                    >
                     <h1 className="text-black bg-slate-300 w-fit p-2 rounded-2xl font-semibold cursor-pointer">{highlightText(card.name, searchQuery)}</h1>
                     <div className="bg-[#bcbcbc] h-[1px] w-full mb-3" />
                    </div>
                  ))}
              </div>
              )}

              {filteredCards.length > 0 && (
                <div className="mt-3">
                  <h3 className="text-terracotta font-semibold text-lg mb-2">ARCHITECTURE</h3>
                  {filteredCards.map((card,id)=>
                    <div
                     key={id}
                     className="flex flex-col gap-2 hover:bg-slate-400 p-2 rounded cursor-pointer"
                    >
                      <div className="flex flex-col">
                        <div className="flex flex-row items-center">
                          <h1 className="text-black w-fit p-2 rounded-2xl font-semibold cursor-pointer">
                          {highlightText(card.title, searchQuery)}</h1>
                          <h1 className="text-terracotta">{highlightText(card.bedRoom, searchQuery)}</h1>
                        </div>
                        <p>{highlightText(card.subDescr, searchQuery)}</p>
                        <div className="bg-[#bcbcbc] h-[1px] w-full mb-3" />
                      </div>
                      </div>
                  )}
                </div>
              )}
            </div>
        )}

        {filteredService.length === 0 && filteredCards.length ===0 && filteredHomeCards.length === 0 && (
          <div className="absolute bg-slate-200 border-teal top[70px] p-3 rounded mb-5 w-full px-4 md:px-8 lg:px-32 mx-auto z-50 shadow-xl">
            <p className="text-center">No Result Found For: <span className="bg-teal text-white font-bold p-1 rounded">{searchQuery}</span></p>
          </div>
        )}
    </div>
  )
}

export default FilteredItem
