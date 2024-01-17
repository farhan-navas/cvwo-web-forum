import Container from "./ui/container"
import { ModeToggle } from "./mode-toggle"

const header = () => {
    return (
        <header className="sm:flex sm:justify-between py-3 px-4 border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center
                justify-between w-full">
                    <div className="flex items-center">
                        LOGO
                    </div>
                    <div className="flex items-center">
                        <div className="flex p-4">
                            About Us
                        </div>
                        <div className="flex p-4">
                            Services
                        </div>
                        <div className="flex p-4">
                            Contact Us
                        </div>
                    </div>
                    <div className="flex items-center">
                        <ModeToggle/>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default header