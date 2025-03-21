import React, { useState } from 'react';
import {
    Menu,
    X,
    ChevronDown,
    ChevronUp,
    Home,
    Building,
    KeyRound,
    Info,
    Phone,
    Search,
    LogIn,
} from 'lucide-react';
import cn from 'classnames'; // Changed to default import
 

interface NavItem {
    label: string;
    href?: string;
    children?: NavItem[];
}

//  Simplified Button and Input components.  Use your own components.
const Button = ({ variant, size, className, children, onClick, ...props }: any) => {
    let baseClass = 'px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50';
    if (variant === 'outline') {
        baseClass += ' border border-blue-500 text-blue-600 hover:bg-blue-50';
    } else if (variant === 'ghost') {
        baseClass += ' hover:bg-gray-100';
    } else {
        baseClass += ' bg-blue-600 text-white hover:bg-blue-700';
    }
    if (size === 'icon') {
        baseClass = 'rounded-full p-2';
    }

    return (
        <button className={cn(baseClass, className)} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

const Input = ({ type, placeholder, className, value, onFocus, onBlur, onChange, ...props }: any) => {
    const baseClass = "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={cn(baseClass, className)}
            value={value}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
            {...props}
        />
    );
};

// Mock Sheet and related components.  Use your actual components.
const Sheet = ({ open, onOpenChange, children }: any) => open ? <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000 }}>{children}</div> : null;
const SheetTrigger = ({ asChild, children }: any) => asChild ? children : <div>{children}</div>;
const SheetContent = ({ side, className, children }: any) => {
    const baseClass = `bg-white w-full sm:w-[300px] absolute top-0 h-full z-1001 ${side === 'left' ? 'left-0' : 'right-0'}`;
    return <div className={cn(baseClass, className)}>{children}</div>
};
const SheetHeader = ({ children }: any) => <div>{children}</div>;
const SheetTitle = ({ children }: any) => <h2 className="text-lg font-semibold">{children}</h2>;
const SheetDescription = ({ children }: any) => <p className="text-sm text-gray-500">{children}</p>;


const navItems: NavItem[] = [
    {
        label: 'Home',
        href: '/',
        icon: Home,
    },
    {
        label: 'Properties',
        href: '/properties',
        icon: Building,
    },
    {
        label: 'Services',
        children: [
            { label: 'Buy', href: '/services/buy', icon: KeyRound },
            { label: 'Rent', href: '/services/rent', icon: KeyRound },
            { label: 'Sell', href: '/services/sell', icon: KeyRound },
        ],
        icon: KeyRound,
    },
    {
        label: 'About Us',
        href: '/about',
        icon: Info,
    },
    {
        label: 'Contact',
        href: '/contact',
        icon: Phone,
    },
];

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleDropdown = (label: string) => {
        setOpenDropdown(openDropdown === label ? null : label);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleSearchToggle = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const renderNavItem = (item: NavItem) => {
        const Icon = item.icon || null;

        if (item.children) {
            return (
                <div key={item.label} className="relative group">
                    <button
                        onClick={() => toggleDropdown(item.label)}
                        className={cn(
                            "flex items-center gap-2 text-sm font-medium",
                            "px-4 py-2 hover:text-blue-600 transition-colors",
                            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",
                            "md:px-0 md:py-0"
                        )}
                    >
                        {Icon && <Icon className="w-4 h-4" />}
                        {item.label}
                        {openDropdown === item.label ? (
                            <ChevronUp className="w-4 h-4" />
                        ) : (
                            <ChevronDown className="w-4 h-4" />
                        )}
                    </button>
                    {openDropdown === item.label && (
                        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                            {item.children.map((child) => renderNavItem(child))}
                        </div>
                    )}
                    <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 hidden md:block">
                        {item.children.map((child) => (
                            <a
                                key={child.label}
                                href={child.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 flex items-center gap-2"
                            >
                                {child.icon && <child.icon className="w-4 h-4" />}
                                {child.label}
                            </a>
                        ))}
                    </div>
                </div>
            );
        }

        return (
            <a
                key={item.label}
                href={item.href}
                onClick={closeMobileMenu}
                className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors flex items-center gap-2"
            >
                {Icon && <Icon className="w-4 h-4" />}
                {item.label}
            </a>
        );
    };

    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-md">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <a href="/" className="text-xl font-bold text-blue-600">
                    My Real Estate
                </a>

                <div className="flex-1 max-w-md mx-4 hidden md:block">
                    <div className="relative">
                        <Input
                            type="text"
                            placeholder="Search properties..."
                            className={cn(
                                "pr-10",
                                isSearchOpen ? "w-full" : "w-64 transition-all duration-300"
                            )}
                            onFocus={() => setIsSearchOpen(true)}
                            onBlur={() => {
                                setTimeout(() => setIsSearchOpen(false), 200);
                            }}

                        />
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
                            onClick={handleSearchToggle}
                        >
                            <Search className="h-5 w-5" />
                        </Button>
                    </div>
                </div>

                <nav className="hidden md:flex items-center gap-4">
                    {navItems.map((item) => renderNavItem(item))}
                    <Button variant="outline" className="text-blue-600 hover:bg-blue-50">
                        <LogIn className='mr-1 w-4 h-4' />
                        Login
                    </Button>
                    <Button className="bg-blue-600 text-white hover:bg-blue-700">
                        Sign Up
                    </Button>
                </nav>

                <div className="md:hidden">
                    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                {isMobileMenuOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-full sm:w-[300px]">
                            <SheetHeader>
                                <SheetTitle>Menu</SheetTitle>
                                <SheetDescription>
                                    <a href="/" className="text-xl font-bold text-blue-600 block py-4">
                                        My Real Estate
                                    </a>
                                </SheetDescription>
                            </SheetHeader>
                            <div className="mb-4">
                                <Input type="text" placeholder="Search properties..." />
                            </div>
                            <nav className="flex flex-col">
                                {navItems.map((item) => renderNavItem(item))}
                                <Button variant="outline" className="mt-2 text-blue-600 hover:bg-blue-50 justify-start">
                                    <LogIn className='mr-1 w-4 h-4' />
                                    Login
                                </Button>
                                <Button className="mt-2 bg-blue-600 text-white hover:bg-blue-700 justify-start">
                                    Sign Up
                                </Button>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Header;

