// ─────────────────────────────────────────────────────────────
// GALLERY DATA — edit this file to add/update artwork
// Each entry: { src, title, meta, ratio }
// ratio: '3/4' for portrait orientation, '4/3' for landscape
// ─────────────────────────────────────────────────────────────

const GALLERY = {

  prints: {
    portraits: [
      { src: 'images/prints/portraits_01.jpg', title: 'Portrait — Vase with Plant', meta: 'Etching, 2024', ratio: '3/4' },
      { src: 'images/prints/portraits_02.jpg', title: "Dressmaker's Dummy", meta: 'Monoprint, 2024', ratio: '3/4' },
      { src: 'images/prints/portraits_03.jpg', title: 'Untitled', meta: 'Print, 2024', ratio: '3/4' },
      { src: 'images/prints/portraits_04.jpg', title: 'Untitled II', meta: 'Print, 2024', ratio: '3/4' },
      { src: 'images/prints/portraits_05.jpg', title: 'Untitled III', meta: 'Print, 2024', ratio: '3/4' },
      { src: 'images/prints/portraits_06.jpg', title: 'Untitled IV', meta: 'Print, 2024', ratio: '3/4' },
      { src: 'images/prints/portraits_07.jpg', title: 'Untitled V', meta: 'Print, 2024', ratio: '3/4' },
    ],
    duos: [
      { src: 'images/prints/duos_01.jpg', title: 'Duo — Teal & Orange', meta: 'Woodblock monoprint, 2024', ratio: '4/3' },
      { src: 'images/prints/duos_02.jpg', title: 'Duo — Red & Black', meta: 'Woodblock monoprint, 2024', ratio: '4/3' },
      { src: 'images/prints/duos_03.jpg', title: 'Duo — Blue & Pink', meta: 'Woodblock monoprint, 2024', ratio: '4/3' },
      { src: 'images/prints/duos_04.jpg', title: 'Duo — Red & Purple', meta: 'Woodblock monoprint, 2024', ratio: '4/3' },
      { src: 'images/prints/duos_05.jpg', title: 'Duo — Pink & Blue', meta: 'Woodblock monoprint, 2024', ratio: '4/3' },
      { src: 'images/prints/duos_06.jpg', title: 'Duo — Red & Blue', meta: 'Woodblock monoprint, 2024', ratio: '4/3' },
    ],
    trios: [
      { src: 'images/prints/trios_01.jpg', title: 'Trio — Blue Ground', meta: 'Woodblock monoprint, 2024', ratio: '4/3' },
      { src: 'images/prints/trios_02.jpg', title: 'Trio — Dark Ground', meta: 'Woodblock monoprint, 2024', ratio: '4/3' },
      { src: 'images/prints/trios_03.jpg', title: 'Trio — Blue & Black', meta: 'Woodblock monoprint, 2024', ratio: '4/3' },
      { src: 'images/prints/trios_04.jpg', title: 'Trio — Green Ground', meta: 'Woodblock monoprint, 2024', ratio: '4/3' },
    ],
    assemblies: [],  // Add images to images/prints/ and list here
    stilllives: [],  // Add images to images/prints/ and list here
    abstract: [],    // Add images to images/prints/ and list here
  },

  ceramics: {
    all: [],  // Add images to images/ceramics/ and list here
  },

  drawings: {
    all: [
      { src: 'images/drawings/maps_01.jpg', title: 'Map Study I', meta: 'Mixed media on map, 2024', ratio: '3/4' },
      { src: 'images/drawings/maps_02.jpg', title: 'Map Study II', meta: 'Mixed media on map, 2024', ratio: '3/4' },
      { src: 'images/drawings/maps_03.jpg', title: 'Map Study III', meta: 'Mixed media on map, 2024', ratio: '3/4' },
      { src: 'images/drawings/maps_04.jpg', title: 'Map Study IV', meta: 'Mixed media on map, 2024', ratio: '3/4' },
      { src: 'images/drawings/maps_05.jpg', title: 'Map Study V', meta: 'Mixed media on map, 2024', ratio: '3/4' },
      { src: 'images/drawings/maps_06.jpg', title: 'Map Study VI', meta: 'Mixed media on map, 2024', ratio: '3/4' },
      { src: 'images/drawings/maps_07.jpg', title: 'Map Study VII', meta: 'Mixed media on map, 2024', ratio: '3/4' },
      { src: 'images/drawings/maps_08.jpg', title: 'Map Study VIII', meta: 'Mixed media on map, 2024', ratio: '3/4' },
      { src: 'images/drawings/maps_09.jpg', title: 'Map Study IX', meta: 'Mixed media on map, 2024', ratio: '3/4' },
      { src: 'images/drawings/maps_10.jpg', title: 'Map Study X', meta: 'Mixed media on map, 2024', ratio: '3/4' },
      { src: 'images/drawings/maps_11.jpg', title: 'Map Study XI', meta: 'Mixed media on map, 2024', ratio: '3/4' },
      { src: 'images/drawings/maps_12.jpg', title: 'Map Study XII', meta: 'Mixed media on map, 2024', ratio: '3/4' },
      { src: 'images/drawings/maps_13.jpg', title: 'Map Study XIII', meta: 'Mixed media on map, 2024', ratio: '3/4' },
      { src: 'images/drawings/maps_14.jpg', title: 'Map Study XIV', meta: 'Mixed media on map, 2024', ratio: '3/4' },
      { src: 'images/drawings/maps_15.jpg', title: 'Map Study XV', meta: 'Mixed media on map, 2024', ratio: '3/4' },
      { src: 'images/drawings/maps_16.jpg', title: 'Map Study XVI', meta: 'Mixed media on map, 2024', ratio: '3/4' },
      { src: 'images/drawings/maps_17.jpg', title: 'Map Study XVII', meta: 'Mixed media on map, 2024', ratio: '3/4' },
      { src: 'images/drawings/maps_18.jpg', title: 'Map Study XVIII', meta: 'Mixed media on map, 2024', ratio: '3/4' },
      { src: 'images/drawings/maps_19.jpg', title: 'Map Study XIX', meta: 'Mixed media on map, 2024', ratio: '3/4' },
    ],
    maps: [
      { src: 'images/drawings/maps_01.jpg', title: 'Map Study I', meta: 'Mixed media on map, 2024', ratio: '3/4' },
      { src: 'images/drawings/maps_02.jpg', title: 'Map Study II', meta: 'Mixed media on map, 2024', ratio: '3/4' },
      { src: 'images/drawings/maps_03.jpg', title: 'Map Study III', meta: 'Mixed media on map, 2024', ratio: '3/4' },
      { src: 'images/drawings/maps_04.jpg', title: 'Map Study IV', meta: 'Mixed media on map, 2024', ratio: '3/4' },
      { src: 'images/drawings/maps_05.jpg', title: 'Map Study V', meta: 'Mixed media on map, 2024', ratio: '3/4' },
      { src: 'images/drawings/maps_06.jpg', title: 'Map Study VI', meta: 'Mixed media on map, 2024', ratio: '3/4' },
      { src: 'images/drawings/maps_07.jpg', title: 'Map Study VII', meta: 'Mixed media on map, 2024', ratio: '3/4' },
      { src: 'images/drawings/maps_08.jpg', title: 'Map Study VIII', meta: 'Mixed media on map, 2024', ratio: '3/4' },
      { src: 'images/drawings/maps_09.jpg', title: 'Map Study IX', meta: 'Mixed media on map, 2024', ratio: '3/4' },
      { src: 'images/drawings/maps_10.jpg', title: 'Map Study X', meta: 'Mixed media on map, 2024', ratio: '3/4' },
      { src: 'images/drawings/maps_11.jpg', title: 'Map Study XI', meta: 'Mixed media on map, 2024', ratio: '3/4' },
      { src: 'images/drawings/maps_12.jpg', title: 'Map Study XII', meta: 'Mixed media on map, 2024', ratio: '3/4' },
      { src: 'images/drawings/maps_13.jpg', title: 'Map Study XIII', meta: 'Mixed media on map, 2024', ratio: '3/4' },
      { src: 'images/drawings/maps_14.jpg', title: 'Map Study XIV', meta: 'Mixed media on map, 2024', ratio: '3/4' },
      { src: 'images/drawings/maps_15.jpg', title: 'Map Study XV', meta: 'Mixed media on map, 2024', ratio: '3/4' },
      { src: 'images/drawings/maps_16.jpg', title: 'Map Study XVI', meta: 'Mixed media on map, 2024', ratio: '3/4' },
      { src: 'images/drawings/maps_17.jpg', title: 'Map Study XVII', meta: 'Mixed media on map, 2024', ratio: '3/4' },
      { src: 'images/drawings/maps_18.jpg', title: 'Map Study XVIII', meta: 'Mixed media on map, 2024', ratio: '3/4' },
      { src: 'images/drawings/maps_19.jpg', title: 'Map Study XIX', meta: 'Mixed media on map, 2024', ratio: '3/4' },
    ],
  },

};
