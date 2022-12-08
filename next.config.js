/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {domains: ['localhost', 'cdn.icon-icons.com', 'img.icons8.com']},
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		TEST_URL: process.env.REACT_TEST_URL
	}
}

module.exports = nextConfig
