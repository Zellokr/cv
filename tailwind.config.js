module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'turquose': '#34aaac;',
                'darkturquose': '#1a7b81',
                'mediumdarkturquose': '#2FA8A8',
                'purpuose': '#00191d;',
                'blackblue': '#00181c',
                'darkgray': '#33464a',
                'purple': '#8f89f5'
            },
            fontFamily: {
                'poppins-bold': 'Poppins Regular'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}
