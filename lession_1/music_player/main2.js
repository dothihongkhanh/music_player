const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PlAYER_STORAGE_KEY = 'PLAYER'

const heading = $('header h2');
const cdThumb = $('.cd-thumb');
const audio = $('#audio');
const cd = $('.cd');
const playBtn = $('.btn-toggle-play')
const player = $('.player');
const progress = $('#progress')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')
const playlist = $('.playlist')

const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  config: JSON.parse(localStorage.getItem(PlAYER_STORAGE_KEY)) || {},
  songs: [
    {
      name: "Click Pow Get Down",
      singer: "Raftaar x Fortnite",
      path: "https://mp3.filmisongs.com/go.php?id=Damn%20Song%20Raftaar%20Ft%20KrSNa.mp3",
      image: "https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg"
    },
    {
      name: "Tu Phir Se Aana",
      singer: "Raftaar x Salim Merchant x Karma",
      path: "https://mp3.filmisongs.com/go.php?id=Damn%20Song%20Raftaar%20Ft%20KrSNa.mp3",
      image:
        "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
    },
    {
      name: "Naachne Ka Shaunq",
      singer: "Raftaar x Brobha V",
      path: "https://mp3.filmisongs.com/go.php?id=Damn%20Song%20Raftaar%20Ft%20KrSNa.mp3",
      image: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg"
    },
    {
      name: "Mantoiyat",
      singer: "Raftaar x Nawazuddin Siddiqui",
      path: "https://mp3.filmisongs.com/go.php?id=Damn%20Song%20Raftaar%20Ft%20KrSNa.mp3",
      image:
        "https://a10.gaanacdn.com/images/song/39/24225939/crop_480x480_1536749130.jpg"
    },
    {
      name: "Aage Chal",
      singer: "Raftaar",
      path: "https://mp3.filmisongs.com/go.php?id=Damn%20Song%20Raftaar%20Ft%20KrSNa.mp3",
      image:
        "https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg"
    },
    {
      name: "Damn",
      singer: "Raftaar x kr$na",
      path:
        "https://mp3.filmisongs.com/go.php?id=Damn%20Song%20Raftaar%20Ft%20KrSNa.mp3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMcQ5m0lQWx1PcLIGre93kXCzDre9o0OXhvA&usqp=CAU"
    },
    {
      name: "Feeling You",
      singer: "Raftaar x Harjas",
      path: "https://mp3.filmisongs.com/go.php?id=Damn%20Song%20Raftaar%20Ft%20KrSNa.mp3",
      image:
        "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWlj5gYKz/size_xxl_1586752323.webp"
    }
  ],
  setConfig: function(key, value) {
    this.config[key] = value;
    localStorage.setItem(PlAYER_STORAGE_KEY, JSON.stringify(this.config))
  },
  render: function() {
    const htmls = this.songs.map((song, index) => {
      return `
      <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
          <div class="thumb"
              style="background-image: url('${song.image}')">
          </div>
          <div class="body">
              <h3 class="title">${song.name}</h3>
              <p class="author">${song.singer}</p>
          </div>
          <div class="option">
              <i class="fas fa-ellipsis-h"></i>
          </div>
      </div>
      `
    })
    playlist.innerHTML = htmls.join("");
  },
  defineProperties: function() {
    Object.defineProperty(this,'currentSong', {
      get: function() {
        return this.songs[this.currentIndex]
      }
    })
  },
  handleEvents: function() {
    const _this = this;
    const cdWidth = cd.offsetWidth;

    //xu ly CD quay/ dung
    const cdThumbAnimate = cdThumb.animate([
      {
        transform: 'rotate(360deg)'
      }
    ], {
      duration: 10000,
      interation: Infinity //lap vo han
    })
    cdThumbAnimate.pause()

    //xu ly phong to/ thu nho CD
    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newCdWidth = cdWidth - scrollTop;

      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
      cd.style.opacity = newCdWidth / cdWidth;
    };

    //xu ly khi click play
    playBtn.onclick = function() {
      if(_this.isPlaying) {
        audio.pause()
      }else{
        audio.play()
      }
      
    }

    //khi song duoc play
    audio.onplay = function() {
      _this.isPlaying = true;
      player.classList.add('playing')
      cdThumbAnimate.play()
    }

    //khi song khong duoc play (pause)
    audio.onpause = function() {
      _this.isPlaying = false;
      player.classList.remove('playing')
      cdThumbAnimate.pause()
    }

    //khi tiến độ bài hát thay đổi
    audio.ontimeupdate = function() {
      if(audio.duration) {
        const progressPercent = Math.floor(audio.currentTime/audio.duration * 100)
        progress.value = progressPercent
      }
      
    }
    //xu ly khi tua song
    progress.oninput  = function(e) {
      seekTime = audio.duration / 100* e.target.value;
      audio.currentTime = seekTime;
    }

    //khi next bai hat
    nextBtn.onclick = function() {
      if(_this.isRandom) {
        _this.playRandomSong()
      } else {
        _this.nextSong()
      }
      audio.play()
      _this.render()
      _this.scrollToActiveSong()
    }
    //khi prev bai hat
    prevBtn.onclick = function() {
      if(_this.isRandom) {
        _this.playRandomSong()
      } else {
        _this.prevSong()
      }
      audio.play()
      _this.render()
      _this.scrollToActiveSong()
    }

    //khi random bai hat
    randomBtn.onclick = function(e) {
      _this.isRandom = !_this.isRandom
      _this.setConfig('isRandom', _this.isRandom)
      randomBtn.classList.toggle('active',_this.isRandom)
    }

    //xu ly next song khi audio ended
    audio.onended = function() {
      if(_this.isRepeat) {
        audio.play()
      } else {
        nextBtn.click()
      }
      
    }

    //lap bai hat
    repeatBtn.onclick = function() {
      _this.isRepeat = !_this.isRepeat
      _this.setConfig('isRepeat', _this.isRepeat)
      repeatBtn.classList.toggle('active',_this.isRepeat)
    }

    //lang nghe hanh vi click vao playList
    playlist.onclick = function(e) {
      const songNode = e.target.closest('.song:not(.active)')
      if (songNode || e.target.closest('.option')) {
        if(songNode) {
          _this.currentIndex = Number(songNode.dataset.index)
          _this.loadCurrentSong()
          _this.render()
          audio.play()
        }
      }
    }
  },
  loadCurrentSong: function() {
    
    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url(${this.currentSong.image})`
    audio.src = this.currentSong.path;    
  },
  nextSong: function() {
    this.currentIndex++
    if(this.currentIndex >= this.songs.length) {
      this.currentIndex = 0
    }
    this.loadCurrentSong()
  },
  prevSong: function() {
    this.currentIndex--
    if(this.currentIndex < 0 ) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong()
  },
  playRandomSong: function() {
    let newIndex
    do {
      newIndex = Math.floor(Math.random() * app.songs.length)
    } while(newIndex === this.currentIndex)
    this.currentIndex = newIndex
    this.loadCurrentSong()
  },
  scrollToActiveSong: function() {
  setTimeout(() => {
    $('.song.active').scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    })
  },500)
  },
  loadConfig: function() {
    this.isRandom = this.config.isRandom
    this.isRepeat = this.config.isRepeat
  },
  
  start: function() {

    //gan cau hinh tu config vao ung dung
    this.loadConfig();
    //định nghĩa các thuộc tính cho object
    this.defineProperties();

    //lắng nghe, xử lý các sự kiện DOM events
    this.handleEvents();
     
    //tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
    this.loadCurrentSong();
    //render playlist
    this.render();

    //hien thi trang thai ban dau cua btn repeat va btn random
    randomBtn.classList.toggle('active', _this.isRandom)
    repeatBtn.classList.toggle('active', _this.isRepeat)
    
  }
}
app.start()
  