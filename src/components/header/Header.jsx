export default function Header(second) {
    return (
        <header className="flex justify-between px-10 py-4 bg-white ">
            <section id="logo">
                {/* <Image src=""Header alt="logo" width={100} height={100} /> */}
                <h1>La Jabalina</h1>
            </section>
            <section id="rest" className="flex gap-[10rem]">
                <section id="nav" className="">
                    <nav className="">
                        <ul className="flex gap-10">
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Equipment</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                </section>
                <section id="language">ES/EN/CAT</section>
            </section>
        </header>
    );
}