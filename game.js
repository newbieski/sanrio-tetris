/**
 * Sanrio Pastel Tetris
 * Pure HTML5 Canvas + Web Audio API
 */

// ==========================================
// 1. Sanrio Characters Data & Vector SVGs
// ==========================================
const SANRIO_CHARACTERS = [
  {
    id: 'purin',
    name: '폼폼푸린',
    accent: '#FFF176',
    welcome: '안녕! 같이 신나게 블록 쌓아보자~ 🍮',
    reactions: {
      single: '달콤한 한 줄! 🍮',
      double: '푸딩 두 배로 신나! ✨',
      triple: '대단해! 폼폼푸린도 춤추는 중~ 💛',
      tetris: '🎉 와아아! 푸딩 대축제 테트리스!! 🍮✨',
      gameover: '토닥토닥.. 다음엔 더 잘할 수 있어! 🥺'
    },
    svg: `
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Purin Body/Head -->
        <ellipse cx="50" cy="55" rx="36" ry="32" fill="#FFE885" stroke="#7A4E2D" stroke-width="3"/>
        <!-- Ears -->
        <ellipse cx="20" cy="46" rx="8" ry="14" fill="#FFE885" stroke="#7A4E2D" stroke-width="3" transform="rotate(-15 20 46)"/>
        <ellipse cx="80" cy="46" rx="8" ry="14" fill="#FFE885" stroke="#7A4E2D" stroke-width="3" transform="rotate(15 80 46)"/>
        <!-- Brown Beret Hat -->
        <path d="M 33 28 Q 50 18 67 28 Q 50 34 33 28 Z" fill="#6B3A1E" stroke="#482410" stroke-width="2.5"/>
        <circle cx="50" cy="22" r="3" fill="#6B3A1E"/>
        <!-- Eyes -->
        <circle cx="39" cy="53" r="3.2" fill="#502D15"/>
        <circle cx="61" cy="53" r="3.2" fill="#502D15"/>
        <!-- Cute Nose & Mouth -->
        <ellipse cx="50" cy="57" rx="3" ry="2" fill="#502D15"/>
        <path d="M 46 60 Q 50 63 54 60" fill="none" stroke="#502D15" stroke-width="2.2" stroke-linecap="round"/>
        <!-- Pink Blush -->
        <ellipse cx="31" cy="58" rx="5" ry="3" fill="#FF9EAA" opacity="0.6"/>
        <ellipse cx="69" cy="58" rx="5" ry="3" fill="#FF9EAA" opacity="0.6"/>
      </svg>
    `
  },
  {
    id: 'kitty',
    name: '헬로키티',
    accent: '#FF85A2',
    welcome: '반가워! 예쁜 리본처럼 블록 맞춰봐요 🎀',
    reactions: {
      single: '나이스 클리어! 🎀',
      double: '반짝반짝 두 줄! 🌸',
      triple: '완벽해! 정말 잘한다~ 💕',
      tetris: '✨ 판타스틱 테트리스! 리본 파티! 🎀🎉',
      gameover: '아쉽지만 정말 잘했어! 다시 해보자 💖'
    },
    svg: `
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Kitty Head -->
        <ellipse cx="50" cy="54" rx="38" ry="30" fill="#FFFFFF" stroke="#4A3B43" stroke-width="3"/>
        <!-- Ears -->
        <polygon points="22,36 15,16 38,28" fill="#FFFFFF" stroke="#4A3B43" stroke-width="3" stroke-linejoin="round"/>
        <polygon points="78,36 85,16 62,28" fill="#FFFFFF" stroke="#4A3B43" stroke-width="3" stroke-linejoin="round"/>
        <!-- Red Ribbon Bow on Left Ear -->
        <ellipse cx="32" cy="28" rx="6" ry="6" fill="#FF3355" stroke="#990022" stroke-width="1.8"/>
        <path d="M 32 28 C 22 18, 16 32, 28 34 Z" fill="#FF4D6D" stroke="#990022" stroke-width="1.8"/>
        <path d="M 32 28 C 42 18, 48 32, 36 34 Z" fill="#FF4D6D" stroke="#990022" stroke-width="1.8"/>
        <!-- Eyes -->
        <ellipse cx="37" cy="52" rx="2.8" ry="4.2" fill="#33222B"/>
        <ellipse cx="63" cy="52" rx="2.8" ry="4.2" fill="#33222B"/>
        <!-- Yellow Nose -->
        <ellipse cx="50" cy="58" rx="4" ry="2.8" fill="#FFD13B" stroke="#997700" stroke-width="1.2"/>
        <!-- Whiskers -->
        <line x1="18" y1="50" x2="6" y2="48" stroke="#4A3B43" stroke-width="2.2" stroke-linecap="round"/>
        <line x1="18" y1="56" x2="5" y2="58" stroke="#4A3B43" stroke-width="2.2" stroke-linecap="round"/>
        <line x1="82" y1="50" x2="94" y2="48" stroke="#4A3B43" stroke-width="2.2" stroke-linecap="round"/>
        <line x1="82" y1="56" x2="95" y2="58" stroke="#4A3B43" stroke-width="2.2" stroke-linecap="round"/>
      </svg>
    `
  },
  {
    id: 'cinnamoroll',
    name: '시나모롤',
    accent: '#7ED6F7',
    welcome: '하늘 구름 위를 날아가는 기분이야~ ☁️',
    reactions: {
      single: '구름 한 조각 클리어! ☁️',
      double: '둥실둥실 더블! 🩵',
      triple: '하늘 높이 날아올라~ 🌟',
      tetris: '☁️ 기적의 시나모롤 테트리스 만세! 🩵🎉',
      gameover: '괜찮아! 시나몬 롤 먹고 다시 힘내자 ☕'
    },
    svg: `
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Long Fluffy Floppy Ears -->
        <path d="M 28 50 C 6 40, -4 68, 14 74 C 28 78, 30 62, 30 52 Z" fill="#FFFFFF" stroke="#6893B0" stroke-width="2.8"/>
        <path d="M 72 50 C 94 40, 104 68, 86 74 C 72 78, 70 62, 70 52 Z" fill="#FFFFFF" stroke="#6893B0" stroke-width="2.8"/>
        <!-- Head -->
        <ellipse cx="50" cy="54" rx="34" ry="26" fill="#FFFFFF" stroke="#6893B0" stroke-width="2.8"/>
        <!-- Big Sky Blue Eyes -->
        <ellipse cx="38" cy="52" rx="3.5" ry="4.5" fill="#389BDE"/>
        <circle cx="39" cy="50" r="1.5" fill="#FFFFFF"/>
        <ellipse cx="62" cy="52" rx="3.5" ry="4.5" fill="#389BDE"/>
        <circle cx="63" cy="50" r="1.5" fill="#FFFFFF"/>
        <!-- Cute 'w' Smile -->
        <path d="M 45 59 Q 47.5 63 50 60 Q 52.5 63 55 59" fill="none" stroke="#6893B0" stroke-width="2.2" stroke-linecap="round"/>
        <!-- Pink Cheeks -->
        <ellipse cx="29" cy="56" rx="6" ry="4" fill="#FFB3C1" opacity="0.7"/>
        <ellipse cx="71" cy="56" rx="6" ry="4" fill="#FFB3C1" opacity="0.7"/>
      </svg>
    `
  },
  {
    id: 'kuromi',
    name: '쿠로미',
    accent: '#BF84F2',
    welcome: '흥! 너의 테트리스 실력 좀 볼까? 💜',
    reactions: {
      single: '흥, 제법이네! 💜',
      double: '쿠로미의 마법 더블 공격! 😈',
      triple: '와우! 생각보다 좀 치는데?! 🖤',
      tetris: '⚡ 꺄악! 완벽한 쿠로미 테트리스다! 👑🖤',
      gameover: '다시 도전해! 포기하면 쿠로미가 놀릴 거야 😜'
    },
    svg: `
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Black/Lilac Hood with Jester Horns -->
        <path d="M 24 45 C 10 20, 2 30, 18 10 C 26 22, 34 30, 40 38 Z" fill="#4B3B52" stroke="#2E2036" stroke-width="2.5"/>
        <circle cx="18" cy="10" r="4" fill="#E882B5"/>
        <path d="M 76 45 C 90 20, 98 30, 82 10 C 74 22, 66 30, 60 38 Z" fill="#4B3B52" stroke="#2E2036" stroke-width="2.5"/>
        <circle cx="82" cy="10" r="4" fill="#E882B5"/>
        <!-- Hood base -->
        <ellipse cx="50" cy="54" rx="36" ry="32" fill="#4B3B52" stroke="#2E2036" stroke-width="2.5"/>
        <!-- White Face Inside -->
        <ellipse cx="50" cy="58" rx="27" ry="22" fill="#FFFFFF"/>
        <!-- Pink Skull Emblem on forehead -->
        <ellipse cx="50" cy="38" rx="6" ry="5.5" fill="#FF70A6"/>
        <circle cx="48" cy="38" r="1.2" fill="#2E2036"/>
        <circle cx="52" cy="38" r="1.2" fill="#2E2036"/>
        <!-- Mischievous Eyes -->
        <ellipse cx="40" cy="56" rx="3.5" ry="4.5" fill="#2E2036"/>
        <ellipse cx="60" cy="56" rx="3.5" ry="4.5" fill="#2E2036"/>
        <circle cx="39" cy="54" r="1.2" fill="#FFF"/>
        <circle cx="59" cy="54" r="1.2" fill="#FFF"/>
        <!-- Cheeky Smile -->
        <path d="M 46 64 Q 50 67 54 63" fill="none" stroke="#2E2036" stroke-width="2" stroke-linecap="round"/>
        <!-- Pink Blush -->
        <ellipse cx="32" cy="62" rx="4" ry="2.5" fill="#FF70A6" opacity="0.6"/>
        <ellipse cx="68" cy="62" rx="4" ry="2.5" fill="#FF70A6" opacity="0.6"/>
      </svg>
    `
  },
  {
    id: 'mymelody',
    name: '마이멜로디',
    accent: '#FF9EAA',
    welcome: '마이멜로디와 함께 즐거운 시간 보내요 🌸',
    reactions: {
      single: '딸기 사탕처럼 예뻐요! 🍓',
      double: '두 줄 팡팡! 신나요~ 🌸',
      triple: '꽃잎이 흩날리는 멋진 플레이! 💖',
      tetris: '🌸 와아! 마이멜로디의 핑크빛 테트리스! 🎉',
      gameover: '다정하게 안아줄게요.. 힘내요! 🌸'
    },
    svg: `
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Pink Hood Bunny Ears -->
        <path d="M 28 45 C 16 10, 36 2, 38 28 Z" fill="#FFAEC0" stroke="#D9637E" stroke-width="2.5"/>
        <!-- Floppy Right Ear -->
        <path d="M 72 45 C 76 15, 96 15, 88 35 C 84 42, 78 45, 72 45 Z" fill="#FFAEC0" stroke="#D9637E" stroke-width="2.5"/>
        <!-- Hood Head -->
        <ellipse cx="50" cy="56" rx="36" ry="32" fill="#FFAEC0" stroke="#D9637E" stroke-width="2.5"/>
        <!-- Yellow Daisy on right ear -->
        <circle cx="68" cy="38" r="5" fill="#FFE57F"/>
        <circle cx="68" cy="38" r="2.5" fill="#FFA000"/>
        <!-- White Face Inside Hood -->
        <ellipse cx="50" cy="60" rx="26" ry="21" fill="#FFFFFF"/>
        <!-- Eyes -->
        <ellipse cx="40" cy="58" rx="2.5" ry="3.5" fill="#3D2933"/>
        <ellipse cx="60" cy="58" rx="2.5" ry="3.5" fill="#3D2933"/>
        <!-- Yellow Oval Nose -->
        <ellipse cx="50" cy="63" rx="3" ry="2.2" fill="#FFC93C"/>
        <!-- Gentle Smile -->
        <path d="M 47 66 Q 50 68 53 66" fill="none" stroke="#3D2933" stroke-width="1.8" stroke-linecap="round"/>
        <!-- Pink Cheeks -->
        <ellipse cx="32" cy="63" rx="4" ry="2.5" fill="#FF6B8B" opacity="0.6"/>
        <ellipse cx="68" cy="63" rx="4" ry="2.5" fill="#FF6B8B" opacity="0.6"/>
      </svg>
    `
  },
  {
    id: 'snoopy',
    name: '스누키 (스누피)',
    accent: '#FF5E62',
    welcome: '안녕! 우드스탁이랑 맛있는 쿠키 먹으며 테트리스하자~ 🐾🍪',
    reactions: {
      single: '스누키의 해피 댄스 타임! 🐾💃',
      double: '우드스탁도 신나서 짹짹! 🐥✨',
      triple: '초코칩 쿠키 3개 획득! 🍪💖',
      tetris: '🎉 대박! 빨간 지붕 위 해피 테트리스 만세! 🐾⭐',
      gameover: '지붕 위에 누워서 낮잠 자고 다시 일어나면 돼~ 💤'
    },
    svg: `
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Tiny Woodstock friend sitting on head -->
        <ellipse cx="68" cy="22" rx="4.5" ry="5.5" fill="#FFE066" stroke="#C48800" stroke-width="1.2"/>
        <polygon points="63,22 58,24 63,26" fill="#FFB703"/>
        <circle cx="66" cy="20" r="0.9" fill="#2B2D42"/>
        <path d="M 68 16 Q 71 13 74 15" fill="none" stroke="#C48800" stroke-width="1.3"/>
        <!-- Snoopy Head -->
        <path d="M 52 28 C 66 28, 75 36, 75 50 C 75 66, 68 76, 56 80 C 46 80, 42 74, 38 72 C 30 70, 18 64, 18 50 C 18 40, 26 36, 36 36 C 42 36, 44 28, 52 28 Z" fill="#FFFFFF" stroke="#2B2D42" stroke-width="2.8"/>
        <!-- Black Nose -->
        <ellipse cx="18" cy="48" rx="4.8" ry="4" fill="#2B2D42"/>
        <!-- Smiling Closed Eye -->
        <path d="M 38 42 Q 43 38 48 43" fill="none" stroke="#2B2D42" stroke-width="2.4" stroke-linecap="round"/>
        <!-- Sweet Smile -->
        <path d="M 28 56 Q 37 63 46 56" fill="none" stroke="#2B2D42" stroke-width="2.2" stroke-linecap="round"/>
        <!-- Red Collar -->
        <path d="M 46 79 L 66 79" stroke="#E63946" stroke-width="5.5" stroke-linecap="round"/>
        <!-- Droopy Black Ear -->
        <path d="M 56 38 C 66 38, 74 46, 74 60 C 74 72, 64 74, 58 66 C 54 60, 52 46, 56 38 Z" fill="#2B2D42"/>
        <!-- Cute Pink Cheek Blush -->
        <ellipse cx="36" cy="50" rx="4" ry="2.5" fill="#FFA5AB" opacity="0.65"/>
      </svg>
    `
  }
];

