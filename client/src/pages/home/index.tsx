import { Card } from "@/components/ui/card";
import { useQuery } from '@tanstack/react-query';
import { getListingQueryFn, getProducts } from '@/lib/api';
import { Link } from 'react-router-dom';
import { PROTECTED_ROUTES } from '@/routes/routes';
import { Skeleton } from "@/components/ui/skeleton";
import bannerImage from '@/assets/banner.png';
import { ENV } from "@/lib/env";

const HomePage = () => {
    const isLoading = false;
    const listings = [] as any;


    const catalogProducts: { _id: string; name: string; displayUrl: string }[] = [
        {
            _id: "1",
            name: "Classic Tee",
            displayUrl: "https://placehold.co/400x480/f3f4f6/9ca3af?text=Classic+T-Shirt",
        },
        {
            _id: "2",
            name: "Hoodie",
            displayUrl: "https://placehold.co/400x480/f3f4f6/9ca3af?text=Hoodie",
        },
        {
            _id: "3",
            name: "Women's Tee",
            displayUrl: "https://placehold.co/400x480/f3f4f6/9ca3af?text=Women's+Tee",
        },
    ];

    const featuredProducts = [
        { _id: "feat1", name: "T-Shirt", body: "100% Cotton", displayUrl: "https://placehold.co/300x300/f3f4f6/9ca3af?text=T-Shirt" },
        { _id: "feat2", name: "Hoodie", body: "80% Cotton, 20% Polyester", displayUrl: "https://placehold.co/300x300/f3f4f6/9ca3af?text=Hoodie" },
        { _id: "feat3", name: "Big Bear tee", body: "100% Cotton", displayUrl: "https://placehold.co/300x300/f3f4f6/9ca3af?text=Tshirts" },
        { _id: "feat4", name: "Cave man Hoodie", body: "80% Cotton, 20% Polyester", displayUrl: "https://placehold.co/300x300/f3f4f6/9ca3af?text=Man+Hoodie" },
    ];

    const isLoadingListings = false

    return (
        <div className="min-h-screen w-full">
            <div className="max-w-6xl w-full mx-auto space-y-5 pb-10 px-3 xl:p-0">
                {/* --- Hero / Banner Section --- */}
                <section className="bg-muted overflow-hidden mb-5">
                    <div className={`block flex-1 h-[200px] rounded-lg`}
                        style={{
                            background: `url(${bannerImage}) center/cover no-repeat`
                        }}
                    />
                </section>

                {/* --- Starter Essentials Section --- */}
                <section>
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h2 className="text-2xl font-bold">Starter essentials</h2>
                            <p className="text-sm text-muted-foreground">Kickstart your business with these handpicked products that are ideal for new sellers.</p>
                        </div>
                        <span className="text-sm font-medium underline cursor-pointer">View all</span>
                    </div>

                    {/* Large Card Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                        {isLoading ? (
                            Array.from({ length: 3 }).map((_, index) => (
                                <Skeleton key={index} className="aspect-square w-full rounded-xl" />
                            ))
                        ) : (
                            catalogProducts.map((product) => (
                                <Card key={product._id} className="border-none! shadow-lg ring-0 group aspect-[5/6] p-0 rounded-xl cursor-pointer">
                                    <Link to={PROTECTED_ROUTES.DESIGN.replace(":product_id", product._id)} className="relative h-full  overflow-hidden rounded-xl">
                                        <img src={product.displayUrl} alt={product.name} className="object-fit w-full h-full   
                                        group-hover:scale-105 transition-transform duration-300" />
                                    </Link>
                                </Card>
                            ))
                        )}
                    </div>

                    {/* Small Card Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {isLoading ? (
                            Array.from({ length: 4 }).map((_, index) => (
                                <Skeleton key={index} className="aspect-square w-full rounded-xl" />
                            ))
                        ) : (
                            featuredProducts.map((product) => (
                                <Card key={product._id} className="border-none! shadow-sm p-0 rounded-lg group cursor-pointer overflow-hidden">
                                    <Link to={PROTECTED_ROUTES.DESIGN.replace(":product_id", product._id)}>
                                        <div className="aspect-square bg-muted overflow-hidden">
                                            <img src={product.displayUrl} alt={product.name}
                                                className="object-cover object-top w-full h-full group-hover:opacity-90" />
                                        </div>
                                        <div className="px-4 py-2">
                                            <h3 className="text-base font-medium truncate">{product.name}</h3>
                                            <p className="text-sm text-muted-foreground mb-1">{product.body}</p>
                                        </div>
                                    </Link>
                                </Card>
                            )))
                        }
                    </div>
                </section>


                <section>
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h2 className="text-2xl font-bold">My Listings</h2>
                            <p className="text-sm text-muted-foreground">Manage your active listings and track their performance.</p>
                        </div>
                        <Link to={PROTECTED_ROUTES.LISTINGS} className="text-sm font-medium underline">View all</Link>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {isLoadingListings ? (
                            Array.from({ length: 4 }).map((_, index) => (
                                <Skeleton key={index} className="aspect-square w-full rounded-xl" />
                            ))
                        ) : listings?.length === 0 ? (
                            <p>No listings found</p>
                        ) : (
                            listings.slice(0, 8).map((listing: any) => (
                                <Card key={listing._id} className="border-none! shadow-sm p-0 
                            rounded-lg group cursor-pointer overflow-hidden">
                                    <a href={`/listing/${listing.slug}`} target="_blank">
                                        <div className="aspect-square bg-muted overflow-hidden">
                                            <img
                                                src={`${ENV.BASE_API_URL}/api/listing/mockup/${listing.slug}/${listing.colorIds[0]?.name.toLowerCase().replace(/\s+/g, "-")}.jpg`}
                                                alt={listing.title}
                                                className="object-contain w-full h-full  group-hover:opacity-90"
                                                fetchPriority="high"
                                                decoding="async"
                                                loading="lazy"
                                                onError={(e) => { e.currentTarget.src = listing.artworkUrl; }}
                                            />
                                        </div>
                                        <div className="px-3 py-3 space-y-1">
                                            <h3 className="text-sm font-medium truncate">{listing.title}</h3>
                                            <p className="text-sm font-light text-muted-foreground">Sale price ${listing.sellingPrice}</p>
                                            <div className="flex gap-1">
                                                {listing.colorIds?.map((color: any) => (
                                                    <div key={color._id} className="size-4 rounded-full border"
                                                        style={{ backgroundColor: color.color }} />
                                                ))}
                                            </div>
                                        </div>
                                    </a>
                                </Card>
                            ))
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HomePage;