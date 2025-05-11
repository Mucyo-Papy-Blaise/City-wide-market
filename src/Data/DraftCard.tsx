import image1 from '../assets/Exterior.webp'
import image2 from '../assets/Interior.jpg'
import image3 from '../assets/Front.jpg'
import image4 from '../assets/materials.jpg'
import image5 from '../assets/construction1.jpg'

interface DraftedProps{
    id: number,
    images: string[],
    type: string,
    title: string,
    bedRoom: string,
    subDescr: string, 
    price: Number,
    package: string[],
    description: string,
    keyFeatures: string[],

}

export const DraftedCards: DraftedProps[] = [
    {
        id:1,
        images: [image1,image2,image3, image5],
        type: "Modern",
        title: "Modern Minimalist Villa",
        bedRoom: "2 Bed Rooms",
        subDescr: "A sleek, minimalist design with open spaces and large windows.",
        price: 12000,
        package:["Complete architectural plans","3D renderings","Material specifications","Construction documents","Digital files (PDF, CAD"],
        description: "This Modern Minimalist Villa is designed for those who appreciate clean lines, open spaces, and a seamless connection with the outdoors. The design features large windows that flood the interior with natural light and provide panoramic views of the surrounding landscape. The floor plan is thoughtfully arranged to maximize space efficiency while maintaining an open, airy feel. The main living area combines the kitchen, dining, and living spaces into one cohesive zone, perfect for both everyday living and entertaining guests.The exterior showcases a harmonious blend of concrete, glass, and wood elements, creating a striking yet balanced aesthetic. The flat roof design not only contributes to the modern look but also provides space for a rooftop terrace or garden.",
        keyFeatures: ["3 Bedrooms", "Open Floor Plan","Home Office Space","2.5 Bathrooms","2-Car Garage","Floor-to-Ceiling Windows","Gourmet Kitchen with Island","Outdoor Living Area"]
    },
    {
        id: 2,
        images: [image4, image5],
        type: "Rustic",
        title: "Rustic Countryside Home",
        bedRoom: "1 Bed Rooms",
        subDescr: "A sleek, minimalist design with open spaces and large windows.",
        price: 10000,
        package:["Complete architectural plans","3D renderings","Material specifications","Construction documents","Digital files (PDF, CAD"],
        description: "This Modern Minimalist Villa is designed for those who appreciate clean lines, open spaces, and a seamless connection with the outdoors. The design features large windows that flood the interior with natural light and provide panoramic views of the surrounding landscape. The floor plan is thoughtfully arranged to maximize space efficiency while maintaining an open, airy feel. The main living area combines the kitchen, dining, and living spaces into one cohesive zone, perfect for both everyday living and entertaining guests.The exterior showcases a harmonious blend of concrete, glass, and wood elements, creating a striking yet balanced aesthetic. The flat roof design not only contributes to the modern look but also provides space for a rooftop terrace or garden.",
        keyFeatures: ["3 Bedrooms", "Open Floor Plan","Home Office Space","2.5 Bathrooms","2-Car Garage","Floor-to-Ceiling Windows","Gourmet Kitchen with Island","Outdoor Living Area"]
    },
    {
        id: 3,
        images: [image5, image1, image3],
        type: "Urban",
        title: "Urban Loft Design",
        bedRoom: "8 Bed Rooms",
        subDescr: "A sleek, minimalist design with open spaces and large windows.",
        price: 30000,
        package:["Complete architectural plans","3D renderings","Material specifications","Construction documents","Digital files (PDF, CAD"],
        description: "This Modern Minimalist Villa is designed for those who appreciate clean lines, open spaces, and a seamless connection with the outdoors. The design features large windows that flood the interior with natural light and provide panoramic views of the surrounding landscape. The floor plan is thoughtfully arranged to maximize space efficiency while maintaining an open, airy feel. The main living area combines the kitchen, dining, and living spaces into one cohesive zone, perfect for both everyday living and entertaining guests.The exterior showcases a harmonious blend of concrete, glass, and wood elements, creating a striking yet balanced aesthetic. The flat roof design not only contributes to the modern look but also provides space for a rooftop terrace or garden.",
        keyFeatures: ["3 Bedrooms", "Open Floor Plan","Home Office Space","2.5 Bathrooms","2-Car Garage","Floor-to-Ceiling Windows","Gourmet Kitchen with Island","Outdoor Living Area"]
    },
    {
        id: 4,
        images: [image4, image2, image3],
        type: "Mediterranean",
        title: "Mediterranean Villa",
        bedRoom: "3 Bed Rooms",
        subDescr: "A sleek, minimalist design with open spaces and large windows.",
        price: 50000,
        package: ["Complete architectural plans","3D renderings","Material specifications","Construction documents","Digital files (PDF, CAD"],
        description: "This Modern Minimalist Villa is designed for those who appreciate clean lines, open spaces, and a seamless connection with the outdoors. The design features large windows that flood the interior with natural light and provide panoramic views of the surrounding landscape. The floor plan is thoughtfully arranged to maximize space efficiency while maintaining an open, airy feel. The main living area combines the kitchen, dining, and living spaces into one cohesive zone, perfect for both everyday living and entertaining guests.The exterior showcases a harmonious blend of concrete, glass, and wood elements, creating a striking yet balanced aesthetic. The flat roof design not only contributes to the modern look but also provides space for a rooftop terrace or garden.",
        keyFeatures: ["3 Bedrooms", "Open Floor Plan","Home Office Space","2.5 Bathrooms","2-Car Garage","Floor-to-Ceiling Windows","Gourmet Kitchen with Island","Outdoor Living Area"]
    },
    {
        id: 5,
        images: [image3, image2, image5],
        type: "Modern",
        title: "Modern Minimalist Villa",
        bedRoom: "5 Bed Rooms",
        subDescr: "A sleek, minimalist design with open spaces and large windows.",
        price: 15000,
        package: ["Complete architectural plans","3D renderings","Material specifications","Construction documents","Digital files (PDF, CAD"],
        description: "This Modern Minimalist Villa is designed for those who appreciate clean lines, open spaces, and a seamless connection with the outdoors. The design features large windows that flood the interior with natural light and provide panoramic views of the surrounding landscape. The floor plan is thoughtfully arranged to maximize space efficiency while maintaining an open, airy feel. The main living area combines the kitchen, dining, and living spaces into one cohesive zone, perfect for both everyday living and entertaining guests.The exterior showcases a harmonious blend of concrete, glass, and wood elements, creating a striking yet balanced aesthetic. The flat roof design not only contributes to the modern look but also provides space for a rooftop terrace or garden.",
        keyFeatures: ["3 Bedrooms", "Open Floor Plan","Home Office Space","2.5 Bathrooms","2-Car Garage","Floor-to-Ceiling Windows","Gourmet Kitchen with Island","Outdoor Living Area"]
    },
]