// ==========================================
// 2. Pastel Tetromino Color & Theme Definitions
// ==========================================
const SHAPES = {
  I: [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  O: [
    [1, 1],
    [1, 1]
  ],
  T: [
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0]
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0]
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0]
  ],
  J: [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0]
  ],
  L: [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
  ]
};

const THEMES = {
  snoopy: {
    name: '🐾 스누키 & 피너츠',
    bgGradient: 'linear-gradient(135deg, #fff3e6 0%, #ffe8ec 50%, #fef3c7 100%)',
    tetrominoes: {
      I: { color: '#BAE6FD', lightColor: '#E0F2FE', darkColor: '#7DD3FC', borderColor: '#38BDF8', motif: 'bone' },
      O: { color: '#FDE047', lightColor: '#FEF08A', darkColor: '#EAB308', borderColor: '#CA8A04', motif: 'bird' },
      T: { color: '#FDA4AF', lightColor: '#FECDD3', darkColor: '#FB7185', borderColor: '#F43F5E', motif: 'heart' },
      S: { color: '#A7F3D0', lightColor: '#D1FAE5', darkColor: '#6EE7B7', borderColor: '#34D399', motif: 'leaf' },
      Z: { color: '#FF7B89', lightColor: '#FFCCD5', darkColor: '#E63946', borderColor: '#C92A2A', motif: 'doghouse' },
      J: { color: '#C4B5FD', lightColor: '#EDE9FE', darkColor: '#A78BFA', borderColor: '#8B5CF6', motif: 'cookie' },
      L: { color: '#FED7AA', lightColor: '#FFEDD5', darkColor: '#FB923C', borderColor: '#EA580C', motif: 'cookie' }
    }
  },
  sanrio: {
    name: '🎀 산리오 드림',
    bgGradient: 'linear-gradient(135deg, #ffeef8 0%, #f3e8ff 50%, #e3f4ff 100%)',
    tetrominoes: {
      I: { color: '#A5E4F8', lightColor: '#D3F4FF', darkColor: '#6EC3E6', borderColor: '#51B4DC', motif: 'cloud' },
      O: { color: '#FFE779', lightColor: '#FFF6C2', darkColor: '#F2D046', borderColor: '#DFB925', motif: 'pudding' },
      T: { color: '#D8B6F8', lightColor: '#EED9FF', darkColor: '#B682E6', borderColor: '#9E65D4', motif: 'heart' },
      S: { color: '#A7F3D0', lightColor: '#D1FAE5', darkColor: '#6EE7B7', borderColor: '#34D399', motif: 'leaf' },
      Z: { color: '#FFB3C6', lightColor: '#FFE0E9', darkColor: '#FF809F', borderColor: '#F45D83', motif: 'flower' },
      J: { color: '#BAC9FF', lightColor: '#E2E9FF', darkColor: '#93ABFF', borderColor: '#728EF5', motif: 'paw' },
      L: { color: '#FFCCBA', lightColor: '#FFE9DF', darkColor: '#FFAE94', borderColor: '#F28E6E', motif: 'ribbon' }
    }
  },
  kuromi: {
    name: '💜 쿠로미 고딕',
    bgGradient: 'linear-gradient(135deg, #f5e8ff 0%, #ede7f6 50%, #ffdbe9 100%)',
    tetrominoes: {
      I: { color: '#C4B5FD', lightColor: '#EDE9FE', darkColor: '#A78BFA', borderColor: '#7C3AED', motif: 'heart' },
      O: { color: '#DDD6FE', lightColor: '#F5F3FF', darkColor: '#C4B5FD', borderColor: '#8B5CF6', motif: 'skull' },
      T: { color: '#C084FC', lightColor: '#E9D5FF', darkColor: '#A855F7', borderColor: '#7E22CE', motif: 'heart' },
      S: { color: '#F472B6', lightColor: '#FCE7F3', darkColor: '#EC4899', borderColor: '#DB2777', motif: 'ribbon' },
      Z: { color: '#FB7185', lightColor: '#FFE4E6', darkColor: '#F43F5E', borderColor: '#E11D48', motif: 'skull' },
      J: { color: '#A78BFA', lightColor: '#DDD6FE', darkColor: '#8B5CF6', borderColor: '#6D28D9', motif: 'heart' },
      L: { color: '#E879F9', lightColor: '#FAE8FF', darkColor: '#D946EF', borderColor: '#C026D3', motif: 'ribbon' }
    }
  },
  purin: {
    name: '🍮 폼폼푸린 푸딩',
    bgGradient: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 50%, #ffedd5 100%)',
    tetrominoes: {
      I: { color: '#FDE68A', lightColor: '#FEF3C7', darkColor: '#FCD34D', borderColor: '#F59E0B', motif: 'pudding' },
      O: { color: '#FACC15', lightColor: '#FEF08A', darkColor: '#EAB308', borderColor: '#D97706', motif: 'pudding' },
      T: { color: '#FED7AA', lightColor: '#FFEDD5', darkColor: '#FB923C', borderColor: '#EA580C', motif: 'cookie' },
      S: { color: '#D9F99D', lightColor: '#ECFCCB', darkColor: '#BEF264', borderColor: '#84CC16', motif: 'leaf' },
      Z: { color: '#FECDD3', lightColor: '#FFE4E6', darkColor: '#FDA4AF', borderColor: '#F43F5E', motif: 'flower' },
      J: { color: '#FDBA74', lightColor: '#FFEDD5', darkColor: '#FB923C', borderColor: '#F97316', motif: 'pudding' },
      L: { color: '#FEF08A', lightColor: '#FEF9C3', darkColor: '#FDE047', borderColor: '#EAB308', motif: 'cookie' }
    }
  },
  cinnamoroll: {
    name: '☁️ 시나모롤 클라우드',
    bgGradient: 'linear-gradient(135deg, #eff6ff 0%, #e0f2fe 50%, #f0f9ff 100%)',
    tetrominoes: {
      I: { color: '#7DD3FC', lightColor: '#BAE6FD', darkColor: '#38BDF8', borderColor: '#0284C7', motif: 'cloud' },
      O: { color: '#BAE6FD', lightColor: '#E0F2FE', darkColor: '#7DD3FC', borderColor: '#0EA5E9', motif: 'cloud' },
      T: { color: '#C4B5FD', lightColor: '#EDE9FE', darkColor: '#A78BFA', borderColor: '#8B5CF6', motif: 'heart' },
      S: { color: '#99F6E4', lightColor: '#CCFBF1', darkColor: '#5EEAD4', borderColor: '#14B8A6', motif: 'cloud' },
      Z: { color: '#FBCFE8', lightColor: '#FCE7F3', darkColor: '#F472B6', borderColor: '#DB2777', motif: 'flower' },
      J: { color: '#A5B4FC', lightColor: '#E0E7FF', darkColor: '#818CF8', borderColor: '#6366F1', motif: 'paw' },
      L: { color: '#E9D5FF', lightColor: '#F5F3FF', darkColor: '#D8B4FE', borderColor: '#A855F7', motif: 'ribbon' }
    }
  }
};

