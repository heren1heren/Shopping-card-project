Readme when ya get lost:
As long as the check list is not finished -> don't quit project:

main plans:

- add item to cart funcion : display on header, function on saleproducts' buttton on click ( don't let user add twice); set functions: setCartData. display: cartData.counts

- increasing and decreasing function products count by ...?
  Extra plans:
  try to handle loading phase: smarter(using suspense tag)
  rendering products by map method ( rendering randomly but it will not reset unless reload the app again)

Error:
Type '{ className: string; affection: number; }' is not assignable to type 'IntrinsicAttributes & HeaderComponentProps'.
Property 'className' does not exist on type 'IntrinsicAttributes & HeaderComponentProps'.

Type 'unknown' must have a '[Symbol.iterator]()' method that returns an iterator.ts(2488)
'setAffectionColor' is assigned a value but never used.eslint@typescript-eslint/no-unused-vars
const setAffectionColor: any
const [setAffection, setAffectionColor] = useOutletContext();
hd
is there a way to pass only set functions? when I delete state variables, these set functions don't work
<Outlet
context={[
affection,
setAffection,
affectionColor,
setAffectionColor,
headerBackgroundColor,
setHeaderBackgroundColor,
]}
/>

console.log(item.breeds[0].name);
learn how to handle typee of api inputs

try to handle loading phase: smarter(using suspense tag)

how to hide api key on github
