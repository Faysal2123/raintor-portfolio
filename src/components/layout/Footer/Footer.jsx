import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white px-6 py-12">
            <div className="max-w-6xl mx-auto">

                <div className="flex  justify-between">
                        <h2 className="text-3xl font-bold tracking-tight">DEVLOP.ME</h2>
                        <div className="space-y-1 text-gray-300">
                            <p>As you can Say hello</p>
                         
                         
                        </div>
                    </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Column 1 - Brand */}
                    

                    {/* Column 2 - Menu */}
                    <div>
                        <h3 className="text-lg font-medium uppercase tracking-wider mb-4">Menu</h3>
                        <ul className="space-y-3">
                            <li className="uppercase">HOME</li>
                            <li className="uppercase">ABOUT</li>
                            <li className="uppercase">PORTFOLIO</li>
                            <li className="uppercase">BLOG</li>
                        </ul>
                    </div>

                    {/* Column 3 - Social */}
                    <div>
                        <h3 className="text-lg font-medium uppercase tracking-wider mb-4">Social</h3>
                        <ul className="space-y-3">
                            <li className="uppercase">TWITTER</li>
                            <li className="uppercase">INSTAGRAM</li>
                            <li className="uppercase">FACEBOOK</li>
                            <li className="uppercase">BEHANCE</li>
                            <li className="uppercase">DRIBBBLE</li>
                            <li className="uppercase">BESNIK</li>
                        </ul>
                    </div>

                    {/* Column 4 - Contact */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium uppercase tracking-wider">Say hello</h3>
                        <div className="space-y-2">
                            <p className="text-gray-300">HELLO@DEVLOP.ME.COM</p>
                            <p className="text-gray-300">MAHBUBU.@ME.COM</p>
                            <p className="text-gray-300">+784548 4981 00</p>
                            <p className="text-gray-300">+8845 0100 211</p>
                        </div>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">devlop.me 2022</p>
                    <p className="text-gray-500 text-sm">PRIVACY-TERMS</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;