const TETROMINOES = {};
function applyThemeToTetrominoes(themeKey = 'snoopy') {
  const theme = THEMES[themeKey] || THEMES.snoopy;
  for (const key of Object.keys(SHAPES)) {
    TETROMINOES[key] = {
      shape: SHAPES[key],
      ...theme.tetrominoes[key]
    };
  }
}
applyThemeToTetrominoes('snoopy');

const PIECE_KEYS = ['I', 'O', 'T', 'S', 'Z', 'J', 'L'];

// ==========================================
// 3. Web Audio Cute Sound Synthesizer
// ==========================================
class PastelSoundEngine {
  constructor() {
    this.ctx = null;
    this.sfxEnabled = true;
    this.bgmEnabled = true;
    this.bgmOsc = null;
    this.bgmTimer = null;
    this.bgmStep = 0;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play a soft cute chime or tone
  playTone(freq, type = 'sine', duration = 0.1, gainVal = 0.12) {
    if (!this.sfxEnabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Audio autoplay restrictions or errors
    }
  }

  playMove() {
    this.playTone(420, 'sine', 0.06, 0.08);
  }

  playRotate() {
    if (!this.sfxEnabled) return;
    this.init();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    [520, 680].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t + idx * 0.04);
      gain.gain.setValueAtTime(0.08, t + idx * 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + idx * 0.04 + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t + idx * 0.04);
      osc.stop(t + idx * 0.04 + 0.08);
    });
  }

  playDrop() {
    this.playTone(180, 'triangle', 0.1, 0.15);
  }

  playHold() {
    if (!this.sfxEnabled) return;
    this.init();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    [440, 587].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t + idx * 0.05);
      gain.gain.setValueAtTime(0.09, t + idx * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + idx * 0.05 + 0.1);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t + idx * 0.05);
      osc.stop(t + idx * 0.05 + 0.1);
    });
  }

  playLineClear(linesCount) {
    if (!this.sfxEnabled) return;
    this.init();
    if (!this.ctx) return;

    // Sweet ascending music scale
    const baseFreqs = linesCount === 4 
      ? [523, 659, 784, 987, 1046, 1318] // Tetris Fanfare!
      : [523, 659, 784, 1046].slice(0, linesCount + 1);

    const t = this.ctx.currentTime;
    baseFreqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, t + idx * 0.065);
      gain.gain.setValueAtTime(0.12, t + idx * 0.065);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + idx * 0.065 + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t + idx * 0.065);
      osc.stop(t + idx * 0.065 + 0.22);
    });
  }

  playGameOver() {
    if (!this.sfxEnabled) return;
    this.init();
    if (!this.ctx) return;
    const freqs = [659, 587, 523, 440, 349];
    const t = this.ctx.currentTime;
    freqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t + idx * 0.12);
      gain.gain.setValueAtTime(0.1, t + idx * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + idx * 0.12 + 0.18);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t + idx * 0.12);
      osc.stop(t + idx * 0.12 + 0.2);
    });
  }

  // Soft Pastel Chiptune Background Melody Loop
  startBgm() {
    if (!this.bgmEnabled || this.bgmTimer) return;
    this.init();
    if (!this.ctx) return;

    // Gentle Kawaii Lullaby Theme (notes in Hz: C4, E4, G4, A4, C5, D5...)
    const melody = [
      523.25, 0, 659.25, 523.25, 783.99, 0, 659.25, 0,
      880.00, 0, 783.99, 0, 659.25, 0, 587.33, 0,
      523.25, 0, 587.33, 659.25, 783.99, 0, 880.00, 0,
      1046.50, 0, 880.00, 783.99, 659.25, 587.33, 523.25, 0
    ];

    this.bgmStep = 0;
    this.bgmTimer = setInterval(() => {
      if (!this.bgmEnabled || !this.ctx) return;
      const freq = melody[this.bgmStep % melody.length];
      this.bgmStep++;
      if (freq > 0) {
        try {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
          gain.gain.setValueAtTime(0.03, this.ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.22);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start();
          osc.stop(this.ctx.currentTime + 0.23);
        } catch (e) {}
      }
    }, 240);
  }

  stopBgm() {
    if (this.bgmTimer) {
      clearInterval(this.bgmTimer);
      this.bgmTimer = null;
    }
  }

  toggleSfx() {
    this.sfxEnabled = !this.sfxEnabled;
    return this.sfxEnabled;
  }

  toggleBgm() {
    this.bgmEnabled = !this.bgmEnabled;
    if (this.bgmEnabled) {
      this.startBgm();
    } else {
      this.stopBgm();
    }
    return this.bgmEnabled;
  }
}

