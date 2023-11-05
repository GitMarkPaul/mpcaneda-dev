import { defineStore } from 'pinia'
import cassarealThumbnail from '~/assets/img/projects/cassareal.png'
import academeLMSThumbnail from '~/assets/img/projects/academe-lms.png'
import rghThumbnail from '~/assets/img/projects/rosas-garden-hotel.png'
import pelco2Thumbnail from '~/assets/img/projects/pelco-2.png'
import olmcmcThumbnail from '~/assets/img/projects/olmcmc.png'
import millennialResortsThumbnail from '~/assets/img/projects/millennial-resorts.png'
import niterraThumbnail from '~/assets/img/projects/niterra.png'
import lanceCollectionThumbnail from '~/assets/img/projects/lance-collection.png'
import a3gThumbnail from '~/assets/img/projects/a3g-construction.png'
import audaThumbnail from '~/assets/img/projects/auda.png'
import chatbrainThumbnail from '~/assets/img/projects/chatbrain.png'

export const useProjectStore = defineStore('project', {
	state: () => ({
		projects: [
			{
				title: 'CASSAREAL',
				description: 'Cassareal is a comprehensive online platform for real estate that provides a seamless and efficient way for users to buy, sell, and rent properties.',
				category: 'Real Estate Platform',
				image: cassarealThumbnail,
				permalink: 'https://sandbox.cassareal.com/',
				viewable: true,
			},
			{
				title: 'Academe LMS',
				description: 'Academe AI E-Learning Management System (eLMS) is a cloud-based learning management system (LMS) that helps educational institutions and organizations deliver online courses and training.',
				category: 'Website + LMS Platform',
				image: academeLMSThumbnail,
				permalink: 'https://academelms.com/',
				viewable: true
			},
			{
				title: 'Rosas Garden Hotel',
				description: 'Rosas Garden Hotel is a 24-room hotel located in the heart of Manila, Philippines. It is within walking distance to many popular tourist attractions, including Rizal Park, Intramuros, and Manila Bay. The hotel also offers a variety of amenities, including a restaurant, live music, and a piano bar.',
				category: 'Website + CMS',
				image: rghThumbnail,
				permalink: 'https://rosasgardenhotel.com/',
				viewable: true
			},
			{
				title: 'PELCO II',
				description: 'Pampanga II Electric Cooperative, Inc., is an electric cooperative that serves seven municipalities in the province of Pampanga, Philippines: Mabalacat City, Guagua, Lubao, Porac, Santa Rita, Sasmuan, and Bacolor.',
				category: 'Website + CMS',
				image: pelco2Thumbnail,
				permalink: 'https://pelco2.com/',
				viewable: true
			},
			{
				title: 'OLMCMC',
				description: 'Our Lady of Mount Carmel Medical Center. It is a private, tertiary hospital located in San Fernando City, Pampanga, Philippines. It is a member of the Carmel Medical Center Group, which also includes hospitals in Clark, Pampanga and Tarlac.',
				category: 'Website + CMS',
				image: olmcmcThumbnail,
				permalink: 'https://olmcmc.gocloudgroup.com/',
				viewable: true
			},
			{
				title: 'Millennial Resorts',
				description: 'Millennial Resorts is a Philippine-based hospitality company that develops and operates sustainable resorts and experiential accommodations. It is a sister company of Landco Pacific Corporation, a leading property developer in the Philippines.',
				category: 'Website',
				image: millennialResortsThumbnail,
				permalink: 'https://millennial-resorts.com/',
				viewable: true
			},
			{
				title: 'Niterra Philippines Inc.',
				description: 'Niterra Philippines Inc. is the exclusive importer and distributor of Niterra products in the Philippines. Niterra is a global leader in ignition and sensor technology, providing high-quality spark plugs, glow plugs, spark plug caps, cables, and sensors.',
				category: 'Website + CMS',
				image: niterraThumbnail,
				permalink: 'https://www.ngkntk.com.ph/',
				viewable: true
			},
			{
				title: 'Lance Collection',
				description: 'Lance Collection is a lighting store and manufacturer based in Makati, Philippines. They offer a wide range of lighting products, including chandeliers, droplights, floor lamps, and table lamps. Their products are known for their high quality and stylish designs.',
				category: 'Ecommerce',
				image: lanceCollectionThumbnail,
				permalink: 'https://lancecollection.com/',
				viewable: true
			},
			{
				title: 'A3G Construction',
				description: 'A3G Construction and Trading Corporation is a construction company based in Magalang, Pampanga, Philippines. The company specializes in the design and construction of residential and commercial buildings.',
				category: 'Website + CMS',
				image: a3gThumbnail,
				permalink: 'http://a3gconstruction.com/',
				viewable: true
			},
			{
				title: 'AUDA',
				description: 'All Universal Dropshipping Access (AUDA) is a dropshipping membership site that provides its members with access to a wide range of dropshipping suppliers and products. AUDA also offers a variety of tools and resources to help its members start and grow their dropshipping businesses.',
				category: 'Ecommerce Dropshipping Platform',
				image: audaThumbnail,
				permalink: 'https://gitmarkpaul.github.io/ecommerce-vite/',
				viewable: false
			},
			{
				title: 'Chatbrain',
				description: 'ChatBrain is an advanced Artificial Intelligence (AI) tool designed for chat applications.',
				category: 'AI + ChatGPT Integration',
				image: chatbrainThumbnail,
				permalink: '',
				viewable: false
			}
		]
	}),
})