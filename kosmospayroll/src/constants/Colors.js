export const Colors = {
  mainWhite: '#FFFFFF',
  mainLightGray: '#E9E9E9',
  mainGray: '#71717F',
  mainPink: '#F890AB',
  mainBlack: '#000000',
  mainGoogleBlue: '#293fb3',
  mainPurple: '#6e29b3',
  green: '#1FBE25',
  red: '#F10000',
  orange: '#DB9E11',
};

export const Grads = {
  red: {
    Background: {
      colors: ['#c4181b', '#ca4141'],
      start: {x: 0, y: 0},
      end: {x: 0.5, y: 1},
    },
    Border: {
      colors: ['#b12e2e', '#bb1a1a'],
      locations: [0.1, 1],
      start: {x: 0, y: 0},
      end: {x: 1, y: 1},
    },
    MainBorder: '#9e0c0c',
    OuterBorder: '#570707',
    InsideBorder: '#bb1a1a',
  },
  blue: {
    Background: {
      colors: ['#2e71a8', '#1b7bc9'],
      start: {x: 0, y: 0},
      end: {x: 0.5, y: 1},
    },
    Border: {
      colors: ['#185f99', '#185f99'],
      locations: [0.1, 1],
      start: {x: 0.9, y: 1},
      end: {x: 1, y: 1},
    },
    MainBorder: '#0e4b7c',
    OuterBorder: '#0e4b7c',
    InsideBorder: '#185f99',
  },
  yellow: {
    Background: {
      colors: ['#EAEC30', '#dbdd45'],
      start: {x: 0, y: 0},
      end: {x: 0.5, y: 1},
    },
    Border: {
      colors: ['#b8ae0c', '#b8ae0c'],
      locations: [0.1, 1],
      start: {x: 0.9, y: 1},
      end: {x: 1, y: 1},
    },
    MainBorder: '#5f5b1a',
    OuterBorder: '#5f5b1a',
    InsideBorder: '#b8ae0c',
  },
  green: {
    Background: {
      colors: ['#379610', '#479129'],
      start: {x: 0, y: 0},
      end: {x: 0.5, y: 1},
    },
    Border: {
      colors: ['#4ab80c', '#4ab80c'],
      locations: [0.1, 1],
      start: {x: 0.9, y: 1},
      end: {x: 1, y: 1},
    },
    MainBorder: '#3f5f1a',
    OuterBorder: '#3f5f1a',
    InsideBorder: '#4ab80c',
  },
  white: {
    Background: {
      colors: ['#ffffff', '#ffffff'],
      start: {x: 0, y: 0},
      end: {x: 0.5, y: 1},
    },
    Border: {
      colors: ['#ffffff', '#ffffff'],
      locations: [0.1, 1],
      start: {x: 0.9, y: 1},
      end: {x: 1, y: 1},
    },
    MainBorder: '#ffffff',
    OuterBorder: '#ffffff',
    InsideBorder: '#ffffff',
  },
  purple: {
    Background: {
      colors: ['#6a1096', '#a160c5'],
      start: {x: 0, y: 0},
      end: {x: 0.5, y: 1},
    },
    Border: {
      colors: ['#7a0cb8', '#7a0cb8'],
      locations: [0.1, 1],
      start: {x: 0.9, y: 1},
      end: {x: 1, y: 1},
    },
    MainBorder: '#441a5f',
    OuterBorder: '#461a5f',
    InsideBorder: '#740cb8',
  },
  rainbow: {
    Background: {
      colors: ['#8327af', '#1b7bc9', '#918a29', '#c4181b'],
      locations: [0.22, 0.4, 0.6, 1],
      start: {x: 1, y: 0},
      end: {x: 1, y: 1},
    },
    Border: {
      colors: ['#6a1096', '#1b7bc9', '#918a29', '#c4181b'],
      locations: [0.2, 0.4, 0.6, 1],
      start: {x: 1, y: 0},
      end: {x: 1, y: 1},
    },
    MainBorder: '#441a5f',
    OuterBorder: '#461a5f',
    InsideBorder: '#740cb8',
  },
  MainBackground: {
    colors: ['#4d5d53', '#726255'],
    locations: [0.1, 1],
    start: {x: 0, y: 0},
    end: {x: 0.2, y: 1},
  },
  HeaderBackground: {
    colors: ['#4d5d53', '#87a191'],
    locations: [0, 1],
    start: {x: 0, y: 0},
    end: {x: 0, y: 1},
  },
  FinishModal: {
    colors: ['#9524c2', '#5254a8'],
    locations: [0, 1],
    start: {x: -0.3, y: -0.3},
    end: {x: 0, y: 1},
  },
  FinishModalGreen: {
    colors: ['#8eb8a5', '#357a5b'],
    locations: [0, 1],
    start: {x: -0.3, y: -0.3},
    end: {x: 0, y: 1},
  },
  FinishModalBack: {
    colors: ['#081013', '#6ba3b6'],
    locations: [0, 1],
    start: {x: 0, y: 0},
    end: {x: 0, y: 1},
  },
  AuthBackground: {
    colors: ['#b2b966', '#5a470d'],
    locations: [0, 1],
    start: {x: 0, y: 0},
    end: {x: 1, y: 1},
  },
};

