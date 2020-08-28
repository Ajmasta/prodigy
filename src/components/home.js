import React, { useState, useEffect } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

import "react-h5-audio-player/lib/styles.css";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { FixedSizeList } from "react-window";
import background from "../background.mp4";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { IconButton } from "@material-ui/core";
import PauseIcon from "@material-ui/icons/Pause";
import AlbumGrid from "./albumGrid";
import ListIcon from "@material-ui/icons/List";
import AlbumIcon from "@material-ui/icons/Album";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

import image1 from "../pictures/1.jpg";
import image2 from "../pictures/2.jpg";
import image3 from "../pictures/3.jpg";
import image4 from "../pictures/4.jpg";
import image5 from "../pictures/5.jpg";
import image6 from "../pictures/6.jpg";
import image7 from "../pictures/7.jpg";
import image8 from "../pictures/8.jpg";
import image9 from "../pictures/9.jpg";
import image10 from "../pictures/10.jpg";
import image11 from "../pictures/11.jpg";
import image12 from "../pictures/12.jpg";
import image13 from "../pictures/13.jpg";
import image14 from "../pictures/14.jpg";

import music1 from "../music/music1.mp3";
import music2 from "../music/music2.mp3";
import music3 from "../music/music3.mp3";
import music4 from "../music/music4.mp3";
import music5 from "../music/music5.mp3";
import music6 from "../music/music6.mp3";
import music7 from "../music/music7.mp3";
import music8 from "../music/music8.mp3";
import music9 from "../music/music9.mp3";
import music10 from "../music/music10.mp3";
import music11 from "../music/music11.mp3";
import music12 from "../music/music12.mp3";
import music13 from "../music/music13.mp3";
import music14 from "../music/music14.mp3";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
let playingIndexVar = "";
const audioList1 = [
  {
    name: "Jamais Parti",
    singer: "Prodigy",
    cover: image1,
    musicSrc: music1,

    // support async fetch music src. eg.
    // musicSrc: async () => {
    //   return await fetch('/api')
    // },
  },
  {
    name: "Chemin",
    singer: "Prodigy",
    cover: image2,
    musicSrc: music2,
  },
  {
    name: "The Prodigy (Skit)",
    singer: "Prodigy",
    cover: image3,
    musicSrc: music3,
  },
  {
    name: "Hyped",
    singer: "Prodigy",
    cover: image4,
    musicSrc: music4,
  },
  {
    name: "Du Sale à L’Ancienne",
    singer: "Prodigy Feat 404NotFound",
    cover: image5,
    musicSrc: music5,
  },
  {
    name: "Vice City",
    singer: "Prodigy",
    cover: image6,
    musicSrc: music6,
  },
  {
    name: "Hegobreak (part 1)",
    singer: "Prodigy",
    cover: image7,
    musicSrc: music7,
  },
  {
    name: "LxF (part 2)",
    singer: "Prodigy",
    cover: image8,
    musicSrc: music8,
  },
  {
    name: "Où est Jordy ? (skit)",
    singer: "Prodigy",
    cover: image9,
    musicSrc: music9,
  },
  {
    name: "Bon Bagaye",
    singer: "Prodigy feat Black Lion",
    cover: image10,
    musicSrc: music10,
  },
  {
    name: "Envol",
    singer: "Prodigy",
    cover: image11,
    musicSrc: music11,
  },
  {
    name: "Souricière",
    singer: "Prodigy",
    cover: image12,
    musicSrc: music12,
  },
  {
    name: "Captain Ginyu's Squad",
    singer: "Prodigy",
    cover: image13,
    musicSrc: music13,
  },
  {
    name: "Couronne de Roi",
    singer: "Prodigy feat Big J",
    cover: image14,
    musicSrc: music14,
  },
];

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: "transparent",
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: "transparent",
    padding: theme.spacing(6),
  },
  root: {
    width: "100%",
    margin: "auto",
    maxWidth: 300,
    backgroundColor: "transparent",
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const options = {
    // audio lists model
    audioLists: audioList1,

    // default play index of the audio player  [type `number` default `0`]
    defaultPlayIndex: 0,

    // if you want dynamic change current play audio you can change it [type `number` default `0`]
    // playIndex: 0,

    // color of the music player theme    [ type: 'light' | 'dark' | 'auto'  default `dark` ]
    theme: "auto",

    // Specifies movement boundaries. Accepted values:
    // - `parent` restricts movement within the node's offsetParent
    //    (nearest node with position relative or absolute), or
    // - a selector, restricts movement within the targeted node
    // - An object with `left, top, right, and bottom` properties.
    //   These indicate how far in each direction the draggable
    //   can be moved.
    // Ref: https://github.com/STRML/react-draggable#draggable-api
    bounds: "body",

    // Replace a new playlist with the first loaded playlist
    // instead of adding it at the end of it.
    // [type `boolean`, default `false`]
    clearPriorAudioLists: false,

    // Play your new play list right after your new play list is loaded turn false.
    // [type `boolean`, default `false`]
    autoPlayInitLoadPlayList: false,

    // Whether to load audio immediately after the page loads.  [type `Boolean | String`, default `false`]
    // "auto|metadata|none" "true| false"
    preload: "auto",

    // Whether the player's background displays frosted glass effect  [type `Boolean`, default `false`]
    glassBg: true,

    // The next time you access the player, do you keep the last state  [type `Boolean` default `false`]
    remember: false,

    // The Audio Can be deleted  [type `Boolean`, default `true`]
    remove: true,

    // audio controller initial position    [ type `Object` default '{top:0,left:0}' ]
    defaultPosition: {
      right: 100,
      top: 120,
    },

    defaultPlayMode: "orderLoop",

    // if you want dynamic change current play mode you can change it
    // [type`order | orderLoop | singleLoop | shufflePlay`, default `order`]
    // playMode: 'order',

    // audio mode        mini | full          [type `String`  default `mini`]
    mode: "full",

    /**
     * [ type `Boolean` default 'false' ]
     * The default audioPlay handle function will be played again after each pause, If you only want to trigger it once, you can set 'true'
     */
    once: false,

    // Whether the audio is played after loading is completed. [type `Boolean` default 'true']
    autoPlay: false,

    // Whether you can switch between two modes, full => mini  or mini => full   [type 'Boolean' default 'true']
    toggleMode: true,

    // audio cover is show of the "mini" mode [type `Boolean` default 'true']
    showMiniModeCover: true,

    // audio playing progress is show of the "mini"  mode
    showMiniProcessBar: true,

    // audio controller is can be drag of the "mini" mode     [type `Boolean` default `true`]
    drag: true,

    // drag the audio progress bar [type `Boolean` default `true`]
    seeked: true,

    // Display chrome media session.  [type `Boolean` default `false`]
    showMediaSession: true,

    // Displays the audio load progress bar.  [type `Boolean` default `true`]
    showProgressLoadBar: true,

    // play button display of the audio player panel   [type `Boolean` default `true`]
    showPlay: true,

    // reload button display of the audio player panel   [type `Boolean` default `true`]
    showReload: false,

    // download button display of the audio player panel   [type `Boolean` default `true`]
    showDownload: false,

    // loop button display of the audio player panel   [type `Boolean` default `true`]
    showPlayMode: true,

    // theme toggle switch  display of the audio player panel   [type `Boolean` default `true`]
    showThemeSwitch: false,

    // lyric display of the audio player panel   [type `Boolean` default `false`]
    showLyric: false,

    // destroy player button display  [type `Boolean` default `false`]
    showDestroy: false,

    // Extensible custom content       [type 'Array' default '-' ]
    extendsContent: null,

    // default volume of the audio player [type `Number` default `1` range `0-1`]
    defaultVolume: 1,

    // playModeText show time [type `Number(ms)` default `700`]
    playModeShowTime: 600,

    // Whether to try playing the next audio when the current audio playback fails [type `Boolean` default `true`]
    loadAudioErrorPlayNext: true,

    // Auto hide the cover photo if no cover photo is available [type `Boolean` default `false`]
    autoHiddenCover: false,

    // Play and pause audio through blank space [type `Boolean` default `false`]
    spaceBar: true,

    // international [type `en_US | zh_CN | Object` default `en_US`]

    // Enable responsive player, auto toggle desktop and mobile [type `Boolean` default `true`]
    responsive: true,

    /**
     * @description Customer audio title [type `String | Function` default `${name} - ${singer}`]
     * @example
     * audioTitle: (audioInfo) => 'title'
     */

    // audioTitle: 'xxxx',

    // Music is downloaded handle
    onAudioDownload(audioInfo) {
      console.log("audio download", audioInfo);
    },

    // audio play handle
    onAudioPlay(audioInfo) {
      console.log("audio playing", audioInfo.playIndex);
      if (!playStatus[audioInfo.playIndex]) {
        const newPlayStatus = { ...playStatus };
        for (let i = 0; i <= 14; i++) {
          newPlayStatus[i] = false;
        }
        newPlayStatus[audioInfo.playIndex] = true;
        setPlayStatus(newPlayStatus);
      }
    },

    // audio pause handle
    onAudioPause(audioInfo) {
      console.log("audio pause", audioInfo);
      playingIndexVar = "";
    },

    // When the user has moved/jumped to a new location in audio
    onAudioSeeked(audioInfo) {
      console.log("audio seeked", audioInfo);
    },

    // When the volume has changed  min = 0.0  max = 1.0
    onAudioVolumeChange(currentVolume) {
      console.log("audio volume change", currentVolume);
    },

    // The single song is ended handle
    onAudioEnded(currentPlayId, audioLists, audioInfo) {
      console.log("audio ended", currentPlayId, audioLists, audioInfo);
    },

    // audio load abort
    onAudioAbort(currentPlayId, audioLists, audioInfo) {
      console.log("audio abort", currentPlayId, audioLists, audioInfo);
    },

    // audio play progress handle
    // eslint-disable-next-line no-unused-vars
    onAudioProgress(audioInfo) {
      // console.log('audio progress',audioInfo);
    },

    // audio reload handle
    onAudioReload(audioInfo) {
      console.log("audio reload:", audioInfo);
    },

    // audio load failed error handle
    onAudioError(errMsg, currentPlayId, audioLists, audioInfo) {
      console.error(
        "audio load error",
        errMsg,
        currentPlayId,
        audioLists,
        audioInfo
      );
    },

    // theme change handle
    // onThemeChange(theme) {
    //   console.log('theme change:', theme)
    // },

    onAudioListsChange(currentPlayId, audioLists, audioInfo) {
      console.log("[currentPlayId] audio lists change:", currentPlayId);
      console.log("[audioLists] audio lists change:", audioLists);
      console.log("[audioInfo] audio lists change:", audioInfo);
    },

    onAudioPlayTrackChange(currentPlayId, audioLists, audioInfo) {
      console.log(
        "audio play track change:",
        currentPlayId,
        audioLists,
        audioInfo
      );
    },

    // onPlayModeChange(playMode) {
    //   console.log('play mode change:', playMode)
    // },

    // onModeChange(mode) {
    //   console.log('mode change:', mode)
    // },

    onAudioListsPanelChange(panelVisible) {
      console.log("audio lists panel visible:", panelVisible);
    },

    onAudioListsDragEnd(fromIndex, endIndex) {
      console.log("audio lists drag end:", fromIndex, endIndex);
    },

    onAudioLyricChange(lineNum, currentLyric) {
      console.log("audio lyric change:", lineNum, currentLyric);
    },

    // custom music player root node
    getContainer() {
      return document.body;
    },

    /**
     * @description get origin audio element instance , you can use it do everything
     * @example
     * audio.playbackRate = 1.5  // set play back rate
     * audio.crossOrigin = 'xxx' // config cross origin
     */
    getAudioInstance(audio) {
      console.log("audio instance", audio);
    },

    onBeforeDestroy(currentPlayId, audioLists, audioInfo) {
      console.log("onBeforeDestroy currentPlayId: ", currentPlayId);
      console.log("onBeforeDestroy audioLists: ", audioLists);
      console.log("onBeforeDestroy audioInfo: ", audioInfo);
      return new Promise((resolve, reject) => {
        // your custom validate
        // eslint-disable-next-line no-alert
        if (window.confirm("Are you confirm destroy the player?")) {
          // if resolve, player destroyed
          resolve();
        } else {
          // if reject, skip.
          reject();
        }
      });
    },

    onDestroyed(currentPlayId, audioLists, audioInfo) {
      console.log("onDestroyed:", currentPlayId, audioLists, audioInfo);
    },

    onCoverClick(mode, audioLists, audioInfo) {
      console.log("onCoverClick: ", mode, audioLists, audioInfo);
    },

    // onPlayIndexChange (playIndex) {
    //   console.log('onPlayIndexChange: ', playIndex);
    // }

    // transform audio info like return a Promise

    /**
     * @return
     *  {
     *    src: 'xxx',
     *    filename: 'xxx',
     *    mimeType: 'xxx'
     *  }
     */
    // onBeforeAudioDownload() {
    //   return Promise.resolve({
    //     src: '1.mp3',
    //   })
    // },

    /**
     * customer download handler
     * eg. a link , or https://www.npmjs.com/package/file-saver
     * @param {*} downloadInfo
     * @example
     *
         customDownloader(downloadInfo) {
          const link = document.createElement('a')
          link.href = downloadInfo.src
          link.download = downloadInfo.filename || 'test'
          document.body.appendChild(link)
          link.click()
        },
     */
    // customDownloader(downloadInfo) {
    //   console.log(downloadInfo.src)
    //   console.log(downloadInfo.filename)
    //   console.log(downloadInfo.mimeType)
    // },
  };

  //end of otpions

  console.log(playingIndexVar);
  const [playing, setPlaying] = useState(true);
  const [viewSelected, setViewSelected] = useState("album");
  const [audioInstance, setAudioInstance] = useState();
  let audioFile = "";
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  useEffect(() => {
    const authentified = window.localStorage.getItem("login");
    setLoggedIn(authentified);
  }, []);
  if (loggedIn && !window.localStorage.getItem("login"))
    window.localStorage.setItem("login", loggedIn);
  const objectStatus = {};
  for (let i = 0; i <= 14; i++) {
    objectStatus[i] = false;
  }
  const [playStatus, setPlayStatus] = useState(objectStatus);

  if (document.querySelector("#myAudio")) {
    audioFile = document.querySelector("#myAudio");
  }
  if (!audioFile.paused && !playing) setPlaying(true);
  function renderRow({ index, style }) {
    const array = [
      "Jamais Parti",
      "Chemin",
      "The Prodigy (skit)",
      "Hyped",
      "Du Sale à L’Ancienne (feat Breeze)",
      "Vice City",
      "Hegobreak (part 1)",
      "LxF (part 2)",
      "Je Suis Jordy (skit)",
      "Bon Bagaye (feat Black Lion)",
      "Envol",
      "Souricière",
      "Captain Ginyu's Squad",
      "Couronne de Roi (feat Jello)",
    ];

    return (
      <ListItem class="tracklist-items" button style={style} key={index}>
        <ListItemText class="tracklistText" primary={`${array[index]}`} />{" "}
        <div className="playArrowTracklist">
          {playStatus[index] ? (
            <IconButton
              className="playArrowTracklist"
              onClick={() => {
                const newPlayStatus = { ...playStatus };
                newPlayStatus[index] = !newPlayStatus[index];
                setPlayStatus(newPlayStatus);
                audioInstance.pause();
              }}
            >
              <PauseIcon />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                const newPlayStatus = { ...playStatus };
                for (let i = 0; i <= 14; i++) {
                  newPlayStatus[i] = false;
                }
                newPlayStatus[index] = !newPlayStatus[index];
                setPlayStatus(newPlayStatus);
                audioInstance.playByIndex(index);
              }}
              id={`playIconTracks${index}`}
              className="playArrowTracklist"
            >
              <PlayArrowIcon />
            </IconButton>
          )}
        </div>
      </ListItem>
    );
  }

  return (
    <>
      {loggedIn ? (
        <React.Fragment>
          <CssBaseline />

          <div className="toolBar"></div>

          <main>
            <div>
              <Container maxWidth="sm">
                <ReactJkMusicPlayer
                  {...options}
                  getAudioInstance={(instance) => setAudioInstance(instance)}
                  className="musicPlayer"
                >
                  <button onClick={() => this.audio.playByIndex(1)}>
                    play by index
                  </button>
                </ReactJkMusicPlayer>
                <h1
                  className="titleSection"
                  variant="h2"
                  align="center"
                  color="textPrimary"
                  gutterBottom
                >
                  <span>
                    <p id="title"> Mindset of a Prodigy </p>
                    <p id="subtitle">Vol. 2</p>
                  </span>
                </h1>

                <Typography
                  variant="h5"
                  align="center"
                  color="textSecondary"
                  paragraph
                ></Typography>
                <ButtonGroup>
                  <IconButton
                    className={
                      viewSelected === "album"
                        ? "selectedIcon trackIconList"
                        : "trackIconList"
                    }
                    onClick={() => {
                      setViewSelected("album");
                    }}
                  >
                    <AlbumIcon />{" "}
                  </IconButton>
                  <IconButton
                    className={
                      viewSelected === "list"
                        ? "selectedIcon trackIconList"
                        : "trackIconList"
                    }
                    onClick={() => {
                      setViewSelected("list");
                    }}
                  >
                    <ListIcon />{" "}
                  </IconButton>
                </ButtonGroup>

                {viewSelected === "album" ? (
                  <AlbumGrid
                    playStatus={playStatus}
                    setPlayStatus={setPlayStatus}
                    audioInstance={audioInstance}
                  />
                ) : (
                  <div>
                    <FixedSizeList
                      id="tracklist"
                      height={200}
                      width={400}
                      itemSize={46}
                      itemCount={14}
                      style={{
                        backgroundColor: "transparent",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginBottom: "135px",
                        marginTop: "35px",
                        border: "3px #121858  solid",
                        borderRadius: "2%",
                        boxShadow: " 3px 3px 5px black",
                      }}
                    >
                      {renderRow}
                    </FixedSizeList>
                  </div>
                )}
              </Container>
            </div>
          </main>
          <div id="videoContainer">
            <video
              id="myVideo"
              autoPlay="true"
              poster="../pictures/poster.jpg"
              muted="true"
              playsInline="true"
              loop
            >
              <source src={background} type="video/mp4"></source>
            </video>
          </div>
        </React.Fragment>
      ) : (
        <div class="container">
          <div class="loginPage" style={{ backgroundSize: "cover" }}>
            <div className={loggedIn ? "login1 slideUp" : "login1"}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (password === process.env.REACT_APP_LOGIN_PASSWORD) {
                    setLoggedIn(true);
                  } else {
                    setLoggedIn(false);
                  }
                }}
              >
                <div className="loginInfos">
                  <input
                    id="passwordInput"
                    type="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <IconButton id="loginIcon" type="submit/Play">
                    {" "}
                    <PlayArrowIcon />
                  </IconButton>
                </div>
              </form>
            </div>
            <div
              className={loggedIn ? "login2 slideDown" : "login2"}
            ></div>{" "}
          </div>{" "}
        </div>
      )}
    </>
  );
}
