import finished from '../assets/Finished House.jpg'
import structured from '../assets/arch house.jpg'
import materials from '../assets/materials.jpg'
import image1 from '../assets/Exterior.webp'
import image2 from '../assets/Interior.jpg'
import image3 from '../assets/Front.jpg'
import image4 from '../assets/materials.jpg'
import image5 from '../assets/construction1.jpg'
import image6 from '../assets/construction2.jpg'
import image7 from '../assets/Finished House.jpg'
import image8 from '../assets/arch house.jpg'


interface CardDetailsProps{
    id: number,
    images: string[],
    type: string,
    title: string,
    bedRoom: string,
    subDescr: string, 
    price: string,
    package: string[],
    description: string,
    keyFeatures: string[],

}

export const CardDetails = [
    {
        name: "Our Finished Product",
        projects: 20,
        photo: finished
    },
    {
        name: "Masterpiece Structures",
        projects: 100,
        photo: structured
    },
    {
        name: "Building Materials",
        projects: 20,
        photo: materials
    },
]

export const Choose = [
    {
        title:"Quality Assurance",
        description: "We partner only with trusted suppliers and manufacturers who meet our rigorous quality standards. Every building material in our inventory undergoes thorough inspection to ensure durability and performance"
    },
    {
        title:"Competitive Pricing",
        description: "By maintaining direct relationships with manufacturers and leveraging our citywide network, we offer competitive prices without compromising on quality. Our price match guarantee ensures you always get the best value "
    },
    {
        title:"Quality Assurance",
        description: "Our team consists of industry professionals with decades of combined experience in construction and building materials. Whether you're a professional contractor our knowledgeable staff provides personalized advice to help you select the right materials for your project. "
    },
]

export const footerLinks = [
    {
        title: "Quick Links",
        links: ["Architecture Design","Our Projects","Building Materials","Contact Us"]
        
    },
    {
        title: "Services",
        links: ["Architecture Design","Construction Service","Consultation","Interior Design"]
        
    },
    {
        title: "Contact",
        links: ["123 Architecture","Building City, AC 12345","Email: info@acmearchitecture.com","+250 780 250 987"]
        
    },
]

