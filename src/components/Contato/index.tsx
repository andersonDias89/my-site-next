import { FormContact } from "./FormContact";

export function Contact() {
    return (
        <div className="w-full h-[calc(100vh-64px)] flex items-center justify-center flex-wrap degrade">
            <div className="container flex justify-center items-center">
                <div className="w-1/2">
                    
                </div>
                <div className="w-1/2">
                    <FormContact />
                </div>
            </div>
        </div>
    )
}