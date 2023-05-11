/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
	env: {
		FRONT_HOST: process.env.REACT_APP_FRONT_HOST,
		SHEET_URL: process.env.REACT_APP_SHEET_URL,
	},
	sassOptions: {
		includePaths: [path.resolve(__dirname, 'styles')],
	},
}

module.exports = nextConfig
