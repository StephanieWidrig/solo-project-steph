import { conversePage } from "./pageObjects";

const myTest = new conversePage

test("Log In Test", async () => {
    await myTest.navigate()
    await myTest.click(myTest.signInBtn)
    await myTest.setInput(myTest.emailInput, "widrig.stephanie@gmail.com")
    await myTest.setInput(myTest.passwordInput, "Devmountain1!")
    await myTest.click(myTest.signInBtn2)
    let response = await myTest.getText(myTest.signInBtn)
    expect(response).toContain("Hey, Stephanie")
});
test("Search for an item test", async () =>{
    await myTest.navigate()
    await myTest.setInput(myTest.searchBar, "womens jackets")
    await myTest.click(myTest.magnifyingGlassBtn)
    let response = await myTest.getText(myTest.womensJackets)
    expect(response).toContain("3-In-1 Trench Coat")

});

test("Add to cart Test", async () => {
    await myTest.navigate()
    await myTest.click(myTest.womensBtn)
    await myTest.click(myTest.shopAllWomensBtn)
    await myTest.click(myTest.womensShoeImg)
    await myTest.click(myTest.pickASizeBtn)
    await myTest.click(myTest.womensShoeSize)
    await myTest.click(myTest.addToCartBtn)
    await myTest.click(myTest.cartIcon)
    let response = await myTest.getText(myTest.oneItemInCart)
    expect(response).toContain("Your Cart (1)")
});

test("Remove an item from cart Test", async () => {
    await myTest.navigate()
    await myTest.click(myTest.cartIcon)
    await myTest.click(myTest.removeFromCartBtn)
    let response = await myTest.getText(myTest.dontLeaveYourCartEmpty)
    expect(response).toContain("Dont leave your cart empty.")
});

test("Favorite an item Test", async () => {
    await myTest.navigate()
    await myTest.click(myTest.womensBtn)
    await myTest.click(myTest.shopAllWomensBtn)
    await myTest.click(myTest.favoriteAnItem)
    await myTest.click(myTest.heartIcon)
    let response = await myTest.getText(myTest.myFavorites)
    expect(response).toContain("My Favorites")
});