export const DesignCards: CardDetailsProps[] = [
    {
        id:1,
        images: [image1,image2,image3],
        type: "Modern",
        title: "Modern Minimalist Villa",
        bedRoom: "2 Bed Rooms",
        subDescr: "A sleek, minimalist design with open spaces and large windows.",
        price: "12,000 FRW",
        package:["Complete architectural plans","3D renderings","Material specifications","Construction documents","Digital files (PDF, CAD"],
        description: "This Modern Minimalist Villa is designed for those who appreciate clean lines, open spaces, and a seamless connection with the outdoors. The design features large windows that flood the interior with natural light and provide panoramic views of the surrounding landscape. The floor plan is thoughtfully arranged to maximize space efficiency while maintaining an open, airy feel. The main living area combines the kitchen, dining, and living spaces into one cohesive zone, perfect for both everyday living and entertaining guests.The exterior showcases a harmonious blend of concrete, glass, and wood elements, creating a striking yet balanced aesthetic. The flat roof design not only contributes to the modern look but also provides space for a rooftop terrace or garden.",
        keyFeatures: ["3 Bedrooms", "Open Floor Plan","Home Office Space","2.5 Bathrooms","2-Car Garage","Floor-to-Ceiling Windows","Gourmet Kitchen with Island","Outdoor Living Area"]
    },
    {
        id: 2,
        images: [image4, image5, image6],
        type: "Rustic",
        title: "Rustic Countryside Home",
        bedRoom: "1 Bed Rooms",
        subDescr: "A sleek, minimalist design with open spaces and large windows.",
        price: "12,000 FRW",
        package:["Complete architectural plans","3D renderings","Material specifications","Construction documents","Digital files (PDF, CAD"],
        description: "This Modern Minimalist Villa is designed for those who appreciate clean lines, open spaces, and a seamless connection with the outdoors. The design features large windows that flood the interior with natural light and provide panoramic views of the surrounding landscape. The floor plan is thoughtfully arranged to maximize space efficiency while maintaining an open, airy feel. The main living area combines the kitchen, dining, and living spaces into one cohesive zone, perfect for both everyday living and entertaining guests.The exterior showcases a harmonious blend of concrete, glass, and wood elements, creating a striking yet balanced aesthetic. The flat roof design not only contributes to the modern look but also provides space for a rooftop terrace or garden.",
        keyFeatures: ["3 Bedrooms", "Open Floor Plan","Home Office Space","2.5 Bathrooms","2-Car Garage","Floor-to-Ceiling Windows","Gourmet Kitchen with Island","Outdoor Living Area"]
    },
    {
        id: 3,
        images: [image6, image7, image8],
        type: "Urban",
        title: "Urban Loft Design",
        bedRoom: "8 Bed Rooms",
        subDescr: "A sleek, minimalist design with open spaces and large windows.",
        price: "12,000 FRW",
        package:["Complete architectural plans","3D renderings","Material specifications","Construction documents","Digital files (PDF, CAD"],
        description: "This Modern Minimalist Villa is designed for those who appreciate clean lines, open spaces, and a seamless connection with the outdoors. The design features large windows that flood the interior with natural light and provide panoramic views of the surrounding landscape. The floor plan is thoughtfully arranged to maximize space efficiency while maintaining an open, airy feel. The main living area combines the kitchen, dining, and living spaces into one cohesive zone, perfect for both everyday living and entertaining guests.The exterior showcases a harmonious blend of concrete, glass, and wood elements, creating a striking yet balanced aesthetic. The flat roof design not only contributes to the modern look but also provides space for a rooftop terrace or garden.",
        keyFeatures: ["3 Bedrooms", "Open Floor Plan","Home Office Space","2.5 Bathrooms","2-Car Garage","Floor-to-Ceiling Windows","Gourmet Kitchen with Island","Outdoor Living Area"]
    },
    {
        id: 4,
        images: [image4, image8, image3],
        type: "Mediterranean",
        title: "Mediterranean Villa",
        bedRoom: "3 Bed Rooms",
        subDescr: "A sleek, minimalist design with open spaces and large windows.",
        price: "12,000 FRW",
        package: ["Complete architectural plans","3D renderings","Material specifications","Construction documents","Digital files (PDF, CAD"],
        description: "This Modern Minimalist Villa is designed for those who appreciate clean lines, open spaces, and a seamless connection with the outdoors. The design features large windows that flood the interior with natural light and provide panoramic views of the surrounding landscape. The floor plan is thoughtfully arranged to maximize space efficiency while maintaining an open, airy feel. The main living area combines the kitchen, dining, and living spaces into one cohesive zone, perfect for both everyday living and entertaining guests.The exterior showcases a harmonious blend of concrete, glass, and wood elements, creating a striking yet balanced aesthetic. The flat roof design not only contributes to the modern look but also provides space for a rooftop terrace or garden.",
        keyFeatures: ["3 Bedrooms", "Open Floor Plan","Home Office Space","2.5 Bathrooms","2-Car Garage","Floor-to-Ceiling Windows","Gourmet Kitchen with Island","Outdoor Living Area"]
    },
    {
        id: 5,
        images: [image6, image2, image7],
        type: "Modern",
        title: "Modern Minimalist Villa",
        bedRoom: "5 Bed Rooms",
        subDescr: "A sleek, minimalist design with open spaces and large windows.",
        price: "12,000 FRW",
        package: ["Complete architectural plans","3D renderings","Material specifications","Construction documents","Digital files (PDF, CAD"],
        description: "This Modern Minimalist Villa is designed for those who appreciate clean lines, open spaces, and a seamless connection with the outdoors. The design features large windows that flood the interior with natural light and provide panoramic views of the surrounding landscape. The floor plan is thoughtfully arranged to maximize space efficiency while maintaining an open, airy feel. The main living area combines the kitchen, dining, and living spaces into one cohesive zone, perfect for both everyday living and entertaining guests.The exterior showcases a harmonious blend of concrete, glass, and wood elements, creating a striking yet balanced aesthetic. The flat roof design not only contributes to the modern look but also provides space for a rooftop terrace or garden.",
        keyFeatures: ["3 Bedrooms", "Open Floor Plan","Home Office Space","2.5 Bathrooms","2-Car Garage","Floor-to-Ceiling Windows","Gourmet Kitchen with Island","Outdoor Living Area"]
    },
    {
        id: 6,
        images: [image8, image1, image4],
        type: "Rustic",
        title: "Rustic Countryside Home",
        bedRoom: "7 Bed Rooms",
        subDescr: "A sleek, minimalist design with open spaces and large windows.",
        price: "12,000 FRW",
        package: ["Complete architectural plans","3D renderings","Material specifications","Construction documents","Digital files (PDF, CAD"],
        description: "This Modern Minimalist Villa is designed for those who appreciate clean lines, open spaces, and a seamless connection with the outdoors. The design features large windows that flood the interior with natural light and provide panoramic views of the surrounding landscape. The floor plan is thoughtfully arranged to maximize space efficiency while maintaining an open, airy feel. The main living area combines the kitchen, dining, and living spaces into one cohesive zone, perfect for both everyday living and entertaining guests.The exterior showcases a harmonious blend of concrete, glass, and wood elements, creating a striking yet balanced aesthetic. The flat roof design not only contributes to the modern look but also provides space for a rooftop terrace or garden.",
        keyFeatures: ["3 Bedrooms", "Open Floor Plan","Home Office Space","2.5 Bathrooms","2-Car Garage","Floor-to-Ceiling Windows","Gourmet Kitchen with Island","Outdoor Living Area"]
    },
    {
        id: 7,
        images: [image5, image4, image6],
        type: "Modern",
        title: "Modern Minimalist Villa",
        bedRoom: "2 Bed Rooms",
        subDescr: "A sleek, minimalist design with open spaces and large windows.",
        price: "12,000 FRW",
        package: ["Complete architectural plans","3D renderings","Material specifications","Construction documents","Digital files (PDF, CAD"],
        description: 'his Modern Minimalist Villa is designed for those who appreciate clean lines, open spaces, and a seamless connection with the outdoors. The design features large windows that flood the interior with natural light and provide panoramic views of the surrounding landscape. The floor plan is thoughtfully arranged to maximize space efficiency while maintaining an open, airy feel. The main living area combines the kitchen, dining, and living spaces into one cohesive zone, perfect for both everyday living and entertaining guests.The exterior showcases a harmonious blend of concrete, glass, and wood elements, creating a striking yet balanced aesthetic. The flat roof design not only contributes to the modern look but also provides space for a rooftop terrace or garden.',
        keyFeatures: ["3 Bedrooms", "Open Floor Plan","Home Office Space","2.5 Bathrooms","2-Car Garage","Floor-to-Ceiling Windows","Gourmet Kitchen with Island","Outdoor Living Area"]
    },
    {
        id: 8,
        images: [image1, image2, image3],
        type: "Modern",
        title: "Modern Minimalist Villa",
        bedRoom: "4 Bed Rooms",
        subDescr: "A sleek, minimalist design with open spaces and large windows.",
        price: "12,000 FRW",
        package: ["Complete architectural plans","3D renderings","Material specifications","Construction documents","Digital files (PDF, CAD"],
        description: 'his Modern Minimalist Villa is designed for those who appreciate clean lines, open spaces, and a seamless connection with the outdoors. The design features large windows that flood the interior with natural light and provide panoramic views of the surrounding landscape. The floor plan is thoughtfully arranged to maximize space efficiency while maintaining an open, airy feel. The main living area combines the kitchen, dining, and living spaces into one cohesive zone, perfect for both everyday living and entertaining guests.The exterior showcases a harmonious blend of concrete, glass, and wood elements, creating a striking yet balanced aesthetic. The flat roof design not only contributes to the modern look but also provides space for a rooftop terrace or garden.',
        keyFeatures: ["3 Bedrooms", "Open Floor Plan","Home Office Space","2.5 Bathrooms","2-Car Garage","Floor-to-Ceiling Windows","Gourmet Kitchen with Island","Outdoor Living Area"]
    },
    {
        id: 9,
        images: [image4, image5, image6],
        type: "Mediterranean",
        title: "Mediterranean Villa",
        bedRoom: "3 Bed Room",
        subDescr: "A sleek, minimalist design with open spaces and large windows.",
        price: "12,000 FRW",
        package: ["Complete architectural plans","3D renderings","Material specifications","Construction documents","Digital files (PDF, CAD"],
        description: 'his Modern Minimalist Villa is designed for those who appreciate clean lines, open spaces, and a seamless connection with the outdoors. The design features large windows that flood the interior with natural light and provide panoramic views of the surrounding landscape. The floor plan is thoughtfully arranged to maximize space efficiency while maintaining an open, airy feel. The main living area combines the kitchen, dining, and living spaces into one cohesive zone, perfect for both everyday living and entertaining guests.The exterior showcases a harmonious blend of concrete, glass, and wood elements, creating a striking yet balanced aesthetic. The flat roof design not only contributes to the modern look but also provides space for a rooftop terrace or garden.',
        keyFeatures: ["3 Bedrooms", "Open Floor Plan","Home Office Space","2.5 Bathrooms","2-Car Garage","Floor-to-Ceiling Windows","Gourmet Kitchen with Island","Outdoor Living Area"]
    },
]