import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./nav"

const Header = () => {
    return <header className="py-8 xl:py:12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/">
                <h1 className="text-4xl font-semibold">Ricardo<span className="text-accent">.</span></h1>
            </Link>

            {/* desktop nav */}
            <div className="hidden xl:flex items-center gap-8">
                <Nav/>
                <Link href="/contact">
                    <Button>Contact me</Button>
                </Link>
            </div>

            {/* mobile nav */}
            <div className="xl:hidden">
                <Nav/>
                <Link href="/contact">
                    <Button>CMobile</Button>
                </Link>
            </div>
        </div>
    </header>;
};

export default Header