import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import * as mathjs from 'mathjs';

export function isEmptyOrNull(value) {
    return value === undefined || value === null || value === '';
}

export function getJwtToken() {
    return localStorage.getItem('jwt');
}

export function isLoggedIn() {
    const helper = new JwtHelperService();
    if (!isEmptyOrNull(getJwtToken())) {
        return !helper.isTokenExpired(getJwtToken());
    }
    return false;
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

export function getUser() {
    if (!isLoggedIn()) {
        return null;
    }
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(getJwtToken());
    return decodedToken;
}

export function isAdmin(): boolean {
    if (!isLoggedIn()) {
        return false;
    }
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(getJwtToken());
    if (isEmptyOrNull(decodedToken.groupId)) {
        return false;
    }
    return decodedToken.groupId === 1;
}


export function isWorker(): boolean {
    if (!isLoggedIn()) {
        return false;
    }
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(getJwtToken());
    if (isEmptyOrNull(decodedToken.groupId)) {
        return false;
    }
    return decodedToken.groupId === 2;
}

export function isBanned(): boolean {
    if (!isLoggedIn()) {
        return false;
    }
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(getJwtToken());
    if (isEmptyOrNull(decodedToken.groupId)) {
        return false;
    }
    return decodedToken.groupId === -1;
}

export function openLiveChat() {
    const w: any = window;
    w.$zopim.livechat.window.show();
}

export function sendLiveChatMessage(message: string) {
    const w: any = window;
    w.$zopim.livechat.window.show();
    w.$zopim.livechat.say(message);
}

export function getCurrencies() {
    try {
        return JSON.parse(localStorage.getItem('currencies'))
    } catch (err) {
        return {};
    }
}

export function setCurrencies(input: any[]) {
    localStorage.setItem('currencies', JSON.stringify(input));
}

export function setCurrentCurrency(input: string) {
    localStorage.setItem('currency', input);
}

export function getCurrentCurrency() {
    return isEmptyOrNull(localStorage.getItem('currency')) ? null : localStorage.getItem('currency')
}

export function setPaymentGateways(payment_gateways: any[]) {
    localStorage.setItem('payment_gateways', JSON.stringify(payment_gateways));
}

export function getPaymentGateways() {
    return isEmptyOrNull(localStorage.getItem('payment_gateways')) ? [] : JSON.parse(localStorage.getItem('payment_gateways'))
}

export function getCurrencyConverted(amount: number) {
    return getCurrentCurrency() !== null && getCurrencies()[getCurrentCurrency()] !== null ? (getCurrentCurrency() === 'USD' ? amount : getCurrencies()[getCurrentCurrency()] * amount) : 0
}

export function openInNewTab(url) {
    window.location.href = url;
}

export function round(input: number) {
    return +mathjs.round(input, 3);
}

export function deepClone<T>(data: T): T {
    return JSON.parse(JSON.stringify(data));
}

export function setCartSkilling(cart_skilling: any[]) {
    localStorage.setItem('cart_skilling', JSON.stringify(cart_skilling));
}

export function setCartQuests(cart_quests: any[]) {
    localStorage.setItem('cart_quests', JSON.stringify(cart_quests));
}

export function setCartMinigames(cart_minigames: any[]) {
    localStorage.setItem('cart_minigames', JSON.stringify(cart_minigames));
}

export function setCartAccounts(cart_accounts: any[]) {
    localStorage.setItem('cart_accounts', JSON.stringify(cart_accounts));
}

export function getCartQuests() {
    return isEmptyOrNull(localStorage.getItem('cart_quests')) ? [] : JSON.parse(localStorage.getItem('cart_quests'))
}

export function getCartMinigames() {
    return isEmptyOrNull(localStorage.getItem('cart_minigames')) ? [] : JSON.parse(localStorage.getItem('cart_minigames'))
}

export function getCartSkilling() {
    return isEmptyOrNull(localStorage.getItem('cart_skilling')) ? [] : JSON.parse(localStorage.getItem('cart_skilling'))
}

export function getCartAccounts() {
    return isEmptyOrNull(localStorage.getItem('cart_accounts')) ? [] : JSON.parse(localStorage.getItem('cart_accounts'))
}

export function isLocalStorageAvailable(key: string) {
    return isEmptyOrNull(localStorage.getItem(key)) ? false : true
}

export function getCurrencySymbol(name: string): string {
    let symbol = '$';
    switch (name) {
        case 'USD':
        case 'CAD':
        case 'NZD':
            symbol = '$';
            break;
        case 'GBP':
            symbol = '£';
            break;
        case 'EUR':
            symbol = '€';
            break;
        case 'CNY':
            symbol = '¥';
            break;
    }
    return symbol;
}



export const stripePGs = ['alipay', 'bancontact', 'eps', 'giropay', 'ideal', 'multibanco', 'przelewy24', 'klarna', 'wechat Pay', 'visa', 'mastercard'];
export const payopPGs = ['skrill', 'trustly', 'webpay', 'poli', 'qiwi', 'unionpay', 'western union', 'paysafecard']


export const mapToBlogGeneric = (blog) => {
    return {
        ...blog,
        author: blog.author ? `${blog.author.email ? blog.author.email : ''}` : 'Anonymous'
    }
}

export function getPaymentGatewayName(input: string) {
    switch (input) {
        case 'btc':
            return 'Bitcoin';
        case 'ltc':
            return 'Litecoin';
        case 'eth':
            return 'Ethereum';
        case 'usdc':
            return 'USD Coin';
        case 'american-express':
            return 'American Express';
        case 'visa':
            return 'Visa';
        case 'mastercard':
            return 'Mastercard'
        case 'discover':
            return 'Discover';
        case 'zelle':
            return 'Zelle';
        case 'paypal':
            return 'Paypal';
        default:
            return input;
    }
}


export function getAccountTypes() {
    return [
        {
            id: 1,
            name: 'Zerker'
        },
        {
            id: 2,
            name: 'Pure'
        },
        {
            id: 3,
            name: 'Main'
        },
        {
            id: 4,
            name: 'Staker'
        },
        {
            id: 5,
            name: 'Starter Build\'s'
        },
        {
            id: 6,
            name: 'Ironman'
        },
        {
            id: 7,
            name: 'HCIM'
        },
        {
            id: 8,
            name: 'PKer'
        },
        {
            id: 9,
            name: 'Skiller'
        }
    ]
}


export function setLocalStorageArrayIfNotDefined(key: string) {
    if (isEmptyOrNull(localStorage.getItem(key))) {
        localStorage.setItem(key, JSON.stringify([]));
    }
}

export function getLocalStorageArray(key: string) {
    return JSON.parse(localStorage.getItem(key));
}