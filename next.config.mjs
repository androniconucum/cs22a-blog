/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'wwww.facebook.com/messages',
              port: '',
            }
          ],
    }
};

const items = [
    {
        src: '/public/Rommel.svg',
        altText: 'Slide 1',
        caption: 'Slide 1'
      },
      {
        src: '/public/Agsaoay.svg',
        altText: 'Slide 2',
        caption: 'Slide 2'
      },
      {
        src: '/public/Torlao.svg',
        altText: 'Slide 3',
        caption: 'Slide 3'
      },
      {
        src: '/public/Dave.svg',
        altText: 'Slide 4',
        caption: 'Slide 4'
      },
      {
        src: '/public/Rogin',
        altText: 'Slide 5',
        caption: 'Slide 5'
      },
      {
        src: '/public/Matt',
        altText: 'Slide 6',
        caption: 'Slide 6'
      },
      {
        src: '/public/Aaron',
        altText: 'Slide 7',
        caption: 'Slide 7'
      },
      {
        src: '/public/Gudalle',
        altText: 'Slide 9',
        caption: 'Slide 9'
      },
      {
        src: '/public/Juben',
        altText: 'Slide 10',
        caption: 'Slide 10'
      },
      {
        src: '/public/Tudas',
        altText: 'Slide 11',
        caption: 'Slide 11'
      },
      {
        src: '/public/Ababa',
        altText: 'Slide 12',
        caption: 'Slide 12'
      },
      {
        src: '/public/Perez',
        altText: 'Slide 13',
        caption: 'Slide 13'
      },
      {
        src: '/public/Salavedra',
        altText: 'Slide 14',
        caption: 'Slide 14'
      },
      {
        src: '/public/Ortega',
        altText: 'Slide 15',
        caption: 'Slide 15'
      },
      {
        src: '/public/Balderas',
        altText: 'Slide 16',
        caption: 'Slide 16'
      },
      {
        src: '/public/Rico',
        altText: 'Slide 17',
        caption: 'Slide 17'
      },
      {
        src: '/public/Nico',
        altText: 'Slide 18',
        caption: 'Slide 18'
      },
      {
        src: '/public/',
        altText: 'Slide 19',
        caption: 'Slide 19'
      },
];
    

export default nextConfig;