export const Sets = {
  red: {
    pushed: {
      _first: '#f05454', //medium top
      _second: '#aa303b', //medium center
      _third: '#aa303b', //center right dark
      _thirdb: '#7a1b23', //center right dark
      _fourth: '#f05454', //center parlak med dark
      _fifth: '#c73240', //grayish red dark mat
      _stroke: '#be1e2d', //center righttan bir tık açık
    },
    unpushed: {
      _first: '#e47c7c', //light pinkish
      _second: '#ed2024', //dark top
      _third: '#ed2024',
      _fourth: '#be1e2d', // a bit darker
      _fifth: '#853135', // even darker and grayish
      _stroke: '#be1e2d', // dark redish
    },
  },
  blue: {
    pushed: {
      _first: '#799abb',
      _second: '#1e5581',
      _third: '#1a64a0',
      _thirdb: '#175485', //center right dark
      _fourth: '#69a5d4',
      _fifth: '#175485',
      _stroke: '#2871aa',
    },
    unpushed: {
      _first: '#94c9f0',
      _second: '#2995e6',
      _third: '#2995e6',
      _fourth: '#1a6299',
      _fifth: '#1f4868',
      _stroke: '#2871aa',
    },
  },
  yellow: {
    pushed: {
      _first: '#cac57f',
      _second: '#a7a03b',
      _third: '#8f882b',
      _thirdb: '#5a561a', //center right dark
      _fourth: '#ada850',
      _fifth: '#8a841c',
      _stroke: '#afa518',
    },
    unpushed: {
      _first: '#d3d487',
      _second: '#abac4d',
      _third: '#a1a816',
      _fourth: '#acad1f',
      _fifth: '#5f5b1a',
      _stroke: '#afa518',
    },
  },
  green: {
    pushed: {
      _first: '#97ca7f',
      _second: '#66a73b',
      _third: '#4c8f2b',
      _thirdb: '#2a5a1a', //center right dark
      _fourth: '#6bad50',
      _fifth: '#3c8a1c',
      _stroke: '#54af18',
    },
    unpushed: {
      _first: '#94c77a',
      _second: '#5dac35',
      _third: '#46a816',
      _fourth: '#378b15',
      _fifth: '#2e5f1a',
      _stroke: '#44af18',
    },
  },
  purple: {
    pushed: {
      _first: '#b47fca',
      _second: '#7c3ba7',
      _third: '#6b2b8f',
      _thirdb: '#431a5a', //center right dark
      _fourth: '#8b50ad',
      _fifth: '#5e1c8a',
      _stroke: '#6e18af',
    },
    unpushed: {
      _first: '#a178b3',
      _second: '#7e41a7',
      _third: '#8543aa',
      _fourth: '#7431a2',
      _fifth: '#4b1661',
      _stroke: '#7918af',
    },
  },
  rainbow: {
    pushed: {
      _first: '#b47fca',
      _second: '#7c3ba7',
      _third: '#6b2b8f',
      _thirdb: '#431a5a', //center right dark
      _fourth: '#8b50ad',
      _fifth: '#5e1c8a',
      _stroke: '#6e18af',
    },
    unpushed: {
      _first: '#a178b3',
      _second: '#7e41a7',
      _third: '#8543aa',
      _fourth: '#7431a2',
      _fifth: '#4b1661',
      _stroke: '#7918af',
    },
  },
  pink: {
    pushed: {
      _first: '#ca7fc0',
      _second: '#a73ba4',
      _third: '#8f2b8d',
      _thirdb: '#5a1a52', //center right dark
      _fourth: '#ad50ab',
      _fifth: '#8a1c80',
      _stroke: '#c457ba',
    },
    unpushed: {
      _first: '#b378a9',
      _second: '#a7419e',
      _third: '#a243aa',
      _fourth: '#9d31a2',
      _fifth: '#6f1651',
      _stroke: '#c457ba',
    },
  },
};
