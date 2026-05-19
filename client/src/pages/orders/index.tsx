import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const OrdersPage = () => {
  // const { data, isLoading } = useQuery<GetUserOrdersResponse>({
  //   queryKey: ["orders"],
  //   queryFn: getUserOrders,
  // });

  const isLoading = false
  const orders = [
    {
      _id: "1",
      title: "T-Shirt",
      description: "100% Cotton",
      sellingPrice: "19.99",
      colorId: {
        name: "Black",
        color: "#000000"
      },
      listingId: {
        artworkUrl: "https://placehold.co/300x300/f3f4f6/9ca3af?text=Mug",
        slug: "t-shirt",
      },
      customerName: "John Doe",
      customerEmail: "john@example.com",
      size: "M",
      status: "pending",
    },
    {
      _id: "2",
      title: "Hoodie",
      description: "80% Cotton, 20% Polyester",
      sellingPrice: "29.99",
      colorId: {
        name: "Black",
        color: "#000000"
      },
      customerName: "John Doe",
      customerEmail: "john@example.com",
      size: "M",
      status: "pending",
      listingId: {
        artworkUrl: "https://placehold.co/300x300/f3f4f6/9ca3af?text=Phone+Case",
        slug: "hoodie",
      },
    },
    {
      _id: "3",
      title: "Big Bear tee",
      description: "100% Cotton",
      sellingPrice: "19.99",
      colorId: {
        name: "Black",
        color: "#000000"
      },
      customerName: "John Doe",
      customerEmail: "john@example.com",
      size: "M",
      status: "pending",
      listingId: {
        artworkUrl: "https://placehold.co/300x300/f3f4f6/9ca3af?text=Sticker",
        slug: "big-bear-tee",
      },
    },
    {
      _id: "4",
      title: "Cave man Hoodie",
      description: "80% Cotton, 20% Polyester",
      sellingPrice: "29.99",
      colorId: {
        name: "White",
        color: "#fff"
      },
      customerName: "John Doe",
      customerEmail: "john@example.com",
      size: "M",
      status: "pending",
      listingId: {
        artworkUrl: "https://placehold.co/300x300/f3f4f6/9ca3af?text=Poster",
        slug: "cave-man-hoodie",
      },
    },
  ] as any;



  return (
    <div className="min-h-screen w-full">
      <div className="max-w-6xl w-full mx-auto px-3 lg:p-0 space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Orders</h1>
          <p className="text-sm text-muted-foreground">Orders placed for your listings.</p>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Color</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <TableRow key={i}>
                  <TableCell colSpan={5}>
                    <Skeleton className="h-10 w-full rounded" />
                  </TableCell>
                </TableRow>
              ))
            ) : orders.map((order: any) => (
              <TableRow key={order._id}>
                <TableCell className="flex items-center gap-3">
                  <div className="border rounded-sm pt-2 px-2">
                    <img
                      src={order.listingId.artworkUrl}
                      alt={order.listingId.title}
                      className="w-10 h-10 object-cover rounded"
                    />
                  </div>
                  <div>
                    <h5 className="font-medium">{order.listingId.title}</h5>
                    <p className="text-xs text-muted-foreground">{order.colorId.name}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <p className="text-sm font-medium">{order.customerName}</p>
                  <p className="text-xs text-muted-foreground">{order.customerEmail}</p>
                </TableCell>
                <TableCell>{order.size}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border" style={{ backgroundColor: order.colorId.color }} />
                    <p>{order.colorId.name}</p>
                  </div>
                </TableCell>
                <TableCell>${order.amount}</TableCell>
                <TableCell>
                  <Badge
                    className={cn(
                      "capitalize",
                      order.status === "pending" && "bg-yellow-500",
                      order.status === "awaiting_shipment" && "bg-green-400",
                      order.status === "shipped" && "bg-blue-400",
                      order.status === "fulfilled" && "bg-purple-400",
                      order.status === "failed" && "bg-red-400",

                    )}
                  >
                    {order?.status?.replace("_", " ")}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default OrdersPage;