// ==========================================
// 4. Particle Effects Engine (Confetti & Sparkles)
// ==========================================
class ParticleEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
  }

  spawnClearEffects(clearedRows, blockHeight) {
    const pastelColors = ['#FF9AA2', '#FFB7B2', '#FFDAC1', '#E2F0CB', '#B5EAD7', '#C7CEEA', '#FFF192'];
    clearedRows.forEach(row => {
      const y = row * blockHeight + blockHeight / 2;
      for (let i = 0; i < 28; i++) {
        const x = Math.random() * this.canvas.width;
        this.particles.push({
          x: x,
          y: y,
          vx: (Math.random() - 0.5) * 6,
          vy: (Math.random() - 0.7) * 7,
          size: Math.random() * 7 + 4,
          color: pastelColors[Math.floor(Math.random() * pastelColors.length)],
          alpha: 1,
          decay: Math.random() * 0.02 + 0.015,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.2,
          type: Math.random() > 0.4 ? 'star' : 'heart'
        });
      }
    });
  }

  updateAndDraw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.18; // gravity
      p.rotation += p.rotSpeed;
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate(p.rotation);
      this.ctx.globalAlpha = Math.max(0, p.alpha);
      this.ctx.fillStyle = p.color;

      if (p.type === 'heart') {
        // Draw cute little heart
        const s = p.size / 2;
        this.ctx.beginPath();
        this.ctx.moveTo(0, s / 2);
        this.ctx.bezierCurveTo(-s, -s, -s * 1.5, s / 2, 0, s * 1.5);
        this.ctx.bezierCurveTo(s * 1.5, s / 2, s, -s, 0, s / 2);
        this.ctx.fill();
      } else {
        // Draw 4-point sparkle star
        const r = p.size;
        this.ctx.beginPath();
        for (let j = 0; j < 4; j++) {
          this.ctx.lineTo(Math.cos(j * Math.PI / 2) * r, Math.sin(j * Math.PI / 2) * r);
          this.ctx.lineTo(Math.cos(j * Math.PI / 2 + Math.PI / 4) * (r * 0.3), Math.sin(j * Math.PI / 2 + Math.PI / 4) * (r * 0.3));
        }
        this.ctx.closePath();
        this.ctx.fill();
      }

      this.ctx.restore();
    }
  }
}

// ==========================================
// 5. Main Game Controller
// ==========================================
class SanrioTetrisGame {
  constructor() {
    // Canvases
    this.boardCanvas = document.getElementById('tetrisCanvas');
    this.boardCtx = this.boardCanvas.getContext('2d');
    this.nextCanvas = document.getElementById('nextCanvas');
    this.nextCtx = this.nextCanvas.getContext('2d');
    this.holdCanvas = document.getElementById('holdCanvas');
    this.holdCtx = this.holdCanvas.getContext('2d');
    this.effectCanvas = document.getElementById('effectCanvas');

    // Board Dimensions
    this.COLS = 10;
    this.ROWS = 20;
    this.BLOCK_SIZE = this.boardCanvas.width / this.COLS; // 300 / 10 = 30px

    // Systems
    this.sound = new PastelSoundEngine();
    this.particles = new ParticleEngine(this.effectCanvas);

    // Game State
    this.board = [];
    this.currentPiece = null;
    this.currentPos = { x: 0, y: 0 };
    this.holdPiece = null;
    this.canHold = true;
    this.nextQueue = [];
    this.bag = [];

    this.score = 0;
    this.highScore = parseInt(localStorage.getItem('sanrio_tetris_highscore') || '0', 10);
    this.lines = 0;
    this.level = 1;
    this.combo = 0;

    this.isPlaying = false;
    this.isPaused = false;
    this.isGameOver = false;

    // Timing & Fall Rate
    this.dropInterval = 850; // ms per step
    this.lastDropTime = 0;
    this.lockDelay = 500;
    this.lockTimer = null;
    this.isLocking = false;

    // Active Mascot Companion & Theme
    const snoopyIdx = SANRIO_CHARACTERS.findIndex(c => c.id === 'snoopy');
    this.currentCharIndex = snoopyIdx !== -1 ? snoopyIdx : 0;
    this.currentTheme = 'snoopy';

    // DOM References
    this.scoreValEl = document.getElementById('scoreVal');
    this.highScoreValEl = document.getElementById('highScoreVal');
    this.levelValEl = document.getElementById('levelVal');
    this.linesValEl = document.getElementById('linesVal');
    this.mascotWrapper = document.getElementById('mascotWrapper');
    this.mascotSvgContainer = document.getElementById('mascotSvgContainer');
    this.mascotNameEl = document.getElementById('mascotName');
    this.mascotSpeechEl = document.getElementById('mascotSpeech');
    this.changeCharBtn = document.getElementById('changeCharBtn');
    this.themeSelectEl = document.getElementById('themeSelect');

    this.startOverlay = document.getElementById('startOverlay');
    this.pauseOverlay = document.getElementById('pauseOverlay');
    this.gameOverOverlay = document.getElementById('gameOverOverlay');
    this.finalScoreText = document.getElementById('finalScoreText');

    this.startBtn = document.getElementById('startBtn');
    this.resumeBtn = document.getElementById('resumeBtn');
    this.restartBtn = document.getElementById('restartBtn');
    this.sfxToggleBtn = document.getElementById('sfxToggleBtn');
    this.bgmToggleBtn = document.getElementById('bgmToggleBtn');

    this.init();
  }

  init() {
    this.initBoard();
    this.updateStatsUI();
    this.initMascot();
    this.initBgDecorations();
    this.attachEventListeners();

    if (this.themeSelectEl) {
      this.themeSelectEl.value = this.currentTheme;
    }
    this.setTheme(this.currentTheme, false);
    this.render();

    // Start Animation Loop
    requestAnimationFrame((t) => this.gameLoop(t));
  }

  setTheme(themeKey, playSound = true) {
    if (!THEMES[themeKey]) return;
    this.currentTheme = themeKey;
    applyThemeToTetrominoes(themeKey);

    const theme = THEMES[themeKey];
    document.body.style.background = theme.bgGradient;

    if (this.currentPiece) {
      this.currentPiece.def = TETROMINOES[this.currentPiece.type];
    }

    // Auto-match mascot if theme matches
    const charMap = {
      snoopy: 'snoopy',
      sanrio: 'kitty',
      kuromi: 'kuromi',
      purin: 'purin',
      cinnamoroll: 'cinnamoroll'
    };
    if (charMap[themeKey]) {
      const idx = SANRIO_CHARACTERS.findIndex(c => c.id === charMap[themeKey]);
      if (idx !== -1) {
        this.currentCharIndex = idx;
        this.initMascot();
      }
    }

    this.renderNextQueue();
    this.renderHoldQueue();
    this.render();
    if (playSound) {
      this.sound.playRotate();
    }
  }

  initBoard() {
    this.board = Array.from({ length: this.ROWS }, () => Array(this.COLS).fill(null));
  }

