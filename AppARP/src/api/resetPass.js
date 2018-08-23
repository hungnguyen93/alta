const resetPass = (email) => (
    fetch('http://gateway-login.dev-altamedia.com/api/user/password/email', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
    })
    .then(res => res.json())
)
module.exports = resetPass;