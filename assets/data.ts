
import { StaticImageData } from "next/image"
import { customer1, customer2, customer3 } from "."
export interface dataType {
    id: number,
    title: String,
    text: String
}
export type dataTypeProps = dataType[]

const data: dataTypeProps = [
    {
        id: 1,
        title: "Sign Up",
        text: "Create a new Nibbl workspace in just a few moments. It’s free to try for teams of any size."
    },
    {
        id: 2,
        title: "Invite Your Coworkers",
        text: "Nibbl is better together (no, really, it’s a bit underwhelming by yourself), and it’s easy to invite your team."
    },
    {
        id: 3,
        title: "Try It Out",
        text: "Run a project, coordinate with your team, or just talk it out. Nibbl is a blank canvas for teamwork."
    },
]


export  interface customerType{
    id: number,
    image: StaticImageData,
    title: String,
    subtitle: String
}
export  type customerTypeProps = customerType[]
const customerData: customerTypeProps = [
    {
        id: 1,
        image: customer1,
        title: "What is Nibbl?",
        subtitle: "Watch Now"
    },
    {
        id: 2,
        image: customer2,
        title: "Our real customers",
        subtitle: "Read Stories"
    },
    {
        id: 3,
        image: customer3,
        title: "Get on the move",
        subtitle: "Learn How"
    }

]
export {
    data,
    customerData
}