  initMascot() {
    const char = SANRIO_CHARACTERS[this.currentCharIndex];
    this.mascotSvgContainer.innerHTML = char.svg;
    this.mascotNameEl.textContent = char.name;
    this.mascotSpeechEl.textContent = `"${char.welcome}"`;
  }

  cycleMascot() {
    this.currentCharIndex = (this.currentCharIndex + 1) % SANRIO_CHARACTERS.length;
    this.initMascot();
    this.triggerMascotHappy();
    this.sound.playRotate();
  }

  triggerMascotHappy() {
    this.mascotSvgContainer.classList.remove('happy-anim');
    void this.mascotSvgContainer.offsetWidth; // re-flow
    this.mascotSvgContainer.classList.add('happy-anim');
  }

  say(message) {
    this.mascotSpeechEl.textContent = `"${message}"`;
    this.triggerMascotHappy();
  }

  initBgDecorations() {
    const container = document.getElementById('bgDecorations');
    const icons = ['🌸', '✨', '🎀', '☁️', '🍮', '🍭', '⭐', '💖', '🐾'];
    for (let i = 0; i < 18; i++) {
      const dec = document.createElement('div');
      dec.className = 'floating-dec';
      dec.textContent = icons[Math.floor(Math.random() * icons.length)];
      dec.style.left = `${Math.random() * 95}vw`;
      dec.style.animationDelay = `${Math.random() * 12}s`;
      dec.style.animationDuration = `${10 + Math.random() * 8}s`;
      container.appendChild(dec);
    }
  }

  startGame() {
    this.initBoard();
    this.score = 0;
    this.lines = 0;
    this.level = 1;
    this.combo = 0;
    this.dropInterval = 850;
    this.holdPiece = null;
    this.canHold = true;
    this.nextQueue = [];
    this.bag = [];
    this.isPlaying = true;
    this.isPaused = false;
    this.isGameOver = false;

    // Fill Next Queue (3 pieces)
    for (let i = 0; i < 3; i++) {
      this.nextQueue.push(this.getNextPieceFromBag());
    }
    this.spawnPiece();

    this.startOverlay.classList.add('hidden');
    this.pauseOverlay.classList.add('hidden');
    this.gameOverOverlay.classList.add('hidden');

    this.updateStatsUI();
    this.say('게임 시작! 화이팅이에요~ ✨');
    this.sound.startBgm();
  }

  pauseGame() {
    if (!this.isPlaying || this.isGameOver) return;
    this.isPaused = true;
    this.pauseOverlay.classList.remove('hidden');
    this.sound.stopBgm();
  }

  resumeGame() {
    if (!this.isPlaying || this.isGameOver) return;
    this.isPaused = false;
    this.pauseOverlay.classList.add('hidden');
    this.lastDropTime = performance.now();
    this.sound.startBgm();
  }

  togglePause() {
    if (this.isPaused) this.resumeGame();
    else this.pauseGame();
  }

  gameOver() {
    this.isPlaying = false;
    this.isGameOver = true;
    this.sound.stopBgm();
    this.sound.playGameOver();

    if (this.score > this.highScore) {
      this.highScore = this.score;
      localStorage.setItem('sanrio_tetris_highscore', this.highScore.toString());
    }
    this.updateStatsUI();

    const char = SANRIO_CHARACTERS[this.currentCharIndex];
    this.say(char.reactions.gameover);

    this.finalScoreText.textContent = `최종 점수: ${this.score.toLocaleString()}점 🌟`;
    this.gameOverOverlay.classList.remove('hidden');
  }

