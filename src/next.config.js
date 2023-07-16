module.exports = {
    async rewrites() {
        return [
            {
                source: '/contact*',
                destination: 'https://api.resend.com/emails',
            },
        ]
    },
};