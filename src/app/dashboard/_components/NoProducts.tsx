import { Button } from "@/components/ui/button"
import Link from "next/link"

export function NoProducts() {
  return (
    <div className="mt-32 text-center text-balance">
      <h1 className="text-4xl font-semibold mb-2">You have no products</h1>
      <p className="mb-4">
<<<<<<< HEAD
        Get started with Discomfy discounts by creating a product
=======
        Get started with PPP discounts by creating a product
>>>>>>> 3cf77f1a6222f6eb12d9995ae36d28b27e65b4e8
      </p>
      <Button size="lg" asChild>
        <Link href="/dashboard/products/new">Add Product</Link>
      </Button>
    </div>
  )
}
