/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '1337', // если нужен порт, как у тебя
				pathname: '/uploads/**',
			},
		],
	},
}

export default nextConfig
