export function filterProduct(query,product)
{
    const data=product.filter((list)=> list?.title?.toLowerCase()?.includes(query?.toLowerCase()))

    return data;
}