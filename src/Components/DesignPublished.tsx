import { DesignCards } from "../Data/Data"

const Published = () => {
  const getCardImage = (card: { images: string | string[]; }) => {
    if (!Array.isArray(card.images) || card.images.length === 0) return "";
    if (typeof card.images[0] === "string") return card.images[0];
    return Object.values(card.images[0])[1] as string;
  };

  return (
    <div className="w-full border-2 border-lightGray/40 flex flex-col p-5 mt-5 rounded">
      <div className="flex flex-col gap-10 overflow-y-auto">
        {DesignCards.map((DesignCard)=>
        <div
        key={DesignCard.id}
        className="flex flex-row gap-4 items-center"
        >
          <div className="w-20 h-20 overflow-hidden rounded shadow">
            <img src={getCardImage(DesignCard)} alt={DesignCard.title} className="w-full h-full object-cover"/>
          </div>
          <div className="flex flex-col gap-1"> 
            <div className="flex flex-row justify-between">
              <h1 className="font-bold">{DesignCard.title}</h1>
              <p className="bg-teal text-white font-semibold p-1 rounded-full w-fit text-[10px]">Published</p>
            </div>
            <p className="text-lightGray text-sm">{DesignCard.subDescr}</p>
            <p className="font-bold">{DesignCard.price.toLocaleString()} Frw</p>
          </div>
           <div className="h-16 w-[2px] bg-lightGray rounded-lg"/>
           <p className="font-bold text-lightGray text-sm">Added on {new Date().toLocaleDateString()}</p>
           <div className="h-16 w-[2px] bg-lightGray rounded-lg"/>
           <button className="border-2 border-lightGray/40 p-1 rounded w-32 flex text-center justify-center font-bold">
            Edit
           </button>
        </div>
        )}
      </div>
    </div>
  )
}

export default Published
