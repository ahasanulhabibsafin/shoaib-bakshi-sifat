export const BACKGROUND_VIDEOS = [
  "https://res.cloudinary.com/dpu456bh7/video/upload/v1776872704/qkmojxhm2ujqzgnu5guh.mp4",
  "https://res.cloudinary.com/dpu456bh7/video/upload/v1776872684/rnbxygv0vavou9e7sy7q.mp4",
  "https://res.cloudinary.com/dpu456bh7/video/upload/v1776872634/woaik2lydjktm9se2z8o.mp4"
];

export const getRandomVideo = () => {
  return BACKGROUND_VIDEOS[Math.floor(Math.random() * BACKGROUND_VIDEOS.length)];
};
