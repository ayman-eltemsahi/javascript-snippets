function generateUniqueString(n) {
    n = n || 100;

    const chars = "qwertyuiop[]asdfghjkl;'zxcvbnm,.1234567890-=!@#$%^&*()_+QWERTYUIOP{}ASDFGHJKL:ZXCVBNM<>?";
    const max = chars.length;
    let str = "";
    for(let i = 0; i < n; i++) {
        const j = Math.floor(Math.random() * max);
        str += chars[j];
    }
    return str;
}
