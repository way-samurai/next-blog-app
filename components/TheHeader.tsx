import Navigation from "./Navigation.tsx";

const navItems = [
    { label: "Home", href: "/"},
    { label: "Blog", href: "/blog"},
    { label: "About", href: "/about"}
];

const TheHeader = () => {
    return (
        <header className="container">
            <Navigation navLinks={navItems} />
        </header>
    )
};

export {TheHeader};