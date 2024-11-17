"use client";
import Image from "next/image";

const Headline: React.FC = () => {
    return (
        <div className="w-screen bg-black">
            <div className="container mx-auto flex items-center px-4 h-32">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="px-4"><Image src="/images/versace.png" alt="Versace" width={100} height={100} /></th>
                            <th className="px-4"><Image src="/images/zara.png" alt="Zara" width={100} height={100} /></th>
                            <th className="px-4"><Image src="/images/gucci.png" alt="Gucci" width={100} height={100} /></th>
                            <th className="px-4"><Image src="/images/parada.png" alt="Prada" width={100} height={100} /></th>
                            <th className="px-4"><Image src="/images/calvinklein.png" alt="Calvin Klein" width={100} height={100} /></th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    );
};

export default Headline;
