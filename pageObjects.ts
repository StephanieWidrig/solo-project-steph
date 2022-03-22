import {By, WebDriver } from "selenium-webdriver";
import {BasePage} from "./basePage"

export class conversePage extends BasePage {
    

    //first test log in 
    signInBtn: By = By.xpath ('//span[@class="header-utility__item text--semibold display--medium-up"]')
    emailInput: By = By.xpath('//input[@class="input-text validate-strict-email tab-hidden required valid"]')
    passwordInput: By = By.xpath ('//input[@class="input-text tab-hidden required valid"]')
    signInBtn2: By = By.xpath ('//button[@class="button button--primary set--full"]')

    //second test search for an item
    searchBar: By = By.xpath('//button[@class="header-search__toggle flex flex-align-center"]')
    whatAreYouLookingForInput: By = By.xpath ('//input[@class="header-search__input search-input-form__input text--upper text--bold body-type--milli valid"]')
    magnifyingGlassBtn: By = By.xpath ('//button[@class="header-search__submit link search-input-form__submit body-type"]')
    womensJackets: By = By.xpath('//h1[@class="pdp-primary-information__product-name display--small-up"]')

    //third test add to cart
    womensBtn: By = By.xpath('(//button[@class="header-flyout__anchor level-1 has--submenu"])[1]')
    shopAllWomensBtn: By = By.xpath ('(//a[@class="link--underline body-type--micro text--semibold display--small-up flex--inline"])[1]')
    womensShoeImg: By = By.xpath('(//source[@data-srcset="https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dwcf195bf6/images/f_08/568497C_F_08X1.jpg?sw=406"])[4]')
    pickASizeBtn: By = By.xpath ('//select[@class="variations__dropdown variations__list dropdown-list dropdown-list--size set--events-ready"]')
    womensShoeSize: By = By.xpath('//option[@value="https://www.converse.com/on/demandware.store/Sites-ConverseUS-Site/default/Product-Variation?pid=568498MP&dwvar_568498MP_size=090&dwvar_568498MP_color=black%2fnatural%20ivory%2fwhite&dwvar_568498MP_width=standard&styleNo=568497C&pdp=true%22]%27')
    addToCartBtn: By = By.xpath('//button[@class="button button--primary button--add-to-cart-pdp set--full set--themeable"]')
    cartIcon: By = By.xpath('//svg[@class="header-utility__icon icon body-type--milli"]')
    oneItemInCart: By = By.xpath('//h1[@class="heading-type--h6 text--semibold"]')

    //fourth test remove item from cart, also use cart icon first
    removeFromCartBtn: By = By.xpath('//button[@class="cart__item-action cart__item-remove body-type--pico link--primary"]')
    dontLeaveYourCartEmpty: By = By.xpath('//h2[@class="heading-type--h5 text--semibold"]')

    //fifth test favorite an item, use womensBtn and then shopAllWomensBtn first
    favoriteAnItem: By = By.xpath ('(//a[@class="favorite-action__item favorite-action__add flex flex-align-center flex-justify-center set--active"])[22]')
    heartIcon: By = By.xpath('//a[@class="header-favorites__link flex"]')
    myFavorites: By = By.xpath ('(//h1[@class="heading-type--h3-h4-fluid text--semibold"])[2]')

    //sixth test build a custom shoe, use cart icon second to last and checkmark in between each selection

    customBtn: By = By.xpath('(//button[@class="header-flyout__anchor level-1 has--submenu"])[4]')
    exploreCustomBtn: By = By.xpath('(//a[@class="link--underline body-type--micro text--semibold display--small-up flex--inline"])[4]')
    kidsCustomBtn: By = By.xpath('(//a[@class="button custom button--small link"])[3]')
    kidsCustomShoe: By = By.xpath('(//img[@class="none-up product-tile__img ratio-media--fit ratio-media product-tile__img--main lazyloaded"])[6]')
    editDesignBtn: By = By.xpath('//button[@class="pdp-primary-information__launch-builder button button--tertiary button--flex flex-align-center flex-justify-center set--full"]')
    bodyBtn: By = By.xpath('(//p[@class="nsg-font-family--base text-color-primary-dark"])[1]')
    blackColorChoice: By = By.xpath('(//a[@class="rmq-92fe81a6 nsg-font-family--base nsg-text--near-black bg-white"])[20]')
    checkmarkBtn: By = By.xpath('(//button[@class="nsg-bg--white bg-white"])[2]')
    tongueBtn: By = By.xpath('(//p[@class="nsg-font-family--base text-color-primary-dark"])[2]')
    navyColorChoice: By = By.xpath('(//a[@class="rmq-92fe81a6 nsg-font-family--base nsg-text--near-black bg-white"])[19]')
    heelStripeBtn: By = By.xpath('(//p[@class="nsg-font-family--base text-color-primary-dark"])[3]')
    monsterBuddiesColorChoice: By = By.xpath('(//a[@class="rmq-92fe81a6 nsg-font-family--base nsg-text--near-black bg-white"])[1]')
    stitchBtn: By = By.xpath('(//p[@class="nsg-font-family--base text-color-primary-dark"])[5]')
    casinoColorChoice: By = By.xpath('(//a[@class="rmq-92fe81a6 nsg-font-family--base nsg-text--near-black bg-white"])[8]')
    laceBtn: By = By.xpath('(//p[@class="nsg-font-family--base text-color-primary-dark"])[7]')
    navyColorChoice2: By = By.xpath('(//a[@class="rmq-92fe81a6 nsg-font-family--base nsg-text--near-black bg-white"])[7]')
    doneBtn: By = By.xpath ('//button[@class="ncss-btn-primary-dark button button--primary set--full"]')
    pickASizeBtn2: By = By.xpath ('//select[@class="variations__dropdown variations__list dropdown-list dropdown-list--size set--events-ready"]')
    shoeSize: By = By.xpath ('//option[text() = "10.5C (Kids)"]')
    addToCartBtn2: By = By.xpath('//button[@class="button button--primary button--add-to-cart-custom set--full text-align--center pdp-primary-information__add-to-cart-button display--small-up"]')
    oneItemInCart2: By = By.xpath('//h1[@class="heading-type--h6 text--semibold"]')








    constructor() {
        super({url: 'https://www.converse.com/'})
    }











}