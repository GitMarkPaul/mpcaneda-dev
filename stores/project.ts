import { defineStore } from 'pinia'

export const useProjectStore = defineStore('project', {
	state: () => ({
		projects: [
			{
				title: 'CASSAREAL',
				description: 'Cassareal is a comprehensive online platform for real estate that provides a seamless and efficient way for users to buy, sell, and rent properties.',
				category: 'Real Estate',
				image: 'https://drive.google.com/uc?id=15hV1tW2Y7ZBOE5w_V_QbaBYtH9__xyUk',
				permalink: 'https://sandbox.cassareal.com/',
				viewable: true,
			},
			{
				title: 'Academe LMS',
				description: 'Academe AI E-Learning Management System (eLMS) is a cloud-based learning management system (LMS) that helps educational institutions and organizations deliver online courses and training.',
				category: 'Website + LMS Platform',
				image: 'https://drive.google.com/uc?id=14AWFoKDJoCVxfXkj4ofxHOIRP0kZQzea',
				permalink: 'https://academelms.com/',
				viewable: true
			},
			{
				title: 'Rosas Garden Hotel',
				description: 'Rosas Garden Hotel is a 24-room hotel located in the heart of Manila, Philippines. It is within walking distance to many popular tourist attractions, including Rizal Park, Intramuros, and Manila Bay. The hotel also offers a variety of amenities, including a restaurant, live music, and a piano bar.',
				category: 'Website',
				image: 'https://drive.google.com/uc?id=1qr2RgXqtd8-YbKJvzIg7N493l8ygWzlj',
				permalink: 'https://rosasgardenhotel.com/',
				viewable: true
			},
			{
				title: 'PELCO II',
				description: 'Pampanga II Electric Cooperative, Inc., is an electric cooperative that serves seven municipalities in the province of Pampanga, Philippines: Mabalacat City, Guagua, Lubao, Porac, Santa Rita, Sasmuan, and Bacolor.',
				category: 'Website + CMS',
				image: 'https://drive.google.com/uc?id=1Zr3423_x-yM6HVyUGicmiWuo2gmtqLz4',
				permalink: 'https://pelco2.com/',
				viewable: true
			},
			{
				title: 'OLMCMC',
				description: 'Our Lady of Mount Carmel Medical Center. It is a private, tertiary hospital located in San Fernando City, Pampanga, Philippines. It is a member of the Carmel Medical Center Group, which also includes hospitals in Clark, Pampanga and Tarlac.',
				category: 'Website + CMS',
				image: 'https://drive.google.com/uc?id=17ZU5UIUEhichdamNdXlNkbmAK3oXleUA',
				permalink: 'https://olmcmc.gocloudgroup.com/',
				viewable: true
			},
			{
				title: 'Millennial Resorts',
				description: 'Millennial Resorts is a Philippine-based hospitality company that develops and operates sustainable resorts and experiential accommodations. It is a sister company of Landco Pacific Corporation, a leading property developer in the Philippines.',
				category: 'Website',
				image: 'https://drive.google.com/uc?id=1wQNvAJ51L73WiWUEdhyIU4zRNUPfO3TO',
				permalink: 'https://millennial-resorts.com/',
				viewable: true
			},
			{
				title: 'AUDA',
				description: 'All Universal Dropshipping Access (AUDA) is a dropshipping membership site that provides its members with access to a wide range of dropshipping suppliers and products. AUDA also offers a variety of tools and resources to help its members start and grow their dropshipping businesses.',
				category: 'Ecommerce Dropshipping Platform',
				image: 'https://drive.google.com/uc?id=1djzlEMEIpCSetZjMY2EV39F9AhDd5Ygw',
				permalink: 'https://gitmarkpaul.github.io/ecommerce-vite/',
				viewable: true
			},
			{
				title: 'Niterra Philippines Inc.',
				description: 'Niterra Philippines Inc. is the exclusive importer and distributor of Niterra products in the Philippines. Niterra is a global leader in ignition and sensor technology, providing high-quality spark plugs, glow plugs, spark plug caps, cables, and sensors.',
				category: 'Website',
				image: 'https://drive.google.com/uc?id=14v5x60f6rT52moReQK4iT7WE3QG5BDoM',
				permalink: 'https://www.ngkntk.com.ph/',
				viewable: true
			},
			{
				title: 'Lance Collection',
				description: 'Lance Collection is a lighting store and manufacturer based in Makati, Philippines. They offer a wide range of lighting products, including chandeliers, droplights, floor lamps, and table lamps. Their products are known for their high quality and stylish designs.',
				category: 'Ecommerce',
				image: 'https://drive.google.com/uc?id=1oPBwF8zwK3CZW5qYG5vvuycTBumdb_OF',
				permalink: 'https://lancecollection.com/',
				viewable: true
			},
			{
				title: 'A3G Construction',
				description: 'A3G Construction and Trading Corporation is a construction company based in Magalang, Pampanga, Philippines. The company specializes in the design and construction of residential and commercial buildings.',
				category: 'Website + Blog + CMS',
				image: 'https://drive.google.com/uc?id=1sT8JA-tJqb4-LQd1GIG7FkPjgBykA-s4',
				permalink: 'http://a3gconstruction.com/',
				viewable: true
			},
			{
				title: 'Chatbrain',
				description: 'ChatBrain is an advanced Artificial Intelligence (AI) tool designed for chat applications.',
				category: 'AI + ChatGPT Integration',
				image: 'https://drive.google.com/uc?id=1gy_KVV5IRw0CtmO8hagchZkMzMVKEA4-',
				permalink: '',
				viewable: false
			}
		]
	}),
})