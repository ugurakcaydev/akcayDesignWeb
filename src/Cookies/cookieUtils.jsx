export function getCookie(name) {
    const cookieString = document.cookie;
    const cookies = cookieString.split(';');

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();

        // Çerez adını kontrol edin
        if (cookie.startsWith(name + '=')) {
            // Çerez değerini döndürün
            return cookie.substring(name.length + 1, cookie.length);
        }
    }

    // Çerez bulunamazsa null döndürün
    return null;
}

export function setCookie(name, value, expirationDays) {
    const date = new Date();
    date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + date.toUTCString();

    document.cookie = name + '=' + value + ';' + expires + ';path=/';
}