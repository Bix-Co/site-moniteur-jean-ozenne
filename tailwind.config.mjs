/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['Playfair Display', 'serif'],
			},
			colors: {
            // On remplace le noir pur par un Bleu Nuit très profond, plus "montagne"
            'ski-black': '#0B101B', 
            // Pour les cartes, un gris-bleu rocheux et froid
            'ski-dark': '#151E2E', 
            // Un blanc "glace", très légèrement teinté de bleu pour refroidir l'ambiance
            'ski-white': '#F0F8FF', 
            // On garde l'Or, mais on le rend plus "métallique froid" (type Or Blanc/Champagne)
            'ski-gold': '#C0B283',
            'ski-gold-hover': '#D4C49A',
            // NOUVEAU : Une couleur accent "Glace bleue" pour des effets lumineux
            'glacial-blue': '#A5F3FC', 
        },
        // Ajout d'une image de fond texturée (optionnel, pour plus tard)
        backgroundImage: {
            'ice-texture': "url('/images/texture-glace.png')",
        }
		},
	},
	plugins: [],
}