const signIn = (email, password) => (
    fetch('http://gateway-login.dev-altamedia.com/api/user/login',{   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ email, password, sys_app_id:25 })
    })
    .then(res => res.json())
);

module.exports = signIn;