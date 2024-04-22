// async prepareVideo(className: string): Promise<HTMLVideoElement> {
//     const videoPath = this.getVideoPath(className.toLowerCase());
//     if (videoPath) {
//       const videoPlayer = this.videoPlayer2.nativeElement as HTMLVideoElement;
//       videoPlayer.src = videoPath;
  
//       return new Promise((resolve, reject) => {
//         videoPlayer.addEventListener('canplaythrough', () => resolve(videoPlayer), { once: true });
//         videoPlayer.addEventListener('error', () => reject(new Error('Error loading video')), { once: true });
//       });
//     } else {
//       throw new Error('Video not found');
//     }
//   }

//   async playVideo(videoPlayer: HTMLVideoElement): Promise<void> {
//     try {
//       await videoPlayer.play();
//       // Update the current and previous video paths
//       this.previousVideoPath = this.currentVideoPath;
//       this.currentVideoPath = videoPlayer.src;
//       // Replace the current video player source
//       const currentVideoPlayer = this.videoPlayer1.nativeElement as HTMLVideoElement;
//       currentVideoPlayer.src = videoPlayer.src;
//     } catch (error) {
//       console.error('Error playing video:', error);
//     }
//   }
  
//   async loadNewVideo(className: string): Promise<void> {
//     try {
//       const videoPlayer = await this.prepareVideo(className);
//       await this.playVideo(videoPlayer);
//     } catch (error) {
//       console.error('Error handling video:', error);
//     }
//   }

//   async prepareAudio(className: string): Promise<HTMLAudioElement> {
//     const audioEntities = this.getClassAudioEntity(className);
//     if (audioEntities.length > 0) {
//       const randomIndex = this.getRandomNum(audioEntities);
//       const selectedAudioEntity = audioEntities[randomIndex];
//       const audio = new Audio(selectedAudioEntity.path);
//       audio.volume = 0.3;  // Set the volume or make it a parameter
  
//       return new Promise((resolve, reject) => {
//         audio.oncanplaythrough = () => resolve(audio);
//         audio.onerror = () => reject(new Error('Error loading audio'));
//       });
//     } else {
//       throw new Error('No audio found for class: ' + className);
//     }
//   }

  
//   async playAudio(audio: HTMLAudioElement): Promise<void> {
//     try {
//       await audio.play();
//       this.currentAudio = audio;  // Update the current audio reference if needed
//     } catch (error) {
//       console.error('Error playing audio:', error);
//     }
//   }
  

//   async loadClassAudio(className: string): Promise<void> {
//     try {
//       const audio = await this.prepareAudio(className);
//       await this.playAudio(audio);
//     } catch (error) {
//       console.error('Error handling audio:', error);
//     }
//   }

//   async playClassMedia(className: string): Promise<void> {
//     try {
//       // Prepare both audio and video
//       const videoPromise = this.prepareVideo(className);
//       const audioPromise = this.prepareAudio(className);
  
//       // Wait for both media to be ready
//       const [videoPlayer, audio] = await Promise.all([videoPromise, audioPromise]);
  
//       // Play both media
//       const playVideoPromise = this.playVideo(videoPlayer);
//       const playAudioPromise = this.playAudio(audio);
  
//       // Optionally wait for both to start playing
//       await Promise.all([playVideoPromise, playAudioPromise]);
  
//       console.log('Both audio and video are now playing.');
//     } catch (error) {
//       console.error('Error synchronizing media playback:', error);
//     }
//   }
  
