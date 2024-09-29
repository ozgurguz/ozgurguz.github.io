var config = {
    style: 'mapbox://styles/mapbox/light-v11',
    accessToken: 'pk.eyJ1Ijoib3pndXJndXoiLCJhIjoiY20xZ3Uwa2NmMDl4NDJ2c2FxM2MycGFveiJ9.pR2fPgfqBna7LB_5nhg3iw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    inset: false,
    theme: 'dark',
    use3dTerrain: false,
    auto: false,
    title: 'Gazze\'de Zoraki Göç',
    subtitle: 'İsrail\'in zorla yerinden ettiği Gazzeliler yine göç yolunda',
    byline: 'Anadolu Ajansı',
    footer: 'Anadolu Ajansı Scrollytelling Team',
    chapters: [
        {
            id: 'step-1',
            alignment: 'center',
            hidden: false,
            title: 'Gazze\'de Zoraki Göç',
            description: ' İsrail ordusunun Refah’a karadan saldırı başlatacağı endişesiyle zorunlu göç başladı. İsrail ordusunun Gazze Şeridi\'nin güneyinde 1 milyondan fazla yerinden edilmiş Filistinlinin sığındığı Refah kentine karadan da saldırı başlatacağı endişesiyle bölgenin doğusundaki Filistinliler yerlerini terk etmeye başladı',
            location: {
                center: [34.68771, 31.70622],
                zoom: 6.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'geojson-fill-layer', // Show GeoJSON fill layer
                    opacity: 1,
                    duration: 1000
                },
                {
                    layer: 'geojson-line-layer', // Show GeoJSON line layer
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'geojson-fill-layer', // Hide GeoJSON fill layer
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'geojson-line-layer', // Hide GeoJSON line layer
                    opacity: 0,
                    duration: 1000
                }
            ]
        },
        {
            id: 'step-2',
            alignment: 'left',
            hidden: false,
            title: 'Display Title',
            video: '../image/AA-34480357.mp4',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            location: {
                center: [34.19942, 31.42247],
                zoom: 10.33,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'geojson-fill-layer', // Show GeoJSON fill layer
                    opacity: 1,
                    duration: 1000
                },
                {
                    layer: 'geojson-line-layer', // Show GeoJSON line layer
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'geojson-fill-layer', // Hide GeoJSON fill layer
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'geojson-line-layer', // Hide GeoJSON line layer
                    opacity: 0,
                    duration: 1000
                }
            ]
        },
        {
            id: 'step-3',
            alignment: 'left',
            hidden: false,
            title: 'Display Title',
            image: '../image/AA-35353659.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            location: {
                center: [34.46063, 31.55469],
                zoom: 13,
                pitch: 40,
                bearing: 30
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'geojson-fill-layer', // Show GeoJSON fill layer
                    opacity: 1,
                    duration: 1000
                },
                {
                    layer: 'geojson-line-layer', // Show GeoJSON line layer
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'geojson-fill-layer', // Hide GeoJSON fill layer
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'geojson-line-layer', // Hide GeoJSON line layer
                    opacity: 0,
                    duration: 1000
                }
            ]
        },
        {
            id: 'step-4',
            alignment: 'left',
            hidden: false,
            title: 'Display Title',
            image: '../image/AA-35353659.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            location: {
                center: [34.42706, 31.51198],
                zoom: 13,
                pitch: 60,
                bearing: 35
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'geojson-fill-layer', // Show GeoJSON fill layer
                    opacity: 1,
                    duration: 1000
                },
                {
                    layer: 'geojson-line-layer', // Show GeoJSON line layer
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'geojson-fill-layer', // Hide GeoJSON fill layer
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'geojson-line-layer', // Hide GeoJSON line layer
                    opacity: 0,
                    duration: 1000
                }
            ]
        },
        {
            id: 'step-5',
            alignment: 'left',
            hidden: false,
            title: 'Display Title',
            image: '../image/AA-35353659.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            location: {
                center: [34.35724, 31.44207],
                zoom: 13,
                pitch: 60,
                bearing: 35
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'geojson-fill-layer', // Show GeoJSON fill layer
                    opacity: 1,
                    duration: 1000
                },
                {
                    layer: 'geojson-line-layer', // Show GeoJSON line layer
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'geojson-fill-layer', // Hide GeoJSON fill layer
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'geojson-line-layer', // Hide GeoJSON line layer
                    opacity: 0,
                    duration: 1000
                }
            ]
        },
        {
            id: 'step-6',
            alignment: 'left',
            hidden: false,
            title: 'Display Title',
            image: '../image/AA-35353659.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            location: {
                center: [34.31027, 31.39640],
                zoom: 13,
                pitch: 60,
                bearing: 35
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'geojson-fill-layer', // Show GeoJSON fill layer
                    opacity: 1,
                    duration: 1000
                },
                {
                    layer: 'geojson-line-layer', // Show GeoJSON line layer
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'geojson-fill-layer', // Hide GeoJSON fill layer
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'geojson-line-layer', // Hide GeoJSON line layer
                    opacity: 0,
                    duration: 1000
                }
            ]
        },
        {
            id: 'step-7',
            alignment: 'left',
            hidden: false,
            title: 'Display Title',
            image: '../image/AA-35353659.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            location: {
                center: [34.23818, 31.30638],
                zoom: 12.2,
                pitch: 60,
                bearing: 15
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'geojson-fill-layer', // Show GeoJSON fill layer
                    opacity: 1,
                    duration: 1000
                },
                {
                    layer: 'geojson-line-layer', // Show GeoJSON line layer
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'geojson-fill-layer', // Hide GeoJSON fill layer
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'geojson-line-layer', // Hide GeoJSON line layer
                    opacity: 0,
                    duration: 1000
                }
            ]
        },
        {
            id: 'step-8',
            alignment: 'left',
            hidden: false,
            title: 'Display Title',
            image: '../image/AA-35353659.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            location: {
                center: [34.26322, 31.40299],
                zoom: 10.65,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'geojson-fill-layer', // Show GeoJSON fill layer
                    opacity: 1,
                    duration: 1000
                },
                {
                    layer: 'geojson-line-layer', // Show GeoJSON line layer
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'geojson-fill-layer', // Hide GeoJSON fill layer
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'geojson-line-layer', // Hide GeoJSON line layer
                    opacity: 0,
                    duration: 1000
                }
            ]
        }
    ]
};