  // 7-Bag Randomizer
  getNextPieceFromBag() {
    if (this.bag.length === 0) {
      this.bag = [...PIECE_KEYS];
      // Fisher-Yates shuffle
      for (let i = this.bag.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.bag[i], this.bag[j]] = [this.bag[j], this.bag[i]];
      }
    }
    return this.bag.pop();
  }

  spawnPiece() {
    const nextType = this.nextQueue.shift();
    this.nextQueue.push(this.getNextPieceFromBag());

    const pieceDef = TETROMINOES[nextType];
    this.currentPiece = {
      type: nextType,
      matrix: pieceDef.shape.map(row => [...row]),
      def: pieceDef
    };

    // Center piece at top
    this.currentPos = {
      x: Math.floor((this.COLS - this.currentPiece.matrix[0].length) / 2),
      y: 0
    };

    this.canHold = true;
    this.isLocking = false;

    // Check collision on spawn -> Game Over
    if (this.checkCollision(this.currentPiece.matrix, this.currentPos.x, this.currentPos.y)) {
      this.gameOver();
    }

    this.renderNextQueue();
    this.renderHoldQueue();
  }

  hold() {
    if (!this.canHold || !this.isPlaying || this.isPaused) return;

    this.sound.playHold();
    const currentType = this.currentPiece.type;

    if (this.holdPiece === null) {
      this.holdPiece = currentType;
      this.spawnPiece();
    } else {
      const temp = this.holdPiece;
      this.holdPiece = currentType;
      
      const pieceDef = TETROMINOES[temp];
      this.currentPiece = {
        type: temp,
        matrix: pieceDef.shape.map(row => [...row]),
        def: pieceDef
      };
      this.currentPos = {
        x: Math.floor((this.COLS - this.currentPiece.matrix[0].length) / 2),
        y: 0
      };
      this.renderHoldQueue();
    }

    this.canHold = false;
  }

  checkCollision(matrix, offsetX, offsetY) {
    for (let r = 0; r < matrix.length; r++) {
      for (let c = 0; c < matrix[r].length; c++) {
        if (matrix[r][c]) {
          const newX = offsetX + c;
          const newY = offsetY + r;

          // Wall and Floor bounds
          if (newX < 0 || newX >= this.COLS || newY >= this.ROWS) {
            return true;
          }
          // Board cells already occupied
          if (newY >= 0 && this.board[newY][newX] !== null) {
            return true;
          }
        }
      }
    }
    return false;
  }

  moveLeft() {
    if (!this.checkCollision(this.currentPiece.matrix, this.currentPos.x - 1, this.currentPos.y)) {
      this.currentPos.x--;
      this.sound.playMove();
      this.resetLockDelayIfMoved();
    }
  }

  moveRight() {
    if (!this.checkCollision(this.currentPiece.matrix, this.currentPos.x + 1, this.currentPos.y)) {
      this.currentPos.x++;
      this.sound.playMove();
      this.resetLockDelayIfMoved();
    }
  }

  moveDown() {
    if (!this.checkCollision(this.currentPiece.matrix, this.currentPos.x, this.currentPos.y + 1)) {
      this.currentPos.y++;
      this.score += 1; // Soft drop bonus
      this.updateStatsUI();
      return true;
    } else {
      this.startLockCountdown();
      return false;
    }
  }

  hardDrop() {
    if (!this.isPlaying || this.isPaused || !this.currentPiece) return;
    let dropDistance = 0;
    while (!this.checkCollision(this.currentPiece.matrix, this.currentPos.x, this.currentPos.y + 1)) {
      this.currentPos.y++;
      dropDistance++;
    }
    this.score += dropDistance * 2; // Hard drop bonus
    this.sound.playDrop();
    this.lockPiece();
  }

  rotateClockwise() {
    if (!this.currentPiece) return;
    const original = this.currentPiece.matrix;
    const N = original.length;
    const rotated = Array.from({ length: N }, () => Array(N).fill(0));

    for (let r = 0; r < N; r++) {
      for (let c = 0; c < N; c++) {
        rotated[c][N - 1 - r] = original[r][c];
      }
    }

    // Basic SRS Wall-kick attempts
    const kicks = [0, 1, -1, 2, -2];
    for (let offset of kicks) {
      if (!this.checkCollision(rotated, this.currentPos.x + offset, this.currentPos.y)) {
        this.currentPiece.matrix = rotated;
        this.currentPos.x += offset;
        this.sound.playRotate();
        this.resetLockDelayIfMoved();
        return;
      }
    }
  }

  rotateCounterClockwise() {
    if (!this.currentPiece) return;
    const original = this.currentPiece.matrix;
    const N = original.length;
    const rotated = Array.from({ length: N }, () => Array(N).fill(0));

    for (let r = 0; r < N; r++) {
      for (let c = 0; c < N; c++) {
        rotated[N - 1 - c][r] = original[r][c];
      }
    }

    const kicks = [0, 1, -1, 2, -2];
    for (let offset of kicks) {
      if (!this.checkCollision(rotated, this.currentPos.x + offset, this.currentPos.y)) {
        this.currentPiece.matrix = rotated;
        this.currentPos.x += offset;
        this.sound.playRotate();
        this.resetLockDelayIfMoved();
        return;
      }
    }
  }

  resetLockDelayIfMoved() {
    if (this.isLocking) {
      clearTimeout(this.lockTimer);
      this.isLocking = false;
    }
  }

  startLockCountdown() {
    if (this.isLocking) return;
    this.isLocking = true;
    this.lockTimer = setTimeout(() => {
      if (this.checkCollision(this.currentPiece.matrix, this.currentPos.x, this.currentPos.y + 1)) {
        this.lockPiece();
      }
      this.isLocking = false;
    }, this.lockDelay);
  }

  lockPiece() {
    if (this.lockTimer) {
      clearTimeout(this.lockTimer);
      this.isLocking = false;
    }

    // Merge piece into board
    const m = this.currentPiece.matrix;
    for (let r = 0; r < m.length; r++) {
      for (let c = 0; c < m[r].length; c++) {
        if (m[r][c]) {
          const boardY = this.currentPos.y + r;
          const boardX = this.currentPos.x + c;
          if (boardY >= 0 && boardY < this.ROWS && boardX >= 0 && boardX < this.COLS) {
            this.board[boardY][boardX] = this.currentPiece.type;
          }
        }
      }
    }

    this.clearLines();
    this.spawnPiece();
  }

  clearLines() {
    const clearedRows = [];
    for (let r = this.ROWS - 1; r >= 0; r--) {
      if (this.board[r].every(cell => cell !== null)) {
        clearedRows.push(r);
      }
    }

    if (clearedRows.length > 0) {
      // Remove cleared rows and push empty rows to top
      clearedRows.forEach(rowIndex => {
        this.board.splice(rowIndex, 1);
        this.board.unshift(Array(this.COLS).fill(null));
      });

      const count = clearedRows.length;
      this.lines += count;
      this.combo++;

      // Scoring (Standard Nintendo/Tetris Guidelines with cute bonuses)
      const baseScores = [0, 100, 300, 500, 800];
      const lineScore = (baseScores[count] || 800) * this.level;
      const comboBonus = (this.combo > 1) ? (this.combo * 50 * this.level) : 0;
      this.score += lineScore + comboBonus;

      // Level Progression (Every 10 lines)
      this.level = Math.floor(this.lines / 10) + 1;
      this.dropInterval = Math.max(120, 850 - (this.level - 1) * 75);

      // Sound & Particle Celebration
      this.sound.playLineClear(count);
      this.particles.spawnClearEffects(clearedRows, this.BLOCK_SIZE);

      // Character Mascot Reaction
      const char = SANRIO_CHARACTERS[this.currentCharIndex];
      if (count === 1) this.say(char.reactions.single);
      else if (count === 2) this.say(char.reactions.double);
      else if (count === 3) this.say(char.reactions.triple);
      else if (count === 4) this.say(char.reactions.tetris);

      this.updateStatsUI();
    } else {
      this.combo = 0;
    }
  }

  // Calculate Ghost Piece (Where piece will land)
  getGhostPosition() {
    if (!this.currentPiece) return this.currentPos;
    let ghostY = this.currentPos.y;
    while (!this.checkCollision(this.currentPiece.matrix, this.currentPos.x, ghostY + 1)) {
      ghostY++;
    }
    return { x: this.currentPos.x, y: ghostY };
  }

  updateStatsUI() {
    this.scoreValEl.textContent = this.score.toLocaleString();
    this.highScoreValEl.textContent = this.highScore.toLocaleString();
    this.levelValEl.textContent = this.level;
    this.linesValEl.textContent = this.lines;
  }

  // ==========================================
  // 6. Drawing & Rendering
  // ==========================================
  render() {
    this.boardCtx.clearRect(0, 0, this.boardCanvas.width, this.boardCanvas.height);
    this.drawGrid();
    this.drawBoardBlocks();
    this.drawGhostPiece();
    this.drawActivePiece();
  }

  drawGrid() {
    this.boardCtx.strokeStyle = 'rgba(255, 192, 203, 0.18)';
    this.boardCtx.lineWidth = 1;

    for (let c = 0; c <= this.COLS; c++) {
      this.boardCtx.beginPath();
      this.boardCtx.moveTo(c * this.BLOCK_SIZE, 0);
      this.boardCtx.lineTo(c * this.BLOCK_SIZE, this.boardCanvas.height);
      this.boardCtx.stroke();
    }
    for (let r = 0; r <= this.ROWS; r++) {
      this.boardCtx.beginPath();
      this.boardCtx.moveTo(0, r * this.BLOCK_SIZE);
      this.boardCtx.lineTo(this.boardCanvas.width, r * this.BLOCK_SIZE);
      this.boardCtx.stroke();
    }
  }

  drawBoardBlocks() {
    for (let r = 0; r < this.ROWS; r++) {
      for (let c = 0; c < this.COLS; c++) {
        const type = this.board[r][c];
        if (type) {
          this.drawPastelBlock(this.boardCtx, c * this.BLOCK_SIZE, r * this.BLOCK_SIZE, this.BLOCK_SIZE, TETROMINOES[type]);
        }
      }
    }
  }

  drawGhostPiece() {
    if (!this.isPlaying || this.isPaused || !this.currentPiece) return;
    const ghost = this.getGhostPosition();
    if (ghost.y === this.currentPos.y) return; // Don't draw if already at bottom

    const m = this.currentPiece.matrix;
    const def = this.currentPiece.def;
    for (let r = 0; r < m.length; r++) {
      for (let c = 0; c < m[r].length; c++) {
        if (m[r][c]) {
          const x = (ghost.x + c) * this.BLOCK_SIZE;
          const y = (ghost.y + r) * this.BLOCK_SIZE;
          this.drawGhostBlock(this.boardCtx, x, y, this.BLOCK_SIZE, def);
        }
      }
    }
  }

  drawActivePiece() {
    if (!this.isPlaying || !this.currentPiece) return;
    const m = this.currentPiece.matrix;
    const def = this.currentPiece.def;
    for (let r = 0; r < m.length; r++) {
      for (let c = 0; c < m[r].length; c++) {
        if (m[r][c]) {
          const x = (this.currentPos.x + c) * this.BLOCK_SIZE;
          const y = (this.currentPos.y + r) * this.BLOCK_SIZE;
          this.drawPastelBlock(this.boardCtx, x, y, this.BLOCK_SIZE, def);
        }
      }
    }
  }

  // Draw Cute Pastel Candy Tile with Bevel & Embossed Motif
  drawPastelBlock(ctx, x, y, size, def, alpha = 1) {
    ctx.save();
    ctx.globalAlpha = alpha;

    const pad = 1.5;
    const s = size - pad * 2;
    const bx = x + pad;
    const by = y + pad;
    const radius = 6;

    // Rounded Box Base
    ctx.beginPath();
    ctx.roundRect(bx, by, s, s, radius);
    ctx.fillStyle = def.color;
    ctx.fill();

    // Top-left Gloss Highlight
    const grad = ctx.createLinearGradient(bx, by, bx, by + s);
    grad.addColorStop(0, def.lightColor);
    grad.addColorStop(0.5, def.color);
    grad.addColorStop(1, def.darkColor);
    ctx.fillStyle = grad;
    ctx.fill();

    // Delicate Outline
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = def.borderColor;
    ctx.stroke();

    // Embossed cute motif inside block
    this.drawMotif(ctx, bx + s / 2, by + s / 2, s * 0.45, def.motif, def.borderColor);

    ctx.restore();
  }

  drawGhostBlock(ctx, x, y, size, def) {
    ctx.save();
    const pad = 2;
    const s = size - pad * 2;
    const bx = x + pad;
    const by = y + pad;

    ctx.beginPath();
    ctx.roundRect(bx, by, s, s, 6);
    ctx.fillStyle = def.color;
    ctx.globalAlpha = 0.22;
    ctx.fill();

    ctx.lineWidth = 1.5;
    ctx.strokeStyle = def.borderColor;
    ctx.globalAlpha = 0.55;
    ctx.setLineDash([3, 3]);
    ctx.stroke();

    ctx.restore();
  }

  // Draw Cute Pastel Icons inside Blocks (Star, Heart, Cloud, Ribbon, etc.)
  drawMotif(ctx, cx, cy, size, motif, strokeColor) {
    ctx.save();
    ctx.strokeStyle = strokeColor;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
    ctx.lineWidth = 1.2;

    const s = size / 2;

    switch (motif) {
      case 'ribbon': // Kitty's Ribbon
        ctx.beginPath();
        ctx.arc(cx, cy, s * 0.35, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(cx - s * 0.3, cy);
        ctx.lineTo(cx - s * 0.9, cy - s * 0.6);
        ctx.lineTo(cx - s * 0.9, cy + s * 0.6);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(cx + s * 0.3, cy);
        ctx.lineTo(cx + s * 0.9, cy - s * 0.6);
        ctx.lineTo(cx + s * 0.9, cy + s * 0.6);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        break;

      case 'heart': // Kuromi's Sweet Heart
        ctx.beginPath();
        ctx.moveTo(cx, cy + s * 0.5);
        ctx.bezierCurveTo(cx - s, cy - s * 0.2, cx - s * 0.8, cy - s * 0.8, cx, cy - s * 0.3);
        ctx.bezierCurveTo(cx + s * 0.8, cy - s * 0.8, cx + s, cy - s * 0.2, cx, cy + s * 0.5);
        ctx.fill();
        ctx.stroke();
        break;

      case 'cloud': // Cinnamoroll's Fluffy Cloud
        ctx.beginPath();
        ctx.arc(cx - s * 0.4, cy, s * 0.35, Math.PI * 0.5, Math.PI * 1.5);
        ctx.arc(cx, cy - s * 0.3, s * 0.4, Math.PI, Math.PI * 2);
        ctx.arc(cx + s * 0.4, cy, s * 0.35, Math.PI * 1.5, Math.PI * 0.5);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        break;

      case 'pudding': // Pompompurin's Pudding
        ctx.beginPath();
        ctx.moveTo(cx - s * 0.5, cy + s * 0.5);
        ctx.lineTo(cx - s * 0.35, cy - s * 0.3);
        ctx.lineTo(cx + s * 0.35, cy - s * 0.3);
        ctx.lineTo(cx + s * 0.5, cy + s * 0.5);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        // Beret dot
        ctx.beginPath();
        ctx.arc(cx, cy - s * 0.45, s * 0.18, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        break;

      case 'flower': // My Melody's Flower
        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
          const angle = (i * Math.PI * 2) / 5;
          const px = cx + Math.cos(angle) * (s * 0.5);
          const py = cy + Math.sin(angle) * (s * 0.5);
          ctx.arc(px, py, s * 0.25, 0, Math.PI * 2);
        }
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(cx, cy, s * 0.2, 0, Math.PI * 2);
        ctx.fillStyle = '#FFE57F';
        ctx.fill();
        ctx.stroke();
        break;

      case 'bone': // Snoopy's Bone
        ctx.beginPath();
        ctx.roundRect(cx - s * 0.65, cy - s * 0.2, s * 1.3, s * 0.4, 3);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(cx - s * 0.65, cy - s * 0.22, s * 0.2, 0, Math.PI * 2);
        ctx.arc(cx - s * 0.65, cy + s * 0.22, s * 0.2, 0, Math.PI * 2);
        ctx.arc(cx + s * 0.65, cy - s * 0.22, s * 0.2, 0, Math.PI * 2);
        ctx.arc(cx + s * 0.65, cy + s * 0.22, s * 0.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        break;

      case 'bird': // Woodstock cute bird crest
        ctx.beginPath();
        ctx.arc(cx, cy, s * 0.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(cx - s * 0.35, cy);
        ctx.lineTo(cx - s * 0.75, cy + s * 0.1);
        ctx.lineTo(cx - s * 0.35, cy + s * 0.25);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        break;

      case 'doghouse': // Snoopy's Red Roof
        ctx.beginPath();
        ctx.moveTo(cx, cy - s * 0.65);
        ctx.lineTo(cx - s * 0.75, cy + s * 0.45);
        ctx.lineTo(cx + s * 0.75, cy + s * 0.45);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        break;

      case 'cookie': // Choco Chip Cookie
        ctx.beginPath();
        ctx.arc(cx, cy, s * 0.65, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        // Chips
        ctx.fillStyle = strokeColor;
        [[-s * 0.25, -s * 0.2], [s * 0.25, -s * 0.1], [0, s * 0.25]].forEach(([dx, dy]) => {
          ctx.beginPath();
          ctx.arc(cx + dx, cy + dy, s * 0.1, 0, Math.PI * 2);
          ctx.fill();
        });
        break;

      case 'skull': // Kuromi's Skull
        ctx.beginPath();
        ctx.arc(cx, cy - s * 0.1, s * 0.45, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.roundRect(cx - s * 0.25, cy + s * 0.2, s * 0.5, s * 0.28, 2);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = strokeColor;
        ctx.beginPath();
        ctx.arc(cx - s * 0.16, cy - s * 0.1, s * 0.1, 0, Math.PI * 2);
        ctx.arc(cx + s * 0.16, cy - s * 0.1, s * 0.1, 0, Math.PI * 2);
        ctx.fill();
        break;

      case 'leaf': // Clover / Leaf
        ctx.beginPath();
        ctx.ellipse(cx, cy, s * 0.35, s * 0.6, Math.PI / 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        break;

      case 'paw': // Cute Paw
        ctx.beginPath();
        ctx.ellipse(cx, cy + s * 0.2, s * 0.4, s * 0.32, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        [[-s * 0.35, -s * 0.2], [-s * 0.12, -s * 0.4], [s * 0.12, -s * 0.4], [s * 0.35, -s * 0.2]].forEach(([px, py]) => {
          ctx.beginPath();
          ctx.ellipse(cx + px, cy + py, s * 0.14, s * 0.18, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        });
        break;

      default: // Star / Sparkle
        ctx.beginPath();
        ctx.arc(cx, cy, s * 0.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        break;
    }
    ctx.restore();
  }

  // Render Next Queue Mini Canvas
  renderNextQueue() {
    this.nextCtx.clearRect(0, 0, this.nextCanvas.width, this.nextCanvas.height);
    const miniSize = 20;

    this.nextQueue.forEach((type, idx) => {
      const def = TETROMINOES[type];
      const shape = def.shape;
      const pieceW = shape[0].length * miniSize;
      const pieceH = shape.length * miniSize;
      const startX = (this.nextCanvas.width - pieceW) / 2;
      const startY = 16 + idx * 75;

      for (let r = 0; r < shape.length; r++) {
        for (let c = 0; c < shape[r].length; c++) {
          if (shape[r][c]) {
            this.drawPastelBlock(this.nextCtx, startX + c * miniSize, startY + r * miniSize, miniSize, def);
          }
        }
      }
    });
  }

  // Render Hold Queue Mini Canvas
  renderHoldQueue() {
    this.holdCtx.clearRect(0, 0, this.holdCanvas.width, this.holdCanvas.height);
    if (!this.holdPiece) return;

    const def = TETROMINOES[this.holdPiece];
    const shape = def.shape;
    const miniSize = 22;
    const pieceW = shape[0].length * miniSize;
    const pieceH = shape.length * miniSize;
    const startX = (this.holdCanvas.width - pieceW) / 2;
    const startY = (this.holdCanvas.height - pieceH) / 2;

    for (let r = 0; r < shape.length; r++) {
      for (let c = 0; c < shape[r].length; c++) {
        if (shape[r][c]) {
          this.drawPastelBlock(this.holdCtx, startX + c * miniSize, startY + r * miniSize, miniSize, def, this.canHold ? 1 : 0.45);
        }
      }
    }
  }

  // ==========================================
  // 7. Main Game Loop
  // ==========================================
  gameLoop(timestamp) {
    if (this.isPlaying && !this.isPaused) {
      if (timestamp - this.lastDropTime > this.dropInterval) {
        this.moveDown();
        this.lastDropTime = timestamp;
      }
    }

    this.render();
    this.particles.updateAndDraw();

    requestAnimationFrame((t) => this.gameLoop(t));
  }

  // ==========================================
  // 8. Event Listeners & Input Handling
  // ==========================================
  attachEventListeners() {
    // Keyboard Controls
    window.addEventListener('keydown', (e) => {
      // Allow audio start on any interaction
      this.sound.init();

      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
        e.preventDefault();
      }

      if (!this.isPlaying) {
        if (e.key === 'Enter' || e.key === ' ') {
          this.startGame();
        }
        return;
      }

      if (e.key === 'p' || e.key === 'P') {
        this.togglePause();
        return;
      }

      if (this.isPaused) return;

      switch (e.key) {
        case 'ArrowLeft':
        case 'a':
        case 'A':
          this.moveLeft();
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          this.moveRight();
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          this.moveDown();
          break;
        case 'ArrowUp':
        case 'x':
        case 'X':
        case 'w':
        case 'W':
          this.rotateClockwise();
          break;
        case 'z':
        case 'Z':
          this.rotateCounterClockwise();
          break;
        case ' ':
          this.hardDrop();
          break;
        case 'c':
        case 'C':
        case 'Shift':
          this.hold();
          break;
      }
    });

    // Button Click Controls
    this.startBtn.addEventListener('click', () => this.startGame());
    this.resumeBtn.addEventListener('click', () => this.resumeGame());
    this.restartBtn.addEventListener('click', () => this.startGame());

    this.mascotWrapper.addEventListener('click', () => this.cycleMascot());
    this.changeCharBtn.addEventListener('click', () => this.cycleMascot());

    // Sound Toggles
    this.sfxToggleBtn.addEventListener('click', () => {
      const active = this.sound.toggleSfx();
      this.sfxToggleBtn.classList.toggle('active', active);
      this.sfxToggleBtn.textContent = active ? '🔊 SFX' : '🔇 SFX';
    });

    this.bgmToggleBtn.addEventListener('click', () => {
      const active = this.sound.toggleBgm();
      this.bgmToggleBtn.classList.toggle('active', active);
      this.bgmToggleBtn.textContent = active ? '🎶 BGM' : '🔇 BGM';
    });

    // Theme Selector
    if (this.themeSelectEl) {
      this.themeSelectEl.addEventListener('change', (e) => {
        this.setTheme(e.target.value);
      });
    }

    // ==========================================
    // Roblox-Style iPad & Mobile Controls Handling
    // ==========================================
    const touchControls = document.getElementById('touchControls');
    const padToggleBtn = document.getElementById('padToggleBtn');
    const joyBase = document.getElementById('joyBase');
    const joyNub = document.getElementById('joyNub');

    // Auto-detect iPad or touch device (always on by default)
    let padEnabled = localStorage.getItem('sanrio_pad_enabled') !== null
      ? localStorage.getItem('sanrio_pad_enabled') === 'true'
      : true;

    const updatePadVisibility = () => {
      if (touchControls) {
        touchControls.classList.toggle('active', padEnabled);
      }
      if (padToggleBtn) {
        padToggleBtn.classList.toggle('active', padEnabled);
      }
    };
    updatePadVisibility();

    if (padToggleBtn) {
      padToggleBtn.addEventListener('click', () => {
        padEnabled = !padEnabled;
        localStorage.setItem('sanrio_pad_enabled', padEnabled.toString());
        updatePadVisibility();
        this.sound.playRotate();
      });
    }

    // Helper for micro-haptic feedback
    const triggerHaptic = () => {
      if ('vibrate' in navigator) {
        try { navigator.vibrate(12); } catch (e) {}
      }
    };

    // Auto-Repeat (DAS: Delayed Auto Shift) for Holding buttons
    let repeatTimer = null;
    let repeatInterval = null;

    const startRepeat = (action) => {
      this.sound.init();
      triggerHaptic();
      action();
      clearTimeout(repeatTimer);
      clearInterval(repeatInterval);
      repeatTimer = setTimeout(() => {
        repeatInterval = setInterval(() => {
          action();
        }, 65);
      }, 160);
    };

    const stopRepeat = () => {
      clearTimeout(repeatTimer);
      clearInterval(repeatInterval);
      repeatTimer = null;
      repeatInterval = null;
    };

    // Bind Directional Buttons (Left, Right, Down) with DAS Repeat
    const bindRepeatButton = (id, action) => {
      const btn = document.getElementById(id);
      if (!btn) return;

      const handlePress = (e) => {
        e.preventDefault();
        e.stopPropagation();
        btn.classList.add('pressed');
        startRepeat(action);
      };

      const handleRelease = (e) => {
        e.preventDefault();
        btn.classList.remove('pressed');
        stopRepeat();
      };

      btn.addEventListener('touchstart', handlePress, { passive: false });
      btn.addEventListener('touchend', handleRelease, { passive: false });
      btn.addEventListener('touchcancel', handleRelease, { passive: false });
      btn.addEventListener('mousedown', handlePress);
      window.addEventListener('mouseup', handleRelease);
    };

    bindRepeatButton('touchLeft', () => this.moveLeft());
    bindRepeatButton('touchRight', () => this.moveRight());
    bindRepeatButton('touchDown', () => this.moveDown());

    // Single Action Buttons (Rotate, Drop, Hold)
    const bindActionButton = (id, action) => {
      const btn = document.getElementById(id);
      if (!btn) return;

      const trigger = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.sound.init();
        triggerHaptic();
        action();
      };

      btn.addEventListener('touchstart', trigger, { passive: false });
      btn.addEventListener('mousedown', trigger);
    };

    bindActionButton('touchRotate', () => this.rotateClockwise());
    bindActionButton('touchDrop', () => this.hardDrop());
    bindActionButton('touchHold', () => this.hold());

    // ==========================================
    // Roblox Virtual Thumbstick Drag Handling
    // ==========================================
    if (joyBase && joyNub) {
      let joyTouchId = null;
      let joyCenter = { x: 0, y: 0 };
      const MAX_RADIUS = 38;
      let joyActiveDirection = null; // 'left', 'right', 'down', null

      const handleJoyStart = (e) => {
        const touch = e.touches ? e.touches[0] : e;
        joyTouchId = e.touches ? touch.identifier : 'mouse';
        const rect = joyBase.getBoundingClientRect();
        joyCenter = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        };
        handleJoyMove(e);
      };

      const handleJoyMove = (e) => {
        let touch = null;
        if (e.touches) {
          for (let i = 0; i < e.touches.length; i++) {
            if (e.touches[i].identifier === joyTouchId) {
              touch = e.touches[i];
              break;
            }
          }
        } else if (joyTouchId === 'mouse') {
          touch = e;
        }

        if (!touch) return;
        e.preventDefault();

        const dx = touch.clientX - joyCenter.x;
        const dy = touch.clientY - joyCenter.y;
        const distance = Math.hypot(dx, dy);
        const angle = Math.atan2(dy, dx);

        const clampedDist = Math.min(distance, MAX_RADIUS);
        const nx = Math.cos(angle) * clampedDist;
        const ny = Math.sin(angle) * clampedDist;

        joyNub.style.transform = `translate(${nx}px, ${ny}px)`;

        // Direction Evaluation
        let newDir = null;
        if (clampedDist > 14) {
          // Check horizontal vs vertical
          if (Math.abs(dx) > Math.abs(dy) * 0.8) {
            newDir = dx < 0 ? 'left' : 'right';
          } else if (dy > 0) {
            newDir = 'down';
          }
        }

        if (newDir !== joyActiveDirection) {
          stopRepeat();
          joyActiveDirection = newDir;
          if (newDir === 'left') {
            startRepeat(() => this.moveLeft());
          } else if (newDir === 'right') {
            startRepeat(() => this.moveRight());
          } else if (newDir === 'down') {
            startRepeat(() => this.moveDown());
          }
        }
      };

      const handleJoyEnd = () => {
        joyTouchId = null;
        joyActiveDirection = null;
        joyNub.style.transform = 'translate(0px, 0px)';
        stopRepeat();
      };

      joyBase.addEventListener('touchstart', handleJoyStart, { passive: false });
      window.addEventListener('touchmove', (e) => {
        if (joyTouchId !== null) handleJoyMove(e);
      }, { passive: false });
      window.addEventListener('touchend', () => {
        if (joyTouchId !== null) handleJoyEnd();
      });
      window.addEventListener('touchcancel', () => {
        if (joyTouchId !== null) handleJoyEnd();
      });

      // Mouse drag support for testing on desktop
      joyBase.addEventListener('mousedown', (e) => {
        handleJoyStart(e);
        const onMouseMove = (ev) => handleJoyMove(ev);
        const onMouseUp = () => {
          handleJoyEnd();
          window.removeEventListener('mousemove', onMouseMove);
          window.removeEventListener('mouseup', onMouseUp);
        };
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
      });
    }
  }
}

// Start game instance on DOM load
window.addEventListener('DOMContentLoaded', () => {
  window.sanrioGame = new SanrioTetrisGame();
});
